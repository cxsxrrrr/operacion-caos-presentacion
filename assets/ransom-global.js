/* ransom.js Â· generador de letras recortadas Â· sin dependencias Â· ES module
 *
 *  ransomSpec(text, opts)  â†’ datos puros (Ãºsalo en React/Vue/Svelte/SSR)
 *  ransomize(el, opts)     â†’ convierte el texto de un elemento en letras recortadas
 *  ransomizeAll(selector)  â†’ lo anterior para varios elementos ([data-ransom])
 *  spiral(el, opts)        â†’ espiral de letras decorativa (como un disco de recortes)
 *  collage(el, opts)       â†’ fondo denso de recortes superpuestos
 *
 * Es DETERMINISTA: mismo texto + misma semilla = mismas letras. AsÃ­ no hay
 * desajustes de hidrataciÃ³n en SSR y el titular no cambia en cada recarga.
 */

/* [fondo, texto]  â€” todas las parejas tienen contraste >= 4.5:1 */
const COMBOS = [
  ['paper', 'ink'], ['red', 'paper'], ['blue', 'white'], ['ink', 'mustard'],
  ['mustard', 'ink'], ['teal', 'paper'], ['white', 'red'], ['pink', 'white'],
  ['orange', 'ink'], ['paper', 'blue'], ['navy', 'paper'], ['green', 'white'],
  ['maroon', 'mustard'], ['white', 'blue'], ['ink', 'paper'],
];
/* [variable de fuente, ajuste Ã³ptico, peso] */
const FONTS = [
  ['--rc-f-1', 1, 400], ['--rc-f-2', .95, 400], ['--rc-f-3', 1, 400],
  ['--rc-f-4', .92, 400], ['--rc-f-5', 1, 900], ['--rc-f-6', 1, 900],
  ['--rc-f-7', 1, 700], ['--rc-f-8', .85, 400], ['--rc-f-9', 1.12, 400],
];
const CUTS = 5;
const DIE_COLORS = ['red', 'blue', 'teal', 'pink', 'orange', 'green', 'ink'];

function hashSeed(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}

function rng(seed) {
  let a = seed | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* elige un Ã­ndice distinto del anterior (evita dos letras seguidas iguales) */
function pick(r, n, last) {
  let i = Math.floor(r() * n);
  if (i === last) i = (i + 1 + Math.floor(r() * (n - 1))) % n;
  return i;
}

/**
 * @param {string} text
 * @param {object} o
 *   seed   semilla (por defecto el propio texto)
 *   tilt   rotaciÃ³n mÃ¡xima en grados (7 titular Â· 3 texto pequeÃ±o Â· 0 desactiva)
 *   die    probabilidad de letra recortada "a la silueta" (0-1)
 *   dots   probabilidad de tramado de semitono (0-1)
 *   upper  probabilidad de mayÃºscula (0-1). 1 = todo mayÃºsculas
 *   lift   desplazamiento vertical mÃ¡ximo en em
 *   mono   true â†’ paleta reducida: solo ink/paper/white/red (para texto serio)
 * @returns {Array<Array<{ch:string,die:boolean,dots:boolean,style:Object}>>} palabras â†’ letras
 */
function ransomSpec(text, o = {}) {
  const { seed = text, tilt = 7, die = .12, dots = .14, upper = .6, lift = .07, mono = false } = o;
  const r = rng(typeof seed === 'number' ? seed : hashSeed(String(seed)));
  const combos = mono
    ? COMBOS.filter(([b, f]) => ['paper', 'ink', 'white', 'red'].includes(b) && ['ink', 'paper', 'red'].includes(f))
    : COMBOS;
  let lc = -1, lf = -1, lastDie = false;

  return String(text).split(/\s+/).filter(Boolean).map((word) =>
    [...word].map((raw) => {
      const ch = /\p{L}/u.test(raw) ? (r() < upper ? raw.toUpperCase() : raw.toLowerCase()) : raw;
      const c = (lc = pick(r, combos.length, lc));
      const f = (lf = pick(r, FONTS.length, lf));
      const isDie = !lastDie && r() < die;   // nunca dos "die" seguidas
      lastDie = isDie;
      const style = {
        '--bg': `var(--rc-${combos[c][0]})`,
        '--fg': `var(--rc-${combos[c][1]})`,
        '--ff': `var(${FONTS[f][0]})`,
        '--fa': FONTS[f][1],
        '--rot': `${((r() * 2 - 1) * tilt).toFixed(1)}deg`,
        '--dy': `${((r() * 2 - 1) * lift).toFixed(3)}em`,
        '--sc': (0.9 + r() * 0.24).toFixed(2),
        '--cut': `var(--rc-cut-${Math.floor(r() * CUTS)})`,
        fontWeight: FONTS[f][2],
      };
      if (isDie) style['--die'] = `var(--rc-${DIE_COLORS[Math.floor(r() * DIE_COLORS.length)]})`;
      return { ch, die: isDie, dots: !isDie && r() < dots, style };
    })
  );
}

function applyStyle(node, style) {
  for (const [k, v] of Object.entries(style)) {
    if (k.startsWith('--')) node.style.setProperty(k, v);
    else node.style[k] = v;
  }
}

/** Convierte el texto de `el` en letras recortadas (accesible: conserva el texto para lectores). */
function ransomize(el, o = {}) {
  if (el.dataset.ransomDone) return el;
  const text = (el.textContent || '').trim();
  const words = ransomSpec(text, { seed: el.dataset.seed || text, ...o });
  el.textContent = '';
  el.classList.add('rc-text');

  const sr = document.createElement('span');
  sr.className = 'rc-sr';
  sr.textContent = text;
  el.append(sr);

  for (const w of words) {
    const wEl = document.createElement('span');
    wEl.className = 'rc-word';
    wEl.setAttribute('aria-hidden', 'true');
    for (const l of w) {
      const s = document.createElement('span');
      s.className = 'rc-l' + (l.die ? ' rc-l--die' : '') + (l.dots ? ' rc-l--dots' : '');
      s.textContent = l.ch;
      applyStyle(s, l.style);
      wEl.append(s);
    }
    el.append(wEl);
  }
  el.dataset.ransomDone = '1';
  return el;
}

/** <h1 data-ransom data-tilt="4"> â€¦ lee opciones de data-attributes */
function ransomizeAll(selector = '[data-ransom]') {
  document.querySelectorAll(selector).forEach((el) => {
    const d = el.dataset;
    ransomize(el, {
      ...(d.tilt && { tilt: +d.tilt }),
      ...(d.die && { die: +d.die }),
      ...(d.upper && { upper: +d.upper }),
      ...(d.mono && { mono: d.mono !== 'false' }),
    });
  });
}

/** Espiral de letras: grandes fuera, pequeÃ±as al centro (como el disco de recortes). */
function spiral(el, o = {}) {
  const {
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabdefghmnqrt0123456789&%!?',
    count = 130, turns = 4.2, seed = 'spiral', min = .8, max = 3.4,
  } = o;
  const r = rng(hashSeed(seed));
  el.classList.add('rc-spiral');
  el.setAttribute('aria-hidden', 'true');
  let lc = -1, lf = -1;
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const ang = t * turns * Math.PI * 2 - Math.PI / 2;
    const rad = 0.04 + 0.44 * t;
    const c = (lc = pick(r, COMBOS.length, lc));
    const f = (lf = pick(r, FONTS.length, lf));
    const s = document.createElement('span');
    s.className = 'rc-l';
    s.textContent = chars[Math.floor(r() * chars.length)];
    applyStyle(s, {
      '--x': `${(50 + Math.cos(ang) * rad * 100).toFixed(2)}%`,
      '--y': `${(50 + Math.sin(ang) * rad * 100).toFixed(2)}%`,
      '--fs': `${(min + t * (max - min)).toFixed(2)}rem`,
      '--bg': `var(--rc-${COMBOS[c][0]})`, '--fg': `var(--rc-${COMBOS[c][1]})`,
      '--ff': `var(${FONTS[f][0]})`, '--fa': FONTS[f][1], fontWeight: FONTS[f][2],
      '--cut': `var(--rc-cut-${Math.floor(r() * CUTS)})`,
      '--rot': `${((ang * 180) / Math.PI + 90 + (r() * 30 - 15)).toFixed(0)}deg`,
    });
    el.append(s);
  }
  return el;
}

/** Collage denso de fondo (para hero, banners). Usar dentro de un contenedor position:relative. */
function collage(el, o = {}) {
  const { count = 70, seed = 'collage', min = 3, max = 8, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabdefgrstu&%!?' } = o;
  const r = rng(hashSeed(seed));
  el.classList.add('rc-collage');
  el.setAttribute('aria-hidden', 'true');
  let lc = -1, lf = -1;
  for (let i = 0; i < count; i++) {
    const c = (lc = pick(r, COMBOS.length, lc));
    const f = (lf = pick(r, FONTS.length, lf));
    const s = document.createElement('span');
    s.className = 'rc-l';
    s.textContent = chars[Math.floor(r() * chars.length)];
    applyStyle(s, {
      '--x': `${(r() * 100 - 4).toFixed(1)}%`, '--y': `${(r() * 100 - 6).toFixed(1)}%`,
      '--fs': `${(min + r() * (max - min)).toFixed(2)}rem`,
      '--bg': `var(--rc-${COMBOS[c][0]})`, '--fg': `var(--rc-${COMBOS[c][1]})`,
      '--ff': `var(${FONTS[f][0]})`, '--fa': FONTS[f][1], fontWeight: FONTS[f][2],
      '--cut': `var(--rc-cut-${Math.floor(r() * CUTS)})`,
      '--rot': `${(r() * 360).toFixed(0)}deg`,
    });
    el.append(s);
  }
  return el;
}

window.ransomSpec = ransomSpec;
window.ransomize = ransomize;
window.ransomizeAll = ransomizeAll;
window.spiral = spiral;
window.collage = collage;


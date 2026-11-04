/* Operación Caos · lógica de la presentación
   Sin dependencias. Usa los helpers globales de ransom-global.js. */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const slides = Array.from(document.querySelectorAll('.slide'));
  const total = slides.length;
  const prevBtn = document.querySelector('[data-prev]');
  const nextBtn = document.querySelector('[data-next]');
  const fullBtn = document.querySelector('[data-fullscreen]');
  const currentEl = document.querySelector('[data-current]');
  const progressEl = document.querySelector('[data-progress]');
  let current = 0;
  let ticking = false;
  let fitting = false;

  const pad = (n) => String(n).padStart(2, '0');

  /* Ajusta la hoja completa al alto de la ventana. En pantallas cortas la
     escala (como una fotocopia reducida) en vez de romper la composición. */
  function fitSheets() {
    if (fitting) return;
    fitting = true;
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    const wraps = slides.map((slide) => slide.querySelector('.sheet-wrap')).filter(Boolean);

    if (isMobile) {
      wraps.forEach((wrap) => { wrap.style.zoom = ''; });
      fitting = false;
      return;
    }

    const first = slides[0];
    const cs = window.getComputedStyle(first);
    const padTop = parseFloat(cs.paddingTop) || 0;
    const padBottom = parseFloat(cs.paddingBottom) || 0;
    const available = window.innerHeight - padTop - padBottom - 6;

    wraps.forEach((wrap) => {
      wrap.style.zoom = '1';
      const natural = wrap.getBoundingClientRect().height;
      if (!natural) return;
      const scale = Math.max(0.7, Math.min(1, available / natural));
      wrap.style.zoom = scale < 0.999 ? scale.toFixed(3) : '';
    });
    fitting = false;
  }

  function setCurrent(index, opts = {}) {
    current = Math.max(0, Math.min(total - 1, index));
    if (currentEl) currentEl.textContent = pad(current + 1);
    if (progressEl) progressEl.style.width = `${((current + 1) / total) * 100}%`;
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === total - 1;
    if (opts.scroll) {
      slides[current].scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    }
  }

  function updateFromScroll() {
    ticking = false;
    const mid = window.innerHeight / 2;
    let best = 0;
    let bestDistance = Infinity;
    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - mid);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });
    if (best !== current) setCurrent(best);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateFromScroll);
    }
  }

  function go(delta) {
    const target = Math.max(0, Math.min(total - 1, current + delta));
    if (target !== current) {
      setCurrent(target, { scroll: true });
      if (history.replaceState) history.replaceState(null, '', `#${slides[target].id}`);
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      const root = document.documentElement;
      const request = root.requestFullscreen || root.webkitRequestFullscreen;
      if (request) {
        Promise.resolve(request.call(root)).catch(() => {});
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }

  function syncFullscreenButton() {
    if (!fullBtn) return;
    const active = Boolean(document.fullscreenElement);
    fullBtn.setAttribute('aria-label', active ? 'Salir de pantalla completa' : 'Pantalla completa');
    fullBtn.setAttribute('title', active ? 'Salir de pantalla completa (F)' : 'Pantalla completa (F)');
    fullBtn.textContent = active ? '[×]' : '[ ]';
  }

  /* ---------- Generar letras recortadas ---------- */
  if (window.ransomizeAll) {
    window.ransomizeAll('[data-ransom]');
  }

  /* ---------- Fondo de recortes ---------- */
  const bg = document.querySelector('.deck-bg');
  if (bg && window.collage) {
    window.collage(bg, {
      count: window.innerWidth < 760 ? 14 : 28,
      seed: 'operacion-caos-2026',
      min: 2.4,
      max: 6.2,
      chars: 'CAOSPROCESODISCOVERY0123456789&%!?'
    });
  }

  /* ---------- Espiral de cierre ---------- */
  const spiralEl = document.querySelector('[data-spiral]');
  if (spiralEl && window.spiral) {
    window.spiral(spiralEl, {
      count: 78,
      turns: 3.4,
      seed: 'caos-cierre-2026',
      min: 0.52,
      max: 2.5,
      chars: 'CAOSCÓDIGOPROCESO0123456789&?'
    });
  }

  /* ---------- Navegación ---------- */
  if (prevBtn) prevBtn.addEventListener('click', () => go(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => go(1));
  if (fullBtn) fullBtn.addEventListener('click', toggleFullscreen);

  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    const tag = (event.target && event.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

    const key = event.key;
    if (key === 'ArrowRight' || key === 'ArrowDown' || key === 'PageDown') {
      event.preventDefault();
      go(1);
    } else if (key === 'ArrowLeft' || key === 'ArrowUp' || key === 'PageUp') {
      event.preventDefault();
      go(-1);
    } else if (key === ' ' || key === 'Spacebar') {
      if (tag === 'BUTTON' || tag === 'A') return;
      event.preventDefault();
      go(1);
    } else if (key === 'Home') {
      event.preventDefault();
      setCurrent(0, { scroll: true });
      if (history.replaceState) history.replaceState(null, '', `#${slides[0].id}`);
    } else if (key === 'End') {
      event.preventDefault();
      setCurrent(total - 1, { scroll: true });
      if (history.replaceState) history.replaceState(null, '', `#${slides[total - 1].id}`);
    } else if (key === 'f' || key === 'F') {
      event.preventDefault();
      toggleFullscreen();
    }
  });

  document.addEventListener('fullscreenchange', syncFullscreenButton);
  document.addEventListener('webkitfullscreenchange', syncFullscreenButton);
  window.addEventListener('scroll', onScroll, { passive: true });

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      fitSheets();
      updateFromScroll();
      slides[current].scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 120);
  });

  /* ---------- Arranque ---------- */
  fitSheets();
  const hashIndex = slides.findIndex((slide) => `#${slide.id}` === window.location.hash);
  const initial = hashIndex >= 0 ? hashIndex : 0;
  setCurrent(initial);
  syncFullscreenButton();

  if (hashIndex > 0) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => slides[initial].scrollIntoView({ behavior: 'auto', block: 'start' }));
    });
  }

  window.addEventListener('load', () => {
    fitSheets();
    updateFromScroll();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      fitSheets();
      updateFromScroll();
    });
  }
})();

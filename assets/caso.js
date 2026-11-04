/* Caso 01 · Atención comercial
   Navegación, collage de portada y calculador de línea de base. */
(function () {
  'use strict';

  /* ---------- Letras recortadas ---------- */
  if (window.ransomizeAll) {
    window.ransomizeAll('[data-ransom]');
  }

  /* ---------- Collage de fondo de la portada ---------- */
  const heroBg = document.querySelector('.case-hero__bg');
  if (heroBg && window.collage) {
    window.collage(heroBg, {
      count: window.innerWidth < 760 ? 12 : 26,
      seed: 'caso-atencion-comercial-2026',
      min: 2.1,
      max: 5.4,
      chars: 'ATENCIONCOMERCIALCAOSPROCESO0123456789&?'
    });
  }

  /* ---------- Navegación activa + barra de progreso ---------- */
  const navLinks = Array.from(document.querySelectorAll('[data-nav]'));
  const chapters = ['problema', 'desglose', 'solucion']
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const progress = document.querySelector('[data-progress]');

  function setActive(id) {
    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${id}`;
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('href').slice(1);
      setActive(id);
    });
  });

  if ('IntersectionObserver' in window && chapters.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-32% 0px -54% 0px', threshold: [0, .2, .5, .8] });

    chapters.forEach((chapter) => observer.observe(chapter));
  }

  function updateProgress() {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progress.style.transform = `scaleX(${ratio.toFixed(4)})`;
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateProgress();
      ticking = false;
    });
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  window.addEventListener('load', updateProgress);
  updateProgress();

  /* ---------- Calculador de línea de base ---------- */
  const inputs = {
    min: document.querySelector('[data-roi="min"]'),
    freq: document.querySelector('[data-roi="freq"]'),
    cost: document.querySelector('[data-roi="cost"]'),
    auto: document.querySelector('[data-roi="auto"]')
  };

  const outputs = {
    min: document.querySelector('[data-out="min"]'),
    freq: document.querySelector('[data-out="freq"]'),
    cost: document.querySelector('[data-out="cost"]'),
    auto: document.querySelector('[data-out="auto"]'),
    save: document.querySelector('[data-roi-out="save"]'),
    formula: document.querySelector('[data-roi-out="formula"]'),
    invisible: document.querySelector('[data-roi-out="invisible"]'),
    hours: document.querySelector('[data-roi-out="hours"]'),
    year: document.querySelector('[data-roi-out="year"]'),
    remaining: document.querySelector('[data-roi-out="remaining"]')
  };

  const resetButton = document.querySelector('[data-roi-reset]');
  const money = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });
  const decimal = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 1 });
  const defaults = { min: 12, freq: 240, cost: 18, auto: 60 };

  function formatMoney(value) {
    return `$${money.format(Math.round(value))}`;
  }

  function paintRange(input) {
    if (!input) return;
    const min = Number(input.min);
    const max = Number(input.max);
    const value = Number(input.value);
    const percent = max > min ? ((value - min) / (max - min)) * 100 : 0;
    input.style.setProperty('--fill', `${percent.toFixed(2)}%`);
  }

  function calculate() {
    const min = Number(inputs.min.value);
    const freq = Number(inputs.freq.value);
    const cost = Number(inputs.cost.value);
    const auto = Number(inputs.auto.value);

    const totalHours = (min / 60) * freq;
    const invisible = totalHours * cost;
    const saved = invisible * (auto / 100);
    const savedHours = totalHours * (auto / 100);
    const remaining = invisible - saved;

    if (outputs.min) outputs.min.textContent = String(min);
    if (outputs.freq) outputs.freq.textContent = String(freq);
    if (outputs.cost) outputs.cost.textContent = `$${cost}`;
    if (outputs.auto) outputs.auto.textContent = `${auto}%`;

    if (outputs.save) outputs.save.textContent = money.format(Math.round(saved));
    if (outputs.formula) {
      outputs.formula.textContent = `${min} min × ${freq} consultas/mes × $${cost}/h = ${formatMoney(invisible)}/mes`;
    }
    if (outputs.invisible) outputs.invisible.textContent = `${formatMoney(invisible)} / mes`;
    if (outputs.hours) outputs.hours.textContent = `${decimal.format(savedHours)} h / mes`;
    if (outputs.year) outputs.year.textContent = `${formatMoney(saved * 12)} / año`;
    if (outputs.remaining) outputs.remaining.textContent = `${formatMoney(remaining)} / mes`;

    Object.values(inputs).forEach(paintRange);
  }

  Object.values(inputs).forEach((input) => {
    if (input) input.addEventListener('input', calculate);
  });

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      Object.entries(defaults).forEach(([key, value]) => {
        if (inputs[key]) inputs[key].value = String(value);
      });
      calculate();
      if (inputs.min) inputs.min.focus({ preventScroll: true });
    });
  }

  calculate();
})();

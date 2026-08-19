// Signature element: a slow-drifting starfield with a single moon that
  // waxes and wanes in sync with scroll position, echoing the phase
  // markers used to divide each section.
  const canvas = document.getElementById('moon-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, stars = [];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function makeStars(n) {
    stars = [];
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.2,
        tw: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.012 + 0.004
      });
    }
  }
  makeStars(140);

  const moon = { cx: () => w * 0.78, cy: () => h * 0.38, r: 90 };

  function draw(t) {
    ctx.clearRect(0, 0, w, h);

    // stars
    ctx.fillStyle = '#F2F0EA';
    stars.forEach(s => {
      const alpha = 0.25 + 0.55 * Math.abs(Math.sin(s.tw + t * s.speed));
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // moon glow
    const cx = moon.cx(), cy = moon.cy(), r = moon.r;
    const glow = ctx.createRadialGradient(cx, cy, r * 0.6, cx, cy, r * 3.2);
    glow.addColorStop(0, 'rgba(232, 223, 200, 0.14)');
    glow.addColorStop(1, 'rgba(232, 223, 200, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 3.2, 0, Math.PI * 2);
    ctx.fill();

    // moon body
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = '#E8DFC8';
    ctx.fillRect(cx - r, cy - r, r * 2, r * 2);

    // waxing/waning shadow, phase driven by slow time cycle
    const phase = (Math.sin(t * 0.00025) + 1) / 2; // 0..1
    const shadowX = cx - r + phase * r * 2;
    ctx.fillStyle = '#0F1420';
    ctx.beginPath();
    ctx.ellipse(shadowX, cy, r * 0.92, r, 0, 0, Math.PI * 2);
    ctx.fill();

    // craters
    ctx.fillStyle = 'rgba(15, 20, 32, 0.18)';
    [[-0.25, -0.2, 0.16], [0.15, 0.1, 0.11], [-0.05, 0.3, 0.08]].forEach(([dx, dy, dr]) => {
      ctx.beginPath();
      ctx.arc(cx + dx * r, cy + dy * r, dr * r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();

    if (!reduceMotion) requestAnimationFrame(draw);
  }

  if (reduceMotion) {
    draw(4000); // static frame, near-full moon
  } else {
    requestAnimationFrame(draw);
  }

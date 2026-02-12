// =========================
// CONFIG: replace per headphone world
// =========================
const BACK_URL = "../map.html";
const WORLD = {
  title: "Energy Boost",
  accent: "orangered",
  bgImage: "../bg/chris1.png",
  info: {
    interviewee: "Chris J.",
    device: "Beats",
    volume: "9/10",
    experience: "8 years",
    moment: "during workout"
  },
  audio: {
    default: "../audio/chris-d.mp3",
    transparency: "../audio/chris-t.mp3",
    nc: "../audio/chris-n.mp3"
  }
};

let p = 0.0;        // 0=ON, 1=OFF
let dragging = false;

// mouse
const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
addEventListener(
  "mousemove",
  (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  },
  { passive: true }
);

// apply config
document.documentElement.style.setProperty("--accent", WORLD.accent);
const worldImg = document.getElementById("worldImg");
worldImg.style.backgroundImage = `url("${WORLD.bgImage}")`;

const bigTitle = document.getElementById("bigTitle");
bigTitle.textContent = WORLD.title;

document.getElementById("vName").textContent = WORLD.info.interviewee;
document.getElementById("vDevice").textContent = WORLD.info.device;
document.getElementById("vVolume").textContent = WORLD.info.volume;
document.getElementById("vYears").textContent = WORLD.info.experience;
document.getElementById("vMoment").textContent = WORLD.info.moment;

document.getElementById("back").addEventListener("click", () => (location.href = BACK_URL));

// =========================
// Audio + mode selection
// =========================
const audio = new Audio();
audio.loop = true;

const modeRows = Array.from(document.querySelectorAll(".modeRow"));
let activeMode = "off";

function setActiveMode(mode) {
  activeMode = mode;
  modeRows.forEach((r) => r.classList.toggle("active", r.dataset.mode === mode));

  if (mode === "off") {
    audio.pause();
    audio.src = "";
    return;
  }
  const src = WORLD.audio[mode];
  if (src) {
    audio.src = src;
    audio.play().catch(() => {});
  }
}
setActiveMode("off");

modeRows.forEach((r) => {
  r.addEventListener("click", (e) => {
    e.stopPropagation();
    setActiveMode(r.dataset.mode);
  });
});

// =========================
// Letters: scattered positions relative to final
// =========================
const lettersEl = document.getElementById("letters");
const TITLE = WORLD.title;
const chars = TITLE.split("");

function makeScatter(title) {
  const out = [];
  const n = title.length;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1 || 1);
    const dx = (t - 0.5) * 150 + (Math.random() * 80 - 415);
    const dy = (-150 + Math.sin(t * Math.PI) * 100) + (Math.random() * 180 - 20);
    const rot = (-380 + t * 60) + (Math.random() * 200 - 110);
    const scale = 1 + (Math.random() * 0.10 - 0.05);
    out.push({ dx, dy, rot, scale });
  }
  return out;
}
const scatter = makeScatter(TITLE);

const letterSpans = [];
chars.forEach((ch, i) => {
  if (ch === " ") {
    letterSpans.push(null);
    return;
  }
  const s = document.createElement("span");
  s.className = "letter";
  s.textContent = ch;
  s.dataset.i = String(i);
  lettersEl.appendChild(s);
  letterSpans.push(s);
});

// compute final letter centers by measuring title at bigTitle position
function layoutFinalPositions() {
  const temp = document.createElement("div");
  temp.style.position = "absolute";
  temp.style.left = "50%";
  temp.style.top = "12%";
  temp.style.transform = "translateX(-2%)";
  temp.style.fontSize = getComputedStyle(bigTitle).fontSize;
  temp.style.fontStyle = "italic";
  temp.style.fontFamily = "var(--font-serif)";
  temp.style.fontWeight = "500";
  temp.style.whiteSpace = "pre";
  temp.style.visibility = "hidden";
  document.body.appendChild(temp);

  temp.textContent = "";
  const spans = [];
  chars.forEach((ch) => {
    const sp = document.createElement("span");
    sp.textContent = ch;
    temp.appendChild(sp);
    spans.push(sp);
  });

  const finals = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === " ") {
      finals.push(null);
      continue;
    }
    const r = spans[i].getBoundingClientRect();
    finals.push({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  }
  document.body.removeChild(temp);
  return finals;
}
let finals = layoutFinalPositions();
addEventListener("resize", () => {
  finals = layoutFinalPositions();
});

// ✅ Per-letter independent motion params (关键：每个字母单独动)
const letterMotion = chars.map((ch) => {
  if (ch === " ") return null;
  const sgn = () => (Math.random() < 0.5 ? -1 : 1);
  return {
    fx: (10 + Math.random() * 26) * sgn(),   // cursor follow strength X
    fy: (8 + Math.random() * 22) * sgn(),    // cursor follow strength Y
    lag: 0.05 + Math.random() * 0.10,        // inertia
    phase: Math.random() * Math.PI * 2,
    wobA: 0.0008 + Math.random() * 0.0010,   // personal wobble freq
    wobB: 0.0010 + Math.random() * 0.0012,
    ox: 0,
    oy: 0
  };
});

// =========================
// Slider: ON (0) <-> OFF (1)
// =========================
const knob = document.getElementById("knob");
const track = document.getElementById("track");

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function setKnob(v01) {
  const v = clamp(v01, 0, 1);
  knob.style.left = v * 100 + "%";
  knob.setAttribute("aria-valuenow", v.toFixed(2));
}

function setP(v01) {
  p = clamp(v01, 0, 1);

  // image morph
  const imgScale = 1 + p * 0.76;
  const imgBlur = p * 20;
  const imgOpacity = 0.92 - p * 0.40;
  document.documentElement.style.setProperty("--imgScale", imgScale.toFixed(3));
  document.documentElement.style.setProperty("--imgBlur", imgBlur.toFixed(2) + "px");
  document.documentElement.style.setProperty("--imgOpacity", imgOpacity.toFixed(3));

  // off UI appear
  const infoOpacity = clamp((p - 0.60) / 0.32, 0, 1);
  document.documentElement.style.setProperty("--infoOpacity", infoOpacity.toFixed(3));
  document.documentElement.style.setProperty("--infoY", (12 * (1 - infoOpacity)).toFixed(2) + "px");
  document.documentElement.style.setProperty("--backOpacity", infoOpacity.toFixed(3));

  // big title appear at off
  const bigOp = clamp((p - 0.70) / 0.25, 0, 1);
  document.documentElement.style.setProperty("--bigTitleOpacity", bigOp.toFixed(3));

  // hide mode buttons in OFF (你之前加的)
  const modesOpacity = clamp(1 - (p - 0.55) / 0.25, 0, 1);
  document.documentElement.style.setProperty("--modesOpacity", modesOpacity.toFixed(3));
  document.documentElement.style.setProperty("--modesPE", modesOpacity < 0.05 ? "none" : "auto");
}

// initial: bar ON (0), audio off
setKnob(0);
setP(0);

function pointerToValue(clientX) {
  const r = track.getBoundingClientRect();
  return (clientX - r.left) / r.width;
}

knob.addEventListener("pointerdown", (e) => {
  dragging = true;
  knob.setPointerCapture(e.pointerId);
  knob.style.cursor = "grabbing";
  e.stopPropagation();
});
knob.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  const v = clamp(pointerToValue(e.clientX), 0, 1);
  setKnob(v);
  setP(v);
  e.stopPropagation();
});

function release() {
  if (!dragging) return;
  dragging = false;
  knob.style.cursor = "grab";

  const v = parseFloat(knob.style.left) / 100;

  if (v < 0.18) {
    setKnob(0);
    setP(0);
    // ON不自动开音频：仍 audio off
  } else if (v > 0.82) {
    setKnob(1);
    setP(1);
  } else {
    setKnob(v);
    setP(v);
  }
}
knob.addEventListener("pointerup", (e) => {
  release();
  e.stopPropagation();
});
addEventListener("pointerup", () => release());

// =========================
// Animation: plane tilt (center axis) + letters (TRUE independent)
// =========================
const plane = document.getElementById("plane");

// ✅ plane tilt inertia (center axis rotation)
const tilt = { rx: 0, ry: 0, tx: 0, ty: 0 };

function updatePlane(nx, ny) {
  const targetRy = nx * 16;   // rotate around Y
  const targetRx = -ny * 12;  // rotate around X

  // keep translation tiny to avoid “floating”
  const targetTx = nx * 5;
  const targetTy = ny * 4;

  const k = 0.08; // inertia
  tilt.ry += (targetRy - tilt.ry) * k;
  tilt.rx += (targetRx - tilt.rx) * k;
  tilt.tx += (targetTx - tilt.tx) * k;
  tilt.ty += (targetTy - tilt.ty) * k;

  plane.style.transform =
    `translate3d(${tilt.tx.toFixed(2)}px, ${tilt.ty.toFixed(2)}px, 0)
     rotateY(${tilt.ry.toFixed(2)}deg)
     rotateX(${tilt.rx.toFixed(2)}deg)`;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function raf() {
  const w = innerWidth,
    h = innerHeight;

  const nx = mouse.x / w - 0.5;
  const ny = mouse.y / h - 0.5;

  // image: center axis tilt
  updatePlane(nx, ny);

  const tNow = performance.now();

  for (let i = 0; i < chars.length; i++) {
    const sp = letterSpans[i];
    if (!sp) continue;
    const fin = finals[i];
    if (!fin) continue;

    const sc = scatter[i];
    const m = letterMotion[i];

    // base pos scattered -> final by p
    const x = lerp(fin.x + sc.dx, fin.x, p);
    const y = lerp(fin.y + sc.dy, fin.y, p);

    // ✅ each letter has its own cursor-follow + inertia + wobble
    const wigStrength = 1 - p; // ON活跃, OFF收敛

    const targetOx =
      nx * m.fx + Math.sin(tNow * m.wobA + m.phase) * (10 * wigStrength);
    const targetOy =
      ny * m.fy + Math.cos(tNow * m.wobB + m.phase) * (9 * wigStrength);

    m.ox += (targetOx - m.ox) * m.lag;
    m.oy += (targetOy - m.oy) * m.lag;

    const rot =
      lerp(sc.rot, 0, p) +
      (m.ox * 0.15) +   // 用自己的偏移带一点旋转，更“散”
      (m.oy * -0.10);

    const sca = lerp(sc.scale, 1, p);

    // fade letters near OFF (big title comes in)
    const letterOpacity = clamp(1 - (p - 0.72) / 0.20, 0, 1);

    sp.style.left = x + "px";
    sp.style.top = y + "px";
    sp.style.opacity = letterOpacity.toFixed(3);
    sp.style.transform =
      `translate(-50%,-50%)
       translate(${m.ox.toFixed(2)}px, ${m.oy.toFixed(2)}px)
       rotate(${rot.toFixed(2)}deg)
       scale(${sca.toFixed(3)})`;
  }

  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
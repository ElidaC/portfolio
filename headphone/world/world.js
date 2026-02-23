// =========================
// CONFIG
// =========================
const BACK_URL = "../map.html";

// =========================
// WORLDS DATA
// =========================
const WORLDS = [
  {
    id: "amaya",
    title: "Reflective Shelter",
    accent: "beige",
    bgImage: "../bg/amaya1.png",
    bgBackdrop: "../bg/amaya0.png",
    description: "It's a safe motivational and reflective environment.",
    audio: {
      default: "../audio/amaya-d.mp3",
      transparency: "../audio/amaya-t.mp3",
      nc: "../audio/amaya-n.mp3",
    },
  },
  {
    id: "ashley",
    title: "Rhythmic Calm",
    accent: "skyblue",
    bgImage: "../bg/ashley1.png",
    bgBackdrop: "../bg/ashley0.png",
    description:
      "I typically never have time to listen to music other than when I'm on a walk with my headphones so it's a time just to zone out and enjoy some quiet time for myself. Especially when I'm running, the music in my headphones helps me stay in the rhythm and clear my mind.",
    audio: {
      default: "../audio/ashley-d.mp3",
      transparency: "../audio/ashley-t.mp3",
      nc: "../audio/ashley-n.mp3",
    },
  },
  {
    id: "chris",
    title: "Energy Boost",
    accent: "orangered",
    bgImage: "../bg/chris1.png",
    bgBackdrop: "../bg/chris0.png",
    description:
      "The moment I put on my headphones to work out, I feel instantly energized. It feels like my whole body switches on.Different kinds of music make me imagine myself training in all sorts of scenes, and it just hits perfectly, which has became my favorite part of exercising.",
    audio: {
      default: "../audio/chris-d.mp3",
      transparency: "../audio/chris-t.mp3",
      nc: "../audio/chris-n.mp3",
    },
  },
  {
    id: "daelyn",
    title: "Inner Escape",
    accent: "beige",
    bgImage: "../bg/daelyn1.png",
    bgBackdrop: "../bg/daelyn0.png",
    description:
      "I describe it as a source of escape. A way to get out of reality and be in my own little world. I would describe my world as a place of peace and reflection. Where I can think without outside noise interrupting.",
    audio: {
      default: "../audio/daelyn-d.mp3",
      transparency: "../audio/daelyn-t.mp3",
      nc: "../audio/daelyn-n.mp3",
    },
  },
  {
    id: "demi",
    title: "Gentle Companion",
    accent: "lightgreen",
    bgImage: "../bg/demi1.png",
    bgBackdrop: "../bg/demi0.png",
    description:
      "When I put on my headphones, I feel myself slipping out of everyday life for a moment. The world inside them is calm and private, like a space made just for me. In that space, I can relax, explore, and think without interruption. The music always feels warm and reassuring, like a quiet companion by my side. It pushes me forward, gives me courage, and helps me face whatever is waiting for me in the real world.",
    audio: {
      default: "../audio/demi-d.mp3",
      transparency: "../audio/demi-t.mp3",
      nc: "../audio/demi-n.mp3",
    },
  },
  {
    id: "di",
    title: "Emotional Orchestra",
    accent: "pink",
    bgImage: "../bg/di1.png",
    bgBackdrop: "../bg/di0.png",
    description:
      "In the world inside my headphones, every song feels like an invisible band. I listen closely to each melody and rhythm, paying attention to the tone and the way it is played. I focus more on the emotions a song expresses and choose what to listen to based on how I feel.",
    audio: {
      default: "../audio/di-d.mp3",
      transparency: "../audio/di-t.mp3",
      nc: "../audio/di-n.mp3",
    },
  },
  {
    id: "entao",
    title: "Private Entertain Time",
    accent: "black",
    bgImage: "../bg/entao1.png",
    bgBackdrop: "../bg/entao0.png",
    description:
      "The world inside my headphones is practical and personal. It lets me enjoy sound without bothering others and creates a quiet space just for me. I first used headphones in high school to cope with study pressure, and later for movies, games, and music. They make sound clearer and help me stay focused, even in noisy or public places.",
    audio: {
      default: "../audio/entao-d.mp3",
      transparency: "../audio/entao-t.mp3",
      nc: "../audio/entao-n.mp3",
    },
  },
  {
    id: "erin",
    title: "Selective Reality",
    accent: "red",
    bgImage: "../bg/erin1.png",
    bgBackdrop: "../bg/erin0.png",
    description:
      "Headphones block out the noise of the world and let me focus on what I want to hear. They help me slip into a different mood and state of mind. When I wear them while calling family, friends, or someone I love, even without speaking, I can hear the quiet sounds of their daily life, and it makes the distance between us feel much smaller.",
    audio: {
      default: "../audio/erin-d.mp3",
      transparency: "../audio/erin-t.mp3",
      nc: "../audio/erin-n.mp3",
    },
  },
  {
    id: "gang",
    title: "Creative Source",
    accent: "orange",
    bgImage: "../bg/gang1.png",
    bgBackdrop: "../bg/gang0.png",
    description:
      "I like to put on my headphones whenever I work on design. The space they create becomes a source of inspiration for me. As the music slowly begins, ideas start to flow. My designs often develop unique perspectives, ways of thinking, and colors. The feeling is special, and over time it has become a habit. Wearing headphones helps me immerse myself in a different world where I can find inspiration and create.",
    audio: {
      default: "../audio/gang-d.mp3",
      transparency: "../audio/gang-t.mp3",
      nc: "../audio/gang-n.mp3",
    },
  },
  {
    id: "helen",
    title: "Memory Scanctuary",
    accent: "blue",
    bgImage: "../bg/helen1.png",
    bgBackdrop: "../bg/helen0.png",
    description:
      "I feel safe in this private world, with no anxiety and nothing to worry about. When I'm walking on the street or sitting on the subway or on a plane, anything unpredictable could happen. But when I put on my headphones and turn on noise cancellation, all the uncertainty around me fades away. What inside my headphone are countless memories with friends and family. It feels like a 3D surround-sound memoir, filled with tears, laughter, and everything in between. Those shadows and fragments slide through my mind like scenes from a movie, one after another.",
    audio: {
      default: "../audio/helen-d.mp3",
      transparency: "../audio/helen-t.mp3",
      nc: "../audio/helen-n.mp3",
    },
  },
  {
    id: "joe",
    title: "Soul Listener",
    accent: "orangered",
    bgImage: "../bg/joe1.png",
    bgBackdrop: "../bg/joe0.png",
    description:
      "That world feels like a close friend who understands what I think and what I say. It is a good listener, quietly talking to me in its own way, and when I need it, it answers me through music.",
    audio: {
      default: "../audio/joe-d.mp3",
      transparency: "../audio/joe-t.mp3",
      nc: "../audio/joe-n.mp3",
    },
  },
  {
    id: "nerwen",
    title: "Listening Ritual",
    accent: "darkred",
    bgImage: "../bg/nerwen1.png",
    bgBackdrop: "../bg/nerwen0.png",
    description:
      "For me, listening with studio headphones is a form of respect for music and a kind of ritual. They let me hear the music as it truly is. When a favorite artist releases a new album, I sit down, put on my headphones, and listen from start to finish. In that quiet, private space, it feels like a direct conversation with the artist through their music.",
    audio: {
      default: "../audio/nerwen-d.mp3",
      transparency: "../audio/nerwen-t.mp3",
      nc: "../audio/nerwen-n.mp3",
    },
  },
  {
    id: "tara",
    title: "Emotional Recharge",
    accent: "darkblue",
    bgImage: "../bg/tara1.png",
    bgBackdrop: "../bg/tara0.png",
    description:
      "Headphones are like a doorway for me. Once I step in, no one calls my name and no one expects me to smile. It’s just a space that pulls me in, a place where I can float, fall apart, and slowly piece myself back together into someone new. No one knows who I am there, me either. But that world absorbs all my bad feelings, lets me go quiet, recharge, watch myself grow, and come back ready for a new day.",
    audio: {
      default: "../audio/tara-d.mp3",
      transparency: "../audio/tara-t.mp3",
      nc: "../audio/tara-n.mp3",
    },
  },
];

// =========================
// Pick WORLD (URL ?id=xxx OR window.WORLD_ID OR fallback)
/// =========================
const params = new URLSearchParams(location.search);
const worldId = (typeof window !== "undefined" && window.WORLD_ID)
  ? window.WORLD_ID
  : params.get("id");

const WORLD = WORLDS.find((w) => w.id === worldId) || WORLDS[0];

// =========================
// State
// =========================
let p = 0.0; // 0=ON, 1=OFF
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

// =========================
// Apply config to DOM
// =========================
document.documentElement.style.setProperty("--accent", WORLD.accent);

// body backdrop (HTML body::before uses --backdrop)
document.documentElement.style.setProperty(
  "--backdrop",
  `url("${WORLD.bgBackdrop || WORLD.bgImage}")`
);

const worldImg = document.getElementById("worldImg");
if (worldImg) worldImg.style.backgroundImage = `url("${WORLD.bgImage}")`;

const bigTitle = document.getElementById("bigTitle");
if (bigTitle) bigTitle.textContent = WORLD.title;

const descEl = document.getElementById("description");
if (descEl) descEl.textContent = WORLD.description || "";

const backBtn = document.getElementById("back");
if (backBtn) backBtn.addEventListener("click", () => (location.href = BACK_URL));

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
  const src = WORLD.audio?.[mode];
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
    const dy = -150 + Math.sin(t * Math.PI) * 100 + (Math.random() * 180 - 20);
    const rot = -380 + t * 60 + (Math.random() * 200 - 110);
    const scale = 1 + (Math.random() * 0.1 - 0.05);
    out.push({ dx, dy, rot, scale });
  }
  return out;
}
const scatter = makeScatter(TITLE);

const letterSpans = [];
if (lettersEl) {
  lettersEl.innerHTML = "";
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
}

function layoutFinalPositions() {
  const temp = document.createElement("div");
  temp.style.position = "absolute";
  temp.style.left = "50%";
  temp.style.top = "12%";
  temp.style.transform = "translateX(-2%)";
  temp.style.fontSize = bigTitle ? getComputedStyle(bigTitle).fontSize : "64px";
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

const letterMotion = chars.map((ch) => {
  if (ch === " ") return null;
  const sgn = () => (Math.random() < 0.5 ? -1 : 1);
  return {
    fx: (10 + Math.random() * 26) * sgn(),
    fy: (8 + Math.random() * 22) * sgn(),
    lag: 0.05 + Math.random() * 0.1,
    phase: Math.random() * Math.PI * 2,
    wobA: 0.0008 + Math.random() * 0.001,
    wobB: 0.001 + Math.random() * 0.0012,
    ox: 0,
    oy: 0,
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
  if (knob) knob.style.left = v * 100 + "%";
  if (knob) knob.setAttribute("aria-valuenow", v.toFixed(2));
}

function setP(v01) {
  p = clamp(v01, 0, 1);

  // image morph
  const imgScale = 1 + p * 0.76;
  const imgBlur = p * 20;
  const imgOpacity = 0.92 - p * 0.4;
  document.documentElement.style.setProperty("--imgScale", imgScale.toFixed(3));
  document.documentElement.style.setProperty("--imgBlur", imgBlur.toFixed(2) + "px");
  document.documentElement.style.setProperty("--imgOpacity", imgOpacity.toFixed(3));

  // description appear at OFF
  const infoOpacity = clamp((p - 0.6) / 0.32, 0, 1);
  document.documentElement.style.setProperty("--infoOpacity", infoOpacity.toFixed(3));
  document.documentElement.style.setProperty("--infoY", (12 * (1 - infoOpacity)).toFixed(2) + "px");

  // back button opacity (if your CSS uses it)
  document.documentElement.style.setProperty("--backOpacity", infoOpacity.toFixed(3));

  // big title appear at off
  const bigOp = clamp((p - 0.7) / 0.25, 0, 1);
  document.documentElement.style.setProperty("--bigTitleOpacity", bigOp.toFixed(3));

  // hide mode buttons in OFF
  const modesOpacity = clamp(1 - (p - 0.55) / 0.25, 0, 1);
  document.documentElement.style.setProperty("--modesOpacity", modesOpacity.toFixed(3));
  document.documentElement.style.setProperty("--modesPE", modesOpacity < 0.05 ? "none" : "auto");
}

// initial
setKnob(0);
setP(0);

function pointerToValue(clientX) {
  if (!track) return p;
  const r = track.getBoundingClientRect();
  return (clientX - r.left) / r.width;
}

function release() {
  if (!dragging) return;
  dragging = false;
  if (knob) knob.style.cursor = "grab";

  const v = knob ? parseFloat(knob.style.left) / 100 : p;

  if (v < 0.18) {
    setKnob(0);
    setP(0);
  } else if (v > 0.82) {
    setKnob(1);
    setP(1);
  } else {
    setKnob(v);
    setP(v);
  }
}

if (knob && track) {
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

  knob.addEventListener("pointerup", (e) => {
    release();
    e.stopPropagation();
  });

  addEventListener("pointerup", () => release());
}

// =========================
// Animation: plane tilt + letters
// =========================
const plane = document.getElementById("plane");
const tilt = { rx: 0, ry: 0, tx: 0, ty: 0 };

function updatePlane(nx, ny) {
  const targetRy = nx * 16;
  const targetRx = -ny * 12;
  const targetTx = nx * 5;
  const targetTy = ny * 4;

  const k = 0.08;
  tilt.ry += (targetRy - tilt.ry) * k;
  tilt.rx += (targetRx - tilt.rx) * k;
  tilt.tx += (targetTx - tilt.tx) * k;
  tilt.ty += (targetTy - tilt.ty) * k;

  if (!plane) return;
  plane.style.transform =
    `translate3d(${tilt.tx.toFixed(2)}px, ${tilt.ty.toFixed(2)}px, 0)
     rotateY(${tilt.ry.toFixed(2)}deg)
     rotateX(${tilt.rx.toFixed(2)}deg)`;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function raf() {
  const w = innerWidth, h = innerHeight;
  const nx = mouse.x / w - 0.5;
  const ny = mouse.y / h - 0.5;

  updatePlane(nx, ny);

  const tNow = performance.now();

  for (let i = 0; i < chars.length; i++) {
    const sp = letterSpans[i];
    if (!sp) continue;
    const fin = finals[i];
    if (!fin) continue;

    const sc = scatter[i];
    const m = letterMotion[i];

    const x = lerp(fin.x + sc.dx, fin.x, p);
    const y = lerp(fin.y + sc.dy, fin.y, p);

    const wigStrength = 1 - p;

    const targetOx =
      nx * m.fx + Math.sin(tNow * m.wobA + m.phase) * (10 * wigStrength);
    const targetOy =
      ny * m.fy + Math.cos(tNow * m.wobB + m.phase) * (9 * wigStrength);

    m.ox += (targetOx - m.ox) * m.lag;
    m.oy += (targetOy - m.oy) * m.lag;

    const rot = lerp(sc.rot, 0, p) + m.ox * 0.15 + m.oy * -0.1;
    const sca = lerp(sc.scale, 1, p);

    const letterOpacity = clamp(1 - (p - 0.72) / 0.2, 0, 1);

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
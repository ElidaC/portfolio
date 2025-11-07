(() => {
    const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
    const $ = (s, root = document) => root.querySelector(s);
  
    const hAxis  = $(".h-axis");
    const hTrack = $(".h-track");
    const hThumb = $(".h-thumb");
    if (!hAxis || !hTrack || !hThumb) return;
  
    // —— 页面识别：on.html / off.html / 其它 —— //
    const path = (location.pathname || "").toLowerCase();
    const isOnPage  = /(^|\/)on\.html$/.test(path);
    const isOffPage = /(^|\/)off\.html$/.test(path);
  
    // —— 位置工具 —— //
    const pxToPercent = (clientX) => {
      const rect = hTrack.getBoundingClientRect();
      const x = clamp(clientX - rect.left, 0, rect.width);
      return (x / rect.width) * 100;
    };
  
    function setPos(percent, {updateAria=false} = {}) {
      percent = clamp(percent, 0, 100);
      hThumb.style.setProperty("--x", percent);
      if (updateAria) {
        // ON=0, OFF=1  （如果你想反过来，把 0/1 对调）
        const ariaNow = percent <= 50 ? 0 : 1;
        hAxis.setAttribute("aria-valuenow", String(ariaNow));
      }
    }
  
    function snap(percent) {
      return percent <= 50 ? 0 : 100;
    }
  
    function navigateByPercent(percent) {
      const side = percent === 0 ? "on" : "off";
      if (side === "on") window.location.href = "on.html";
      else window.location.href = "off.html";
    }
  
    // —— 初始化：on.html 在 ON，off.html 在 OFF，其它按 data-position —— //
    if (isOnPage) {
      setPos(0,   {updateAria:true});
    } else if (isOffPage) {
      setPos(100, {updateAria:true});
    } else {
      const init = (hThumb.dataset.position || "off").toLowerCase() === "on" ? 0 : 100;
      setPos(init, {updateAria:true});
    }
  
    // —— 交互：拖拽 —— //
    let dragging = false;
    let pointerId = null;
  
    const onMove = (e) => {
      if (!dragging) return;
      const clientX = (e.touches && e.touches[0]?.clientX) ?? e.clientX;
      setPos(pxToPercent(clientX), {updateAria:true});
    };
  
    const onUp = (e) => {
      if (!dragging) return;
      dragging = false;
      if (pointerId != null && hThumb.hasPointerCapture?.(pointerId)) {
        hThumb.releasePointerCapture(pointerId);
      }
      const clientX = (e.changedTouches && e.changedTouches[0]?.clientX) ?? e.clientX;
      const snapped = snap(pxToPercent(clientX));
      setPos(snapped, {updateAria:true});
      navigateByPercent(snapped);
      pointerId = null;
      // 移除全局监听
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  
    // 拇指按下开始拖拽
    hThumb.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      dragging = true;
      pointerId = e.pointerId;
      hThumb.setPointerCapture?.(pointerId);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    });
  
    // 触控支持
    hThumb.addEventListener("touchstart", (e) => {
      dragging = true;
      window.addEventListener("touchmove", onMove, {passive:false});
      window.addEventListener("touchend", onUp);
    }, {passive:true});
  
    // —— 点击轨道直接吸附并跳转 —— //
    hTrack.addEventListener("pointerdown", (e) => {
      if (e.target === hThumb) return; // 已由拇指处理
      const p = pxToPercent(e.clientX);
      const snapped = snap(p);
      setPos(snapped, {updateAria:true});
      navigateByPercent(snapped);
    });
  
    // —— 点击 ON/OFF 文本 —— //
    document.querySelectorAll(".h-label").forEach(lbl => {
      lbl.addEventListener("click", () => {
        const text = (lbl.textContent || "").trim().toLowerCase();
        if (text === "on")  { setPos(0,   {updateAria:true}); navigateByPercent(0); }
        if (text === "off") { setPos(100, {updateAria:true}); navigateByPercent(100); }
      });
    });
  
    // —— 键盘：在 .h-axis 上 —— //
    hAxis.addEventListener("keydown", (e) => {
      const k = e.key;
      const curr = parseFloat(getComputedStyle(hThumb).getPropertyValue("--x")) || 0;
  
      if (k === "ArrowLeft")  { e.preventDefault(); setPos(curr - 5, {updateAria:true}); }
      if (k === "ArrowRight") { e.preventDefault(); setPos(curr + 5, {updateAria:true}); }
      if (k === "Home")       { e.preventDefault(); setPos(0,   {updateAria:true}); }
      if (k === "End")        { e.preventDefault(); setPos(100, {updateAria:true}); }
  
      if (k === "Enter" || k === " ") {
        e.preventDefault();
        const snapped = snap(curr);
        setPos(snapped, {updateAria:true});
        navigateByPercent(snapped);
      }
    });
  })();








// 找到被标记为 native 的区块
const nativeSection = document.querySelector("[data-native='true']");
const nativeLang = nativeSection ? nativeSection.id : "chinese";

// 所有语言区块
const sections = {
  chinese: document.getElementById("chinese"),
  korean: document.getElementById("korean"),
  english: document.getElementById("english")
};

// 初始化：显示 native，其他隐藏
for (const key in sections) {
  sections[key].style.display = (key === nativeLang) ? "block" : "none";
}

const buttons = document.querySelectorAll(".lang-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // 按钮高亮
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let lang = btn.dataset.lang;

    // 如果点到 native 按钮 → 回到 data-native="true" 那段语言
    if (lang === "native") {
      lang = nativeLang;
    }

    // 切换语言显示
    for (const key in sections) {
      sections[key].style.display = (key === lang) ? "block" : "none";
    }
  });
});








const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const intro = document.querySelector(".intro");
const texts = document.querySelectorAll(".text");

let baseSize = 17;

function updateFontSize() {
  intro.style.fontSize = baseSize * 1 + "px";
  texts.forEach(t => t.style.fontSize = baseSize + "px");
}

plus.addEventListener("click", () => {
  baseSize = Math.min(baseSize + 1, 20);
  updateFontSize();
});

minus.addEventListener("click", () => {
  baseSize = Math.max(baseSize - 1, 13);
  updateFontSize();
});

updateFontSize();










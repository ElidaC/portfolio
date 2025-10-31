// script.js — 右侧ON/OFF拖拽 + 左侧竖轴（仅on.html可拖）、纹理强度联动
(() => {
    const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
    const $ = (s, root = document) => root.querySelector(s);
  
    // —— 页面态 —— //
    const body = document.body;
    const page = body.dataset.page || "index";
    const isOnPage = page === "on";
    const isOffPage = page === "off";
    const isAboutPage = page === "about";
  
    // —— 顶部 about 当前态 —— //
    const aboutLink = $(".about-link");
    if (aboutLink && isAboutPage) aboutLink.classList.add("current");
  
    // —— 元素引用 —— //
    const root = document.documentElement;
  
    // 左侧竖轴
    const vAxis  = $(".v-axis");
    const vTrack = $(".v-track");
    const vThumb = $(".v-thumb");
  
    // 右侧横轴（.h-axis 作为 slider 容器）
    const hAxis  = $(".h-axis");
    const hTrack = $(".h-track");
    const hThumb = $(".h-thumb");
  
    // —— 本地存储键（可选保留） —— //
    const LS_KEYS = {
      v: "vY", // 0~100
    };
  
    // 竖轴：仅 on.html 可拖；其它页面禁用态
    const setVDisabled = (disabled) => {
      if (!vTrack || !vThumb) return;
      vTrack.setAttribute("aria-disabled", disabled ? "true" : "false");
      vThumb.setAttribute("aria-disabled", disabled ? "true" : "false");
      vThumb.dataset.draggable = disabled ? "false" : "true";
    };
    setVDisabled(!isOnPage);
  
    // —— 初始位置 —— //
    // 左轴：读取本地存储或默认 10%
    const initialV = clamp(parseFloat(localStorage.getItem(LS_KEYS.v) ?? "10"), 0, 100);
  
    // 右轴：根据页面定默认位置；index 使用 data-position（on/off）
    let initialH;
    if (isOnPage) initialH = 0;          // ON 在左端（0%）
    else if (isOffPage) initialH = 100;  // OFF 在右端（100%）
    else {
      const tag = (hThumb && hThumb.dataset.position) || "off";
      initialH = tag === "on" ? 0 : tag === "off" ? 100 : 50;
    }
  
    // —— 渲染函数 —— //
    function setV(y, { persist = false } = {}) {
      if (!vThumb) return;
      y = clamp(y, 0, 100);
      vThumb.style.setProperty("--y", y);
      // 纹理强度：顶端(L) → 0，底部(R) → 1
      const grain = y / 100;
      root.style.setProperty("--grain-opacity", String(grain));
      if (persist && isOnPage) localStorage.setItem(LS_KEYS.v, String(y));
    }
  
    function setH(x, { setAria = true } = {}) {
      if (!hThumb || !hAxis) return;
      x = clamp(x, 0, 100);
      hThumb.style.setProperty("--x", x); // 交给 CSS 的 left: calc(var(--x) * 1%)
      if (setAria) {
        const now = x / 100; // 0~1
        hAxis.setAttribute("aria-valuenow", now.toFixed(2));
      }
    }
  
    // 初次渲染
    setV(initialV, { persist: false });
    setH(initialH);
  
    // —— 工具：轨道坐标 → 百分比 —— //
    const posOnTrackY = (clientY, trackEl) => {
      const rect = trackEl.getBoundingClientRect();
      return clamp(((clientY - rect.top) / rect.height) * 100, 0, 100);
    };
    const posOnTrackX = (clientX, trackEl) => {
      const rect = trackEl.getBoundingClientRect();
      return clamp(((clientX - rect.left) / rect.width) * 100, 0, 100);
    };
  
    // ————————— 左侧竖轴（仅 on.html 可拖） —————————
    if (vTrack && vThumb) {
      let vDragging = false;
  
      const onVPointerDown = (e) => {
        if (!isOnPage) return; // 非 on 页禁止拖
        if (vThumb.getAttribute("aria-disabled") === "true") return;
        vDragging = true;
        vTrack.setPointerCapture?.(e.pointerId);
        document.body.style.userSelect = "none";
        setV(posOnTrackY(e.clientY, vTrack));
      };
      const onVPointerMove = (e) => {
        if (!vDragging) return;
        setV(posOnTrackY(e.clientY, vTrack));
      };
      const onVPointerUp = (e) => {
        if (!vDragging) return;
        vDragging = false;
        document.body.style.userSelect = "";
        setV(posOnTrackY(e.clientY, vTrack), { persist: true });
      };
  
      vTrack.addEventListener("pointerdown", onVPointerDown);
      window.addEventListener("pointermove", onVPointerMove);
      window.addEventListener("pointerup", onVPointerUp);
    }
  
    // ————————— 右侧横轴：拖拽/键盘 + 吸附跳转 —————————
    if (hAxis && hTrack && hThumb) {
      let hDragging = false;
      let lastX = initialH;
      let navigated = false;
  
      const nearestState = (x) => (x < 50 ? "on" : "off");
      const navigateIfNeeded = (state) => {
        if (navigated) return;
        const target = state === "on" ? "on.html" : "off.html";
        // 已在该页就不跳
        const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
        if (current === target.toLowerCase()) return;
  
        navigated = true;
        setTimeout(() => { location.href = target; }, 100);
      };
  
      const snapAndMaybeNavigate = () => {
        const state = nearestState(lastX);
        const snapX = state === "on" ? 0 : 100;
        setH(snapX);
        navigateIfNeeded(state);
      };
  
      const onHPointerDown = (e) => {
        hDragging = true;
        hTrack.setPointerCapture?.(e.pointerId);
        document.body.style.userSelect = "none";
        lastX = posOnTrackX(e.clientX, hTrack);
        setH(lastX);
      };
      const onHPointerMove = (e) => {
        if (!hDragging) return;
        lastX = posOnTrackX(e.clientX, hTrack);
        setH(lastX);
      };
      const onHPointerUp = () => {
        if (!hDragging) return;
        hDragging = false;
        document.body.style.userSelect = "";
        snapAndMaybeNavigate();
      };
  
      // 点击轨道：直接吸附+跳转
      const onHTrackClick = (e) => {
        if (hDragging) return; // 避免和拖拽收尾重复
        lastX = posOnTrackX(e.clientX, hTrack);
        setH(lastX);
        snapAndMaybeNavigate();
      };
  
      // 键盘无障碍：左右/Home/End 调整；Space/Enter 吸附+跳转
      const STEP = 5;
      hAxis.addEventListener("keydown", (e) => {
        let handled = true;
        switch (e.key) {
          case "ArrowLeft":
          case "ArrowUp":
            lastX = clamp((lastX ?? 50) - STEP, 0, 100); setH(lastX); break;
          case "ArrowRight":
          case "ArrowDown":
            lastX = clamp((lastX ?? 50) + STEP, 0, 100); setH(lastX); break;
          case "Home": lastX = 0;   setH(lastX); break;
          case "End":  lastX = 100; setH(lastX); break;
          case "Enter":
          case " ":
            snapAndMaybeNavigate(); break;
          default:
            handled = false;
        }
        if (handled) { e.preventDefault(); e.stopPropagation(); }
      });
  
      hTrack.addEventListener("pointerdown", onHPointerDown);
      window.addEventListener("pointermove", onHPointerMove);
      window.addEventListener("pointerup", onHPointerUp);
      hTrack.addEventListener("click", onHTrackClick, { passive: true });
    }
  
    // —— 初始化 ARIA —— //
    if (hAxis) {
      hAxis.setAttribute("aria-valuemin", "0");
      hAxis.setAttribute("aria-valuemax", "1");
      hAxis.setAttribute("aria-valuenow", ((initialH ?? 50) / 100).toFixed(2));
    }
  })();


  












// ———————————— 声音：多个 block hover 播放不同音效 ————————————
(() => {
    const blocks = [
      { selector: ".block-soundable1", src: "music1/1-1.wav" },
      { selector: ".block-soundable2", src: "music1/1-2.wav" },
      { selector: ".block-soundable3", src: "music1/1-3.wav" }
    ];
  
    // 解锁音频上下文（浏览器策略要求）
    const unlockAudio = () => {
      blocks.forEach(b => {
        const a = new Audio(b.src);
        a.play().then(() => {
          a.pause();
          a.currentTime = 0;
        }).catch(()=>{});
      });
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);
    window.addEventListener("keydown", unlockAudio);
  
    // 为每个 block 添加 hover 播放逻辑
    blocks.forEach(({ selector, src }) => {
      const el = document.querySelector(selector);
      if (!el) return;
  
      const audio = new Audio(src);
      audio.preload = "auto";
  
      el.addEventListener("mouseenter", () => {
        audio.currentTime = 0;
        audio.play().catch(err => console.warn("Audio play error:", err));
      });
    });
  })();
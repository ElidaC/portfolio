// script.js
(() => {
    const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
    const $ = (s, root = document) => root.querySelector(s);
  
    const body = document.body;
    const page = body.dataset.page || "index";
    const isOnPage = page === "on";
    const isOffPage = page === "off";
    const isAboutPage = page === "about";
  
    // —— 顶部 About 链接当前态 ——
    const aboutLink = $(".about-link");
    if (aboutLink && isAboutPage) aboutLink.classList.add("current");
  
    // —— 元素引用 ——
    const root = document.documentElement;
  
    // 左：纵轴
    const vAxis = $(".v-axis");
    const vTrack = $(".v-track");
    const vThumb = $(".v-thumb");
  
    // 右：横轴（slider语义在 .h-axis 上）
    const hAxis = $(".h-axis");
    const hTrack = $(".h-track");
    const hThumb = $(".h-thumb");
  
    // —— 状态存储键（可选）——
    const LS_KEYS = {
      v: "vY", // 0~100
      h: "hX"  // 0~100
    };
  
    // 仅在 on.html 可拖拽左轴；其它页禁用
    const setVDisabled = (disabled) => {
      if (!vTrack || !vThumb) return;
      vTrack.setAttribute("aria-disabled", disabled ? "true" : "false");
      vThumb.setAttribute("aria-disabled", disabled ? "true" : "false");
      vThumb.dataset.draggable = disabled ? "false" : "true";
    };
    setVDisabled(!isOnPage);
  
    // —— 初始化位置 —— //
    // 左轴：默认使用本地存储或 10%；on.html 才会保存
    const initialV = clamp(parseFloat(localStorage.getItem(LS_KEYS.v) ?? "10"), 0, 100);
    // 右轴：根据页面设置默认位置；index 依据 hThumb 的 data-position（"on"/"off"）
    let initialH;
    if (isOnPage) initialH = 0;            // ON 在左端
    else if (isOffPage) initialH = 100;     // OFF 在右端
    else {
      const tag = (hThumb && hThumb.dataset.position) || "off";
      initialH = tag === "on" ? 0 : tag === "off" ? 100 : 50;
    }
  
    // —— 渲染函数 —— //
    function setV(y, { persist = false } = {}) {
      if (!vThumb) return;
      y = clamp(y, 0, 100);
      vThumb.style.setProperty("--y", y);
      // 颗粒感从 L(顶端) 到 R(底部) 线性增强
      const grain = y / 100;
      root.style.setProperty("--grain-opacity", String(grain));
      if (persist && isOnPage) localStorage.setItem(LS_KEYS.v, String(y));
    }
  
    function setH(x, { setAria = true } = {}) {
      if (!hThumb || !hAxis) return;
      x = clamp(x, 0, 100);
      hThumb.style.setProperty("--x", x);
      // 用 CSS var 控制：我们直接写 style 属性（你的 CSS 使用 --x 计算 left）
      hThumb.style.left = `calc(${x}% )`;
      if (setAria) {
        // 右侧 slider 在 .h-axis 上：0=ON(左), 1=OFF(右)
        const now = x / 100; // 0~1
        hAxis.setAttribute("aria-valuenow", now.toFixed(2));
      }
    }
  
    // 首次渲染
    setV(initialV, { persist: false });
    setH(initialH);
  
    // —— 工具：计算相对坐标（百分比）—— //
    function posOnTrackY(clientY, trackEl) {
      const rect = trackEl.getBoundingClientRect();
      const y = ((clientY - rect.top) / rect.height) * 100;
      return clamp(y, 0, 100);
    }
    function posOnTrackX(clientX, trackEl) {
      const rect = trackEl.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      return clamp(x, 0, 100);
    }
  
    // ————————— 左侧纵向：仅 on.html 可拖动 —————————
    if (vTrack && vThumb) {
      let vDragging = false;
  
      const onVPointerDown = (e) => {
        if (!isOnPage) return; // 非 on 页禁止
        if (vThumb.getAttribute("aria-disabled") === "true") return;
        vDragging = true;
        vTrack.setPointerCapture?.(e.pointerId);
        document.body.style.userSelect = "none";
        const y = posOnTrackY(e.clientY, vTrack);
        setV(y);
      };
  
      const onVPointerMove = (e) => {
        if (!vDragging) return;
        const y = posOnTrackY(e.clientY, vTrack);
        setV(y);
      };
  
      const onVPointerUp = (e) => {
        if (!vDragging) return;
        vDragging = false;
        document.body.style.userSelect = "";
        // 结束时保存
        const y = posOnTrackY(e.clientY, vTrack);
        setV(y, { persist: true });
      };
  
      // 点击轨道快速跳
      vTrack.addEventListener("pointerdown", onVPointerDown);
      window.addEventListener("pointermove", onVPointerMove);
      window.addEventListener("pointerup", onVPointerUp);
    }
  
    // ————————— 右侧横向：拖拽/键盘+跳转 —————————
    if (hAxis && hTrack && hThumb) {
      let hDragging = false;
      let lastX = initialH;
      let navigated = false;
  
      const nearestState = (x) => (x < 50 ? "on" : "off");
      const navigateIfNeeded = (state) => {
        if (navigated) return; // 防抖
        const target =
          state === "on" ? "on.html" :
          state === "off" ? "off.html" : null;
        if (!target) return;
  
        const current = location.pathname.split("/").pop() || "index.html";
        if (current.toLowerCase() === target.toLowerCase()) return;
  
        navigated = true;
        // 小延迟给吸附动画感（100ms）
        setTimeout(() => {
          location.href = target;
        }, 100);
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
  
      // 点击轨道直接跳到该点并吸附
      const onHTrackClick = (e) => {
        // 避免和拖拽结尾重复
        if (hDragging) return;
        lastX = posOnTrackX(e.clientX, hTrack);
        setH(lastX);
        snapAndMaybeNavigate();
      };
  
      // 键盘无障碍：左右/Home/End 调整；Space/Enter 吸附+跳转
      const step = 5; // 每次 5%
      hAxis.addEventListener("keydown", (e) => {
        let handled = true;
        switch (e.key) {
          case "ArrowLeft":
          case "ArrowUp":
            lastX = clamp((lastX ?? 50) - step, 0, 100);
            setH(lastX);
            break;
          case "ArrowRight":
          case "ArrowDown":
            lastX = clamp((lastX ?? 50) + step, 0, 100);
            setH(lastX);
            break;
          case "Home":
            lastX = 0; setH(lastX); break;
          case "End":
            lastX = 100; setH(lastX); break;
          case "Enter":
          case " ":
            snapAndMaybeNavigate();
            break;
          default:
            handled = false;
        }
        if (handled) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
  
      hTrack.addEventListener("pointerdown", onHPointerDown);
      window.addEventListener("pointermove", onHPointerMove);
      window.addEventListener("pointerup", onHPointerUp);
      hTrack.addEventListener("click", onHTrackClick, { passive: true });
    }
  
    // —— 可选：根据页面设定横轴 ARIA 初始值 —— //
    if (hAxis) {
      const now = (initialH ?? 50) / 100;
      hAxis.setAttribute("aria-valuenow", now.toFixed(2));
    }
  })();
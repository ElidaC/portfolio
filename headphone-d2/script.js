
// 新增：三个白底黑框的拖拽逻辑 + 记住位置
(function setupDraggableBoxes() {
  const boxes = document.querySelectorAll('.draggable-box');
  const STORAGE_KEY = 'draggable-box-positions-' + location.pathname; // 每个页面单独保存

  // 读取已保存的位置
  const saved = (() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  })();

  // 先把保存过的位置还原出来
  boxes.forEach(box => {
    const id = box.dataset.boxId;
    if (!id) return;
    const pos = saved[id];
    if (pos) {
      box.style.left = pos.left + 'px';
      box.style.top  = pos.top  + 'px';
    }
  });

  // 保存单个 box 的当前位置
  function saveBoxPosition(box) {
    const id = box.dataset.boxId;
    if (!id) return;

    const rect = box.getBoundingClientRect();
    const data = (() => {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      } catch (e) {
        return {};
      }
    })();

    data[id] = {
      left: rect.left + window.scrollX,
      top:  rect.top  + window.scrollY
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  boxes.forEach(box => {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;

    const getPos = (e) => {
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    };

    const onMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const { x, y } = getPos(e);
      const dx = x - startX;
      const dy = y - startY;
      box.style.left = (startLeft + dx) + 'px';
      box.style.top  = (startTop  + dy) + 'px';
    };

    const onUp = () => {
      if (!isDragging) return;
      isDragging = false;

      // 松手时保存当前位置
      saveBoxPosition(box);

      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };

    const onDown = (e) => {
      e.preventDefault();
      isDragging = true;
      const rect = box.getBoundingClientRect();
      const { x, y } = getPos(e);
      startX = x;
      startY = y;
      startLeft = rect.left + window.scrollX;
      startTop  = rect.top  + window.scrollY;

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('touchend', onUp);
    };

    box.addEventListener('pointerdown', onDown);
    box.addEventListener('touchstart', onDown, { passive: false });
  });
})();






// 找到被标记为 native 的区块
const nativeSection = document.querySelector("[data-native='true']");
const nativeLang = nativeSection ? nativeSection.id : "chinese";

// 所有语言区块
const sections = {
  chinese: document.getElementById("chinese"),
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
const chinese = document.querySelector("#chinese");
const english = document.querySelector("#english");

let chineseSize = 17;  // 初始中文字号
let englishSize = 19;  // 初始英文字号

function updateFontSize() {
  intro.style.fontSize = chineseSize + "px"; // intro 通常中文，可改成你要的
  
  chinese.style.fontSize = chineseSize + "px";
  english.style.fontSize = englishSize + "px";
  intro.style.fontSize = englishSize + "px";
}

plus.addEventListener("click", () => {
  chineseSize = Math.min(chineseSize + 1, 20); 
  englishSize = Math.min(englishSize + 1, 22); 
  updateFontSize();
});

minus.addEventListener("click", () => {
  chineseSize = Math.max(chineseSize - 1, 13); // 中文最小 14
  englishSize = Math.max(englishSize - 1, 15); // 英文最小 12
  updateFontSize();
});

updateFontSize();







/*

const onLabel = document.querySelectorAll('.h-label')[0];  // ON
const offLabel = document.querySelectorAll('.h-label')[1]; // OFF

// 实时监听鼠标
document.addEventListener("mousemove", (e) => {
    const onRect = onLabel.getBoundingClientRect();
    const offRect = offLabel.getBoundingClientRect();

    // 鼠标距离 ON / OFF 的水平距离
    const distToOn = Math.abs(e.clientX - (onRect.left + onRect.width / 2));
    const distToOff = Math.abs(e.clientX - (offRect.left + offRect.width / 2));

    // 根据距离计算模糊程度（越靠近 ON 越模糊）
    // 🔥 你可调最大模糊值 12 → 可改成 20/30/5 看你想多糊
    let blurStrength = Math.max(0, 12 - distToOn / 20); 

    // 越靠近 OFF 越清晰 → blur降低
    blurStrength -= Math.max(0, 8 - distToOff / 18);

    // 限制最小不为负数
    blurStrength = Math.max(0, blurStrength);

    document.body.style.filter = `blur(${blurStrength}px)`;
});

*/







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










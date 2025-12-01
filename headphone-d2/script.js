






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










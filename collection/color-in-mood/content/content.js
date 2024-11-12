const stories = document.getElementById('s');
const dropdown = document.getElementById('s-dropdown');

// 切换菜单显示状态
stories.addEventListener('click', () => {
    const isDropdownVisible = dropdown.style.display === 'block';
    dropdown.style.display = isDropdownVisible ? 'none' : 'block';
});

// 如果点击页面其他地方，关闭菜单
document.addEventListener('click', (event) => {
    if (!stories.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

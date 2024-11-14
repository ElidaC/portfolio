function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedItem = document.getElementById(data);
    var tote = document.querySelector('.Tote');

    // 判断拖拽的元素是否符合特定ID
    if (data === 'item1' || data === 'item2' || data === 'item3' || data === 'item4' || data === 'item5' || data === 'item6' || data === 'item7' || data === 'item8' || data === 'item9' || data === 'item10' || data === 'item11' || data === 'item12' || data === 'item13' || data === 'item14' || data === 'item15' || data === 'item16' || data === 'item17' || data === 'item18' || data === 'item19' || data === 'item20' || data === 'item21' || data === 'item22' || data === 'item23' || data === 'item24' || data === 'item25' || data === 'item26' || data === 'item27' || data === 'item28' || data === 'item29' || data === 'item30' || data === 'item31' || data === 'item32' || data === 'item33' || data === 'item34' || data === 'item35' || data === 'item36' || data === 'item37' || data === 'item38' || data === 'item39' || data === 'item40' || data === 'item41' || data === 'item42' || data === 'item43' || data === 'item44' || data === 'item45' || data === 'item46' || data === 'item47' || data === 'item48' || data === 'item49' || data === 'item50' || data === 'item51' || data === 'item52' || data === 'item53' || data === 'item54' || data === 'item55' || data === 'item56' || data === 'item57' || data === 'item58' || data === 'item59' || data === 'item60' || data === 'item61' || data === 'item62' || data === 'item63' || data === 'item64' || data === 'item65' || data === 'item66' || data === 'item67' || data === 'item68' || data === 'item69' || data === 'item70' || data === 'item71' || data === 'item72' || data === 'item73' || data === 'item74' ) {
        tote.appendChild(draggedItem);
        // 设置拖拽项的定位为绝对位置
        draggedItem.style.position = 'absolute';
        draggedItem.style.top = (ev.clientY - tote.getBoundingClientRect().top - draggedItem.clientHeight / 2) + 'px';
        draggedItem.style.left = (ev.clientX - tote.getBoundingClientRect().left - draggedItem.clientWidth / 2) + 'px';
    } else {
        alert("此元素无法拖放到目标区域");
    }
}
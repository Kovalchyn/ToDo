function todoColor() {
    if (onmouseover) {
        var titleColor = document.getElementById("todo");
        titleColor.style.backgroundColor = '#AF0015';
    } else {
        titleColor.style.backgroundColor = '#fff';
    }
}
// todoColor();
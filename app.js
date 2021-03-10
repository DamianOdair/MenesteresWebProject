window.onload = function () {
    document.onmousemove = function(ev) {
        var x = ev.clientX / 10;
        var y = ev.clientY / 10;
        document.body.style.backgroundPosition = x + "px " + y + "px"
    }
}


window.onload = function () {
    document.onmousemove = function(ev) {
        var x = ev.clientX / 10;
        var y = ev.clientY / 10;
        /*document.body.style.backgroundPosition = x + "px " + y + "px"*/
        document.getElementById('header__castillo--luna').style.left=`${x}px`;
        document.getElementById('header__castillo--luna').style.top=`${y}px`;
        document.getElementById('header__castillo--luna').style=`position:absolute; left:${x}px; top:${y}px;`;
    }
}


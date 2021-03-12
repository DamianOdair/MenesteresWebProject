window.onload = function () {
    document.onmousemove = function(ev) {
        var x = ev.clientX / 50 
        var y = ev.clientY / 50 
        document.getElementById('header__castillo--luna').style=`position:absolute; left:${x+10}px; top:${y+50}px;`;
        document.getElementById('header__castillo--castle').style=`position:absolute; left:${-x+200}px; bottom:${-y+-50}px;`;
        document.getElementById('header__castillo--left1').style=`position:absolute; left:${-x-10}px; top:${y+200}px;`;
        document.getElementById('header__castillo--left2').style=`position:absolute; left:${x+350}px; top:${-y+200}px;`;
        document.getElementById('header__castillo--right1').style=`position:absolute; left:${-x-20}px; top:${y+400}px;`;
        document.getElementById('header__castillo--right2').style=`position:absolute; left:${x+350}px; top:${-y+400}px;`;
    }
}
window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });

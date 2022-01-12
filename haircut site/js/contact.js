 function avis(){
    document.getElementById("devant").style.zIndex = "0";
    document.getElementById("devant").style.WebkitTransitionDuration="1s";
    document.getElementById("devant").style.webkitTransform = 'rotateY(-180deg)';
    document.getElementById("derriere").style.WebkitTransitionDuration="1s";
    document.getElementById("derriere").style.webkitTransform = 'rotateY(0deg)';
}

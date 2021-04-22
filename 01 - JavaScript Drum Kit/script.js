window.document.addEventListener("keydown",function (e) {
    let au = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    au.currentTime = 0;
    au.play();
    key.classList.add("playing");

});

const keys = document.querySelectorAll(".key");
keys.forEach(k => k.addEventListener("transitionend",removeTransition))

function removeTransition(event) {
    if(event.propertyName !== "transform") return
    console.log(event.propertyName)
    this.classList.remove("playing")
}

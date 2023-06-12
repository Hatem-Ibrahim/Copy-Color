

function copyColor(mythis) {
    let sound = document.querySelector("audio");
    let valueColor = document.querySelector(".valueColor");
    let myInput = document.querySelector("input");
    let backdroundColor = window.getComputedStyle(mythis).backgroundColor;
    myInput.type = "text";
    myInput.value = backdroundColor;
    myInput.select();
    document.execCommand("copy");
    myInput.type = "hidden";
    valueColor.innerText = `backdroundColor : ${backdroundColor}`;
    valueColor.style.backgroundColor = backdroundColor;
    sound.play();
}
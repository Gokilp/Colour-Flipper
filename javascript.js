const colortext = document.getElementById("color");
const button = document.getElementById("btn");
const wrap = document.getElementById("wrap");
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener('click', changeBackground);

function changeBackground() {
    
    let hexcolor="#";
    for (let i = 0; i < 6; i++) {
        hexcolor += randHexvalue();
    }

    wrap.style.backgroundColor = hexcolor;
    colortext.innerHTML = hexcolor;
    console.clear();

}

function randHexvalue() {
    let randomIndex = Math.floor(Math.random() * 16);
    return hex[randomIndex];

}

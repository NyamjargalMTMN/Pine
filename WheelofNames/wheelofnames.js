let body = document.querySelector("body");
let container = document.createElement("div");
let wheel = document.createElement("div");
let start = document.createElement('p');
let textarea = document.createElement('textarea');
let changeButton = document.createElement('button');

//WINNER POPUP
let popup = document.createElement('div');



let deg = 0;
const colors = ["red", "blue", "green", "yellow"];
let items = [];


//let conicValue = `conic-gradient(blue 0deg 90deg, red 90deg 180deg, green 180deg 270deg, yellow 270deg 360deg)`

container.className = "container";
wheel.className = "wheel";
start.className = "start";
textarea.className = "textarea";
changeButton.className = "changeButton";
popup.className = "popup";

body.appendChild(container);
container.appendChild(wheel);
container.appendChild(textarea);
wheel.appendChild(start);
container.appendChild(changeButton);
container.appendChild(popup);


body.style.backgroundColor = "#000";

container.style.display = "flex";
container.style.width = "100vw";
container.style.height = "100vh";
container.style.justifyContent = "space-around";
container.style.alignItems = "center";


wheel.style.justifyContent = "center";
wheel.style.alignItems = "center"
wheel.style.display = "flex";
wheel.style.width = "800px";
wheel.style.height = "800px";
wheel.style.backgroundColor = "red";
wheel.style.borderRadius = "50%";
wheel.style.position = "relative";
//wheel.style.transform = "rotate: 1440deg"

start.style.display = "flex";
start.style.justifyContent = "center"
start.style.alignItems = "center";
start.style.backgroundColor = "#fff";
start.style.width = "100px";
start.style.height = "100px";
start.style.borderRadius = "50%";
start.innerText = "start";

textarea.rows = "30";
textarea.cols = "50";
textarea.style.boxShadow = "inset 2px 2px 2px 0px #dddddd";

changeButton.innerText = 'Get-Items';

popup.style.width = "300px";
popup.style.height = "100px";
popup.backgroundColor = "green";
popup.style.position = "absolute";
popup.style.top = "0";
popup.style.left = "0";
popup.style.zIndex = "1";

function getItems(){
    let text = textarea.value;
    items = text.split("\n");
     console.log(textarea.value);
    draw();
}

function draw(){
    let result  = "";
    for (let i = 0; i < items.length; i++) {
        let colorIndex = i;
        let deg = Math.floor(360/items.length);
        if (i === items.length-1 && items.length % 4 === 1){
            colorIndex = colorIndex - colors.length * Math.floor(i/colors.length) + 1;

        } else if (colorIndex >= colors.length){
            colorIndex = colorIndex - colors.length * Math.floor(i/colors.length);
        }
        result = result + `${colors[colorIndex]}`;
        if ( i === items.length - 1){
            result = result + ` ${deg*i}deg ${deg*(i+1)}deg`;
        } else {
            result = result + ` ${deg *i}deg ${deg*(i+1)}deg,`;
        }
        console.log(result);
        wheel.style.background = `conic-gradient(${result})`;
        
    }
}




function rotateCircle(){
    let a = Math.random() * 360;
    deg = 0 + a + 1440;
    console.log(deg);
    wheel.style.transform = `rotate(${deg}deg)`;
}



wheel.onclick = rotateCircle;
changeButton.onclick = getItems;
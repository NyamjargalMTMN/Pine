let body = document.querySelector('body');
let container = document.createElement('div');
let display = document.createElement('div');
let bottom = document.createElement('div');
let textarea = document.createElement('input');

container.className = 'container';
top.className = 'display'
bottom.className = 'bottom';
textarea.className = 'textarea';

body.appendChild(container);
container.appendChild(display);
container.appendChild(bottom);
display.appendChild(textarea);
// container.appendChild(buttons);

let btn_names = ["(",")","%","AC",7,8,9,"/",4,5,6,"*",1,2,3,"-",0,".","=","+"];
const nums = [0,1,2,3,4,5,6,7,8,9];
let dd = [];
let hariu=0;


 function writeInput (value) {

    if (!nums.includes(value) ) {
        textarea.value += ` ${value} `;
    }
    else {
        textarea.value +=value;
    }
    let a = textarea.value;
    dd = a.split(' ');

    if (value === "=") {
        textarea.value = " ";


            if (dd[1] == "+"){
                console.log("nemeh")
                add();
            }
            else if (dd[1] == "-"){
               subtract();
            }
            else if (dd[1] == "*"){
               multiply();
            }
            else if (dd[1] == "/"){
               divide();
            }      
    }
    if (value == "AC"){
        clear();
    }

 }
 function add (){
            let hariu = parseInt(dd[0]) + parseInt(dd[2]);     
            textarea.value+=hariu; 
 }
 function subtract (){
    let hariu = parseInt(dd[0]) - parseInt(dd[2]);     
    textarea.value+=hariu; 
}
function multiply (){
    let hariu = parseInt(dd[0]) * parseInt(dd[2]);     
    textarea.value+=hariu; 
}

function divide (){
    let hariu = parseInt(dd[0]) / parseInt(dd[2]);     
    textarea.value+=hariu; 
}
function clear (){
    textarea.value = ""; 
}


function createButton(value){
        let button = document.createElement('button');   
        button.className = value;
        if (nums.includes(value) ) button.classList.add("customBtn");
            button.innerText = value;
            bottom.appendChild(button);  
            button.onclick = function (){
                writeInput(value);
            }


                            }

function drawElements (array){
        for (let i = 0; i < array.length; i++) {
            createButton(array[i]);     
        }
    }
drawElements(btn_names);


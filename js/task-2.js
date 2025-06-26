const boxes = document.getElementById("boxes");
const input = document.getElementById("controls-input");
const controlsBtnCreate = document.getElementById("controls__btn-create")
const controlsBtnDelete = document.getElementById("controls__btn-delete")

let widthBox = 30;
let heightBox = 30;

function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `${r}, ${g}, ${b}`;
    return  color
}

function onCreateBoxes(){
    const amount = input.value;
    if( Number(amount) < input.min || Number(amount) > input.max){
        alert(`Ведіть число в діапазоні від ${input.min} до ${input.max}`);
        return;
    }
    console.log(amount);
    for(let i = 1; i <= amount; i++){
        boxes.insertAdjacentHTML("beforeend", `<div style="width: ${widthBox}px; height:${heightBox}px; background-color: rgb(${randomRGB()});"></div>`);
        widthBox += 10;
        heightBox += 10;
    }
    
}


function onDestroyBoxes(){
    boxes.innerHTML = '';
}


function onUpdateBoxes(event){
    console.log(event.code);
    if(event.code === "Enter"){
        onCreateBoxes()
    } else  if (event.code === "Delete"){
        onDestroyBoxes()
    }
}


controlsBtnCreate.addEventListener("click", onCreateBoxes);
controlsBtnDelete.addEventListener("click", onDestroyBoxes);
window.addEventListener("keydown", onUpdateBoxes)
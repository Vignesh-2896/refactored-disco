const container = document.querySelector("#container");
var color_type = "yellow";
function createGrids(size) {

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridArea = size * size;

    for(let i=1;i<=gridArea;i++){
        let div = document.createElement("div");
        div.setAttribute("id","grid");
        div.addEventListener("mouseover",change_color);
        container.appendChild(div);
    }
};

function reset(){
    while(container.firstChild){ container.removeChild(container.firstChild)};
    new_size = prompt("Enter new size of grids");
    createGrids(new_size);
};

function erase(){
    let gridItems = document.querySelectorAll("#grid");
    gridItems.forEach(gridItems => gridItems.style.backgroundColor = "");
}

function change_color(){

    switch(color_type){
        case 'random':          
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);       
            this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
            break;

        case 'yellow':
            this.style.backgroundColor = "yellow"
            break;

        case 'rainbow':
            colorList = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];
            randomColorPos = Math.floor(Math.random() * colorList.length);
            this.style.backgroundColor = colorList[randomColorPos];
            break;

        case 'grayscale':
            colorList = ['#BEBEBE', '#A0A0A0', '#D8D8D8', '#505050'];
            randomColorPos = Math.floor(Math.random() * colorList.length);
            this.style.backgroundColor = colorList[randomColorPos];
            break;
    }

   
};

function set_colors(color_option){
    erase();
    switch(color_option.value){

        case 'rainbow':
            color_type = "rainbow";
            break;

        case 'grayscale':
            color_type = "grayscale";
            break;

        case 'random':
            color_type = "random";
            break;

        default:
            color_type = "";
            break;
    }
}

window.onload = createGrids(10);
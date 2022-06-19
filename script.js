
const container= document.querySelector('.container');

const buttons = document.createElement('div');
buttons.className = 'buttons';
container.appendChild(buttons);

const gridContainer = document.createElement('div');
gridContainer.className='gridContainer';
container.appendChild(gridContainer);

//buttons
const clear = document.createElement('button');
clear.className= 'clear';
clear.textContent = 'Clear';
buttons.appendChild(clear);

const reverse = document.createElement('button');
reverse.className= 'reverse';
reverse.textContent = 'Revese';
buttons.appendChild(reverse);

//functions
function creatCells(userInput=16) {
   
     userInput = prompt('please write number between 16 - 90', '16')
    while (userInput > 90 || userInput < 16){
    alert ('please choose a number between 16 - 90')
    userInput = prompt('please write number between 16 - 90', '16')
    }
   gridContainer.style.gridTemplateRows= `repeat(${userInput},1fr)`;
   gridContainer.style.gridTemplateColumns= `repeat(${userInput},1fr)`;
    for (let i = 0; i < userInput*userInput; i++) {
        let gridCells = document.createElement('div')
        gridCells.className='gridCells'
        gridContainer.appendChild(gridCells)
         }
    }
  
creatCells()

clear.addEventListener('click',clearSketch)
function clearSketch() {
        pixels.forEach(pixel => pixel.classList.remove('colored'))
    }
reverse.addEventListener('click', reversecolor)
function reversecolor() {
        pixels.forEach(pixel => {
            (pixel.className.includes('colored'))? pixel.classList.remove('colored')
            :pixel.classList.add('colored')
        })
    }

const pixels = document.querySelectorAll('.gridCells');
pixels.forEach(pixel => pixel.addEventListener('mouseover' , (e) => {
   
    e.target.classList.add('colored')
   })
)
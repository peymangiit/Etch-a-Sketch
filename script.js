
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
const color = document.createElement('button')
color.className = 'colorPalat';
color.textContent = 'Color'
buttons.appendChild(color);
const reverse = document.createElement('button');
reverse.className= 'reverse';
reverse.textContent = 'Revese';
buttons.appendChild(reverse);

function creatCells(gridnum=16) {
   gridContainer.style.gridTemplateRows= `repeat(${gridnum},1fr)`;
   gridContainer.style.gridTemplateColumns= `repeat(${gridnum},1fr)`;
    for (let i = 0; i < gridnum*gridnum; i++) {
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
 
const pixels = document.querySelectorAll('.gridCells')
pixels.forEach(pixel => pixel.addEventListener('mouseover' , (e) => {
   
    e.target.classList.add('colored')
   })
)
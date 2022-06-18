
const container= document.querySelector('.container');
const gridContainer = document.createElement('div');
gridContainer.className='gridContainer';
container.appendChild(gridContainer);




function creatCells(gridnum=16*16) {
    const percent = 100/Math.sqrt(gridnum);
    for (let i = 0; i < gridnum; i++) {
        const gridCells = document.createElement('div');
        gridCells.className = 'gridCells';

        //gridCells.style.cssText = 'flex:1 1 1.56%;'
        gridContainer.appendChild(gridCells)
        
    }
  
}
// function coloring(params) {
  
// }
creatCells()
 
const pixels = document.querySelectorAll('.gridCells')
pixels.forEach(pixel => pixel.addEventListener('mouseover' , (e) => {
   
    e.target.classList.toggle('colored')
   })
)
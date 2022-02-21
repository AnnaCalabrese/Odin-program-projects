const result = document.querySelector(".output");
const btnPen = document.getElementById("btn-pen")
const btnReset = document.getElementById("btn-reset")


function makeGrid() {



  for (let i = 16; i >= 1; i--) {
    const p = document.createElement("div");
    p.textContent += `\n`;
    p.classList.add("square");
    result.appendChild(p);


    

    btnReset.addEventListener("click", ()=>{
    p.style.backgroundColor = "white";
    })

    p.addEventListener("mouseover", ()=>{
        p.style.backgroundColor = "#161616"
        })
  }

  
}

for (let z = 0; z < 16; z++) {
  makeGrid();
}

































/*
const row = document.createElement("div");
console.log(container)

const square = document.createElement("div");
for(let x = 0; x <= 16;x++){
    container.appendChild(row.cloneNode(true))
    row.classList.add("row")


    for(let i=0; i<= 2; i++) {
 //   row.appendChild(square.cloneNode(true));
        row.appendChild(square)
     square.classList.add("square")
     
    }

}

let cell;
let target; 


//makes cells(divs)

function makeCell (numCell) {
    for (let c = 0; c < numCell; c++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

//cells within each row. Example makeGrid(4,3), loop would run 4 times makeing  3 cells/colums per row each loop


function makeGrid (numRow, numCol) {
    container.style.setProperty('--numRows', numRow); 
    container.style.setProperty('--numCols', numCol); 
    for (let r = 0; r < numRow; r++) {
        makeCell(numCol);
    }
}


*/

/*
var n=4;//take grid column value as you want

for(var i = 0; i < n; i++) {
    document.body.innerHTML+='<div class="row">';

    for(j = 0; j < n; j++) {
        document.body.innerHTML+='<div class="gridsquare">' + (i*5+j+1) + '</div>';
    }

    document.body.innerHTML+='</div>';
}

*/
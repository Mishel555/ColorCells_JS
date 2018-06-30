window.onload = function() {

  let drawBtn = document.getElementById('drawBtn');
  let colorizeBtn = document.getElementById('colorizeBtn');
  let resetBtn = document.getElementById('resetBtn');
  let cellField =document.getElementById('cellField');
  let inpValue = document.getElementById('cellsCount');

  // Interval watchers
  let paintItem = 0, printCells = 0;

  //////////////////set Button functionality #Part

  function setControlPanel() {
      drawBtn.addEventListener('click',drawCells);
      colorizeBtn.addEventListener('click',colorizeCells);
      resetBtn.addEventListener('click',resetFields);
      colorizeBtn.setAttribute("disabled", "disabled");
      resetBtn.setAttribute("disabled", "disabled");
  }
  setControlPanel()

//////////////////Draw Button Part#///////////////////////////////

function drawCells() {

      clearInterval(printCells);
  	  colorizeBtn.removeAttribute("disabled");
  	  resetBtn.removeAttribute("disabled");
      let cellsCount = inpValue.value;
      cellField.innerHTML = '';
      if(isNaN(parseInt(Number(cellsCount)))){
        alert('Enter Number');
        resetFields();
        return
      }
      if (cellsCount<4 || cellsCount>100) {
        alert("Notice: You can't enter Number less than 4 and more than 100");
        resetFields();
        return
      }

      let itemTurn = 0;
      printCells = setInterval(function() {
          let divs = document.createElement('div');
          divs.classList.add('addedCell');
          let red = Math.floor(Math.random()*256);
          let green = Math.floor(Math.random()*256);
          let blue = Math.floor(Math.random()*256);
          divs.style.backgroundColor=`rgb(${red},${green},${blue})`;
          cellField.appendChild(divs);
          itemTurn++;
          if (itemTurn==cellsCount) {
            clearInterval(printCells);
            console.log('ok');
          }
      },800)
    }


//////////////////Colorize Button Part#///////////////////////////////

function colorizeCells() {
    clearInterval(paintItem);
    let colorizedItem = Array.from(document.getElementsByClassName('addedCell'));
    let index = 0;
    paintItem =  setInterval(function () {
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        colorizedItem[index].style.backgroundColor=`rgb(${red},${green},${blue})`;
        index++
        if (index==colorizedItem.length) {
          clearInterval(paintItem);
          console.log('o#k');
        }
      },800);
}

//////////////////Reset Button Part#///////////////////////////////

function resetFields() {
	clearInterval(paintItem);
	clearInterval(printCells);
    document.getElementById('cellsCount').value='';
    cellField.innerHTML='';
    colorizeBtn.setAttribute("disabled", "disabled");
    resetBtn.setAttribute("disabled", "disabled");
}

}

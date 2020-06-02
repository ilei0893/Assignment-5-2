let cells = 1;
let mycolor ='blue';
let iscolor = false;

function NewRows() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    for (let i = 0; i < cells; i++) {
      let cell = document.createElement("td");
      helper(cell);
      row.appendChild(cell);

    }
  }
  function removeRow() {
    let rows = document.getElementsByClassName("row");
    tr = [...rows]
    if (tr.length == 0) {
        alert('there is nothing can remove');
      return this
    }
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
    if (tr.length == 1) {
      cells = 1
    }
}

function NewCols(){
  let rows = document.getElementsByClassName("row");
  tr = [...rows];
  for (let i = 0; i < tr.length; i++) {
    let cell = document.createElement("td");
    helper(cell);
    tr[i].appendChild(cell);
  }
  cells++;
}

 function removecol() {
    if (cells == 1) {
        alert('there is nothing can remove');
      return this;
    }
    cells--;
    let rows = document.getElementsByClassName("row");
    tr = [...rows];
    for (let i = 0; i < tr.length; i++) {
      tr[i].removeChild(tr[i].lastChild);
    }
  }

  const nowcolor = (color) => {
    mycolor = color;
  };

  function helper(cell) {
    cell.classList.add("uncolor");
    cell.addEventListener("click", changeColor);
  
  }

  function changeColor() {
    this.style.backgroundColor = mycolor;
    this.classList.remove("uncolor");
  }


  function colorAllCells() {
    let cells = document.getElementsByTagName("td");
    let allCells = [...cells];
    allCells.forEach((cell) => {
      cell.style.backgroundColor = mycolor;
      cell.classList.remove("uncolor");
    });
  }

  function unfilledCells() {
    let cells = document.getElementsByTagName("td");
    let allCells = [...cells];
    let unfilledCells = allCells.filter((cell) => {
      return cell.classList.contains("uncolor");
    });
  
    unfilledCells.forEach((cell) => {
      cell.style.backgroundColor = mycolor;
      cell.classList.remove("uncolor");
    });
  }
  

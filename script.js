let cells = 1;
function NewRows() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    for (let i = 0; i < cells; i++) {
      let cell = document.createElement("td");
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
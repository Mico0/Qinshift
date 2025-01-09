let numRows = parseInt(prompt("Enter the number of rows for the table: "));
let numCols = parseInt(prompt("Enter the number of columns for the table: "));

let tableResult = document.getElementById("tableResult");

let tableHTML = "";

for (let i = 0; i < numRows; i++) {
  tableHTML += "<tr>";
  for (let j = 0; j < numCols; j++) {
    tableHTML += `<td>Row ${i + 1}, Column ${j + 1}</td>`;
  }
  tableHTML += "</tr>";
}

console.log(tableHTML);
tableResult.innerHTML = tableHTML;

function addReminder() {
  let color = document.getElementById("color").value;
  let title = document.getElementById("title").value;
  let priority = document.getElementById("priority").value;
  let description = document.getElementById("description").value;

  let reminder = {
    color: color,
    title: title,
    priority: priority,
    description: description,
  };
  return reminder;
}

let addBtn = document.getElementById("addReminder");

addBtn.addEventListener("click", addReminder);

let showReminder = document.getElementById("showReminders");

function createTable() {
  let table = document.getElementById("resultTable");
  table.innerHTML += `<thead><tr><td>Title</td><td>Priority</td><td>Description</td></tr></thead>
`;
  table.innerHTML += `<tbody>`;
  table.innerHTML += `<tr><td> </td>   </tr>`;
  table.innerHTML += `</tbody`;
}

showReminder.addEventListener("click", createTable);

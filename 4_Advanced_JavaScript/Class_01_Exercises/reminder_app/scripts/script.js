let allReminders = [];
let table = document.getElementById("resultTable");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

function addReminder() {
  let color = document.getElementById("color").value;
  let title = document.getElementById("title").value;
  let priority = document.getElementById("priority").value;
  let description = document.getElementById("description").value;

  if (!color || !title || !priority) {
    alert("enter all of the values");
  } else {
    let reminder = {
      title: title,
      priority: priority,
      description: description,
      color: color,
    };

    allReminders.push(reminder);
  }
  console.log(allReminders);
  return allReminders;
}

let addBtn = document.getElementById("addReminder");

addBtn.addEventListener("click", addReminder);

let showReminder = document.getElementById("showReminders");

function createTable() {
  let headings = ["Title", "Priority", "Description"];

  let headerRow = document.createElement("tr");

  for (let heading of headings) {
    let th = document.createElement("th");
    th.textContent = heading;
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);
  table.appendChild(tbody);
}

createTable();

function showAllReminders(reminders) {
  let keys = ["title", "priority", "description"];

  for (let reminder of reminders) {
    let row = document.createElement("tr");
    for (let key of keys) {
      let td = document.createElement("td");
      td.textContent = reminder[key];
      console.log(reminder[key]);
      td.style.color = reminder["color"];
      row.appendChild(td);
    }

    tbody.appendChild(row);
  }
}

showReminder.addEventListener("click", function () {
  showAllReminders(allReminders);
});

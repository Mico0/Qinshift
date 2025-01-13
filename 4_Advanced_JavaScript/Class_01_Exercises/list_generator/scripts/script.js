let btn = document.getElementById("btn");

function generateList() {
  let names = ["Milan", "Trajan", "Rade", "Martin", "Sedat"];
  let list = document.getElementById("list");

  for (let name of names) {
    list.innerHTML += `<li>${name}</li>`;
  }
}

btn.addEventListener("click", generateList);

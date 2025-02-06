const url =
  "https://raw.githubusercontent.com/Mico0/Qinshift/refs/heads/main/0_Homeworks/AdvancedJavaScript_homeworks/Homework_N_EndProject/Homework/cars.json";

const typeSelect = document.getElementById("typeSelect");
const brandSelect = document.getElementById("brandSelect");
const gasType = document.getElementById("gasSelect");
const colorSelect = document.getElementById("colorSelect");
const search = document.getElementById("searchButton");
const tableContainer = document.getElementById("tableContainer");
const tbody = document.getElementsByTagName("tbody")[0];

async function getCars(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    generateTable(data);
    // console.log(data);
    search.addEventListener("click", async () => {
      const warningP = document.getElementById("warningMessage");
      const warning = document.getElementById("warning");
      const alertDiv = document.getElementById("alertDiv");

      selectedType = typeSelect.value.toLowerCase();
      selectedBrand = brandSelect.value.toLowerCase();
      if (
        typeSelect.value === "Car type" &&
        brandSelect.value === "Car brand"
      ) {
        warning.style.display = "flex";
        warningP.innerText =
          "You must select a car type or a car brand before searching!";
        return;
      }
      let filteredCars = data;
      if (selectedType !== "car type") {
        filteredCars = filteredCars.filter(
          (x) => x.type.toLowerCase() === selectedType
        );
        tbody.innerHTML = "";
        generateTable(filteredCars);
        alertDiv.style.display = "none";
      }
      if (selectedBrand !== "car brand") {
        filteredCars = filteredCars.filter(
          (x) => x.brand.toLowerCase() === selectedBrand
        );
        tbody.innerHTML = "";
        generateTable(filteredCars);
        alertDiv.style.display = "none";
      }

      console.log(filteredCars);
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fillInputs() {
  typeSelect.innerHTML += `<option selected value="Car type">Car Type:</option>`;
  brandSelect.innerHTML += `<option selected value="Car brand">Car Brand:</option>`;
  gasType.innerHTML += `<option selected value="Gas type">Gas Type:</option>`;
  colorSelect.innerHTML += `<option selected value="Color">Golor:</option>`;
  let types = [];
  let brands = [];
  let gas = [];
  let colors = [];
  let data = await getCars(url);
  for (let car of data) {
    if (!types.includes(car.type)) {
      types.push(car.type);
    }
    if (!brands.includes(car.brand)) {
      brands.push(car.brand);
    }
    if (!gas.includes(car.gasType)) {
      gas.push(car.gasType);
    }
    if (!colors.includes(car.color)) {
      colors.push(car.color);
    }
  }

  for (let type of types) {
    typeSelect.innerHTML += `<option value="${type.toLowerCase()}">${type}</option>`;
  }
  for (let brand of brands) {
    brandSelect.innerHTML += `<option value="${brand.toLowerCase()}">${brand}</option>`;
  }
  gas.forEach((el) => {
    gasType.innerHTML += `<option value="${el.toLowerCase()}">${el}</option>`;
  });
  colors.forEach((color) => {
    colorSelect.innerHTML += `<option value="${color.toLowerCase()}">${color}</option>`;
  });
}

fillInputs();

function generateTable(data) {
  for (car of data) {
    tbody.innerHTML += `
      <tr>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.type}</td>
        <td>${car.color}</td>
        <td>${car.doors}</td>
        <td>${car.gasType}</td>
        <td>${car.horsepower}</td>
      </tr>
        `;
  }
}

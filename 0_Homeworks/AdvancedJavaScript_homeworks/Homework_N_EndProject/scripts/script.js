const url =
  "https://raw.githubusercontent.com/Mico0/Qinshift/refs/heads/main/0_Homeworks/AdvancedJavaScript_homeworks/Homework_N_EndProject/Homework/cars.json";

const typeSelect = document.getElementById("typeSelect");
const brandSelect = document.getElementById("brandSelect");
const gasType = document.getElementById("gasSelect");
const colorSelect = document.getElementById("colorSelect");
const anyFilter = document.getElementById("any");
const oldFilter = document.getElementById("old");
const newFilter = document.getElementById("new");
const horsepowerFilter = document.getElementById("horsePower");
const doorFilter = document.getElementById("doorInput");
const modelFilter = document.getElementById("inputModel");
const search = document.getElementById("searchButton");
const reset = document.getElementById("resetButton");
const tableContainer = document.getElementById("tableContainer");
const tbody = document.getElementsByTagName("tbody")[0];
const alertDiv = document.getElementById("alertDiv");
const warningP = document.getElementById("warningMessage");
const warning = document.getElementById("warning");

async function getCars(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    generateTable(data);
    // console.log(data);
    search.addEventListener("click", () => {
      filterTable(data);
      // console.log(filteredCars);
    });
    reset.addEventListener("click", () => {
      resetTable(data);
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fillInputs() {
  try {
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
  } catch (error) {
    console.log(error);
  }
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

function filterTable(data) {
  try {
    let selectedModel = "";
    let selectedColor = "";
    let selectedGas = "";
    let doorNumber = 0;
    let horsepowerNumber = 0;
    let selectedType = typeSelect.value.toLowerCase();
    let selectedBrand = brandSelect.value.toLowerCase();

    if (modelFilter.value.toLowerCase() !== "") {
      selectedModel = modelFilter.value.toLowerCase();
      // console.log("Selected model:  ", selectedModel);
    }
    if (colorSelect.value.toLowerCase() !== "color") {
      selectedColor = colorSelect.value.toLowerCase();
      // console.log("Color: ", selectedColor);
    }
    if (gasType.value.toLowerCase() !== "gas type") {
      selectedGas = gasType.value.toLowerCase();
      // console.log("Gas: ", selectedGas);
    }
    // console.log(typeof doorFilter.value);
    if (doorFilter.value !== "") {
      doorNumber = parseInt(doorFilter.value);
    } else {
      doorNumber = 0;
    }
    if (horsepowerFilter.value !== "") {
      horsepowerNumber = parseInt(horsepowerFilter.value);
    } else {
      horsepowerNumber = 0;
    }

    const noFiltersSelected =
      selectedType === "car type" &&
      selectedBrand === "car brand" &&
      !selectedModel &&
      !selectedColor &&
      !selectedGas &&
      doorNumber === 0 &&
      horsepowerNumber === 0;

    if (noFiltersSelected) {
      warning.style.display = "flex";
      warningP.innerText =
        "You must select a car type or a car brand before searching!";
      return;
    } else {
      let filteredCars = data;
      if (selectedType !== "car type") {
        filteredCars = filteredCars.filter(
          (x) => x.type.toLowerCase() === selectedType
        );
      }
      if (selectedBrand !== "car brand") {
        filteredCars = filteredCars.filter(
          (x) => x.brand.toLowerCase() === selectedBrand
        );
      }
      if (selectedModel) {
        filteredCars = filteredCars.filter((x) =>
          x.model.toLowerCase().includes(selectedModel)
        );
      }
      if (selectedColor) {
        filteredCars = filteredCars.filter(
          (x) => x.color.toLowerCase() === selectedColor
        );
      }
      if (selectedGas) {
        filteredCars = filteredCars.filter(
          (x) => x.gasType.toLowerCase() === selectedGas
        );
      }
      if (doorNumber && parseInt(doorNumber) <= 5) {
        filteredCars = filteredCars.filter(
          (x) => x.doors === parseInt(doorNumber)
        );
      }
      if (horsepowerNumber) {
        filteredCars = filteredCars.filter(
          (x) => x.horsepower === parseInt(horsepowerNumber)
        );
      }
      // console.log(anyFilter.checked);
      if (anyFilter.checked === true) {
        filteredCars = filteredCars.filter(
          (x) => x.isNew === true || x.isNew === false
        );
      } else if (newFilter.checked === true) {
        filteredCars = filteredCars.filter((x) => x.isNew === true);
      } else if (oldFilter.checked === true) {
        filteredCars = filteredCars.filter((x) => x.isNew === false);
      }
      tbody.innerHTML = "";
      alertDiv.style.display = "none";
      generateTable(filteredCars);
    }
  } catch (error) {
    console.log(error);
  }
}

function resetTable(data) {
  try {
    tbody.innerHTML = "";
    generateTable(data);
    typeSelect.selectedIndex = 0;
    brandSelect.selectedIndex = 0;
    gasType.selectedIndex = 0;
    colorSelect.selectedIndex = 0;
    anyFilter.checked = true;
    oldFilter.checked = false;
    newFilter.checked = false;
    horsepowerFilter.value = "";
    doorFilter.value = "";
    modelFilter.value = "";
    alertDiv.style.display = "none";
  } catch (error) {
    console.log(error);
  }
}

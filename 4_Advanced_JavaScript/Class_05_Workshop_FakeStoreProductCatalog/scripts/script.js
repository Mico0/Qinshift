const urls = {
  category: "https://fakestoreapi.com/products/categories",
  allProducts: "https://fakestoreapi.com/products",
  productsByCategory: "https://fakestoreapi.com/products/category/",
};

let productDiv = document.getElementById("products");
let categoryHeader = document.getElementById("category-heading");
let filters = document.getElementById("filters");
const select = document.getElementById("pageSize");
const pages = document.getElementById("pages");

let currentPage = document.getElementById("currentPage");
let totalPages = document.getElementById("totalPages");
currentPage.innerText = 0;
totalPages.innerText = 0;

let pageSizes = [2, 4, 6];
let pageSize = 4;
let currentPageCount = 0;
let totalPagesCount = 0;

function getAllCategories() {
  fetch(urls.category)
    .then((response) => response.json())
    .then((data) => {
      showCategoriesDropDown(data);
    })
    .catch((error) => console.log(error));
}

function getAllProducts(page, pageSize) {
  fetch(urls.allProducts)
    .then((res) => res.json())
    .then((products) => {
      productLength = products.length;

      let slicedProducts = products.splice(page * pageSize, pageSize);
      totalPagesCount = Math.ceil(productLength / pageSize);

      totalPages.innerText = totalPagesCount;

      showCategoryProducts(slicedProducts);
    })
    .catch((error) => console.log(error));
}

function getProductsByCategory(category, page, pageSize) {
  fetch(`${urls.productsByCategory}${category}`)
    .then((res) => res.json())
    .then((json) => {
      productLength = json.length;
      let splicedProducts = json.splice(page * pageSize, pageSize);
      totalPagesCount = Math.ceil(productLength / pageSize);
      totalPages.innerText = totalPagesCount;
      // console.log(json);
      showCategoryProducts(splicedProducts);
    })
    .catch((error) => console.log(error));
}

function getCategoryHelper() {
  if (categoryHeader.innerText.toLowerCase() === "all products") {
    return getAllProducts(currentPageCount, pageSize);
  } else {
    return getProductsByCategory(
      categoryHeader.innerText.toLowerCase(),
      currentPageCount,
      pageSize
    );
  }
}

function generateDropdown() {
  for (let page of pageSizes) {
    if (page === pageSize) {
      select.innerHTML += `<option selected value="${page}">${page}</option>`;
    } else {
      select.innerHTML += `<option value="${page}">${page}</option>`;
    }
  }
  select.style.display = "block";
  pages.style.display = "flex";
}

function generateButtons() {
  const previous = document.createElement("button");
  const next = document.createElement("button");

  previous.innerText = "Previous";
  previous.id = "previousBtn";
  previous.className += "btn btn-secondary";

  next.innerText = "Next";
  next.id = "nextBtn";
  next.className += "btn btn-secondary";

  pages.appendChild(previous);
  pages.appendChild(next);
}

function addToCartEventListeners() {
  let btns = document.getElementsByClassName("cart");
  for (let btn of btns) {
    btn.addEventListener("click", (event) => {
      console.log(event.target);
    });
  }
}

// getAllProducts();

getAllCategories();
generateDropdown();
generateButtons();

function showCategoriesDropDown(data) {
  let btn = `<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>Categories</b> </button>`;
  let ul = ` <ul class="dropdown-menu">`;
  for (let category of data) {
    let li = `<li><button class="dropdown-item" value="${category}">${category}</button></li>`;
    ul += li;
  }
  ul += "</ul>";
  let html = `<div class="dropdown">
    ${btn} ${ul}
  </div>`;
  document.getElementById("category-filter").innerHTML = html;
}

function showCategoryProducts(data) {
  let html = "";
  for (product of data) {
    html += `<div class="card" style="">`;
    let card = `<div class="card-body">`;
    card += `
            <img src="${product.image}" class="card-img-top" alt="...">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.price}<b>$</b></p>
            <a href="#"  class="btn btn-primary cart" data-product-id="${product.id}">Add to cart</a>
    `;
    card += `</div>`;
    html += `${card}`;
    html += `</div>`;
  }

  //   console.log(html);
  productDiv.innerHTML = html;
  addToCartEventListeners();
}

document.getElementById("filters").addEventListener("click", (event) => {
  if (
    event.target.tagName === "BUTTON" &&
    event.target.className === "dropdown-item"
  ) {
    // console.log(event.target.value);
    categoryHeader.innerText = event.target.value;
    getProductsByCategory(event.target.value, currentPageCount, pageSize);
  }
});

document.getElementById("products-nav").addEventListener("click", () => {
  categoryHeader.innerText = "All products";
  filters.style.display = "block";

  getAllProducts(0, pageSize);
  currentPageCount = 0;
  currentPage.innerText = currentPageCount + 1;
});

select.addEventListener("change", (e) => {
  if (e.target.value) {
    pageSize = e.target.value;
  }
  getCategoryHelper();
});

pages.addEventListener("click", (event) => {
  if (event.target.id === "nextBtn") {
    if (currentPageCount + 1 === totalPagesCount || totalPagesCount === 0) {
      return;
    } else {
      ++currentPageCount;
      console.log(totalPagesCount);
      getCategoryHelper();
      // console.log("Current page: ", currentPageCount);
      currentPage.innerText = currentPageCount + 1;
    }
  } else if (event.target.id === "previousBtn") {
    if (currentPageCount === 0) {
      return;
    } else {
      currentPageCount -= 1;
      getCategoryHelper();
      console.log("Current page: ", currentPageCount);
      currentPage.innerText = currentPageCount + 1;
    }
  }
});

//TODO: Get products by category with number filters

const urls = {
  category: "https://fakestoreapi.com/products/categories",
  allProducts: "https://fakestoreapi.com/products",
  productsByCategory: "https://fakestoreapi.com/products/category/",
};
let productDiv = document.getElementById("products");
let categoryHeader = document.getElementById("category-heading");
let filters = document.getElementById("filters");

function getAllCategories() {
  fetch(urls.category)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showCategoriesDropDown(data);
    })
    .catch((error) => console.log(error));
}

function getAllProducts() {
  fetch(urls.allProducts)
    .then((res) => res.json())
    .then((products) => {
      console.log(products);
      showCategoryProducts(products);
    })
    .catch((error) => console.log(error));
}

function getProductsByCategory(category) {
  fetch(`${urls.productsByCategory}${category}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      showCategoryProducts(json);
    })
    .catch((error) => console.log(error));
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

function showCategoriesDropDown(data) {
  let btn = `<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories </button>`;
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
  let html = `<div class="card" style="width: 100%;">`;
  for (product of data) {
    let card = `<div class="card-body">`;
    card += `
            <img src="${product.image}" class="card-img-top" height="300px" alt="...">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.price} $</p>
            <a href="#"  class="btn btn-primary cart" data-product-id="${product.id}">Add to cart</a>
    `;
    card += `</div>`;
    html += `${card}`;
  }
  html += `</div>`;
  //   console.log(html);
  productDiv.innerHTML = html;
  addToCartEventListeners();
}

document.getElementById("filters").addEventListener("click", (event) => {
  if (
    event.target.tagName === "BUTTON" &&
    event.target.className === "dropdown-item"
  ) {
    // console.log(event.target);
    categoryHeader.innerText = event.target.value;
    getProductsByCategory(event.target.value);
  }
});

document.getElementById("products-nav").addEventListener("click", () => {
  categoryHeader.innerText = "All products";
  filters.style.display = "block";
  getAllProducts();
});

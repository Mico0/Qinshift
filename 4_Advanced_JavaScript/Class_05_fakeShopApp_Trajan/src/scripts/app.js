import ProductComponent from "../components/product-component.js";
import cartComponent from "../components/cart-component.js";

const fakeShop = (function () {
  // GLOBAL VARIABLES
  const navigationIds = {
    home: "home",
    products: "browse-products",
    cart: "browse-cart",
  };
  const productComponent = new ProductComponent();

  return function init() {
    addNavigationEEventListeners();
  };

  function addNavigationEEventListeners() {
    // Home page
    document
      .getElementById(navigationIds.home)
      .addEventListener("click", function () {
        document.getElementById("shop").style.display = "none";
        document.getElementById("cart").style.display = "none";
      });
    //Products
    document
      .getElementById(navigationIds.products)
      .addEventListener("click", function () {
        document.getElementById("shop").style.display = "block";
        document.getElementById("cart").style.display = "none";
        productComponent.init();
        // getProductByCategoryId(currentlySelectedCategoryId);
        // show home page
      });
    // Cart
    document
      .getElementById(navigationIds.cart)
      .addEventListener("click", function () {
        document.getElementById("cart").style.display = "block";
        document.getElementById("shop").style.display = "none";
        console.log("Cart");
        cartComponent.showProducts();
      });
  }
})();

fakeShop();

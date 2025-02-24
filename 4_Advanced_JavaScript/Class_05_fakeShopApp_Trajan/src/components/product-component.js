import ProductService from "../services/product-service.js";
import HTMLHelpers from "../helpers/html-helpers.js";
import { categoryService } from "../services/category-service.js";
import cartComponent from "./cart-component.js";

export default class ProductComponent {
  constructor() {
    this.currentlySelectedCategoryId = 0;
    this.productService = new ProductService();
    this.defaultPageSize = 4;
    this.pageSizeValues = [4, 8];

    this.page = 1;
    this.pageSize = this.defaultPageSize;
    this.totalPages = 0;
  }

  init() {
    this.setSelectListWithCategories();
    this.setPageSizeSelection();
    this.getProductByCategoryId(
      this.currentlySelectedCategoryId,
      this.page,
      this.pageSize
    );
    this.addPreviousNextButtonEventListeners();
  }

  setSelectListWithCategories() {
    let selectList = document.getElementById("categories");
    categoryService.getCategories().then((response) => {
      for (const category of response) {
        selectList.append(
          HTMLHelpers.createOptionElement(category.name, category.id)
        );
      }

      selectList.addEventListener("change", (e) => {
        this.currentlySelectedCategoryId = e.target.value;
        const categoryTitle =
          e.target[e.target.selectedIndex].getAttribute("name");
        HTMLHelpers.changeTextInElement(
          document.getElementById("category-title"),
          categoryTitle
        );
        this.getProductByCategoryId(
          this.currentlySelectedCategoryId,
          this.page,
          this.pageSize
        );
      });
    });
  }

  async getProductByCategoryId(categoryId, page, pageSize) {
    const { products, total } =
      await this.productService.getProductByCategoryId(
        categoryId,
        page,
        pageSize
      );
    console.log("Products", products);
    this.totalPages = total;
    let html = "";
    for (const product of products) {
      html += HTMLHelpers.createCardElement(
        product.id,
        product.title,
        product.desc,
        product.price,
        product.image
      );
    }
    document.getElementById("products").innerHTML = html;

    this.addEventListenersToCards();
  }

  setPageSizeSelection() {
    const selectList = document.getElementById("page-sizes");
    selectList.innerHTML = "";
    for (const value of this.pageSizeValues) {
      selectList.appendChild(
        HTMLHelpers.createOptionElement(
          value,
          value,
          value === this.defaultPageSize
        )
      );
    }

    selectList.addEventListener("change", (e) => {
      this.pageSize = Number(e.target.value);
      console.log(this.pageSize);
      this.getProductByCategoryId(
        this.currentlySelectedCategoryId,
        this.page,
        this.pageSize
      );
    });
  }

  addPreviousNextButtonEventListeners() {
    document.getElementById("prev").disabled = this.hasPreviousPage(this.page);
    document.getElementById("next").disabled = this.hasNextPage(
      this.totalPages,
      this.page,
      this.pageSize
    );

    console.log("Called");
    document.getElementById("prev").addEventListener("click", () => {
      console.log("prev");
      this.page -= 1;
      console.log(this.page, this.pageSize);
      this.getProductByCategoryId(
        this.currentlySelectedCategoryId,
        this.page,
        this.pageSize
      );
      document.getElementById("next").disabled = this.hasNextPage(
        this.totalPages,
        this.page,
        this.pageSize
      );
      document.getElementById("prev").disabled = this.hasPreviousPage(
        this.page
      );
    });

    document.getElementById("next").addEventListener("click", () => {
      console.log("next");
      this.page += 1;
      this.getProductByCategoryId(
        this.currentlySelectedCategoryId,
        this.page,
        this.pageSize
      );
      document.getElementById("prev").disabled = this.hasPreviousPage(
        this.page
      );
      document.getElementById("next").disabled = this.hasNextPage(
        this.totalPages,
        this.page,
        this.pageSize
      );
    });
  }

  hasPreviousPage(page) {
    return page === 1;
  }

  hasNextPage(totalItems, page, pageSize) {
    const maxPages = Math.ceil(totalItems / pageSize);
    return page === maxPages;
  }

  addEventListenersToCards() {
    document.querySelectorAll(".add-to-cart").forEach((element) => {
      element.addEventListener("click", (e) => {
        console.log(e.target);
        cartComponent.addToCart(+e.target.value);
      });
    });
  }
}

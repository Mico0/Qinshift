import BandService from "../services/band-service.js";
import BandComponent from "./band-component.js";
import HTMLHelpers from "../helpers/html-helpers.js";

export default class NavigationComponent {
  constructor() {
    this.bandService = new BandService();
    this.bandComponent = new BandComponent();
    this.page = 1;
  }
  createNavigation() {
    this.bandService.getAllBands().then((response) => {
      const mainContainer = document.getElementById("mainContainer");

      mainContainer.append(
        HTMLHelpers.generatePagination(response.totalPages, this.page)
      );
      mainContainer.prepend(
        HTMLHelpers.generatePagination(response.totalPages, this.page)
      );

      const next = document.getElementById("next");
      const prev = document.getElementById("prev");
      //   console.log(pageNumbers);

      //* Next and prev pagination
      if (next && prev) {
        this.updateActivePage();
        prev.classList.add("disabled");
        next.addEventListener("click", () => {
          if (this.page < response.totalPages) {
            this.page++;
            this.updateActivePage();
            this.bandComponent.page = this.page;
            this.bandComponent.fillTable(this.page);
          }
          if (this.page === response.totalPages) {
            next.classList.add("disabled");
          } else {
            next.classList.remove("disabled");
          }
          if (this.page > 1) {
            prev.classList.remove("disabled");
          }
        });

        prev.addEventListener("click", () => {
          if (this.page > 1) {
            this.page--;
            this.updateActivePage();
            this.bandComponent.page = this.page;
            this.bandComponent.fillTable(this.page);
          }
          if (this.page === 1) {
            prev.classList.add("disabled");
          } else {
            prev.classList.remove("disabled");
          }
          if (this.page < response.totalPages) {
            next.classList.remove("disabled");
          }
        });

        //* Page number clicks
        const pageNumbers = document.querySelectorAll(".page-number a");
        pageNumbers.forEach((page) => {
          page.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent page reload
            this.page = parseInt(event.target.innerText);
            this.updateActivePage();
            this.bandComponent.page = this.page;
            this.bandComponent.fillTable();
          });
        });

        this.updateActivePage(response.totalPages);
      }
    });
  }
  updateActivePage() {
    document.querySelectorAll(".page-number").forEach((el) => {
      el.classList.remove("active");
    });
    const activePageEl = document.querySelector(`.li${this.page}`);
    if (activePageEl) {
      activePageEl.classList.add("active");
    }
  }
}

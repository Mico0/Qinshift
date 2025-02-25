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

      const topNav = HTMLHelpers.generatePagination(
        response.totalPages,
        this.page
      );
      const bottomNav = HTMLHelpers.generatePagination(
        response.totalPages,
        this.page
      );

      mainContainer.append(bottomNav);
      mainContainer.prepend(topNav);

      //* Attach the listeners
      this.attachPageListeners(topNav);
      this.attachPageListeners(bottomNav);

      //* Handle the clicks
      this.handleNextAndPrev(response);
    });
  }

  attachPageListeners(element) {
    //* Page number clicks
    const pageNumbers = element.querySelectorAll(".page-number a");
    pageNumbers.forEach((page) => {
      page.addEventListener("click", (event) => {
        event.preventDefault();
        //* Used to prevent default element behaviour
        this.page = parseInt(event.target.innerText);
        this.updateActivePage();
        this.bandComponent.page = this.page;
        this.bandComponent.fillTable(this.page);
      });
    });
  }
  handleNextAndPrev(response) {
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
    }
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

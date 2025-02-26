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
    const next = document.querySelectorAll(".next");
    const prev = document.querySelectorAll(".previous");

    // console.log(next, prev);

    //* Next and prev pagination
    if (next && prev) {
      this.updateActivePage();
      prev[0].classList.add("disabled");
      prev[1].classList.add("disabled");
      next.forEach((element) => {
        element.addEventListener("click", () => {
          if (this.page < response.totalPages) {
            this.page++;
            this.updateActivePage();
            this.bandComponent.page = this.page;
            this.bandComponent.fillTable(this.page);
          }
          if (this.page === response.totalPages) {
            next[0].classList.add("disabled");
            next[1].classList.add("disabled");
          } else {
            next[0].classList.remove("disabled");
            next[1].classList.remove("disabled");
          }
          if (this.page > 1) {
            prev[0].classList.remove("disabled");
            prev[1].classList.remove("disabled");
          }
        });
      });

      prev.forEach((el) => {
        el.addEventListener("click", () => {
          if (this.page > 1) {
            this.page--;
            this.updateActivePage();
            this.bandComponent.page = this.page;
            this.bandComponent.fillTable(this.page);
          }
          if (this.page === 1) {
            prev[0].classList.add("disabled");
            prev[1].classList.add("disabled");
          } else {
            prev[0].classList.remove("disabled");
            prev[1].classList.remove("disabled");
          }
          if (this.page < response.totalPages) {
            next[0].classList.remove("disabled");
            next[1].classList.remove("disabled");
          }
        });
      });
    }
  }
  updateActivePage() {
    document.querySelectorAll(".page-number").forEach((el) => {
      el.classList.remove("active");
    });
    const activePageEl = document.querySelectorAll(`.li${this.page}`);
    if (activePageEl) {
      activePageEl.forEach((element) => {
        element.classList.add("active");
      });
    }
  }
}

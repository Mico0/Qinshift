import BandService from "../services/band-service.js";
import BandComponent from "./band-component.js";
import FilterService from "../services/filter-service.js";
import FilterComponent from "../components/filter-component.js";
import HTMLHelpers from "../helpers/html-helpers.js";

export default class NavigationComponent {
  constructor(bandComponent) {
    this.bandComponent = bandComponent;
    this.bandService = new BandService();
    this.filterComponent = new FilterComponent();
    this.page = 1;
  }
  createNavigation() {
    this.bandService.getAllBands(this.page).then((response) => {
      // console.log(response);

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
        this.updateBandsData();
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
            this.updateBandsData();
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
            this.updateBandsData();
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
  updateBandsData() {
    let active = document.querySelectorAll(".btn-check");
    if (active[0].checked || active[1].checked) {
      FilterService.filterActive(this.page).then((response) => {
        console.log(response);
        this.bandComponent.fillTable(response, this.page);
      });
    } else {
      this.bandService.getAllBands(this.page).then((response) => {
        this.bandComponent.fillTable(response.bands, this.page);
      });
    }
    console.log(active[0].checked);
  }
  //TODO: Make this is a helper function where you will either use the filter all bands or get all bands
}

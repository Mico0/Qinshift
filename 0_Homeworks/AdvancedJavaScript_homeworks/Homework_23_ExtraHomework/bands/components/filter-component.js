import FilterService from "../services/filter-service.js";
import BandService from "../services/band-service.js";
import NavigationComponent from "./nav-component.js";
import HTMLHelpers from "../helpers/html-helpers.js";

export default class FilterComponent {
  constructor(bandComponent, navComponent) {
    this.bandComponent = bandComponent;
    this.navComponent = navComponent;
    this.bandService = new BandService();
  }

  //! Generate and fill filters

  createFilters() {
    const mainContainer = document.getElementById("mainContainer");

    const topFilters = HTMLHelpers.generateFilters();
    const bottomFilters = HTMLHelpers.generateFilters();

    mainContainer.append(bottomFilters);
    mainContainer.prepend(topFilters);
  }

  fillSelect() {
    this.bandService.getAllBands().then((response) => {
      const tagSelect = document.querySelectorAll("#tagSelect");
      tagSelect.forEach((element) => {
        element.appendChild(HTMLHelpers.generateOptions("Select genre"));
        for (let tag of response.tags) {
          if (element) {
            element.appendChild(HTMLHelpers.generateOptions(tag));
          }
        }
      });
    });
  }

  //! Filter functionalities
  async filterTable() {
    const active = document.getElementById("btncheck1");

    if (active) {
      active.addEventListener("click", async () => {
        console.log("HERE IN ACTIVE");
        let data;
        if (active.checked) {
          data = await FilterService.filterActive(this.navComponent.page);
          // debugger;
        } else {
          data = await this.bandService.getAllBands(this.navComponent.page);
          data = data.bands;
        }

        this.bandComponent.fillTable(data, this.navComponent.page);
      });
    }
  }

  init() {
    this.createFilters();
    this.fillSelect();
    this.filterTable();
  }
}

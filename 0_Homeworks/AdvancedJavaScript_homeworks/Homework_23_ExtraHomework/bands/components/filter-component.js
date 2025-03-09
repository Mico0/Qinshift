import FilterService from "../services/filter-service.js";
import BandService from "../services/band-service.js";
import BandComponent from "./band-component.js";
import NavigationComponent from "./nav-component.js";
import HTMLHelpers from "../helpers/html-helpers.js";

export default class FilterComponent {
  constructor() {
    this.bandComponent = new BandComponent();
    this.bandService = new BandService();
    this.navigationComponent = new NavigationComponent();
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
  async showOnlyActive() {
    const active = document.getElementById("btncheck1");

    if (active) {
      active.addEventListener("click", async () => {
        let data;
        if (active.checked) {
          data = await FilterService.filterActive(
            this.navigationComponent.page
          );
          // debugger;
        } else {
          data = await this.bandService.getAllBands(
            this.navigationComponent.page
          );
          data = data.bands;
        }

        this.bandComponent.fillTable(data, this.navigationComponent.page);
      });
    }
  }
}

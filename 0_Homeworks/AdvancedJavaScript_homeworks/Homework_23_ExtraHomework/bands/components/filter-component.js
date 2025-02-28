import FilterService from "../services/filter-service.js";
import BandService from "../services/band-service.js";
import BandComponent from "./band-component.js";
import HTMLHelpers from "../helpers/html-helpers.js";

export default class FilterComponent {
  constructor() {
    this.bandComponent = new BandComponent();
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
      const tagSelect = document.getElementById("tagSelect");
      tagSelect.appendChild(HTMLHelpers.generateOptions("Select genre"));

      for (let tag of response.tags) {
        if (tagSelect) {
          tagSelect.appendChild(HTMLHelpers.generateOptions(tag));
        }
      }
    });
  }

  //! Filter functionalities
  async showOnlyActive() {
    const active = document.getElementById("btncheck1");
    let data = await FilterService.filterActive();
    if (active) {
      active.addEventListener("click", async () => {
        if (active.checked) {
          console.log(data);
          this.bandComponent.fillTable(data);
        }
      });
    }
  }
}

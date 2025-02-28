import BandService from "../services/band-service.js";
import BandComponent from "./band-component.js";
import HTMLHelpers from "../helpers/html-helpers.js";

export default class FilterComponent {
  constructor() {
    this.bandService = new BandService();
    this.bandComponent = new BandComponent();
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
    let data = await this.bandService.getAllBands();
    if (active) {
      active.addEventListener("click", function () {
        if (active.checked) {
          console.log(data);
        }
      });
    }
  }
}

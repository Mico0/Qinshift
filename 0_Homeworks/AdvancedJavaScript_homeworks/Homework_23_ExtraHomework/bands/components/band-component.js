import BandService from "../services/band-service.js";
import HTMLHelpers from "../helpers/html-helpers.js";

export default class BandComponent {
  constructor() {
    this.bandService = new BandService();
    this.page = 1;
    this.rowNumber = 1;
  }

  fillTable() {
    this.bandService.getAllBands().then((response) => {
      let html = "";
      for (let band of response.bands) {
        html += HTMLHelpers.generateRowData(
          this.rowNumber++,
          band.name,
          band.isActive === true ? "active" : "inactive",
          band.tags.join(", "),
          Object.values(band.bandMembers)
            .map((member) => member.name)
            .join(`<p> </p>`),
          band.albumsNum
        );
      }
      //   console.log(html);
      document.getElementById("tableBody").innerHTML = html;

      document
        .getElementById("mainContainer")
        .append(HTMLHelpers.generatePagination(response.totalPages));
      document
        .getElementById("mainContainer")
        .prepend(HTMLHelpers.generatePagination(response.totalPages));
    });
  }
}

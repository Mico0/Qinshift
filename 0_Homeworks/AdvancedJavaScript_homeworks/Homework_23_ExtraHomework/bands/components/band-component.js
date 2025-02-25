import BandService from "../services/band-service.js";
import HTMLHelpers from "../helpers/html-helpers.js";

export default class BandComponent {
  constructor() {
    this.bandService = new BandService();
    this.page = 1;
    this.rowNumber = 1;
  }

  fillTable(page = 1) {
    const pageSize = 10;
    this.rowNumber = (this.page - 1) * pageSize + 1;
    this.bandService.getAllBands(null, this.page).then((response) => {
      let html = "";
      for (let band of response.bands) {
        html += HTMLHelpers.generateRowData(
          this.rowNumber++,
          band.name,
          band.isActive === true ? "active" : "inactive",
          band.tags.join(", "),
          Object.values(band.bandMembers)
            .map((member) => member.name)
            .join(`</br>`),
          band.albumsNum
        );
      }
      //   console.log(html);
      document.getElementById("tableBody").innerHTML = html;
    });
  }
}

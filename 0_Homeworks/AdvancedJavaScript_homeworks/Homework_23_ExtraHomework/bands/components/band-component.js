import BandService from "../services/band-service.js";
import HTMLHelpers from "../helpers/html-helpers.js";

export default class BandComponent {
  constructor() {
    this.bandService = new BandService();
    this.page = 1;
    this.rowNumber = 1;
  }

  async fillTable(data, page = 1) {
    if (!data) {
      console.error("fillTable: Invalid data received", data);
      return;
    }

    // console.log("Bands", data);
    const pageSize = 10;
    this.rowNumber = (page - 1) * pageSize + 1;

    let html = "";
    for (let band of data) {
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
  }
}

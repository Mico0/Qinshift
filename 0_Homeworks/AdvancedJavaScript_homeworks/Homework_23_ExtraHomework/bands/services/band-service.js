import Band from "../models/models.js";
import Tag from "../models/models.js";

export default class BandService {
  constructor() {
    this.baseUrl =
      "https://raw.githubusercontent.com/Mico0/Qinshift/refs/heads/main/0_Homeworks/AdvancedJavaScript_homeworks/Homework_23_ExtraHomework/bands/bands.json";
    this.bandTags = null;
  }
  async getAllBands(tag, page = 0, pageSize = 10) {
    let response = await fetch(this.baseUrl);
    let data = await response.json();

    let mappedBands = data.map(
      (x) => new Band(x.name, x.active, x.tags, x.members, x.albums.length)
    );
    this.bandTags = new Set(mappedBands.flatMap((x) => x.tags));
    // console.log(this.bandTags);
    // debugger;
    // console.table(mappedBands);

    let startIndex = (page - 1) * pageSize;
    let slicedBands = mappedBands.slice(startIndex, startIndex + pageSize);
    let totalPages = Math.ceil(data.length / pageSize);

    return {
      bands: slicedBands,
      totalPages: totalPages,
      tags: this.bandTags,
    };
  }
}

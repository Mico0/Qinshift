import Band from "../models/models.js";

async function filterActive(page, pageSize = 10) {
  const url =
    "https://raw.githubusercontent.com/Mico0/Qinshift/refs/heads/main/0_Homeworks/AdvancedJavaScript_homeworks/Homework_23_ExtraHomework/bands/bands.json";
  let response = await fetch(url);
  let data = await response.json();
  let filteredData = data;
  filteredData = filteredData.filter((x) => x.active === true);

  filteredData = filteredData.map(
    (x) => new Band(x.name, x.active, x.tags, x.members, x.albums.length)
  );

  let startIndex = (page - 1) * pageSize;
  let slicedBands = filteredData.slice(startIndex, startIndex + pageSize);

  return slicedBands;
}

export default { filterActive };

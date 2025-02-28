export default class HTMLHelpers {
  static generateRowData(rowNumber, bandName, active, tags, members, albumNum) {
    return `
        <tr>  
          <td class="rowNumber">${rowNumber}</td>
          <td class="bandName">${bandName}</td>
          <td class="isActive">${active}</td>
          <td class="tags">${tags}</td>
          <td class="bandMembers">${members}</td>
          <td class="numberOfAlbums">${albumNum}</td>
        </tr>
    `;
  }

  static generatePagination(totalPages, currentPage = 1) {
    const nav = document.createElement("nav");
    nav.ariaLabel = "Page navigation example";
    nav.id = "pagination-controls";

    const ul = document.createElement("ul");
    ul.classList.add("pagination");
    nav.append(ul);

    let html = ``;
    html += `<li class="page-item previous" id="prev"><a class="page-link" href="#">Previous</a></li>`;
    for (let i = 1; i <= totalPages; i++) {
      html += `
        <li class="page-item page-number li${i}"><a class="page-link" href="#">${i}</a></li>    
        `;
    }
    html += `<li class="page-item next" id="next"><a class="page-link" href="#">Next</a></li>`;

    ul.innerHTML = html;

    return nav;
  }

  static generateFilters() {
    const div = document.createElement("div");
    div.id = "table-filters";
    let html = "";

    html += `
<div class="input-group mb-3">
  <span class="input-group-text"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
      /></svg
  ></span>
  <div class="form-floating">
    <input
      type="text"
      class="form-control"
      id="floatingInputGroup1"
      placeholder="Username"
    />
    <label for="floatingInputGroup1">Search bands</label>
  </div>
</div>
<div class="form-floating">
  <select class="form-select" id="tagSelect" aria-label="Floating label select example">
  </select>
  <label for="tagSelect">Filter by genre tag</label>
</div>
<div class="btn-group" role="group" aria-label="Default button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-danger" for="btncheck1">Show Active</label>
</div>    
    `;

    div.innerHTML = html;

    return div;
  }

  static generateOptions(tag) {
    const option = document.createElement("option");

    option.innerText = tag;
    option.value = tag;

    return option;
  }
}

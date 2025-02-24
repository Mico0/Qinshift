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

  static generatePagination(totalPages) {
    const nav = document.createElement("nav");
    nav.ariaLabel = "Page navigation example";
    nav.id = "pagination-controls";

    const ul = document.createElement("ul");
    ul.classList.add("pagination");
    nav.append(ul);

    let html = ``;
    html += `<li class="page-item"><a class="page-link" href="#">Previous</a></li>`;
    for (let i = 1; i <= totalPages; i++) {
      html += `
            <li class="page-item"><a class="page-link" href="#">${i}</a></li>    
            `;
    }
    html += `<li class="page-item"><a class="page-link" href="#">Next</a></li>`;

    ul.innerHTML = html;

    return nav;
  }
}

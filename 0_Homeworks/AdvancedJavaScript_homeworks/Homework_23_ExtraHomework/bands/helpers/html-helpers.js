export default class HTMLHelpers {
  static createTableRow() {
    let tr = document.createElement("tr");
    return tr;
  }

  static generateRowData(rowNumber, bandName, active, tags, members, albumNum) {
    let tr = this.createTableRow();
    tr.innerHTML += `    
          <td class="rowNumber">${rowNumber}</td>
          <td class="bandName">${bandName}</td>
          <td class="isActive">${active}</td>
          <td class="tags">${tags}</td>
          <td class="bandMembers">${members}</td>
          <td class="numberOfAlbums">${albumNum}</td>
    `;
    return tr;
  }
}

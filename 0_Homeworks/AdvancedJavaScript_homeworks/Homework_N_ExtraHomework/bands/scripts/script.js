const url =
  "https://raw.githubusercontent.com/Mico0/Qinshift/refs/heads/main/0_Homeworks/AdvancedJavaScript_homeworks/Homework_N_ExtraHomework/bands/bands.json";
let isNameSortedAscending = true;
let isNumberSortedAscending = true;

async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function generateTable(data) {
  try {
    const bandTable = document.getElementById("bandTable");
    const tbody = bandTable.getElementsByTagName("tbody")[0];
    let html = "";
    for (let i = 0; i < 10; i++) {
      html += `
          <tr>
              <td>${i + 1}</td>
              <td><h5>${data[i].name}</h5></td>
              ${
                data[i].active === true
                  ? `<td style="font-size:1.2rem;"><span class="badge rounded-pill text-bg-success">Active</span></td>`
                  : `<td style="font-size:1.2rem;"><span class="badge rounded-pill text-bg-danger">Inactive</span></td>`
              }
              <td>${data[i].tags.toString()}</td>
              <td>  
              
       
      `;
      for (let member of data[i].members) {
        html += `
          <p style="margin-bottom:0;">${member.name}</p>
          `;
      }
      html += `   
    
          </td>
               <td>${data[i].albums.length}</td>
          </tr>`;
    }
    tbody.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

async function sortTable() {
  try {
    const data = await fetchData(url);
    const bandHeader = document.getElementById("bandNameHeader");
    const numberHeader = document.getElementById("numberAlbumsHeader");
    generateTable(data);
    let sortedData = null;
    bandHeader.addEventListener("click", () => {
      sortedData = [...data].sort((a, b) =>
        isNameSortedAscending
          ? a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          : b.name.toLowerCase().localeCompare(a.name.toLowerCase())
      );
      isNameSortedAscending = !isNameSortedAscending;
      generateTable(sortedData);
    });

    numberHeader.addEventListener("click", async () => {
      sortedData = [...data].sort((a, b) =>
        isNumberSortedAscending
          ? b.albums.length - a.albums.length
          : a.albums.length - b.albums.length
      );
      isNumberSortedAscending = !isNumberSortedAscending;
      generateTable(sortedData);
    });
  } catch (error) {
    console.log(error);
  }
}

sortTable();

const url =
  "https://raw.githubusercontent.com/Mico0/Qinshift/refs/heads/main/0_Homeworks/AdvancedJavaScript_homeworks/Homework_23_ExtraHomework/bands/bands.json";
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

async function generateTable(data, length = 10) {
  try {
    const bandTable = document.getElementById("bandTable");
    const tbody = bandTable.getElementsByTagName("tbody")[0];
    let html = "";
    for (let i = 0; i < length; i++) {
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
      if (isNameSortedAscending) {
        document.getElementById("ascendingName").style.display = "block";
        document.getElementById("descendingName").style.display = "none";
      } else {
        document.getElementById("ascendingName").style.display = "none";
        document.getElementById("descendingName").style.display = "block";
      }
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
      if (isNumberSortedAscending) {
        document.getElementById("ascendingAlbums").style.display = "block";
        document.getElementById("descendingAlbums").style.display = "none";
      } else {
        document.getElementById("ascendingAlbums").style.display = "none";
        document.getElementById("descendingAlbums").style.display = "block";
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function searchTable(text) {
  try {
    const data = await fetchData(url);
    let searchedData = data;
    searchedData = searchedData.filter((el) =>
      el.name.toLowerCase().includes(text.toLowerCase())
    );
    return searchedData;
  } catch (error) {
    console.log(error);
  }
}
let isActive = false;
document
  .getElementById("btncheck1")
  .addEventListener("click", async function () {
    // debugger;
    let data = await fetchData(url);
    let filteredData = data;
    if (!isActive) {
      filteredData = filteredData.filter((el) => el.active === true);
      generateTable(filteredData);
      isActive = true;
    } else {
      generateTable(data);
      isActive = false;
    }
  });

document
  .getElementById("search")
  .addEventListener("keypress", async function (e) {
    if (e.key === "Enter") {
      let value = await searchTable(e.target.value);

      generateTable(value, value.length);
    }
  });

sortTable();

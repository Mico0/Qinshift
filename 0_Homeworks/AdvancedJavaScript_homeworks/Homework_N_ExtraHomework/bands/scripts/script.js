const url =
  "https://raw.githubusercontent.com/Mico0/Qinshift/refs/heads/main/0_Homeworks/AdvancedJavaScript_homeworks/Homework_N_ExtraHomework/bands/bands.json";

async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData(url);

async function generateTable() {
  const bandTable = document.getElementById("bandTable");
  const tbody = bandTable.getElementsByTagName("tbody")[0];
  let data = await fetchData(url);
  let html = "";
  for (let i = 0; i < 10; i++) {
    html += `
        <tr>
            <td>${i + 1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].active}</td>
            <td>${data[i].tags.toString()}</td>
            <td>
             ${Object.values(data[i].members)}
            </td>
             <td>${data[i].albums.length}</td>
        </tr>
    `;
  }
  tbody.innerHTML = html;
}
generateTable();

let bandsURL =
  "https://raw.githubusercontent.com/trajanstevkovski/sedc6-frontend-exam/master/band-data.json";

function Band(name, active, tags, members, albums) {
  this.name = name;
  this.isActive = active;
  this.tags = tags;
  this.members = members;
  this.albums = albums;

  this.showActiveMembers = function () {
    let membersString = "";
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];
      if (!member.former) {
        membersString += member.name + " , ";
      }
    }
    return membersString;
  };
  this.showFormerMembers = function () {
    let formerMembersString = "";
    let index = 0;
    while (index < this.members.length) {
      let formerMember = this.members[index];
      if (formerMember["former"] === true) {
        formerMembersString += `${formerMember["name"]} , `;
      }
      index++;
    }
    return formerMembersString;
  };
}

function mapBands(data) {
  let bands = [];
  for (let band of data) {
    let bandObject = new Band(
      band.name,
      band.active,
      band.tags,
      band.members,
      band.albums
    );
    bands.push(bandObject);
  }
  return bands;
}

function showBandsInfo(bands) {
  let resultDIV = document.getElementById("result");
  let resultHTML = "<ul>";
  for (let band of bands) {
    let active = band.isActive ? "Active" : "Not active";
    let result = `<li>The band: ${band.name} has ${band.albums.length} albums 
    is currently an ${active} band. <br> 
    The active members of the band are ${band.showActiveMembers()}. <br>
    Former members are ${band.showFormerMembers()}.</li>`;
    resultHTML += result;
  }
  resultHTML += "</ul>";

  resultDIV.innerHTML = resultHTML;
}

document.getElementById("btn").addEventListener("click", function () {
  fetch(bandsURL)
    .then(function (response) {
      //   console.log(response);
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      let bands = mapBands(response);
      showBandsInfo(bands);
      console.log(bands);
    })
    .catch(function (error) {
      let errorP = document.querySelector("#error");
      errorP.style.color = "red";
      errorP.style.fontWeight = "600";
      errorP.innerText = "Something went wrong! Please try again later";

      console.log(error);
    });
});

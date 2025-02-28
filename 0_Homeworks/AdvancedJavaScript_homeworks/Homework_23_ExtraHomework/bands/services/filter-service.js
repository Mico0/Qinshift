async function filterActive() {
  const url =
    "https://raw.githubusercontent.com/Mico0/Qinshift/refs/heads/main/0_Homeworks/AdvancedJavaScript_homeworks/Homework_23_ExtraHomework/bands/bands.json";
  let response = await fetch(url);
  let data = await response.json();
  let filteredData = data;
  filteredData = filteredData.filter((x) => x.active === true);

  return filteredData;
}

export default { filterActive };

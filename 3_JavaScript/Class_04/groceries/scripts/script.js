let groceries = ["Bread", "Milk", "Butter", "Eggs"];

function addToGroceriesList(item) {
  if (typeof item === "string") {
    groceries.push(item);
    console.log(`You have added ${item} to the list!`);
  } else {
    console.log(`The item ${item} was not added to the list.`);
  }
}

addToGroceriesList("Marula");
// console.log(groceries);

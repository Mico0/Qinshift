let url =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json";

let studentsUrl =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let bandsUrl =
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/bands/bands.json";

let booksUrl =
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/library/books.json";

function getDocumentsCallback(resolve, reject) {
  $.ajax({
    url: url,
    success: function (response) {
      let data = JSON.parse(response);
      resolve(data);
    },
    error: (error) => {
      console.log(error);
      reject(error);
    },
  });
}

// getDocumentsCallback(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

//! Fetching JSON using a promise
function getDocuments(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      success: function (response) {
        let data = JSON.parse(response);
        console.log("Resolved");
        resolve(data);
      },
      error: (error) => {
        console.log(error);
        console.log("Rejected");
        reject(error);
      },
    });
  });
}

console.log(getDocuments(url));

getDocuments(url)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

let delay = function (ms, text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isResolved = Math.random() < 0.5;
      if (isResolved) {
        resolve(text);
      } else {
        reject("You have bad luck");
      }
    }, ms);
  });
};

delay(4000, "You have won the game of luck")
  .then((text) => console.log(text))
  .catch((error) => console.log(error));

getDocuments(url)
  .then((data) => {
    let html = "<ul>";
    for (let document of data) {
      html += `<li>${document.name}</li>`;
    }
    html += "</ul>";
    document.getElementById("content").innerHTML = html;
    // console.log("Executed");
  })
  //   .then(() => {
  //     console.log("This executes after the first then");
  //   })
  .catch((error) => console.log(error))
  .finally(() => console.log("I am always executed"));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function getEvenNumbers(array) {
  let evenNumbers = array.filter((x) => x % 2 === 0);
  return new Promise((resolve, reject) => {
    if (evenNumbers.length > 0) {
      resolve(evenNumbers);
    } else {
      reject("Processing was not complete");
    }
  });
}

getEvenNumbers(numbers)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//! Promises have alot of implementations mostly used when we want some calls / functions    to be executed sequentially

getDocuments(url)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

let delay1 = function (ms, text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isResolved = Math.random() < 0.5;
      if (isResolved) {
        resolve(text);
      } else {
        reject("You have bad luck");
      }
    }, ms);
  });
};

let promises = [];

for (let i = 0; i < 20; i++) {
  promises.push(500 * i, `This is the text from promise number ${i}`);
}

Promise.all(promises)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

let promiseData = [];

promiseData.push(fetch(url).then((response) => response.json()));
promiseData.push(fetch(studentsUrl).then((response) => response.json()));
promiseData.push(fetch(bandsUrl).then((response) => response.json()));
promiseData.push(fetch(booksUrl).then((response) => response.json()));

console.log(promiseData);

Promise.all(promiseData).then(([documents, students, bands, books]) => {
  console.log(documents);
  console.log(students);
  console.log(bands);
  console.log(books);
});

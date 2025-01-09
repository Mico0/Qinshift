let myApp = document.getElementById("app");
// console.log(myApp);
let titleDiv = myApp.firstElementChild;
let contentDiv = document.querySelector(".content");

let students = ["Bob Bobski", "Cowboy BeBop", "Faye Valentine", "Method Man"];
let subjects = ["Math", "Physics", "English", "Programming", "Sport"];
let grades = ["A", "B", "C", "A", "D"];

//* poednostaven i konvencionalen pristap za cuvanje podatoci
// let studentsObj = [
//   {
//     name: "Bob Bobsky",
//     subjects: ["Math", "Sports"],
//     grades: ["B", "A"],
//   },
//   {
//     name: "Bob Bobsky",
//     subjects: [
//       {
//         name: "Math",
//         grade: "B",
//       },
//     ],
//     grades: ["B", "A"],
//   },
// ];

function printGrades(subject, grades, element) {
  element.innerHTML = "";
  let content = `<ul>`; //* since we do not know the size of subjects and grades we leave the ul tag open
  for (let i = 0; i < subject.length; i++) {
    content += `<li>${subject[i]}: ${grades[i]}</li>`;
  }
  content += "</ul>"; //* Close the ul tag after filling it
  console.log(content);
  element.innerHTML = content;
}

// printGrades(subjects, grades, contentDiv);

function printStudents(students, element) {
  element.innerHTML = "";
  let content = "<ol>";
  for (let student of students) {
    content += `<li> ${student}</li>`;
  }
  content += "</ol>";
  element.innerHTML = content;
}

// printStudents(students, contentDiv);

function academyPanel(person, name) {
  if (person === "student" && name.length >= 2) {
    titleDiv.innerHTML = `<h1>Hello there ${name}</h1>`;
    titleDiv.innerHTML += `<p>Welcome to your student portal</p>`;
    titleDiv.innerHTML += `<h3>Your grades:</h3>`;
    printGrades(subjects, grades, contentDiv);
  } else if (person === "teacher" && name.length >= 2) {
    titleDiv.innerHTML = `<h1>Hello there Mr / Mrs ${name}</h1>`;
    titleDiv.innerHTML += `<p>Welcome to your teacher portal</p>`;
    titleDiv.innerHTML += `<h3>Your students:</h3>`;
    printStudents(students, contentDiv);
  } else {
    titleDiv.innerHTML = "<h1>Your login was unsuccessfull</h1>";
    titleDiv.innerHTML += "<p>Please try again</p>";
  }
}

let person = prompt("Are you a student or a teacher?");
let name = prompt("Enter your name");
academyPanel(person, name);

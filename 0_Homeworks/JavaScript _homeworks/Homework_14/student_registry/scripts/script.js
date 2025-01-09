let students = [];
function createStudent() {
  let name = document.querySelector("#name").value;
  let surname = document.querySelector("#surname").value;
  let age = document.querySelector("#age").value;
  //   console.log(name + surname + age);

  if (name !== "" && surname !== "" && age !== 0) {
    let studentObj = {
      studentName: name,
      studentSurname: surname,
      studentAge: age,
    };
    students.push(studentObj);
  } else {
    document.querySelector("#error").innerHTML =
      "Please enter a value for all of the fields";
  }

  console.log(students);
  return students;
}

function showStudents(students) {
  let result = document.getElementById("result");
  result.innerHTML = "";
  result.innerHTML += `<h2>Students: </h2>`;
  let counter = 0;
  for (let student of students) {
    if (
      student.studentName === "" ||
      student.studentSurname === "" ||
      student.studentAge === 0
    ) {
      result.innerHTML += `<p>No students to show</p>`;
    } else {
      result.innerHTML += "<ul>";

      result.innerHTML += `<li> Student ${++counter}`;
      result.innerHTML += `<ul>
                            <li>${student.studentName}</li>
                            <li>${student.studentSurname}</li>
                            <li>${student.studentAge}</li>
                          </ul>`;
      result.innerHTML += "</li>";
    }

    result.innerHTML += "</ul>";
  }
}

function callBoth() {
  createStudent();
  showStudents(students);
}

document.getElementById("save").addEventListener("click", callBoth);

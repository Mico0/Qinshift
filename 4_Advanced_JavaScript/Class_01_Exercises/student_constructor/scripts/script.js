function Student(firstName, lastName, birthYear, academy, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.academy = academy;
  this.grades = grades;

  this.getAge = function () {
    let date = new Date().getFullYear();
    return date - this.birthYear;
  };

  this.getInfo = function () {
    return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
  };

  this.getGradesAverage = function () {
    let sum = 0;
    let avg = 0;
    for (let grade of this.grades) {
      sum += grade;
    }
    avg = sum / this.grades.length;
    return avg;
  };
}

let students = [
  new Student("Milan", "Ognjanoski", 1994, "Web Programming", [5, 4, 2, 5, 4]),
  new Student("Gordana", "Ognjanoska", 1995, "QA", [4, 5, 3, 4, 5]),
  new Student("Rade", "Gerazoski", 1998, "Web Programming", [3, 4, 3, 3, 3]),
];

function showInfo(students) {
  for (let student of students) {
    console.log(
      `${student.getInfo()} \nIs ${student.getAge()} years old. \nHas a grade average of ${student.getGradesAverage()}`
    );
  }
}

showInfo(students);

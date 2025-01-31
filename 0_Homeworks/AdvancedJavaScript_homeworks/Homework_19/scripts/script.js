let path =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let getJSON = (path) => {
  fetch(path)
    .then((path) => path.json())
    .then((data) => {
      let avrgHigherThan3 = data.filter((x) => x.averageGrade > 3);

      console.log("Students with average grade higher than 3: ");
      console.log(avrgHigherThan3);

      let allFemaleWithAvrg5 = data
        .filter((x) => x.averageGrade === 5)
        .map((x) => x.firstName);

      console.log("All female student names with an average grade of 5");
      console.log(allFemaleWithAvrg5);

      let allMaleInSkopje = data
        .filter((x) => x.age > 18 && x.city === "Skopje")
        .map((x) => `${x.firstName} ${x.lastName}`);

      console.log(
        "All male student full names who live in Skopje and are over 18 years old"
      );
      console.log(allMaleInSkopje);

      let avrgGradesOfAllFemale = data
        .filter((x) => x.gender === "Female" && x.age >= 24)
        .map((x) => x.averageGrade);

      console.log(
        "The average grades of all female students over the age of 24"
      );
      console.log(avrgGradesOfAllFemale);

      let allMaleStartingB = data.filter(
        (x) =>
          x.firstName.startsWith("B") &&
          x.averageGrade > 2 &&
          x.gender === "Male"
      );

      console.log(
        "All male students with a name starting with B and average grade over 2"
      );
      console.log(allMaleStartingB);

      //   console.log(data);
    });
};

getJSON(path);

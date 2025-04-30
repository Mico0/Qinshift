interface Student {
  id: number;
  name: string;
  age: number;
  grades: number[];
  avgGrade?: number;
}

const student: Student = {
  id: 123,
  name: "Milan",
  age: 22,
  grades: [5, 4, 3, 5],
};
const student2: Student = {
  id: 124,
  name: "Leon",
  age: 33,
  grades: [4, 5, 5, 4],
};
const student3: Student = {
  id: 124,
  name: "Rade",
  age: 31,
  grades: [4, 4, 4, 4],
};

const studentArray: Student[] = [student, student2, student3];

function calculateAverageGrade(students: Student[] | Student): number {
  const studentArray = Array.isArray(students) ? students : [students];
  const allGrades: number[] = studentArray.flatMap((student) => student.grades);
  let sum: number = allGrades.reduce((acc, curr) => acc + curr, 0);

  return sum / allGrades.length;
}

console.log(calculateAverageGrade(studentArray));

enum GradeLevel {
  FRESHMAN = "freshman",
  SOPHOMORE = "sophomore",
  JUNIOR = "junior",
  SENIOR = "senior",
}

const getGradeLevel = (age: number) => {
  if (age >= 14 && age <= 15) {
    return GradeLevel.FRESHMAN;
  } else if (age >= 16 && age <= 17) {
    return GradeLevel.SOPHOMORE;
  } else if (age >= 18 && age <= 19) {
    return GradeLevel.JUNIOR;
  } else if (age > 20) {
    return GradeLevel.SENIOR;
  }
};

console.log(getGradeLevel(student.age));

interface Course {
  id: number;
  name: string;
  students: Student[];
  instructor: string;
  maxStudents: number;
}

class CourseManager {
  private courses: Course[] = [
    {
      id: 101,
      name: "Introduction to Programming",
      students: [student, student3],
      instructor: "Dr. Alice Johnson",
      maxStudents: 30,
    },
    {
      id: 102,
      name: "Data Structures",
      students: [student3, student2],
      instructor: "Prof. Bob Lee",
      maxStudents: 25,
    },
    {
      id: 103,
      name: "Web Development",
      students: [student2, student, student3],
      instructor: "Dr. Emily Clark",
      maxStudents: 40,
    },
    {
      id: 104,
      name: "Algorithms",
      students: [student3, student],
      instructor: "Prof. David Kim",
      maxStudents: 20,
    },
  ];

  addCourse(course: Course) {
    this.courses.push(course);
  }

  removeById(id: number) {
    this.courses = this.courses.filter((course) => course.id !== id);
  }

  getById(id: number) {
    const foundCourse = this.courses.find((course) => course.id === id);
    return foundCourse;
  }

  getAllCourses() {
    return this.courses;
  }

  getTopStudents(courseID: number, n: number) {
    const course = this.getById(courseID);

    if (!course) {
      throw new Error("No course with that ID");
    }

    if (course.students.length === 0) {
      throw new Error("Selected course has no students");
    }

    for (let student of course.students) {
      student.avgGrade = calculateAverageGrade(student);
    }

    //! Way 1 to solve this with common assertion

    let sorted = [...course.students].sort(
      (a, b) => (a.avgGrade as number) - (b.avgGrade as number)
    );

    //! Way 2 to solve this
    // ! - after a variable usage tells Typescript that this variable will not be undefined, bypasses the {variable} might be undefined issue AKA non null assertion
    // let sorted = [...course.students].sort(
    //   (a: Student, b: Student) => b.avgGrade! - a.avgGrade!
    // );

    return sorted.slice(0, n);
  }
}

const courseMng = new CourseManager();

console.log(courseMng.getAllCourses());

courseMng.addCourse({
  id: 105,
  name: "NodeJS",
  students: [student, student3],
  instructor: "Dr. Alice Milanson",
  maxStudents: 30,
});
console.log(courseMng.getById(105));
courseMng.removeById(105);
console.log(courseMng.getById(105));

console.log(courseMng.getTopStudents(103, 2));

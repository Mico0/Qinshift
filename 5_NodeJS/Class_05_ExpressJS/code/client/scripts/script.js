const API_URL = "http://localhost:3000/api/students";
const fetchStudents = async function (url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

const btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", () => {
  fetchStudents(API_URL);
});

let url =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json";

let studentsUrl =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let bandsUrl =
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/bands/bands.json";

let booksUrl =
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/library/books.json";

function getDocuments() {
  return fetch(url).then((x) => x.json());
}

function getStudents() {
  return fetch(studentsUrl).then((x) => x.json());
}

function getBands() {
  return fetch(bandsUrl).then((x) => x.json());
}

function getBooks() {
  return fetch(booksUrl).then((x) => x.json());
}

function getStudentsWithBooksAndBands() {
  getStudents().then(async (data) => {
    let books = await getBooks();
    let bands = await getBands();

    //! ^ Vo ova scenario se ceka prvo prviot await request dda pomine (getBooks) pa potoa se ceka vtoriot await request da pomine (getBands) pa potoa se izvrsuva .then, ne zname koj koga ke se izvrsi a i edniot od niv moze da vleze vo catch() i da naideme na greska

    Promise.all([getBooks(), getBands()]).then(([books, bands]) => {
      let mappedStudents = {
        ...data[0],
        favoriteBand: {
          ...bands[0],
        },
        favoriteBook: {
          ...books[0],
        },
      };
      console.log(mappedStudents);
    });
    //! ^ Vo ovaa situacija se cekaat dvata promises da zavrsat i potoa se izvrsuva .then
    //! Promise.all se koristi koga sakame da napravime povekje povici i ni se potrebni informaciite od site tri povici da gi iskoristime naednas
  });
}

getStudentsWithBooksAndBands();

let fnc = () => {
  let result = 5;
  console.log(result);
};

fnc();

(function () {
  console.log("Self invoked");
})();

(function (a, b) {
  let result = a * b;
  console.log(result);
})(2, 5);

//* Najcesto koristeni da sokrieme promenlivi i nivnata vrednost

let getNextId = (function () {
  let idCounter = 1;
  //* Promenlivite od ovaa funkcija ne se dostapni, samo return rezultatot e dostapen
  //* Prakticen primer koga bi sakale da gi zastitime promenlivite
  return function () {
    idCounter += 1;
    return idCounter;
  };
})();

// console.log(getNextId);

// for (let i = 0; i < 100; i++) {
//   console.log(getNextId());
// }

let calculator = (() => {
  let sum = (a, b) => a + b;
  let sub = (c, d) => c - d;
  return {
    sum,
    //* this is the same as sum: sum or sub: sub , shorthand for each
    sub,
  };
})();

console.log(calculator.sum(12, 5));

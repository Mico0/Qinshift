function windowSize() {
  let height = this.innerHeight;
  let width = this.innerWidth;
  console.log("In function");
  console.log(this);
  return [height, width];
}

console.log(windowSize());
// console.log(window);
let shape = {
  width: 600,
  height: 400,
  getArea: function () {
    // console.log(this);
    return this.width * this.height;
  },
};

console.log(shape.getArea());

let width = 600;
let screen = { width: 400 };

function showWidth() {
  console.log(this);
  console.log(this.width);
}
// in background showWIdth will be added in the window object
// window.showWidth=showWidth;

showWidth();

// screen.showWidth = showWidth; // this assigns the reference to the showWidth function, or we can use the showWidth function in the screen object
// screen.showWidthExecuted = showWidth(); // this assigns the results of the function executing

screen.showWidth = showWidth;
screen.showWidth();
console.log(screen);

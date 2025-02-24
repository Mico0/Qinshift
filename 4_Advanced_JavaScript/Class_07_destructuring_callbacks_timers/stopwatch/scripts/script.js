let stopwatch = {
  time: 0,
  interval: null,

  start: function () {
    this.interval = setInterval(() => {
      this.time++;
      console.log(this.time);
    }, 1000);
  },
  stop: function () {
    clearInterval(this.interval);
    this.interval = null;
  },
  reset: function () {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.time = 0;
  },
};

// console.log("Start first time");

// stopwatch.start();

// setTimeout(() => {
//   console.log("Stop first time");
//   stopwatch.stop();
// }, 5000);

// setTimeout(() => {
//   console.log("Start second time");
//   stopwatch.start();
// }, 8000);

// setTimeout(() => {
//   console.log("Reset first time");
//   stopwatch.reset();
// }, 10000);

// setTimeout(() => {
//   console.log("Start last time");
//   stopwatch.start();
// }, 12000);

// setTimeout(() => {
//   console.log("Stop last time");
//   stopwatch.stop();
// }, 15000);

let [start, stop, reset] = (function () {
  let time = 0;
  let interval = null;

  function start() {
    interval = setInterval(() => {
      time++;
      console.log(time);
    }, 1000);
  }

  function stop() {
    clearInterval(interval);
    interval = null;
  }

  function reset() {
    if (interval) {
      clearInterval(interval);
      interval = 0;
    } else {
      time = 0;
    }
  }
  //! rturn as array
  return [start, stop, reset]; //! biten e redosledot po koj se vrakjaat funkciite za koga ke gi povikuvame da znaeme sto ni se
})();

// console.log("Start first time");
// start();

// setTimeout(() => {
//   console.log("Stop first time");
//   stop();
// }, 5000);

// setTimeout(() => {
//   console.log("Start second time");
//   start();
// }, 8000);

// setTimeout(() => {
//   console.log("Reset first time");
//   reset();
// }, 10000);

// setTimeout(() => {
//   console.log("Start last time");
//   start();
// }, 12000);

// setTimeout(() => {
//   console.log("Stop last time");
//   stop();
// }, 15000);

let {
  start: pocni,
  stop: zastani,
  reset: resetiraj,
} = (function () {
  let time = 0;
  let interval = null;

  function start() {
    interval = setInterval(() => {
      time++;
      console.log(time);
    }, 1000);
  }

  function stop() {
    clearInterval(interval);
    interval = null;
  }

  function reset() {
    if (interval) {
      clearInterval(interval);
      interval = 0;
    } else {
      time = 0;
    }
  }
  //! if no key is given when creating an object the key will be created with the same name as the value variable
  //! return the functionalities as object
  return {
    start,
    stop,
    reset,
  };
})();

// generate random color using hex number
let randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());
// call setInterval and setTimeout
let intervalID;
console.log(intervalID);
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
function changeColor() {
  document.body.style.backgroundColor = randomColor();
}
start.addEventListener("click", function () {
  if (!intervalID) {
    intervalID = setInterval(changeColor, 1000);
  }
});

stop.addEventListener("click", function () {
  clearInterval(intervalID);
  intervalID = null;
});

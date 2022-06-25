let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
stopButton.addEventListener("click", () => {
  stopLight.classList.toggle("stop");
});

let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");
slowButton.addEventListener("click", () => {
  slowLight.classList.toggle("slow");
});

let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");
goButton.addEventListener("click", () => {
  goLight.classList.toggle("go");
});
let mouseTarget = document.getElementById("mouseTarget");

[stopButton, slowButton, goButton].forEach((button) => {
  button.addEventListener("mouseenter", () => {
    console.log(`Entered ${button.innerText} button`);
  });

  button.addEventListener("mouseleave", () => {
    console.log(`Left ${button.innerText} button`);
  });
});

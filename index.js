let log0;
let log1;
let log2 = Math.floor(Math.random() * 3);
let log3 = 0;
let log4 = 0;
let log5 = 0;

let side;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
  leftSide();
  Randomize1();
  Randomize0();
  for (let i = 0; i < 6; i++) {
    let logs = document.getElementById(`logs${i}`);
    logs.classList.add(dec(eval(`log${i}`)));
  }
});

function Randomize1() {
  if (log2 === 0) {
    log1 = Math.floor(Math.random() * 3);
  } else if (log2 === 1) {
    log1 = Math.floor(Math.random() * 2);
  } else if (log2 === 2) {
    log1 = Math.floor(Math.random() * 3);
    while (log1 === 1) {
      log1 = Math.floor(Math.random() * 3);
    }
  }
}

function Randomize0() {
  if (log1 === 0) {
    log0 = Math.floor(Math.random() * 3);
  } else if (log1 === 1) {
    log0 = Math.floor(Math.random() * 2);
  } else if (log1 === 2) {
    log0 = Math.floor(Math.random() * 3);
    while (log0 === 1) {
      log0 = Math.floor(Math.random() * 3);
    }
  }
}

function dec(log) {
  if (log === 0) {
    return "noStick";
  } else if (log === 1) {
    return "leftStick";
  } else {
    return "rightStick";
  }
}

function moveLogs() {
  document.getElementById("logs5").removeAttribute("class");
  log5 = log4;
  document.getElementById("logs4").removeAttribute("class");
  log4 = log3;
  document.getElementById("logs3").removeAttribute("class");
  log3 = log2;
  document.getElementById("logs2").removeAttribute("class");
  log2 = log1;
  document.getElementById("logs1").removeAttribute("class");
  log1 = log0;
  document.getElementById("logs0").removeAttribute("class");
  Randomize0();
  for (let i = 0; i < 6; i++) {
    let logs = document.getElementById(`logs${i}`);
    logs.classList.remove(dec(eval(`log${i}`)));
    logs.classList.add(dec(eval(`log${i}`)));
  }
  score++;
  document.getElementById("score").innerHTML = score;
}

document.body.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "a") {
    cutDown();
    leftSide();
    moveLogs();
  }
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "d") {
    cutDown();
    rightSide();
    moveLogs();
  }
});

function leftSide() {
  document.getElementById("dude").classList.remove("right");
  document.getElementById("dude").classList.add("left");
  side = "left";
}

function rightSide() {
  document.getElementById("dude").classList.remove("left");
  document.getElementById("dude").classList.add("right");
  side = "right";
}

function cutDown() {
  if (side === "right" && log5 === 2) {
    lose();
  } else if (side === "left" && log5 === 1) {
    lose();
  }
}

function lose() {
  score = 0;
}

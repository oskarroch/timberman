let log0;
let log1;
let log2;
let log3;
let log4;
let log5;
let side;
let score = 0;
let lost = false;

document.addEventListener("DOMContentLoaded", () => {
  generateStartingTree();
  leftSide();
});

function generateStartingTree() {
  document.getElementById("logs5").removeAttribute("class");
  document.getElementById("logs4").removeAttribute("class");
  document.getElementById("logs3").removeAttribute("class");
  document.getElementById("logs2").removeAttribute("class");
  document.getElementById("logs1").removeAttribute("class");
  document.getElementById("logs0").removeAttribute("class");
  log2 = Math.floor(Math.random() * 3);
  log3 = 0;
  log4 = 0;
  log5 = 0;
  Randomize1();
  Randomize0();
  for (let i = 0; i < 6; i++) {
    let logs = document.getElementById(`logs${i}`);
    logs.classList.remove(dec(eval(`log${i}`)));
    logs.classList.add(dec(eval(`log${i}`)));
  }
}

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
  cutDown();
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
  if (lost != true) {
    if (e.key === "ArrowRight" || e.key === "d") {
      rightSide();
      moveLogs();
    } else if (e.key === "ArrowLeft" || e.key === "a") {
      leftSide();
      moveLogs();
    }
  }
});

document.body.addEventListener("keyup", (e) => {
  cutDown();
});

function leftSide() {
  cutDown();
  side = "left";
  document.getElementById("dude").classList.remove("right");
  document.getElementById("dude").classList.add("left");
}

function rightSide() {
  cutDown();
  side = "right";
  document.getElementById("dude").classList.remove("left");
  document.getElementById("dude").classList.add("right");
}

function cutDown() {
  if (side === "right" && log5 === 2) {
    lose();
  } else if (side === "left" && log5 === 1) {
    lose();
  }
}

function lose() {
  document.getElementById("loseScreen").classList.add("lost");
  lost = true;
}

document.getElementById("reset").onclick = () => {
  resetGame();
};

function resetGame() {
  score = 0;
  document.getElementById("score").innerHTML = score;
  document.getElementById("loseScreen").classList.remove("lost");
  generateStartingTree();
  lost = false;
}

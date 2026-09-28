// const exceptEL = new Set(["0,0", "0,1", "1,0"])
let orig = [
  ["H", 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
let finish = false;
let started = false;
function displayb() {
  let addtiles = "";
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (orig[r][c] === "H") {
        addtiles += `<div class="tiles"><h3 style=" color:white; text-align:center;">H</h3></div>`;
      } else if (orig[r][c] === "P") {
        addtiles += `<div class="biles"></div>`;
      } else if (orig[r][c] === "PW") {
        addtiles += `<div class="biles"></div>`;
      } else if (orig[r][c] === "W") {
        addtiles += `<div class="biles"></div>`;
      } else if (orig[r][c] === "G") {
        addtiles += `<div class="biles"></div>`;
      } else {
        addtiles += `<div class="biles"></div>`;
      }
    }
  }
  document.getElementById("board").innerHTML = addtiles;
}
pitgenerate();
wumpusgenerate();
goldgenerator();
// addtiles[0][0]=`<div class="tiles" style="  background-position: ${-0 * 123.4}px ${-0 * 123.4}px"><h3 style=" color:white; text-align:center;">H</h3></div>`;
displayb();
let gold = false;
let r = 0,
  c = 0;
function play(move) {
  if (move === "ArrowUp") {
    if (r > 0) {
      if (
        orig[r - 1][c] === "P" ||
        orig[r - 1][c] === "PW" ||
        orig[r - 1][c] === "W"
      ) {
        orig[r - 1][c] = "H";
        orig[r][c] = 0;
        r = r - 1;
        finish = true;
      } else if (orig[r - 1][c] === "G") {
        gold = true;
        document.getElementById("out").textContent =
          "Gold collected! Return to your starting square.";
        orig[r - 1][c] = "H";
        orig[r][c] = 0;
        r = r - 1;
      } else {
        orig[r - 1][c] = "H";
        orig[r][c] = 0;
        r = r - 1;
      }
    }
  } else if (move === "ArrowDown") {
    if (r < 3) {
      if (
        orig[r + 1][c] === "P" ||
        orig[r + 1][c] === "PW" ||
        orig[r + 1][c] === "W"
      ) {
        orig[r + 1][c] = "H";
        orig[r][c] = 0;
        r = r + 1;
        finish = true;
      } else if (orig[r + 1][c] === "G") {
        gold = true;
        document.getElementById("out").textContent =
          "Gold collected! Return to your starting square.";
        orig[r + 1][c] = "H";
        orig[r][c] = 0;
        r = r + 1;
      } else {
        orig[r + 1][c] = "H";
        orig[r][c] = 0;
        r = r + 1;
      }
    }
  } else if (move === "ArrowLeft") {
    if (c > 0) {
      if (
        orig[r][c - 1] === "P" ||
        orig[r][c - 1] === "PW" ||
        orig[r][c - 1] === "W"
      ) {
        orig[r][c - 1] = "H";
        orig[r][c] = 0;
        c = c - 1;
        finish = true;
      } else if (orig[r][c - 1] === "G") {
        gold = true;
        document.getElementById("out").textContent =
          "Gold collected! Return to your starting square.";
        orig[r][c - 1] = "H";
        orig[r][c] = 0;
        c = c - 1;
      } else {
        orig[r][c - 1] = "H";
        orig[r][c] = 0;
        c = c - 1;
      }
    }
  } else if (move === "ArrowRight") {
    if (c < 3) {
      if (
        orig[r][c + 1] === "P" ||
        orig[r][c + 1] === "PW" ||
        orig[r][c + 1] === "W"
      ) {
        orig[r][c + 1] = "H";
        orig[r][c] = 0;
        c = c + 1;
        finish = true;
      } else if (orig[r][c + 1] === "G") {
        gold = true;
        document.getElementById("out").textContent =
          "Gold collected! Return to your starting square.";
        orig[r][c + 1] = "H";
        orig[r][c] = 0;
        c = c + 1;
      } else {
        orig[r][c + 1] = "H";
        orig[r][c] = 0;
        c = c + 1;
      }
    }
  } else if (move === "A" || move === "a") {
    let angle = prompt("Decide the angle of human to Kill Wumpus");
    kill(angle);
  }
}
Pinfo();
Ginfo();
Winfo();
mixInfo();
// function check() {
//     if (orig[r][c] === "P") {
//         document.getElementById("output").innerHTML = "You fell into Pittttttttttttt";
//     }
//     if (orig[r][c] === "W") {
//         document.getElementById("output").innerHTML = "You died by Wumpusssssssssssss";
//     }
//     if (orig[r][c] === "G") {
//         document.getElementById("output").innerHTML = "You found Goldddddd";
//     }
//     return false;

// }

function pitgenerate() {
  for (let i = 0; i < 3; i++) {
    let x = Math.floor(Math.random() * 4);
    let y = Math.floor(Math.random() * 4);
    // document.getElementById("display").innerHTML = `<h4>x</h4>`
    // console.log(x);
    if (orig[x][y] === "H") {
      i--;
      // console.log(i);
      // document.getElementById("display").innerHTML = `<h4>x</h4>`
    } else {
      orig[x][y] = "P";
    }
  }
}
function wumpusgenerate() {
  for (let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * 4);
    let y = Math.floor(Math.random() * 4);
    if (orig?.[x]?.[y] === "H" || orig?.[x]?.[y] === "G") {
      i--;
    } else if (orig?.[x]?.[y] === "P") {
      orig[x][y] = "PW";
    } else {
      orig[x][y] = "W";
    }
  }
}

function goldgenerator() {
  for (let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * 4);
    let y = Math.floor(Math.random() * 4);
    if (
      orig?.[x]?.[y] === "H" ||
      orig?.[x]?.[y] === "W" ||
      orig[x][y] === "PW" ||
      orig[x][y] === "W"
    ) {
      i--;
    } else {
      orig[x][y] = "G";
    }
  }
}
function Winfo() {
  if (
    orig?.[r + 1]?.[c] === "W" ||
    orig?.[r - 1]?.[c] === "W" ||
    orig?.[r]?.[c + 1] === "W" ||
    orig?.[r]?.[c - 1] === "W"
  ) {
    document.getElementById("display").innerHTML = `<h4>Stench</h4>`;
  }
}

function Ginfo() {
  if (
    orig?.[r + 1]?.[c] === "G" ||
    orig?.[r - 1]?.[c] === "G" ||
    orig?.[r]?.[c + 1] === "G" ||
    orig?.[r]?.[c - 1] === "G"
  ) {
    document.getElementById("display").innerHTML = `<h4>Sparkle</h4>`;
  }
}
function mixInfo() {
  if (
    (orig?.[r + 1]?.[c] === "PW" ||
      orig?.[r]?.[c + 1] === "PW" ||
      orig?.[r]?.[c - 1] === "PW" ||
      orig?.[r - 1]?.[c] === "PW") &&
    (orig?.[r + 1]?.[c] === "G" ||
      orig?.[r - 1]?.[c] === "G" ||
      orig?.[r]?.[c + 1] === "G" ||
      orig?.[r]?.[c - 1] === "G") &&
    (orig?.[r + 1]?.[c] === "W" ||
      orig?.[r - 1]?.[c] === "W" ||
      orig?.[r]?.[c + 1] === "W" ||
      orig?.[r]?.[c - 1] === "W") &&
    (orig?.[r + 1]?.[c] === "P" ||
      orig?.[r - 1]?.[c] === "P" ||
      orig?.[r]?.[c + 1] === "P" ||
      orig?.[r]?.[c - 1] === "P")
  ) {
    document.getElementById("display").innerHTML =
      `<h4>Breeze,Stench,Sparkle</h4>`;
  } else if (
    (orig?.[r + 1]?.[c] === "PW" ||
      orig?.[r]?.[c + 1] === "PW" ||
      orig?.[r]?.[c - 1] === "PW" ||
      orig?.[r - 1]?.[c] === "PW") &&
    (orig?.[r + 1]?.[c] === "G" ||
      orig?.[r - 1]?.[c] === "G" ||
      orig?.[r]?.[c + 1] === "G" ||
      orig?.[r]?.[c - 1] === "G")
  ) {
    document.getElementById("display").innerHTML =
      `<h4>Breeze,Stench,Sparkle</h4>`;
  } else if (
    (orig?.[r + 1]?.[c] === "G" ||
      orig?.[r - 1]?.[c] === "G" ||
      orig?.[r]?.[c + 1] === "G" ||
      orig?.[r]?.[c - 1] === "G") &&
    (orig?.[r + 1]?.[c] === "W" ||
      orig?.[r - 1]?.[c] === "W" ||
      orig?.[r]?.[c + 1] === "W" ||
      orig?.[r]?.[c - 1] === "W")
  ) {
    document.getElementById("display").innerHTML = `<h4>Stench,Sparkle</h4>`;
  } else if (
    (orig?.[r + 1]?.[c] === "W" ||
      orig?.[r - 1]?.[c] === "W" ||
      orig?.[r]?.[c + 1] === "W" ||
      orig?.[r]?.[c - 1] === "W") &&
    (orig?.[r + 1]?.[c] === "P" ||
      orig?.[r - 1]?.[c] === "P" ||
      orig?.[r]?.[c + 1] === "P" ||
      orig?.[r]?.[c - 1] === "P")
  ) {
    document.getElementById("display").innerHTML = `<h4>Breeze,Stench</h4>`;
  } else if (
    (orig?.[r + 1]?.[c] === "G" ||
      orig?.[r - 1]?.[c] === "G" ||
      orig?.[r]?.[c + 1] === "G" ||
      orig?.[r]?.[c - 1] === "G") &&
    (orig?.[r + 1]?.[c] === "P" ||
      orig?.[r - 1]?.[c] === "P" ||
      orig?.[r]?.[c + 1] === "P" ||
      orig?.[r]?.[c - 1] === "P")
  ) {
    document.getElementById("display").innerHTML = `<h4>Breeze,Sparkle</h4>`;
  } else if (
    (orig?.[r + 1]?.[c] === "PW" ||
      orig?.[r]?.[c + 1] === "PW" ||
      orig?.[r]?.[c - 1] === "PW" ||
      orig?.[r - 1]?.[c] === "PW") &&
    (orig?.[r + 1]?.[c] === "W" ||
      orig?.[r - 1]?.[c] === "W" ||
      orig?.[r]?.[c + 1] === "W" ||
      orig?.[r]?.[c - 1] === "W")
  ) {
    document.getElementById("display").innerHTML = `<h4>Breeze,Stench</h4>`;
  } else if (
    (orig?.[r + 1]?.[c] === "PW" ||
      orig?.[r]?.[c + 1] === "PW" ||
      orig?.[r]?.[c - 1] === "PW" ||
      orig?.[r - 1]?.[c] === "PW") &&
    (orig?.[r + 1]?.[c] === "P" ||
      orig?.[r - 1]?.[c] === "P" ||
      orig?.[r]?.[c + 1] === "P" ||
      orig?.[r]?.[c - 1] === "P")
  ) {
    document.getElementById("display").innerHTML = `<h4>Breeze,Stench</h4>`;
  }
}
function kill(angle) {
  if (angle == "r" || angle == "R") {
    if (orig[r][c + 1] == "W" || orig[r][c + 1] == "PW") {
      alert("Hurrayyyy! You killed it.");
      if (orig[r][c + 1] == "W") {
        orig[r][c + 1] = "0";
      } else if (orig[r][c + 1] == "PW") {
        orig[r][c + 1] = "0";
      }
    }
  } else if (angle === "l" || angle === "L") {
    if (orig?.[r]?.[c - 1] === "W" || orig[r][c - 1] === "PW") {
      alert("Hurrayyyy! You killed it.");
      if (orig[r][c - 1] == "W") {
        orig[r][c - 1] = "0";
      } else if (orig[r][c - 1] == "PW") {
        orig[r][c - 1] = "0";
      }
    }
  } else if (angle === "d" || angle === "D") {
    if (orig[r + 1][c] === "W" || orig[r + 1][c] === "PW") {
      alert("Hurrayyyy! You killed it.");
      if (orig[r + 1][c] == "W") {
        orig[r + 1][c] = "0";
      } else if (orig[r + 1][c] == "PW") {
        orig[r + 1][c] = "0";
      }
    }
  } else if (angle === "u" || angle === "U") {
    if (orig?.[r - 1]?.[c] === "W" || orig[r - 1][c] === "PW") {
      alert("Hurrayyyy! You killed it.");
      if (orig[r - 1][c] == "W") {
        orig[r - 1][c] = "0";
      } else if (orig[r - 1][c] == "PW") {
        orig[r - 1][c] = "0";
      }
    }
  } else {
    alert("Uhhhh! You missed it.");
  }
}

function Pinfo() {
  if (
    orig?.[r + 1]?.[c] === "P" ||
    orig?.[r - 1]?.[c] === "P" ||
    orig?.[r]?.[c + 1] === "P" ||
    orig?.[r]?.[c - 1] === "P"
  ) {
    document.getElementById("display").innerHTML = `<h4>Breeze</h4>`;
  } else if (
    orig?.[r + 1]?.[c] === "PW" ||
    orig?.[r - 1]?.[c] === "PW" ||
    orig?.[r]?.[c + 1] === "PW" ||
    orig?.[r]?.[c - 1] === "PW"
  ) {
    document.getElementById("display").innerHTML = `<h4>Breeze,Stench</h4>`;
  } else {
    document.getElementById("display").innerHTML = `<h4>Safe</h4>`;
  }
}

function win() {
  if (orig[0][0] == "H" && gold == true) {
    document.getElementById("out").textContent =
      "WON with gold! Congratulations!";
    finish = true;
    return;
  }
}

document.getElementById("startGame").addEventListener("click", function () {
  started = true;
  document.getElementById("rulesOverlay").hidden = true;
});

document.addEventListener("keydown", function (event) {
  if (!started || finish) {
    return;
  }
  const move = event.key;
  play(move);
  displayb();
  Pinfo();
  Ginfo();
  Winfo();
  mixInfo();
  win();

  if (finish) {
    document.getElementById("display").innerHTML = `<h4>End</h4>`;
    return;
  }
});

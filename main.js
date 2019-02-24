var players = {
  player1: 1,
  player2: 1,
  player3: 1,
  player4: 1
};

function pickQuestion() {
  var randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber == 1) {
    alert("green , star performer ! click OK to start timer");
    setTimeout(handleQuestion, 3000);
  } else if (randomNumber == 2) {
    alert("red, data head ! click OK to start timer");
    setTimeout(handleQuestion, 3000);
  } else if (randomNumber == 3) {
    alert("blue, creative cat!! click OK to start timer");
    setTimeout(handleQuestion, 3000);
  } else {
    alert("yellow, word worm! click OK to start timer");
    setTimeout(handleQuestion, 3000);
  }
}

function handleQuestion() {
  confirm("do you get this right?");
  players.player1++;
  movePlayer();
}
// pick player1
// pick random color
// ask if got right if yes move forward if no stay still
// repeat
function movePlayer() {
  document.getElementsByClassName("player1")[0].classList.remove("player1");
  document.getElementById("stage" + players.player1).classList.add("player1");
  //   var move = document.getElementById("stage" + players.player1);
  //   console.log(move);
}
// removing player 1 from the board,
// move it once space forward

// .classList shows list of classes

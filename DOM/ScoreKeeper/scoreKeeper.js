alert("CONNECTED");

// GETTING ALL THE ID'S FRMO THE HTML FILE
var p1ScoreID = document.querySelector("#p1Score");
var p2ScoreID = document.querySelector("#p2Score");
var inputTypeID = document.getElementById("numberInput");
var winningScoreDisplay = document.querySelector("h4 span");
var player1BtnID = document.getElementById("p1Btn");
var player2BtnID = document.getElementById("p2Btn");
var resetBtnID = document.getElementById("resetBtn");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// LISTENER FOR OUR BUTTONS
player1BtnID.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1ScoreID.classList.add("winner");
      gameOver = true;
    }
    p1ScoreID.textContent = p1Score;
  }
});

player2BtnID.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2ScoreID.classList.add("winner");
      gameOver = true;
    }
    p2ScoreID.textContent = p2Score;
  }
});

function reset(){

    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1ScoreID.textContent = "0";
    p2ScoreID.textContent = "0";
    p1ScoreID.classList.remove("winner");
    p2ScoreID.classList.remove("winner");
}

// EVENT LISTENER FOR THE RESET BUTTON
resetBtnID.addEventListener("click", reset);

// SETTING THE INPUT TYPE NUMBER AS THE HIGHEST TO BE 7
inputTypeID.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

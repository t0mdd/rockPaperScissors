const moves = ["Rock","Paper","Scissors"];

const outcomes = {win: "WINNER WINNER CHICKEN DINNER",
                  draw: "ITS A DRAW NOT GOOD NOT BAD EVERYONES A WINNER AND NOONES A WINNER IT IS WHAT IT IS",
                  lose: "YOU LOSE. gOOd dAY SIR"};

function random(n){
  return Math.floor(Math.random()*n);
}

function moveCode(move){
  switch(move.toLowerCase()){
    case "rock": return 0;
    case "paper": return 1;
    case "scissors": return 2;
    default: console.error("Invalid move. Type either Rock, Paper, or Scissors");
  }
}

function computerPlay(){
  return moves[random(3)];
}

function playSingleRound(playerSelection, computerSelection){
  playerSelectionCode = moveCode(playerSelection);
  computerSelectionCode = moveCode(computerSelection);
  return (playerSelectionCode == computerSelectionCode) ? outcomes.draw :
    ((computerSelectionCode + 1)%3 == playerSelectionCode) ? outcomes.win :
    outcomes.lose;
}

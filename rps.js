const moves = ["Rock","Paper","Scissors"];

const outcomes = {win: "YOU WON THIS ROUND",
                  draw: "THIS ROUND WAS A DRAW",
                  lose: "YOU LOST DIS ROUND"};

function random(n){
  return Math.floor(Math.random()*n);
}

function moveCode(move){
  switch(move.toLowerCase()){
    case "rock": return 0;
    case "paper": return 1;
    case "scissors": return 2;
  }
}

function moveIsValid(move){
  return moves.map(m=>m.toLowerCase()).includes(move.toLowerCase());
}

function computerPlay(){
  return moves[random(3)];
}

function playSingleRound(playerSelection, computerSelection){
  playerSelectionCode = moveCode(playerSelection);
  computerSelectionCode = moveCode(computerSelection);
  return (playerSelectionCode == computerSelectionCode) ? "draw" :
    ((computerSelectionCode + 1)%3 == playerSelectionCode) ? "win" :
    "lose";
}

function game(){
  let playerScore = 0;
  let computerScore = 0;
  for(let i=0; i < 5; i++){
    let playerMove;
    let validMoveChosen = false;
    while(!validMoveChosen){
      playerMove = prompt("ENTER YOUR NEXT MOVE: ");
      if(moveIsValid(playerMove)){
        validMoveChosen = true;
      }
      else{
        console.error("Invalid move. Choose either Rock, Paper, or Scissors");
      }
    }
    switch(playSingleRound(playerMove, computerPlay())){
      case "win":
      console.log(outcomes.win);
      playerScore++;
      break;
      
      case "draw":
      console.log(outcomes.draw);
      break;

      case "lose":
      console.log(outcomes.lose);
      computerScore++;
      break;
      
      default:
      console.error("Invalid return from playSingleRound");
    }
  }
  if(playerScore > computerScore){
    console.log("WINNER WINNER CHICKEN DINNER YOU WON DA GAME");
  }
  else if(playerScore == computerScore){
    console.log("ITS A DRAW NOT GOOD NOT BAD EVERYONES A WINNER AND NOONES A WINNER IT IS WHAT IT IS");
  }
  else{
    console.log("YOU LOSE. gOOd dAY SIR");
  }
}

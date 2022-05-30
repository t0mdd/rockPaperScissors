const moves = ["Rock","Paper","Scissors"];

const roundOutcomes = {win: "YOU WON THIS ROUND",
                  draw: "THIS ROUND WAS A DRAW",
                  lose: "YOU LOST DIS ROUND"};

const gameOutcomes = {
  win: "WINNER WINNER CHICKEN DINNER YOU WON DA GAME",
  lose: "YOU LOSE!!! gOOd dAY SIR!!"
}

const gameInfo = document.querySelector('.gameInfo');
const playerScoreSpan = document.querySelector('.playerScore');
const computerScoreSpan = document.querySelector('.computerScore');

const buttons = document.querySelectorAll('button');
buttons.forEach(b=>b.addEventListener('click',()=>
                                      playSingleRound(b.id)));

let playerScore = 0;
let computerScore = 0;

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

function resetScores(){
  playerScore = 0;
  computerScore = 0;
}

function updateScores(outcome){
  if (outcome === "win") playerScore++;
  if (outcome === "lose") computerScore++;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  gameInfo.textContent += `${roundOutcomes[outcome]}. `;
  if(playerScore === 5 || computerScore === 5){  
    gameInfo.textContent += 
      (playerScore === 5) ? gameOutcomes.win : gameOutcomes.lose +
      ". Click any button to play again";
    resetScores();
  }
}

function playSingleRound(playerSelection){
  let computerSelection = computerPlay().toLowerCase();
  playerSelectionCode = moveCode(playerSelection);
  computerSelectionCode = moveCode(computerSelection);
  gameInfo.textContent = `You played ${playerSelection} and the ` + 
    `computer played ${computerSelection}. `;
  result =  (playerSelectionCode == computerSelectionCode) ? "draw" :
    ((computerSelectionCode + 1)%3 == playerSelectionCode) ? "win" :
    "lose";
  
  updateScores(result);
}

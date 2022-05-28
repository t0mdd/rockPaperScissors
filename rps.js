const outcomes = ["RACK","PAYPA","SIZZA"];

function random(n){
  return Math.floor(Math.random()*n);
}

function computerPlay(){
  return outcomes[random(3)];
}

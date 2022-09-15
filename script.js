function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[choice].toLowerCase();
}

function getPlayerChoice() {
  let choice = prompt("Choose Rock, Paper, or Scissors");
  return choice.toLowerCase();
}

function playRound(playerChoice, computerChoice) {
  if (computerChoice === playerChoice) {
    console.log(`Tie game! ${playerChoice} ties ${computerChoice}`);
    return null;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    return true;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    return false;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    return true;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    return false;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    return true;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    return false;
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    let userWin = playRound(getPlayerChoice(), getComputerChoice());
    if (userWin === null) {
      continue;
    }
    userWin === true ? userScore++ : computerScore++;
  }
  userScore === computerScore
    ? console.log(
        `Tie! Your score: ${userScore} Computer Score: ${computerScore}`
      )
    : userScore > computerScore
    ? console.log(
        `You win! Your score: ${userScore} Computer Score: ${computerScore}`
      )
    : console.log(
        `You lose! Your score: ${userScore} Computer Score: ${computerScore}`
      );
}

game();

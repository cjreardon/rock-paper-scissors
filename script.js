function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[choice];
}

// // function getPlayerChoice() {
// //   let choice = prompt("Choose Rock, Paper, or Scissors");
// //   return choice.toLowerCase();
// // }

function playRound(playerChoice, computerChoice) {
  if (computerChoice === playerChoice) {
    return [`Tie! ${playerChoice} ties ${computerChoice}`, null];
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return [`You win this round! ${playerChoice} beats ${computerChoice}`, true];
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    return [`You lose this round! ${computerChoice} beats ${playerChoice}`, false];
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    return [`You win this round! ${playerChoice} beats ${computerChoice}`, true];
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    return [`You lose this round! ${computerChoice} beats ${playerChoice}`, false];
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return [`You win this round! ${playerChoice} beats ${computerChoice}`, true];
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    return [`You lose this round! ${computerChoice} beats ${playerChoice}`, false];
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  const elements = document.querySelectorAll(".btn");
  const result = document.querySelector(".results");
  elements.forEach((element) => {
    element.addEventListener("click", function handleClick(e) {
      roundResult = playRound(
        e.target.innerText,
        getComputerChoice()
      );
      if (roundResult[1] === true) {
        userScore++;
      } else if (roundResult[1] === false) {
        computerScore++;
      }
      if(userScore == 5){
        result.innerText = `Game Over! You win!\n Player: ${userScore} Computer: ${computerScore}`;
        userScore = 0;
        computerScore = 0;
        return;
      }
      if(computerScore == 5){
        result.innerText = `Game Over! You lose!\n Player: ${userScore} Computer: ${computerScore}`;
        userScore = 0;
        computerScore = 0;
        return;
      }
      result.innerText =
        roundResult[0] +
        `. The current score is:\n Player: ${userScore} Computer: ${computerScore}`;
    });
  });
}

// function game() {
//   let userScore = 0;
//   let computerScore = 0;
//for (i = 0; i < 5; i++) {
//   let userWin = playRound(getPlayerChoice(), getComputerChoice());
//   if (userWin === null) {
//     continue;
//   }
//   userWin === true ? userScore++ : computerScore++;
// }
//   userScore === computerScore
//     ? console.log(
//         `Tie! Your score: ${userScore} Computer Score: ${computerScore}`
//       )
//     : userScore > computerScore
//     ? console.log(
//         `You win! Your score: ${userScore} Computer Score: ${computerScore}`
//       )
//     : console.log(
//         `You lose! Your score: ${userScore} Computer Score: ${computerScore}`
//       );
// }

game();

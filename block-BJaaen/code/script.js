function main() {
    let yourTurn = document.querySelectorAll(".you > .symbols > i");
    let computerTurn = document.querySelectorAll(".computer > .symbols > i");
    let message = document.querySelector("p");
    let yourScore = document.querySelector(".your-score");
    let computerScore = document.querySelector(".computer-score");
    let resetBtn = document.querySelector("button");
  
    function decision(event, turn) {
      let yourChoice = event.target.dataset.text;
      let computerChoice = computerTurn[turn].dataset.text;
  
      if (yourChoice === computerChoice) {
        message.innerText = `It's a tie!`;
      } else if (yourChoice === "rock") {
        computerChoice === "scissors" || computerChoice === "lizard"
          ? (message.innerText = "You Won!")
          : (message.innerText = "You Lose!");
      } else if (yourChoice === "paper") {
        computerChoice === "rock" || computerChoice === "spock"
          ? (message.innerText = "You Won!")
          : (message.innerText = "You Lose!");
      } else if (yourChoice === "scissors") {
        computerChoice === "paper" || computerChoice === "lizard"
          ? (message.innerText = "You Won!")
          : (message.innerText = "You Lose!");
      } else if (yourChoice === "lizard") {
        computerChoice === "paper" || computerChoice === "spock"
          ? (message.innerText = "You Won!")
          : (message.innerText = "You Lose!");
      } else if (yourChoice === "spock") {
        computerChoice === "scissors" || computerChoice === "rock"
          ? (message.innerText = "You Won!")
          : (message.innerText = "You Lose!");
      }
    }
  
    yourTurn.forEach((option, index) => {
      option.addEventListener("click", (event) => {
        let turn = Math.floor(Math.random() * 5);
  
        yourTurn.forEach((elem) => {
          elem.style.color = "green";
          elem.style.fontSize = "4rem";
        });
  
        computerTurn.forEach((elem) => {
          elem.style.color = "#228efa";
          elem.style.fontSize = "4rem";
        });
  
        yourTurn[index].style.color = "orange";
        yourTurn[index].style.fontSize = "4rem";
  
        computerTurn[turn].style.color = "orange";
        computerTurn[turn].style.fontSize = "4rem";
  
        decision(event, turn);
  
        if (message.innerText === "You Won!") {
          yourScore.innerText = Number(yourScore.innerText) + 1;
        } else if (message.innerText === "You Lose!") {
          computerScore.innerText = Number(computerScore.innerText) + 1;
        }
      });
    });
  
    resetBtn.addEventListener("click", () => {
      yourScore.innerText = 0;
      computerScore.innerText = 0;
  
      resetBtn.style.backgroundColor = "lightgray";
      setTimeout(() => {
        resetBtn.style.backgroundColor = "gray";
      }, 250);
  
      yourTurn.forEach((elem) => {
        elem.style.color = "green";
        elem.style.fontSize = "4rem";
      });
  
      computerTurn.forEach((elem) => {
        elem.style.color = "#228efa";
        elem.style.fontSize = "4rem";
      });
  
      message.innerText = `Let's Play!`;
    });
  }
  
  main();




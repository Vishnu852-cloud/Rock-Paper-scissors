let userScore = 0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const  genCompChoice = () => {
    const options = ["rock" ,"paper", "Scissors"];  
    const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
};

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game draw. play again";
    msg.style.backgroundColor = "pink";
}

const showWinner = (userWin, userChoice ,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`; //paper rock
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText =  `you lose.  ${compChoice} beats Your ${userChoice}`;  // paper sciser
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();

    }else {
        let userWin = true;
        if( userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;

        } else if(userChoice ==="paper"){
            userWin = compChoice ==="Scissors" ? false : true;
        } else {
            userWin = compChoice==="rock" ? false :true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};


choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice =  choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
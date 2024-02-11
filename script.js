let userScore = 0;
let compScore = 0; 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const ussc = document.querySelector("#user-score");
const cosc = document.querySelector("#comp-score");

let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    ussc.innerText = userScore;
    cosc.innerText = compScore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";
});

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const showWinner = (userWin,user,comp) =>{
    if(userWin){
        userScore++;
        ussc.innerText = userScore;
        console.log("You Won !");
        msg.innerText =`You Won!, Your ${user} beats ${comp}`
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        cosc.innerText = compScore;
        console.log("You lose");
        msg.innerText =`You Lose!, ${comp} beats your ${user}`
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice:",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice:",compChoice);

    if(userChoice===compChoice){
        console.log("Game was Draw.");
        msg.style.backgroundColor = "#923cf4"
        msg.innerText = `Game Draw, Play Again`;
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper"? false:true;
        }
        else if(userChoice=== "paper"){
            userWin = compChoice === "scissors"?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.querySelector("img").getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let msg= document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");




const genCompChoice = ()=>{
    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random()*3);

    return options[randIdx];
};

const drawGame =()=>{
    msg.innerText="Game was draw. Play Again";
    msg.style.backgroundColor="#081b31";
};





const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`you win, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText=`you lost, Your ${userChoice} lost with ${compChoice}`;
        msg.style.backgroundColor="red";
    }
};



const playGame= (userChoice)=>{
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;

        if(userChoice==="rock"){
            userWin= compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin= compChoice==="scissors" ? false : true;
        }else{
            userWin = compChoice==="rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};
//1 choice ka eventlistener add kora

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

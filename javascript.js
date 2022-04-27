/*getting info about what did player choose */
let choices=document.querySelectorAll('.choice');
choices.forEach((choice)=>{
    choice.addEventListener('click',(e)=>{game(e);updateScreen(e)})
                            })
let pSChoice="";
let cSChoice="";
let playerScore=0;
let computerScore=0;
let round=0;
let result="";
let finalResult="";
function initialisation(){
    computerScore=0;
    playerScore=0;
    round=0;
    finalResult="";
}
function computerChoice() {
    let random = Math.floor(Math.random()*30/10)/**idk but *30/10 worked 
    gave better randomness than *3 */
    if(random==0){ return "rock"}
    else if(random==1){ return "paper"}
    else { return "scissor"}
}
function game(e){
    if(round==5){initialisation()}
    pSChoice=e.target.id;
    cSChoice=computerChoice();
    if(cSChoice===pSChoice){ result="It is a tie , ouff!!"}
    else if(cSChoice==="scissor" && pSChoice==="paper"|| cSChoice==="paper" && pSChoice==="rock"|| cSChoice==="rock" && pSChoice==="scissor"){
        computerScore++;
        result="the Computer won this Round";
    }
    else {
        playerScore++;
        result="You have Won this Round , Amazing";
    }
    round++;
    if(round==5){
        if(computerScore>playerScore){
            finalResult= result + " and it is the Final, sadly the Computer won with "+computerScore +" & Your Score is "+playerScore;
        }
        else if(playerScore>computerScore){
            finalResult= result + " and it is the Final, and Damn you destroyed the computer with "+playerScore +" & and Computer score is "+computerScore;
        }
        else { finalResult= result + "and it is the Final, ouff! its a tie. Your Score is "+ playerScore + " & Computer Score is " + computerScore;
        }
    }
     
}
function updateScreen(e){
    const roundNumber=document.querySelector('#roundNumber');
    roundNumber.textContent=round;
    const pScore=document.querySelector('#playerScore');
    pScore.textContent=playerScore;
    const cScore=document.querySelector('#computerScore');
    cScore.textContent=computerScore;
    const fBack=document.querySelector('#feedbacktext');
    fBack.textContent=(round==5)?finalResult:result;
    /**showing the chosen rps by player */
    const playerChoiceImg=document.querySelector('#pChoiceimg');
    if(e.target.id=="rock"){playerChoiceImg.src="./images/Rock.png";}
    else if(e.target.id=="scissor"){playerChoiceImg.src="./images/Scissor.png";}
    else if(e.target.id=="paper"){playerChoiceImg.src="./images/images.png";}
    /**showing the chosen rps by computer */
    const computerChoiceImg= document.querySelector('#cChoiceimg');
    if(cSChoice=="rock"){computerChoiceImg.src="./images/Rock.png";}
    else if(cSChoice=="scissor"){computerChoiceImg.src="./images/Scissor.png";}
    else if(cSChoice=="paper"){computerChoiceImg.src="./images/images.png";}
    
}





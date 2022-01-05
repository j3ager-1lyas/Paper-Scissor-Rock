// this function is to create the playing computer //
let playerSelection="";
let computerwins=playerwins=0;
function computerPlay() {
    let computerchoice=Math.floor(Math.random()*3);
    if (computerchoice == 2) {
        return "rock";
    } else if (computerchoice == 1) {
        return "scissor";
    }
    else {
        return "paper";
    }
}

function Playround(player1=playerSelection,player2=computerPlay()) {
    if (player1 == "rock" && player2 == "scissor" || player1 == "scissor" && player2 == "paper" || player1=="paper" && player2=="rock") {
        playerwins++;
        return "Congratulation You Win this round "+player1+" beats "+player2;
        
    } else if (player1 == player2) {
        return "Its a Tie you both choosed " + player1;
    }
    else {
        computerwins++;
        return " OMG! the AI is already taking over the World , " +player2 + " beats "+player1+" try harder next round";
        
    }
}
function game() {//this function starts the game//
    playerwins=computerwins=0;//initialize playerswinnableround every new game.//
    for(i=1;i<=5;i++){
        playerSelection=(prompt('Rounds left '+(5-i),'Enter your choice,rock,scissor or paper')).toLowerCase();
        //test if playerSelection is right//
        if(playerSelection == "scissor" || playerSelection ==  "rock" || playerSelection == "paper") {
            console.log(Playround(playerSelection,computerPlay()));
        }
        else { 
            console.log("the choice you inputed is not (rock,paper or scissor) please retry")
            i--;
        }
    }
    if(playerwins>computerwins){
        return "You have won it looks as if Humans still have hope against AI\n Computer "+computerwins+" points , You "+playerwins+" points." 
    }
    else if (playerwins<computerwins ) {
    return " You have lost, the AI took over Humanity. Computer " +computerwins+" points, You "+playerwins+" points."
    }
    else { return " Ouff! that was close, Its a Tie! \n Computer "+computerwins+" points, You "+ playerwins+" points"}
}


let humanPlayer="";
let computerPlayer="",results="";


const humanRock= document.querySelector("#rock")
const humanPaper= document.querySelector("#paper");
const humanScissor= document.querySelector("#scissor");
let output=document.querySelector("#resultoutput");
let computerwins=0,playerwins=0;
humanRock.addEventListener('click', function(event){ 
    humanPlayer="Rock";
    output.textContent=Winner();;});
humanPaper.addEventListener('click', function(event){
    humanPlayer="Paper";
    output.textContent=Winner();});
humanScissor.addEventListener('click',function(event){ 
    humanPlayer="Scissor";
    
    output.textContent=Winner();});

function computerChoice(computerPlayer){
    let choice=Math.floor(Math.random()*3);
    if (choice==0) {return computerPlayer="Rock";}
    else if(choice==1) {return computerPlayer="Paper";}
    else {return computerPlayer="Scissor";}
}
function Winner() {

    computerPlayer=computerChoice();
    if(humanPlayer=="Rock" && computerPlayer=="Paper" || humanPlayer=="Paper" && computerPlayer=="Scissor" || humanPlayer=="Scissor" && computerPlayer=="Rock")
    {   computerwins++;
        return "You  lost this Round Computer= "+computerwins+"Player= "+playerwins;}
    else if (humanPlayer=="Paper" && computerPlayer=="Rock" || humanPlayer=="Scissor" && computerPlayer=="Paper" || humanPlayer=="Rock" && computerPlayer=="Scissor")
    {
        playerwins++;
        return "You WOn this Round Computer= "+computerwins+"Player= "+playerwins;
    }
    else { return "its a tie Round Computer= "+computerwins+"Player= "+playerwins;}
    
}

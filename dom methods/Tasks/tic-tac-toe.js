let boxes=document.querySelectorAll(".box")
let restGame=document.querySelector("#Rest-Game")
let winningchances=[[0,1,2],[3,4,5],[6,7,8],[0,4,7],[1,5,8],[3,6,9],[1,5,9],[7,5,3]]

let turnO=true;

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(turnO){
        box.innerHTML="O";
       turnO=false;
    }
    else{
        box.innerHTML="X";
        turnO=true;
    }
    box.disabled=true;
     checkWinner();
   })
})
let checkWinner=()=>{
    for(let pattern of winningchances){
        console.log(pattern[0],pattern[1],pattern[2])
    }
}
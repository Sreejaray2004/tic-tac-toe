let boxes = document.querySelectorAll(".box");
let win=document.querySelector(".win");
let message=document.querySelector("#message");
let newbtn=document.querySelector("#newbtn");
let resetbtn = document.querySelector(".reset");
let turn=true;
let winningconds=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

for(let box of boxes){
    box.addEventListener("click",()=>{
        if(turn===true){
            box.innerHTML="O";
            turn=false;
            box.disabled=true;
        }else{
            box.innerHTML="X";
            turn=true;
             box.disabled=true;
        }
        winning();
    })
}
const winning=()=>{
    for(let val of winningconds){
        if(boxes[val[0]].innerText!="" && boxes[val[1]].innerText!="" && boxes[val[2]].innerText!="" ){
          if(boxes[val[0]].innerText===boxes[val[1]].innerText && boxes[val[1]].innerText=== boxes[val[2]].innerText){
             showwinner(boxes[val[0]].innerText)
            
          }  
        }
    }
}
const showwinner=(val)=>{
     for(box of boxes){
        box.disabled=true;
     }
       message.innerText=`The winner is ${val}`;
       win.classList.remove("hide");
}
resetgame=()=>{
    turn=true;
     for(box of boxes){
        box.disabled=false;
        box.innerText="";
        win.classList.add("hide");
     }

}
resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);


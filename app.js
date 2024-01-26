let gameseq = [];
let userseq =[];
let btns = ["pink", "red", "blue", "green"];
let start = false;
let level=0;
let h2=document.querySelector("h2");
// let box=document.querySelector(".btn-container");
document.addEventListener("keypress", function (){
    if(start == false){
        console.log("game started");
        start = true;
        levelup();
    }
})
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}
function userflash(btn){
    btn.classList.add("userflash");

    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 150);
}
function levelup(){
    userseq=[]
    level++;
    h2.innerText=`Level ${level}`;
    let rndIdx=Math.floor(Math.random()*3)+1;
    let rndcolor = btns[rndIdx];
    let rndbtn=document.querySelector(`.${rndcolor}`);
    gameseq.push(rndcolor);
    console.log(gameseq);
    gameflash(rndbtn);
}
function matching(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup(), 700);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score is <b>${level}</b> <br> Press any key to begin`;
        let body=document.querySelector("body")
        body.style.color="red";
        setTimeout(() => {
        body.style.color="white";
            
        }, 500);
        reset();

    }

}
function btnpress(){
    // console.log(this)
    let btnn=this;
    userflash(btnn);
    usercolor= btnn.getAttribute("id");
    userseq.push(usercolor);
    matching(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn")
for(btn of allbtn){
    btn.addEventListener("click", btnpress);

}

function reset(){
    start = false;
    level=0;
    userseq=[];
    gameseq=[];
}








































































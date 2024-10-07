

let gameSeq=[];
let playerSeq=[];
let randomBtn=["red","yellow","green","blue"];
let level=0;
let highestScore=0;
let started=false;
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");


// step 1: starting the game
document.addEventListener("keypress",function(event){
    if(started==false){
    started=true;
    levelup();
    console.log("game started");
    }
});



//step 2:  level will increase and generate a random color btn to flash
function levelup(){
    level++;
    playerSeq=[];
    h3.innerText=`level ${level}`;

    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=randomBtn[randomIndex];
    let randomButton=document.querySelector(`.${randomColor}`);

    flashBtn(randomButton);
    gameSeq.push(randomColor);
    console.log(gameSeq);

    // console.log (randomIndex);
    // console.log(randomColor);
    // console.log(randomButton);
   
}

//step 3: add and remove class to create the flash effect
function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },225);

}

function checkAns(idx){
    if(playerSeq[idx]=== gameSeq[idx]){
        if(playerSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML=`your score was <b>${level}</b> <br> press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";

       setTimeout (function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        if(highestScore < level){
            h2.innerHTML=`highest score: ${level}`;
        }

        resetGame();
    }

}


//step4: this function will call  the flashBtn effect on button pressed by the user
function gameFlash(){
    let btn=this;
    console.log(this);
    flashBtn(btn);

    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    playerSeq.push(userColor);
    console.log(playerSeq);
    let inx=playerSeq.length -1;
    checkAns(inx);

}
let allBtn=document.querySelectorAll(".box1"); 
for(allBtn of allBtn ){
    allBtn.addEventListener("click",gameFlash);
}

function resetGame(){
    gameSeq=[];
    playerSeq=[];
    level=0;
    started=false;
}
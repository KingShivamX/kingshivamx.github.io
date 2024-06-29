// Shivam Hippalgave, Front end project.
let gamebtn = [];
let userbtn = [];
let heighestLevel = 0;
let level = 0;
let gameon = false;

let colorbtn = ["yellow" , "blue" , "red" , "green"];

let headlevel = document.querySelector(".headlevel");
let maxlevel = document.querySelector(".maxlevel");

let startbtn = document.querySelector(".button");

let allbtns = document.querySelectorAll(".btn");

let body = document.querySelector(".wrapper");

startbtn.addEventListener('click', function(){
    if(gameon == false) {
        setTimeout(levelup, 300);
        gameon = true;
        startbtn.innerHTML = "Game Live"
    }
})

function useraudio(){
    let audio = new Audio("assets/userclick.MP3")
    audio.play();
}
function gameaudio(){
    let audio = new Audio("assets/gameclick.MP3")
    audio.play();
}
function wrongaudio(){
    let audio = new Audio("assets/wrongclick.MP3")
    audio.play();
}

function gameblink(btn){
    btn.classList.add("gameclick");
    setTimeout(function(){
        btn.classList.remove("gameclick");
    }, 250)
}
function bodyblink() {
    body.classList.add("over");
    setTimeout(function(){
        body.classList.remove("over");
    }, 400)
}

function levelup() {
    userbtn = [];
    level++;
    headlevel.innerHTML = `Current Level: ${level}`
    let randno = Math.floor(Math.random() * 4);
    let randcolor = colorbtn[randno];
    gamebtn.push(randcolor);
    let btn = document.querySelector(`#${randcolor}`);
    gameblink(btn);
    gameaudio();
    console.log(gamebtn);
}

function check(idx) {
    if(gamebtn[idx] === userbtn[idx]){
        if(gamebtn.length === userbtn.length){
            setTimeout(levelup, 1000);
            setTimeout(highest, 1000);
        } 
    } else {
        headlevel.innerHTML = `You lost at Level: ${level}`;
        startbtn.innerHTML = "Restart Game"
        bodyblink();
        wrongaudio();
        gameon = false;
        gamebtn = [];
        userbtn = [];
        level = 0;
    }
}

for(btns of allbtns){
    btns.addEventListener('click' , function() {
        useraudio();
        let btncolor = this.getAttribute('id');
        userbtn.push(btncolor);
        console.log(userbtn);
        let idx = userbtn.length - 1;
        check(idx);
    })
}

function highest() {
    if(level > heighestLevel){
        heighestLevel = level;
        maxlevel.innerHTML = `highest level: ${heighestLevel}`
    }
}

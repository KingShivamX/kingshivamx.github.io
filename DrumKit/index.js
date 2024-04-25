var keys = document.querySelectorAll(".drum")

for (var i = 0; i < keys.length; i++ ) {
    keys[i].addEventListener("click", function() {

        var button = this.innerHTML;

        keypresss(button);

        buttonAnimation(button);
    } )
}


document.addEventListener("keydown", function(event){
    
    keypresss(event.key); // getting only key detail form event , event can we written as anything.

    buttonAnimation(event.key);
})


function keypresss(key) {

    switch (key) {

        case "z": 
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;

        case "x": 
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;

        case "c": 
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;

        case "v": 
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;

        case "b": 
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;

        case "n": 
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;

        case "m": 
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
    
        default: console.log(button);

    }

}

function buttonAnimation(key) {
    var btn = document.querySelector("." + key);
    btn.classList.add("pressed")
    setTimeout(function(){btn.classList.remove("pressed")},100)
}

// document.querySelectorAll("button")[0].addEventListener("click", clicktask);
// For single button

// document.querySelector("button").addEventListener("click", clicktask);
// for first single button only

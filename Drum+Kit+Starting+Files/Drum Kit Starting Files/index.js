for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handle);
}
function handle() {
    var butin = this.innerHTML;
    
    animation(butin);

    switch (butin) {
        case "w":
            var m = new Audio("./sounds/crash.mp3");
            m.play();
            break;

        case "a":
            var a = new Audio("./sounds/kick-bass.mp3");
            a.play();
            break;

        case "s":
            var g = new Audio("./sounds/snare.mp3");
            g.play();
            break;

        case "d":
            var b = new Audio("./sounds/tom-1.mp3");
            b.play();
            break;

        case "j":
            var c = new Audio("./sounds/tom-2.mp3");
            c.play();
            break;

        case "k":
            var e = new Audio("./sounds/tom-3.mp3");
            e.play();
            break;

        case "l":
            var d = new Audio("./sounds/tom-4.mp3");
            d.play();
            break;

        default:
            console.log(butin)
            break;
    }
}

document.addEventListener("keypress",press)
function press (e){
    animation(e.key);
    switch (e.key) {
        case "w":
            var m = new Audio("./sounds/crash.mp3");
            m.play();
            break;

        case "a":
            var a = new Audio("./sounds/kick-bass.mp3");
            a.play();
            break;

        case "s":
            var g = new Audio("./sounds/snare.mp3");
            g.play();
            break;

        case "d":
            var b = new Audio("./sounds/tom-1.mp3");
            b.play();
            break;

        case "j":
            var c = new Audio("./sounds/tom-2.mp3");
            c.play();
            break;

        case "k":
            var e = new Audio("./sounds/tom-3.mp3");
            e.play();
            break;

        case "l":
            var d = new Audio("./sounds/tom-4.mp3");
            d.play();
            break;

        default:
            console.log(butin)
            break;
    }
}

function animation(some){
   document.querySelector("." + some).classList.add("pressed");

   setTimeout(function(){
    document.querySelector("." + some).classList.remove("pressed");

   },100);
}

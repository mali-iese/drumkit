var x=document.querySelectorAll(".drum");
function play() {
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();}
for(i=0;i<7;i++){
    x[i].addEventListener("click", function(){
        var buttonInnerHtmml= this.innerHTML;
        makeSound(buttonInnerHtmml);
        animation(buttonInnerHtmml);
    });
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animation(event.key);
})
function makeSound(key){
    switch (key) {
        case "w":
        var crash = new Audio('./crash.mp3');
        crash.play();
        break;
    case "a":
        var kickBass = new Audio('./kick-bass.mp3');
        kickBass.play();
        break;
    case "s":
        var snare = new Audio('./snare.mp3');
        snare.play();
        break;
    case "d":
        var tom1 = new Audio('./tom-1.mp3');
        tom1.play();
        break;
    case "j":
        var tom2 = new Audio('./tom-2.mp3');
        tom2.play();
        break;
    case "k":
        var tom3 = new Audio('./tom-3.mp3');
        tom3.play();
        break;
    case "l":
        var tom4 = new Audio('./tom-4.mp3');
        tom4.play();
        break;}
    }
    function animation(currentKey){
        var animationKey=document.querySelector("." + currentKey);
        animationKey.classList.add("pressed");
        setTimeout(function(){
            animationKey.classList.remove("pressed");
        }, 100)
    }

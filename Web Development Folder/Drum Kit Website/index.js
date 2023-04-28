
//can be changed to an anonymous function see below.
// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//     alert("I got clicked");
// }

//this is an anonymous fucntion
// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked");
// });

//loop through all of the drums and add the event listener to each
//detect button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

//detect specific key presses
//added to the entire document, not just a button
document.addEventListener("keydown", function(event){
    makeSound(event.key);

});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        default: console.log(buttonInnerHTML);
    }

}
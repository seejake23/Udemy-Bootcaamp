var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;

//document waits for any key to be pressed, starting the game
$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//buttons wait to be clicked
$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomColorChosen = buttonColors[randomNumber];
  gamePattern.push(randomColorChosen);

  $("#" + randomColorChosen)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomColorChosen);
}

//adds sound correct or wrong
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// adds animation to whichever button is pressed
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// checks if the random colors matches what the user has pressed
// if yes, a new color is played and added to the array
// if not, the game ends
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over! Press any key to restart.");

    startOver();
  }
}

//reset values to default, allowing the game to be restarted
function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
}

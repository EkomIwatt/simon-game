var highScore = localStorage.getItem("simonHighScore") || 0;
$("#high-score-text").text("Best: " + highScore);

var audioFiles = {
    "red": new Audio("sounds/red.mp3"),
    "blue": new Audio("sounds/blue.mp3"),
    "green": new Audio("sounds/green.mp3"),
    "yellow": new Audio("sounds/yellow.mp3"),
    "wrong": new Audio("sounds/wrong.mp3")
};

gamePattern = [];
userClickedPattern = [];
var responseTimer;
var level = 0;

$(document).keydown(function() {
    if (level === 0)
        nextSequence();
});

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var buttonColors = ["red", "blue", "green", "yellow"];
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    if (level === 0) {
        setTimeout(function() {
            $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
            playSound(randomChosenColor);
        }, 500);
    } else {
        $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
        playSound(randomChosenColor);
    }
    ++level;
    $("#level-title").text("Level " + level);
}

function playSound(name) {
    var audio = audioFiles[name];
    audio.currentTime = 0;
    audio.play();
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

function startTimer() {
    clearTimeout(responseTimer);
    responseTimer = setTimeout(function() {
        gameOver("Time's up!");
    }, 5000);
}

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    clearTimeout(responseTimer);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        } else {
            startTimer();
        }

    } else {
        console.log("wrong");
        gameOver("Wrong! Game Over.");
    }
}

function gameOver(message) {
    clearTimeout(responseTimer);
    playSound("wrong");

    if (level > highScore) {
        highScore = level;
        localStorage.setItem("simonHighScore", highScore);
        $("#high-score-text").text("Best: " + highScore);
        message = "🔥New Record🔥 ";
    }

    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    $("#level-title").html(message + "<br>Press Any Key to Restart");
    startOver();
}

function startOver() {
    level = 0;
    gamePattern = [];
}
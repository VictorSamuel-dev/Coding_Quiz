

// function to show high scores
var i = 0;
function showHighScores() {
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("highScores");

    // check if there is any in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (i = 0; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}


showHighScores();

goBackBtn.addEventListener("click", function() {
    highScoreSection.style.display = "none";
    window.location.href="highscore.html"
    window.location.href="index.html"
});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});
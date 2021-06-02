var pageContentEl = document.querySelector(".wrapper");
var highScores = JSON.parse(window.localStorage.getItem("highScores"));
var score = document.getElementById('highscores');

console.log(highScores);
if (highScores) {
    for (let i = 0; i < highScores.length; i++) {
        // document.createElement
        var listOfScores = document.createElement("li");
        listOfScores.innerText = highScores[i].initials + " " + highScores[i].score;
        score.appendChild(listOfScores);

    }
}

//console.log(highScores[0].score);

var clearButton = function (event) {
    // get target element from event
    var targetEl = event.target;
    console.log(targetEl);
    if (targetEl.matches("#clear")) {
        localStorage.clear();
        window.location.reload(false);
    }
}

pageContentEl.addEventListener("click", clearButton);
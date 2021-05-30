var pageContentEl = document.querySelector("#page-content");

function timer() {
    var sec = 75;
    var timer = setInterval(function () {
        document.getElementById("time-left").innerHTML = "Time: " + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            //document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

var taskButtonHandler = function (event) {
    // get target element from event
    var targetEl = event.target;

    if (targetEl.matches(".start")) {
        //   console.log("edit");
        //   var taskId = targetEl.getAttribute("data-task-id");
        //   editTask(taskId);
        timer();
        var element = document.getElementById("intro");
        element.classList.add("d-none");
    } else if (targetEl.matches(".delete-btn")) {
        console.log("delete", targetEl);
        var taskId = targetEl.getAttribute("data-task-id");
        deleteTask(taskId);
    }
};

const myQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "The condition in an if / else statement is enclosed with __________.",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"
        },
        correctAnswer: "2"
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        answers: {
            1: "number and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
        },
        correctAnswer: "4"
    }
];

// for edit and delete buttons
pageContentEl.addEventListener("click", taskButtonHandler);


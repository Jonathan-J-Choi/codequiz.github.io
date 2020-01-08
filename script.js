// DOM ELEMENTS
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var counter = document.getElementById("counter")
var score = document.getElementById("scoreContainer");
var wrong = document.getElementById("wrong");
var card = document.getElementById("card");
var highScoreBox = document.getElementById("highScoreBox")
var highScore = document.getElementById("highScore")
var userInitial = document.getElementById("userInitial")

// Answer Choices
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

// Start Quiz Button
start.addEventListener("click", startQuiz);
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderCounter();
  TIMER = setInterval(renderCounter, 1000);
}

// Hiding the Quiz
function quizHide() {
  quiz.style.display = "none";
}

// Rendering the Questions
var lastQuestion = questions.length - 1;
var runningQuestion = 0;

function renderQuestion() {
  var q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

// Timer/Score
var count = 0;
var questionTime = 15;
var TIMER;
var score = 0;

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    count++;
  } else {
    count = 0;
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      clearInterval(TIMER);
      scoreRender();
    }
    highScoreRender();
    quizHide();
  }
}

// Right or Wrong Answer
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score++
  }
  if (answer !== questions[runningQuestion].correct) {
    wrong.textContent = "You got the last one wrong!"
  }
  if (runningQuestion < lastQuestion) {
    count = 0;
    runningQuestion++;
    renderQuestion();
  }
  else {
    wrong.style.display = "none";
    clearInterval(TIMER);
    scoreRender();
    highScoreRender();
    quizHide();
  }
}

// Score
function scoreRender() {
  scoreContainer.style.display = "inline-block";
  var scorePerCent = Math.round(100 * score / questions.length);
  card.innerHTML = "<p>Congratulations!</p> <p>You got " + scorePerCent + "% correct!</p><br><br>";
}

// Highscore box
function highScoreRender() {
  highScoreBox.style.display = "inline-block";
}


// Highscore submit
highScore.addEventListener("click", function () {

  var userIn = userInitial.value;
  var highScores = JSON.parse(window.localStorage.getItem("highScore")) || [];
  console.log(highScores)
  var newScore = {
    score: score,
    initials: userIn
  }
  window.localStorage.setItem("highScore", JSON.stringify(newScore));
  window.open("highscores.html")
});

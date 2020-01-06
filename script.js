
// DOM ELEMENTS
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var counter = document.getElementById("counter")
var score = document.getElementById("scoreContainer");
var wrong = document.getElementById("wrong");
var card = document.getElementById("card");

// Answer Choices
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

// Start Quiz Button
start.addEventListener("click", startQuiz);
function startQuiz(){
  start.style.display = "none";
  renderQuestion();
  quiz.style.display="block";
  renderCounter();
  TIMER = setInterval(renderCounter,1000);
}

// Questions
var questions = [
  {
    question: "JavaScript's is also referred to as ____.",
    choiceA: "CoffeeScript",
    choiceB: "HTML",
    choiceC: "ECMA Script",
    choiceD: "C++",
    correct: "C"
  },
  {
    question: "JavaScript MAINLY deals with the ____ of a website.",
    choiceA: "Links",
    choiceB: "Appearance",
    choiceC: "Interactivity",
    choiceD: "Smell",
    correct: "C"
  },
  {
    question: "Commonly used data types DO NOT include:",
    choiceA: "Strings",
    choiceB: "Booleans",
    choiceC: "Farts",
    choiceD: "Numbers",
    correct: "C"
  },
  {
    question: "The condition in an if / else statement is enclosed within ____.",
    choiceA: "Quotes",
    choiceB: "A wall across the entire border of Mexico",
    choiceC: "Parentheses",
    choiceD: "Square Brackets",
    correct: "C"
  },
  {
    question: "Variables are the English equivalent of what in JavaScript?",
    choiceA: "Cups of Tea",
    choiceB: "Predicates",
    choiceC: "Nouns",
    choiceD: "Verbs",
    correct: "C"
  },
];

// Rendering the Questions
var lastQuestion = questions.length -1;
var runningQuestion = 0;

function renderQuestion(){
  var q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

// Rendering the Counter
var count= 0;
var questionTime = 15;
var TIMER;
var score = 0;

function renderCounter(){
  if ( count <= questionTime){
    counter.innerHTML = count;
    count++;
  }else{
    count=0;
    if( runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
    }else{ clearInterval(TIMER);
      scoreRender() }
    }
  }

// Checking the Answer
function checkAnswer(answer){
  if (answer == questions [runningQuestion].correct){
    score++
  }
  if (answer !== questions [runningQuestion].correct){
    wrong.textContent= "You got the last one wrong!"
  }
  if (runningQuestion < lastQuestion){
    count = 0;
    runningQuestion++;
    renderQuestion();
  }
  else{
    wrong.style.display="none";
    clearInterval(TIMER);
    scoreRender();
  }
}

// Score
function scoreRender(){
  scoreContainer.style.display="inline-block";
  var scorePerCent = Math.round(100*score/questions.length);
  card.innerHTML= "<p>Congratulations!</p> <p>You got " +scorePerCent + "% correct!</p>";
}


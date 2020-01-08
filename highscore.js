// DOM Elements
var leaderBrd = document.getElementById("leaderBrd");

// populate list
function populateList(){
  var retrievedScores = localStorage.getItem("highScore");
  var listScore = JSON.parse(retrievedScores);
  leaderBrd.textContent = listScore.score + " by " + listScore.initials;
}
populateList()
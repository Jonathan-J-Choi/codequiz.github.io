var saveHighScore = document.getElementById("saveHighScore")

saveHighScore.addEventListener("click", saveHighScore);

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();
}
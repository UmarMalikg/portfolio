const questions = document.querySelectorAll(".q");
const answers = document.querySelectorAll(".answer");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    // Hide all answers
    answers.forEach((answer) => (answer.style.display = "none"));

    // Show the corresponding answer
    const answerId = "a" + question.id.slice(1);
    document.getElementById(answerId).style.display = "block";
  });
});

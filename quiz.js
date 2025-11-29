function checkAnswer() {
    const correctAnswer = "4";

    // Get the checked radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
document.addEventListener("DOMContentLoaded", () => {
    const howToPlayBtn = document.getElementById("howToPlayBtn");
    const instructionsDiv = document.getElementById("instructions");

    howToPlayBtn.addEventListener("click", () => {
        if (instructionsDiv.style.display === "none") {
            instructionsDiv.style.display = "block";
        } else {
            instructionsDiv.style.display = "none";
        }
    });

    const submitGuessBtn = document.getElementById("submitGuess");
    submitGuessBtn.addEventListener("click", () => {
        const inputs = document.querySelectorAll(".number-input");
        let guess = [];
        inputs.forEach(input => {
            guess.push(input.value);
        });
        alert("Your guess is: " + guess.join(""));
        // Add your game logic here
    });
});

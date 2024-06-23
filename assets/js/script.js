// waiting for the DOM to finish loading before running the game
// Get the button elements and add event listeners 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})

/**
 * The main game "loop", called when the script is loaded 
 * after users answer has been processed 
 */
function runGame(gameType) {

    // creates 2 randome numbers between 1 and 25 
    let num1 = math.floor(math.randome() * 25) +1;
    let num2 = math.floor(math.randome() * 25) +1;

    if (gameType === "addition") {
        displayAddtiionQuestion(num1, num2) 
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }
}

runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAddtiionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
    
}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}

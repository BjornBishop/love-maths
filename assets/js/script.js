// waiting for the DOM to finish loading before running the game
// Get the button elements and add event listeners 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
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
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2) 
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Check the answer  against the first element 
 * in the returned calculateAnswer array 
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
    } else {
        alert(`awww... You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);

}


/**
 * Gets the operands (the numbers) and the operator (plus, minus, multiply)
 * directly from the DOM, returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "addition") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented Operator ${operator}`);
        throw `Unimplemented Operator ${operator}. Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {

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


// define function for checking the answer of the user
function checkAnswer(){
    let correctAnswer = '4'; // store the correct answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value // extract the answer from the user
    if(userAnswer === correctAnswer){
        document.getElementById('feedback').textContent = 'Correct! Well done';
    }
    else{
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }

}

document.getElementById('submit-answer').addEventListener('click', checkAnswer) // call the function when the submit button has been clickeds
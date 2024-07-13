
// define function for checking the answer of the user
function checkAnswer(){
    let correctAnswer = '4'; // store the correct answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value // extract the answer from the user
    if(correctAnswer == userAnswer){
        document.getElementById('feedback').textContent = 'Correct! Well done';
    }
    else{
        document.getElementById('feedback').textContent = 'Incorrect! Try Again';
    }

}

const btn = document.getElementById('submit-answer');

btn.addEventListener('click', checkAnswer) // call the function when the submit button has been clickeds
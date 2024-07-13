document.getElementById('submit-answer').addEventListener('click', checkAnswer) // call the function when the submit button has been clickeds

// define function for checking the answer of the user
function checkAnswer(){
    const correctAnswer = '4'; // store the correct answer
    const selected = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selected.value;// extract the answer from the user
    if(userAnswer === correctAnswer){
        document.getElementById('feedback').textContent = 'Correct! Well done';
    }
    else{
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }

}


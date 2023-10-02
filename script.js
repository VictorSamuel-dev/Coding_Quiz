// https://opentdb.com/api.php?amount=10

const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');

document.addEventListener('DOMContentLoaded', () => {

});

async function loadQuestion(){
    const APIUrl = 'https://opentdb.com/api.php?amount=1';
    const result = await fetch('${APIUrl}');
    const data = await result.json();
    // console.log(data.results[0]);
    showQuestion(data.results[0]);
}


function showQuestion(data){
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    // inserting correct answer in random position in the options list
//     console.log(optionsList);
//     console.log(correctAnswer);

    _question.innerHTML = `${data.question} <br> <span class = "catagory">${data.category} </span>`;
    _options.innerHTML = `
        ${optionsList.map((option, index) => ` <li> ${index +1}. <span> ${option} </span> </li> 
        `) .join('')}
    `;

    selectOption();
}



// options selection

loadQuestion();
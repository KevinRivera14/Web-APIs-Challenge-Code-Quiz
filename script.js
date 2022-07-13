const startButton = document.getElementById('Start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerbuttonsElement = document.getElementById('answer-buttons')


var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQestion()

}

function setNextQestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innertext = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerbuttonsElement.appendChild(button)
    })
}


function resetState() {
    nextButton.classlist.add('hide')
    while (answerbuttonsElement.firstChild) {
        answerbuttonsElement.removeChild(answerbuttonsElement.firstChild)
    }

} 

function selectAnswer(e) {

}

const question = [{
    question: 'what is 2 + 2?',
    answers: [{
            text: '4',
            correct: true
        },
        {
            text: '22',
            correct: false
        }
    ]

}]



//const question = {
//question: "what is a nav bar?",
// options: ["A = nav bar is a user interface element within a webpage that contains links","B = its part of the internet","C = its part of a document","D = nothing",] , 
// correct: ["A"] 
//};
//GIVEN I am taking a code quiz

// step 1: 
// select the html start button  by using an one of the document function 

//var startButton = document.querySelector(".start-button");



// step 1 (A): 
//WHEN I click the start button
//THEN a timer starts and I am presented with a question  

//var startQuiz = function () {
//console.log("welcome to the quiz");
//}
//startButton.addEventListener("click", startQuiz);


//step 2:
//WHEN I answer a question
//THEN I am presented with another question

//step 3:
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

//step 4:
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

// step 5: 
//WHEN the game is over
//THEN I can save my initials and score 
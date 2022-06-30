var startButton = document.getElementById('start-btn')
var information = document.getElementById('remove')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')


var shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)

function startGame() {
   console.log('Started')
   startButton.classList.add('hide')
   information.classList.add('hide')
   shuffledQuestions = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   questionContainerElement.classList.remove('hide')
   setNextQuestion()
}

function setNextQuestion() {
   showQuestion(shuffledQuestions[currentQuestionIndex])
}
function shuffledQuestions(question) {
   
}

function showQuestion(question) {
   questionElement.innerText = question.question
   // question.answers.forEach(answer => {
   //    var button = document.createElement('button')
   //    button.innerText = answer.text
   //    button.classList.add('btn')
   //    if (answer.correct) {
   //       button.dataset.correct = answer.correct
   //    }
   //    button.addEventListener('click', selectAnswer)
   //    answerButtonsElement.appendChild(button)
   // })
}

function showAnswers(btn){
answerButtonsElement.innerText = answer-buttons.answers

}
var questions = [
   {
      question: 'what color is the sky?',
      answers: ['red','blue', 'green']
}
]


// var wrapperEl = document.querySelector('.wrapper');
// var data = ['orange', 'apple', 'grape'];

// var question = [
//    {
//       answer: 'blue',
//       question: 'what color is the sky?',
//       choices: ['red', 'orange', 'blue', 'green']
//       },
//    {
//       answer: 'orange',
//       choices: ['red', 'orange', 'blue', 'green'],
//       question: 'what color is an orange?'
//    },
//    {
//       answer: 'red',
//       question: 'what color is the ocean',
//       choices: ['red', 'orange', 'blue', 'green']
//    },
//    {
//       answer: 'red',
//       question: 'what color is the ocean',
//       choices: ['red', 'orange', 'blue', 'green']
//    }
// ];



// for (var i = 0; i <question.length; i++){
// var newEl = document.createElement('p');

// newEl.innerText = question[i].question;

// wrapperEl.append(newEl)

// }

// console.log(newEl)



// ('beforeend', `
// <div> class="question">
// <p>${question[i].question}</p>
// </div>
// `);





// document.getElementById("clickButton").addEventListener("click", () =>{
//     document.getElementById("readTheInput").value += "Correct";
//  });

//  document.getElementById("wrongButton1").addEventListener("click", () =>{
//     document.getElementById("readTheInput").value += "Wrong";
//  });
//  document.getElementById("wrongButton2").addEventListener("click", () =>{
//     document.getElementById("readTheInput").value += "Wrong";
//  });
//  document.getElementById("wrongButton3").addEventListener("click", () =>{
//     document.getElementById("readTheInput").value += "Wrong";
//  });
//  document.getElementById("wrongButton4").addEventListener("click", () =>{
//     document.getElementById("readTheInput").value += "Wrong";
//  });
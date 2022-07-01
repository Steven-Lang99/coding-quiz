var startButton = document.getElementById('start-btn')
var information = document.getElementById('remove')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonEl = document.getElementById('answer-button')
var startButton = document.getElementById('start-btn')
var qIndex = 0

var questions = [
   {
      answer: 'for loops',
      question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log']
      },
   {
      answer: 'orange',
      choices: ['red', 'orange', 'blue', 'green'],
      question: 'what color is an orange?'
   },
   {
      answer: 'red',
      question: 'what color is the ocean',
      choices: ['red', 'orange', 'blue', 'green']
   },
   {
      answer: 'red',
      question: 'what color is the ocean',
      choices: ['red', 'orange', 'blue', 'green']
   }
];


startButton.addEventListener('click', startGame)

function startGame() {
   console.log('Started')
   // startButton.classList.add('hide')
   information.classList.add('hide')
   questionContainerElement.classList.remove('hide')
   // setNextQuestion()
   startTimer();
   showQuestion();
}
//timer
function startTimer(){
   var counter = 20;
   setInterval(function() {
     counter--;
     if (counter >= 0) {
       span = document.getElementById("count");
       span.innerHTML = counter;
     }
     if (counter === 0) {
         alert('sorry, out of time');
         clearInterval(counter);
     }
   }, 1000);
 }
//  function start()
//  {
//      document.getElementById("count").style="black;";
      
//  };



function showQuestion() {
   // questionElement.innerText = questions.question
  var queueQuestion = questions[qIndex]
  var titleEl = document.getElementById('question')
  titleEl.textContent = queueQuestion.question

answerButtonEl.innerHTML = '';
queueQuestion.choices.forEach(function(choice, i){
   var choiceBtn = document.createElement('button')
   choiceBtn.setAttribute('class', 'choice')
   choiceBtn.setAttribute('value', choice)
   choiceBtn.textContent = i + 1 + '. ' +  choice;
   choiceBtn.onclick = result()
   answerButtonEl.appendChild(choiceBtn)
})
}

function result(){

  
  
   }
   //check if the answer is right or wrong 
   //questions[qIndex].answer
   //move to the next question using qIndex++
   // qindex === questions.length 
   //find out in a conditonal does is equal the questions.length




// var questions = [
//    {
//       question: 'what color is the sky?',
//       choices: ['red','blue','green'],
//       answer: 'blue'
// }
// ]


// var wrapperEl = document.querySelector('.wrapper');
// var data = ['orange', 'apple', 'grape'];





// for (var i = 0; i <question.length; i++){
// var newEl = document.createElement('p');

// newEl.innerText = question[i].question;

// wrapperEl.append(newEl)

// }

// console.log(newEl)

// var shuffledQuestions, currentQuestionIndex
 // shuffledQuestions = questions.sort(() => Math.random() - .5)
   // currentQuestionIndex = 0

// ('beforeend', `
// <div> class="question">
// <p>${question[i].question}</p>
// </div>
// `);

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


// function setNextQuestion() {
//    // resetState()
//    showQuestion(shuffledQuestions[currentQuestionIndex])
// }
// // function shuffledQuestions(question) {
   
// // }


// function resetState(){
//    while(answerButtonsElement.firstChild) {
//       answerButtonsElement.removeChild(answerButtonElement.firstChild)
//    }
// }

// function selectAnswer(e){
// var selectButton = e.target
// var correct = selectButton.dataset.correct
// setStatusClass(document.body, correct)
// Array.from(answerButtonsElement.children).forEach(button => {
//    setStatusClass(button,button.dataset.correct)
// })
// if(shuffledQuestions.length > currentQuestionIndex + 1)
// }




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
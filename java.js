var startButton = document.getElementById('start-btn')
var information = document.getElementById('remove')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonEl = document.getElementById('answer-button')
var startButton = document.getElementById('start-btn')
var scoreEl = document.getElementById('score')
var timeEl = document.getElementById('count')
var qIndex = 0

var questions = [
   {
      answer: 'for loops',
      question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log']
      },
   {
      answer: 'booleans',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      question: 'Commonly used data type DO Not include?'
   },
   {
      answer: 'parenthesis',
      question: 'The condition in an if/else statement is enclosed with___.',
      choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets']
   },
   {
      answer: 'All of the above',
      question: 'Arrays in JavaScript can be used to store___.',
      choices: ['numbers and strings', 'other arrays', 'booleans', 'All of the above']
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
   var counter = 50;
   setInterval(function() {
     counter--;
     if (counter >= 0) {
       timeEl.innerHTML = 'Time: ' + counter;
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
   choiceBtn.addEventListener('click', () => {
      if(choice === queueQuestion.answer){
         console.log('correct');
         //score++
      } else {counter = counter-=10;
      }
      //score--

      qIndex++
      showQuestion()
       });
   answerButtonEl.appendChild(choiceBtn)
})
}

function showScores(){
   questionContainerElement.classList.add('hide')
  
  
   }
   //check if the answer is right or wrong 
   //questions[qIndex].answer
   //move to the next question using qIndex++
   // qindex === questions.length 
   //find out in a conditonal does is equal the questions.length






 





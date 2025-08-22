const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
];


//  selecting elements
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons")

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () =>{
  currentQuestionIndex++
  setNextQuestion()
})

// new variables
let shuffledQuestions, currentQuestionIndex;


//  start quiz
function startQuiz() {
  console.log("Started")
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainer.classList.remove("hide")
  setNextQuestion()
  

}

// next question
function setNextQuestion() {

  resetState()
  showQuestion( shuffledQuestions[currentQuestionIndex])

}

function resetState() {
  nextButton.classList.add("hide")
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
  }
}

// show question
function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButton.appendChild(button)
  })

  

}


// select answer
function selectAnswer(e) {

  const selectButton = e.target;
  const correct = selectButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButton.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
     nextButton.remove("hide")
  } else {
     startButton.innerText = "Restart"
     startButton.classList.remove("hide")
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}
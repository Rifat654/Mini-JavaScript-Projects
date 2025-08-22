const questions = [
  {
    question: "In JavaScript, '===' checks both value and type equality.",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
      { text: "Only checks value", isCorrect: false },
      { text: "Only checks type", isCorrect: false }
    ]
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "Number", isCorrect: false },
      { text: "String", isCorrect: false },
      { text: "Boolean", isCorrect: false },
      { text: "Character", isCorrect: true }
    ]
  },
  {
    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
    answers: [
      { text: "let", isCorrect: true },
      { text: "var", isCorrect: false },
      { text: "const", isCorrect: false },
      { text: "define", isCorrect: false }
    ]
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.parse()", isCorrect: true },
      { text: "JSON.stringify()", isCorrect: false },
      { text: "JSON.convert()", isCorrect: false },
      { text: "JSON.toObject()", isCorrect: false }
    ]
  },
  {
    question: "What will `typeof NaN` return?",
    answers: [
      { text: "number", isCorrect: true },
      { text: "NaN", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "object", isCorrect: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const ans_btn = document.getElementById("answers-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ans_btn.appendChild(button);

  
    button.addEventListener("click", () => selectAnswer(answer));
  });
}

function resetState() { 
  nextBtn.style.display = "none";
  while (ans_btn.firstChild) {
    ans_btn.removeChild(ans_btn.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.isCorrect) {
    score++;
  }
  nextBtn.style.display = "block"; 
}
startQuiz()

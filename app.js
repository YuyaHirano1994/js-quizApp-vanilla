const quiz = [
  {
    question: 'Who is the best teacher?',
    answers: ['Samurai', 'Ninja', 'Jasper', 'Bob'],
    correct: 'Samurai',
  },
  {
    question: 'What is the most popular food in Japan? guess WHAT',
    answers: ['Ramen', 'Sushi', 'Curry rice', 'Putin'],
    correct: 'Sushi',
  },
  {
    question: 'Where is your home?',
    answers: ['KOR', 'NET', 'JPN', 'USA'],
    correct: 'USA',
  },
];

let score = 0;
const $Button = document.getElementsByClassName('btn btn-primary');
const $backButton = document.getElementById('js-back-btn');
let quizIndex = 0;
const quizLength = quiz.length;

//set quiz and answers
const setQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  for (let i = 0; i < $Button.length; i++) {
    $Button[i].textContent = quiz[quizIndex].answers[i];
  }
};

setQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('correct');
    score++;
  } else {
    window.alert('failed');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setQuiz();
  } else {
    window.alert(`Your score is ${score} / ${quizLength} !!`);
  }
};

for (let i = 0; i < $Button.length; i++) {
  $Button[i].addEventListener('click', (e) => {
    clickHandler(e);
  });
}

//back button
$backButton.addEventListener('click', () => {
  if (window.confirm('Back to the first question?') === true) {
    clickBack();
  }
});

const clickBack = () => {
  score = 0;
  quizIndex = 0;
  document.getElementById('js-question').textContent = quiz[0].question;
  for (let i = 0; i < $Button.length; i++) {
    $Button[i].textContent = quiz[quizIndex].answers[i];
  }
};

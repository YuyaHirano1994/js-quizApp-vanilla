const quiz1 = [
  {
    question: '1. The sun always (       ) in the east.',
    answers: ['rose', 'is rising', 'rises', 'will rise'],
    correct: 'rises',
  },
  {
    question: '2. If you open the window, you (       ) hear the noise.',
    answers: ['find', 'will find', 'have heard', 'are found'],
    correct: 'will find',
  },
  {
    question: '3. Please let me know when you (       ).  ',
    answers: ['arrived', 'have arrived', 'will arrive', 'arrive'],
    correct: 'arrive',
  },
];

const quiz2 = [
  {
    question: 'He was beside himself (      ) anger.',
    answers: ['with', 'in', 'by', 'from'],
    correct: 'with',
  },
  {
    question: 'I will help you (    ).',
    answers: ['with', 'out', 'for'],
    correct: 'out',
  },
  {
    question: 'She wondered if she should (    ) her nose stud for the job interview.',
    answers: ['take out', 'takes', 'take with', 'take'],
    correct: 'take out',
  },
];

const quiz3 = [
  {
    question: '冷蔵庫に隠れている動物なーんだ？',
    answers: ['いるか', 'いぬ', 'ぞう', 'きりん'],
    correct: 'ぞう',
  },
  {
    question: 'これの答えは２です。',
    answers: ['1', '2'],
    correct: 'Sushi',
  },
  {
    question: 'Where is my home?',
    answers: ['JAPAN', 'KOREA', 'CHINA', 'CANADA'],
    correct: 'JAPAN',
  },
];

let url = new URL(window.location.href);
let params = url.searchParams;

switch (params.get('quizLevel')) {
  case '1':
    allFunction(quiz1);
    break;
  case '2':
    allFunction(quiz2);
    break;
  case '3':
    allFunction(quiz3);
    break;
  default:
    break;
}

function allFunction(quiz) {
  let score = 0;
  let quizIndex = 0;
  const quizLength = quiz.length;
  const $Button = document.getElementsByClassName('btn btn-primary');
  const $backButton = document.getElementById('js-back-btn');
  let scoreArray = [];

  //set quiz and answers
  const setQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    for (let i = 0; i < $Button.length; i++) {
      if (quiz[quizIndex].answers[i] !== undefined) {
        $Button[i].style.display = 'block';
        $Button[i].textContent = quiz[quizIndex].answers[i];
      } else {
        $Button[i].style.display = 'none';
      }
    }
  };

  setQuiz();

  const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
      window.alert('correct');
      score++;
      scoreArray.push('1');
      console.log(scoreArray);
    } else {
      window.alert('failed');
      scoreArray.push('0');
      console.log(scoreArray);
    }

    quizIndex++;

    if (quizIndex < quizLength) {
      setQuiz();
    } else {
      // window.alert(`Your score is ${score} / ${quizLength} !!`);
      document.getElementById('js-back-btn').textContent = 'Go Result';
    }
  };

  for (let i = 0; i < $Button.length; i++) {
    $Button[i].addEventListener('click', (e) => {
      clickHandler(e);
    });
  }

  //back button
  $backButton.addEventListener('click', () => {
    if (quizIndex < quizLength) {
      if (window.confirm('Back to the first SELECT level page?') === true) {
        window.location.href = './select.html';
      }
    } else {
      window.location.href = `./result.html?q1=${scoreArray[0]}&q2=${scoreArray[1]}&q3=${scoreArray[2]}`;
    }
  });

  // const clickBack = () => {
  //   if (quizIndex < quizLength) {
  //     window.location.href = './select.html';
  //   } else {
  //     window.location.href = './result.html';
  //   }
  // };
}

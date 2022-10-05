const $backButton = document.getElementById('js-back-btn');
const $selectLevel1 = document.getElementById('js-level-1');
const $selectLevel2 = document.getElementById('js-level-2');
const $selectLevel3 = document.getElementById('js-level-3');

//select level
$selectLevel1.addEventListener('click', () => {
  location.href = '../quiz.html?quizLevel=1';
});
$selectLevel2.addEventListener('click', () => {
  location.href = './quiz.html?quizLevel=2';
});
$selectLevel3.addEventListener('click', () => {
  location.href = './quiz.html?quizLevel=3';
});

//back button
$backButton.addEventListener('click', () => {
  if (window.confirm('Back to the Title Page?') === true) {
    clickBack();
  }
});

const clickBack = () => {
  window.location.href = './top.html';
};

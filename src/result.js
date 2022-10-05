const $backButton = document.getElementById('js-back-btn');
const $resultQuiz1 = document.getElementById('result1');
const $resultQuiz2 = document.getElementById('result2');
const $resultQuiz3 = document.getElementById('result3');

let url = new URL(window.location.href);
let params = url.searchParams;

if (params.get('q1') == '1') {
  $resultQuiz1.textContent = '○';
} else {
  $resultQuiz1.textContent = '☓';
}

if (params.get('q2') == '1') {
  $resultQuiz2.textContent = '○';
} else {
  $resultQuiz2.textContent = '☓';
}

if (params.get('q3') == '1') {
  $resultQuiz3.textContent = '○';
} else {
  $resultQuiz3.textContent = '☓';
}

//back button
$backButton.addEventListener('click', () => {
  if (window.confirm('Go to the SELECT PAGE?') === true) {
    clickBackToTop();
  }
});

const clickBackToTop = () => {
  window.location.href = './select.html';
};

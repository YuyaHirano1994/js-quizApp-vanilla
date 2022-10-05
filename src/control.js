const $backButton = document.getElementById('js-back-btn');

//back button
$backButton.addEventListener('click', () => {
  if (window.confirm('Back to the first question?') === true) {
    clickBackToTop();
  }
});

const clickBackToTop = () => {
  window.location.href = './top.html';
};

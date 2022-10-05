const $backButton = document.getElementById('js-back-btn');

//back button
$backButton.addEventListener('click', () => {
  if (window.confirm('Back to the first question?') === true) {
    clickBack();
  }
});

const clickBack = () => {
  window.location.href = './top.html';
};

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Close all other answers
    questions.forEach(q => {
      if (q !== question) {
        q.nextElementSibling.style.maxHeight = null;
      }
    });

    const answer = question.nextElementSibling;

    // Toggle the selected answer
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

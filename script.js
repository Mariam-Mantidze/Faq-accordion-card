document.addEventListener("DOMContentLoaded", function () {
  const question = document.querySelectorAll(".clickable");

  question.forEach((question) =>
    question.addEventListener("click", () => {
      const commonParent = question.closest(".faq-item");
      const currentArrow = commonParent.querySelector(".arrow");
      const answer = question.nextElementSibling;

      answer.classList.toggle("answer-active");
      currentArrow.classList.toggle("arrow-active");
      question.classList.toggle("question-active");
    })
  );
});

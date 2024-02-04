/* .arrow:hover {
  transform: rotate(180deg);
} */
const question = document.getElementsByClassName("faq-question");

Array.from(question).forEach((question) =>
  question.addEventListener("click", () => {
    const commonParent = question.closest(".faq-item");
    const currentArrow = commonParent.querySelector(".arrow");
    const answer = question.nextElementSibling;

    answer.classList.toggle("faq-answer-hidden");

    if (answer.classList.contains("faq-answer-hidden")) {
      answer.style.display = "block";
      currentArrow.style.transform = "rotate(180deg)";
    } else {
      answer.style.display = "";
      currentArrow.style.transform = "";
    }
  })
);

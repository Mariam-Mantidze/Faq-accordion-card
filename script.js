document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.nextElementSibling;

    question.addEventListener("click", () => {
      const commonParent = question.closest(".faq-item");
      const currentArrow = commonParent.querySelector(".arrow");

      answer.classList.toggle("active");

      if (answer.classList.contains("active")) {
        question.style.fontWeight = "700";
        answer.style.opacity = "1";
        answer.style.maxHeight = "60px";
        currentArrow.style.transform = "rotate(180deg)";
      } else {
        answer.style.opacity = "";
        currentArrow.style.transform = "";
        question.style.fontWeight = "";
        answer.style.maxHeight = "";
      }
    });
  });
});

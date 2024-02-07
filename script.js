document.addEventListener("DOMContentLoaded", function () {
  const elements = Array.from(document.getElementsByClassName("faq-item"));

  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      const isActive = event.target.parentElement.classList.contains("active");

      elements.forEach((element) => {
        element.classList.remove("active");
      });

      if (!isActive) {
        event.target.parentElement.classList.add("active");
      }
    });
  });
});

// const question = element.querySelector(".faq-question");
// const arrow = element.querySelector(".arrow");
// const answer = question.nextElementSibling;

// document.addEventListener("DOMContentLoaded", function () {
//   const element = document.querySelectorAll(".clicked");

//   element.forEach((element) =>
//     element.addEventListener("click", (event) => {
//       const commonParent = element.closest(".faq-item");
//       const currentArrow = commonParent.querySelector(".arrow");
//       const question = commonParent.querySelector(".faq-question");
//       let answer;

//       if (element.nextElementSibling.classList.contains("faq-answer")) {
//         answer = element.nextElementSibling;
//       } else {
//         answer = element.previousElementSibling;
//       }

//       answer.classList.toggle("answer-active");
//       currentArrow.classList.toggle("arrow-active");
//       question.classList.toggle("question-active");
//     })
//   );
// });

document.addEventListener("DOMContentLoaded", function () {
  const element = Array.from(document.getElementsByClassName("faq-item"));
  console.log(element);

  element.forEach((element) => {
    element.addEventListener("click", (event) => {
      const question = element.querySelector(".faq-question");
      const arrow = element.querySelector(".arrow");
      const answer = question.nextElementSibling;

      answer.classList.toggle("answer-active");
      arrow.classList.toggle("arrow-active");
      question.classList.toggle("question-active");
    });
  });
});

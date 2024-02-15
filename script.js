document.addEventListener("DOMContentLoaded", function () {
  const elements = Array.from(document.getElementsByClassName("faq-item"));

  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      const isActive = event.currentTarget.classList.contains("active");

      console.log(event.currentTarget, event.target.parentElement);
      elements.forEach((element) => {
        element.classList.remove("active");
      });

      if (!isActive) {
        event.currentTarget.classList.add("active");
      }
    });
  });
});

// ================ [BETTER VERSION WITH COMMENTS] =================

// const elements = Array.from(document.getElementsByClassName("faq-item"));

// document.addEventListener("DOMContentLoaded", function () {
//   // variable for keeping last active element
//   let lastActive = null;

//   elements.forEach((element) => {
//     element.addEventListener("click", (event) => {
//       // variable for keeping current active element
//       const currentParent = event.currentTarget;
//       // ------- test
//       console.log(currentParent, "current");

//       // check if current parent does not equal lastActive parent
//       if (currentParent != lastActive) {
//         // if lastActive exists remove active class from it
//         if (lastActive) {
//           lastActive.classList.remove("active");
//           console.log(lastActive, "last active");
//         }
//         // add active class to current element
//         currentParent.classList.add("active");
//         // assign current element's referrence to lastActive element
//         lastActive = currentParent;
//         // -------- test
//         // console.log(lastActive, "lastActive");
//         // and if last active and current element are equal
//       } else {
//         // toggle the active class which causes the "unclicking behaviour"
//         currentParent.classList.toggle("active");
//         // reset active element. so the that the next click is treated as an activation
//         // regardless of the element's prev. state.
//         if (!currentParent.classList.contains("active")) {
//           lastActive = null;
//         }
//       }
//     });
//   });
// });

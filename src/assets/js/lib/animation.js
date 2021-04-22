// const chapter1 = document.querySelector(".chapter-1");
// const chapter2 = document.querySelector(".chapter-2");
const chapter3 = document.querySelector(".chapter-3");
// const chapter1End = document.querySelector(
//   ".chapter-1__view-1 div:nth-child(4)"
// );
// const chapter2End = document.querySelector(
//   ".chapter-2__view-2 div:nth-child(3)"
// );

const startChapter3 = () => {
  //  document.body.removeChild(chapter2);
  chapter3.setAttribute("data-state", "active");
};

// const startChapter2 = () => {
//   // document.body.removeChild(chapter1);
//   chapter2.setAttribute("data-state", "active");
//   chapter2End.addEventListener("animationend", () => {
//     startChapter3();
//   });
// };

// const startChapter1 = () => {
//   chapter1.setAttribute("data-state", "active");
//   chapter1End.addEventListener("animationend", () => {
//     startChapter2();
//   });
// };

export default () => {
  startChapter3();
};

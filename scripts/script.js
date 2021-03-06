const sect = document.querySelectorAll(".section1");
const options = {
  root: null,
  threshold: 0.02,
  rootMargin: "150px",
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("new");
    observer.unobserve(entry.target);
    // document.querySelector('header').classList.add('header');
    // if(entry.isIntersecting === true){
    //     console.log(entry.target);

    //     entry.target.classList.toggle('new');
    // }

    // entry.target.classList.toggle('new');
  });
}, options);
sect.forEach((aSection) => {
  observer.observe(aSection);
});
let modeBtn = document.querySelector(".mode");
  modeBtn.addEventListener("click", (e) => {
  document.querySelector(".intro").classList.toggle("dark");
  document.querySelector(".light").classList.toggle("toggling");
  document.querySelector("body").classList.toggle("bodyDark");
  document.getElementsByClassName(".section1").classList.toggle("section1Dark");
});

const hamburger = document.getElementById("hamburger");
const dropdown = document.querySelector("#dropdown");
const dropdownEl = document.querySelectorAll("#dropdown li > a");

if (window.innerWidth < 768) {
  hamburger.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    console.log("active");
  });
  dropdownEl.forEach((el) => {
    el.addEventListener("click", () => {
      dropdown.classList.remove("active");
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const squares = entry.target.querySelectorAll(".fullfilled");
    if (entry.isIntersecting) {
      squares.forEach((square) => {
        square.classList.add("animate");
      });
      return;
    }
  });
});

observer.observe(document.querySelector("#skills-content"));

// AOS

AOS.init();

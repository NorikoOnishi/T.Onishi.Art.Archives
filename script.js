function openWork(n){
  document.getElementById("top").style.display = "none";
  document.getElementById("work"+n).style.display = "block";
}

function back(){
  document.querySelectorAll(".work-page").forEach(p=>{
    p.style.display = "none";
  });
  document.getElementById("top").style.display = "block";
}

/* ===== カルーセル ===== */
window.addEventListener("DOMContentLoaded", () => {

  const images = [
    "images/001.jpg",
    "images/kobe-niki.JPG",
    "images/002.jpg",
    "images/garage.JPG",
    "images/009.jpg"
  ];

  let current = 0;
  let isAnimating = false;

  const img = document.getElementById("carousel-image");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  function render() {

    if (!img) return;

    img.classList.remove("fade");

    img.src = images[current];

    void img.offsetWidth;

    requestAnimationFrame(() => {
      img.classList.add("fade");
    });
  }

  function nextSlide() {

    if (isAnimating) return;

    isAnimating = true;

    current = (current + 1) % images.length;

    render();

    setTimeout(() => {
      isAnimating = false;
    }, 3000);
  }

  function prevSlide() {

    if (isAnimating) return;

    isAnimating = true;

    current = (current - 1 + images.length) % images.length;

    render();

    setTimeout(() => {
      isAnimating = false;
    }, 3000);
  }

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  render();

  // ゆっくり自動再生
  setInterval(() => {
    nextSlide();
  }, 7000);

});

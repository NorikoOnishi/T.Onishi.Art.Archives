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

  const img = document.getElementById("carousel-image");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  function showImage(){
    img.classList.remove("fade");
    void img.offsetWidth;
    img.src = images[current];
    requestAnimationFrame(()=> img.classList.add("fade"));
  }

  next.addEventListener("click", ()=>{
    current = (current+1)%images.length;
    showImage();
  });

  prev.addEventListener("click", ()=>{
    current = (current-1+images.length)%images.length;
    showImage();
  });

  showImage();

  setInterval(()=>{
    current = (current+1)%images.length;
    showImage();
  },8000);

});

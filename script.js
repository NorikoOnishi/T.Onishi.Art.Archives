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

/* ===== ギャラリー自動生成 ===== */

const gallery = document.getElementById("gallery");

works.forEach(w=>{
  const img = document.createElement("img");
  img.src = w.file;
  img.onclick = () => openWork(w.id);
  gallery.appendChild(img);
});

/* ===== カルーセル ===== */

const images = [
  "001.jpg",
  "kobe-niki.JPG",
  "002.jpg",
  "garage.JPG",
  "009.jpg"
];

let current = 0;
const carouselImg = document.getElementById("carousel-image");

function showImage(){
  carouselImg.src = images[current];
}

document.querySelector(".next").onclick = ()=>{
  current = (current + 1) % images.length;
  showImage();
};

document.querySelector(".prev").onclick = ()=>{
  current = (current - 1 + images.length) % images.length;
  showImage();
};

showImage();

setInterval(()=>{
  current = (current + 1) % images.length;
  showImage();
},8000);

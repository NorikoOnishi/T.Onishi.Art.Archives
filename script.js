const gallery = document.getElementById("gallery");
const carousel = document.getElementById("carousel-image");

const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbTitle = document.getElementById("lb-title");
const lbYear = document.getElementById("lb-year");
const lbDesc = document.getElementById("lb-desc");

const close = document.getElementById("close");

let i = 0;

/* GALLERY */
works.forEach(w => {
  const img = document.createElement("img");
  img.src = "images/" + w.file;

  img.onclick = () => {
    lb.style.display = "flex";
    lbImg.src = "images/" + w.file;
    lbTitle.textContent = w.title;
    lbYear.textContent = w.year;
    lbDesc.textContent = w.desc;
  };

  gallery.appendChild(img);
});

/* CAROUSEL */
function show() {
  carousel.src = "images/" + works[i].file;
}

show();

document.getElementById("next").onclick = () => {
  i = (i + 1) % works.length;
  show();
};

document.getElementById("prev").onclick = () => {
  i = (i - 1 + works.length) % works.length;
  show();
};

/* CLOSE */
close.onclick = () => lb.style.display = "none";

lb.onclick = (e) => {
  if (e.target === lb) lb.style.display = "none";
};

/* AUTO PLAY */
setInterval(() => {
  i = (i + 1) % works.length;
  show();
}, 8000);
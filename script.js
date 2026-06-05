function openWork(n){
  document.getElementById("top").style.display="none";
  document.getElementById("work"+n).style.display="block";
}

function back(){
  document.querySelectorAll(".work-page").forEach(p=>{
    p.style.display="none";
  });
  document.getElementById("top").style.display="block";
}

/* ===== ギャラリー自動生成 ===== */

const works = [
  {id:1,file:"001.jpg"},
  {id:2,file:"002.jpg"},
  {id:3,file:"003.JPG"},
  {id:4,file:"004.JPG"},
  {id:5,file:"005.JPG"},
  {id:6,file:"006.JPG"},
  {id:7,file:"007.JPG"},
  {id:8,file:"008.JPG"},
  {id:9,file:"009.jpg"},
  {id:200,file:"200.JPG"}
];

const gallery=document.getElementById("gallery");

works.forEach(w=>{
  const img=document.createElement("img");
  img.src=w.file;
  img.onclick=()=>openWork(w.id);
  gallery.appendChild(img);
});

/* ===== カルーセル ===== */

const images=["001.jpg","kobe-niki.JPG","002.jpg","garage.JPG","009.jpg"];

let i=0;
const img=document.getElementById("carousel-image");

function show(){
  img.src=images[i];
}

document.querySelector(".next").onclick=()=>{
  i=(i+1)%images.length;
  show();
};

document.querySelector(".prev").onclick=()=>{
  i=(i-1+images.length)%images.length;
  show();
};

show();

setInterval(()=>{
  i=(i+1)%images.length;
  show();
},8000);

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

/* ===== カルーセル（中央フォーカス型） ===== */

window.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-track img");

  let index = 0;

  function update(){

    items.forEach((img, i)=>{

      img.classList.remove("active");

      const offset = i - index;

      if(i === index){
        img.classList.add("active");
      }

      img.style.transform = `translateX(${offset * 520}px) scale(${i === index ? 1.05 : 0.85})`;
      img.style.filter = i === index ? "blur(0)" : "blur(6px)";
      img.style.opacity = i === index ? "1" : "0.4";
    });
  }

  function next(){
    index = (index + 1) % items.length;
    update();
  }

  function prev(){
    index = (index - 1 + items.length) % items.length;
    update();
  }

  document.querySelector(".next").onclick = next;
  document.querySelector(".prev").onclick = prev;

  update();

  setInterval(()=>{
    next();
  }, 5000);
});

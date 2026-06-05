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

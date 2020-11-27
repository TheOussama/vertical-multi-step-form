const slidePage = document.querySelector(".slidePage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressTexts = document.querySelectorAll(".step p");
const progressChecks = document.querySelectorAll(".check");
const bullets = document.querySelectorAll(".bullet");

let max=4;
let current = 1;

firstNextBtn.addEventListener("click",()=>{
  slidePage.style.marginLeft="-25%";

  bullets[current-1].classList.add("active");
  animation = getComputedStyle(document.querySelectorAll('.bullet')[0], '::after').getPropertyValue('animation');
   console.log(animation);
  progressTexts[current-1].classList.add("active");
  progressChecks[current-1].classList.add("active");
  current +=1;
})

nextBtnSec.addEventListener("click",()=>{
  slidePage.style.marginLeft="-50%";
  bullets[current-1].classList.add("active");
  progressTexts[current-1].classList.add("active");
  progressChecks[current-1].classList.add("active"); 
  current +=1;
})
nextBtnThird.addEventListener("click",()=>{
  slidePage.style.marginLeft="-75%";
  bullets[current-1].classList.add("active");
  progressTexts[current-1].classList.add("active");
  progressChecks[current-1].classList.add("active"); 
  current +=1;
})

submitBtn.addEventListener("click",()=>{
  slidePage.style.marginLeft="-75%";
  bullets[current-1].classList.add("active");
  progressTexts[current-1].classList.add("active");
  progressChecks[current-1].classList.add("active"); 
  current +=1;
  setTimeout(() => {
    alert("fuck yeahh");
    location.reload();
  }, 800);
})





prevBtnSec.addEventListener("click",()=>{
  slidePage.style.marginLeft="0%";
  bullets[current-2].classList.remove("active");
  progressTexts[current-2].classList.remove("active");
  progressChecks[current-2].classList.remove("active"); 
  current -=1;
})
prevBtnThird.addEventListener("click",()=>{
  slidePage.style.marginLeft="-25%";
  bullets[current-2].classList.remove("active");
  progressTexts[current-2].classList.remove("active");
  progressChecks[current-2].classList.remove("active"); 
  current -=1;

})
prevBtnFourth.addEventListener("click",()=>{
  slidePage.style.marginLeft="-50%";
  bullets[current-2].classList.remove("active");
  progressTexts[current-2].classList.remove("active");
  progressChecks[current-2].classList.remove("active"); 
  current -=1;
})
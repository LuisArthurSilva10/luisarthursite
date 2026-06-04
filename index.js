const slides = document.querySelectorAll (".slides img");
let slideIndex =0;
let intervaloId =null;

initSlider();

function initSlider(){
   slides[slideIndex].classList.add("mostreSlide");
   intervaloId=setInterval(nextSlide,5000);
} 
function mostreSlide(index){ 
   if(index >=slides.length){
      slideIndex =0;
   }
   else if(index<0){
      slideIndex = slides.length -1;

   }
    slides.forEach(slide=>{
      slide.classList.remove("mostreSlide");
    });
    slides[slideIndex].classList.add("mostreSlide");
}
function prevSlide(){
   clearInterval(intervaloId);
    slideIndex--;
    mostreSlide(slideIndex);
}
function nextSlide(){
    clearInterval(intervaloId);
   slideIndex++;
   mostreSlide(slideIndex);

}

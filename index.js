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
function abrirModal() {
    document.getElementById("modalLogin").style.display = "block";
}


function fecharModal() {
    document.getElementById("modalLogin").style.display = "none";
    document.getElementById("mensagem-erro").innerText = "";
}

window.onclick = function(event) {
    const modal = document.getElementById("modalLogin");
    if (event.target == modal) {
        fecharModal();
    }
}
function efetuarLogin(event) {
    event.preventDefault(); 
    
    const usuarioDigitado = document.getElementById("usuario").value;
    const senhaDigitada = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagem-erro");

    if (usuarioDigitado === "admin" && senhaDigitada === "1234") {
        alert("Login efetuado com sucesso na JC Instrumentos!");
        fecharModal();
    } else {
        mensagemErro.innerText = "Usuário ou senha incorretos.";
    }
}

const nao = document.querySelector('.nao');
const sim = document.querySelector('.sim');
const text = document.querySelector('.text');
const foto = document.querySelector('.foto');
const caseNot = document.querySelector('.case-not')
let altura=window.innerHeight-50;
let largura=window.innerWidth-50;


nao.addEventListener('click', function(){
    nao.style.position="absolute";
    nao.style.top=Math.random() * altura + "px";
    nao.style.left=Math.random() * largura + "px";
    caseNot.style = "display:block;"
})
  

sim.addEventListener("click", function(){
    nao.style = "display: none;"
    sim.style = "display: none;"
    text.innerHTML = "TE AMO DEMAIS RHAYANEH MATHEUS GONXALVES"
    foto.style = "display: block;";
    caseNot.style = "display: none;";
});
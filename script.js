const nao = document.querySelector('.nao');
const sim = document.querySelector('.sim');
const text = document.querySelector('.text');
const foto = document.querySelector('.foto');
const caseNot = document.querySelector('.case-not')
let valor;
let contador = 1;

nao.addEventListener('click', function(){
     valor = 5*contador;
     console.log(contador);
     console.log(valor);
     caseNot.style = "display:block;"

        if(contador >= 0 && contador < 5){   
        nao.style = `position: relative; top:${valor*contador}px; left:${valor*contador}px;`;
        contador++;
    }

    else if(contador >= 4 && contador < 8){
        nao.style = `position: relative; top:${valor*contador}px; right:${valor*contador}px;`;
        contador++;
    }
    else if(contador >= 7){
        valor =5;
        nao.style = `position: relative; bottom:${valor*contador}px;`;
        contador = 3;
    }
}
);
  

sim.addEventListener("click", function(){
    nao.style = "display: none;"
    sim.style = "display: none;"
    text.innerHTML = "TE AMO DEMAIS RHAYANEH MATHEUS GONXALVES"
    foto.style = "display: block;";
    caseNot.style = "display: none;";
});
let variavelAleatoria = 'sla'
if (variavelAleatoria === 'sla') {
  alert('KKKKKKKKKKK');
} else {
  alert('HAHAHAHAHAHAHA');
}
function multiplica(x, y) {
  let resultado = x * y;
    return resultado
}

multiplica(6, 7)

document.querySelector('h1').onclick = function() {
  alert('clicou pq fdp')
}
document.querySelector('img').onclick = function() {
  alert('É o Aomine burro')
}
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');
function defineNomeUsuario() {
  let meuNome = prompt('Digite seu nome amigo');
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'massa, ' + meuNome;
}
if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'massa, ' + nomeGuardado;
}
  meuBotao.onclick = function() { defineNomeUsuario()
                                }
function defineNomeUsuario() {
  let meuNome = prompt('Digite seu nome amigo');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'massa, ' + meuNome;
  }
}

let abajur = document.querySelector('.abajur')
let btAbajur = document.querySelector('.bt-abajur')
function ligaAbajur(){
  if(btAbajur.innerHTML == 'Ligar'){
    abajur.style.backgroundColor = 'yellow'
    abajur.style.boxShadow = '0px 0px 8px black'
    btAbajur.innerHTML = 'Desligar'
  }
  else{
    abajur.style.backgroundColor = '#5d5d22'
    abajur.style.boxShadow = 'none'
    btAbajur.innerHTML = 'Ligar'
  }
}
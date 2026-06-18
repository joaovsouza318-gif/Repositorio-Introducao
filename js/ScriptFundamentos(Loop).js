const divFor = document.querySelector('#div-For');

for (i = 0; i > 10; i++) {
    console.log(i);
    divFor.innerHTML += `<p>${i}</p>`;
}

const inputNum1 = document.querySelector('#num1');
const btnNum1 = document.querySelector('#btn-num1');
const divResult = document.querySelector('#result-cont-acum');

let cont = 0
let acum = 0.0

btnNum1.addEventListener('click', (evt) => {
    let numDigitado = Number(inputNum1.value)

    cont++
    acum += numDigitado;
    divResult.innerHTML += `Total de números digitados ${cont} <br>
    A soma dos número digitados é ${acum}`;
})

const inputFrase = document.querySelector('#msg');
const inputNumRepeticao = document.querySelector('#numRepeticao');
const btnExibir = document.querySelector('#btn-exibir');
const divResultFrase = document.querySelector('#result-frase');

let contFrase = 0;
let totalRepeticao = 0;

btnExibir.addEventListener('click', (evt) => {
    totalRepeticao = Number(inputNumRepeticao.value)

    while (totalRepeticao > contFrase) {
        divResultFrase.innerHTML += `<p>${inputFrase.value}</p>`;
        contFrase++;
    }
})

nomes = ['João', 'Maria', 'José', 'Ana', 'Carlos']

for (i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

const divForIn = document.querySelector('#div-forin');
for(let pos in nomes) {
    console.log(nomes);
    divForIn.innerHTML += `${nomes[pos]}<br>`;
}

const divForOf = document.querySelector('#div-forof');
for(let nome of nomes) {
    console.log(nome);
    divForOf.innerHTML += `${nome}<br>`;
}

const pessoas = [
    {nome: 'João', idade: 30, renda: 2000.00},
    {nome: 'Maria', idade: 25, renda: 3000.00},
    {nome: 'José', idade: 40, renda: 4000.00},
    {nome: 'Ana', idade: 35, renda: 3500.00},
    {nome: 'Carlos', idade: 28, renda: 2500.00}
]

for(let indiceObjPessoa in pessoas) {
    console.log(pessoas[indiceObjPessoa].idade);
}

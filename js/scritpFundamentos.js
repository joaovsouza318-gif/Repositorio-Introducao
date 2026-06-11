//comentário de uma linha  
/*
comentário de múltiplas linhas
*/


// Operadores aritméticos
// + - adição
// - - subtração
// * - multiplicação
// / - divisão
// % - módulo (resto da divisão)


// Também temos os operadores de comparação:
// == - igualdade (com conversão de tipo)
// === - igualdade estrita (sem conversão de tipo)
// != - desigualdade (com conversão de tipo)
// !== - desigualdade estrita (sem conversão de tipo)
// > - maior que
// < - menor que
// >= - maior ou igual a
// <= - menor ou igual a


// Variáveis em JavaScript
// Podemos declarar variáveis usando var, let ou const
// var tem escopo de função e pode ser redeclarada
// let tem escopo de bloco e não pode ser redeclarada
// const tem escopo de bloco e não pode ser redeclarada nem reatribuída


// && - operador lógico AND
// || - operador lógico OR    
// ! - operador lógico NOT


// =========================================================================

let num = 10
var num2 = 20
const num3 = 30

console.log(num)
console.log(num2)
console.log(num3)

if (true) {
    let num4 = 40
    console.log(num4)

    var num5 = 50
}
console.log("Olá, mundo!", num2)

console.log("A soma de num e num2 é: " + (num + num2))
console.log("A subtração de num e num2 é: " + (num - num2))
console.log("A multiplicação de num e num2 é: " + (num * num2))
console.log("A divisão de num e num2 é: " + (num / num2))
console.log("O módulo de num e num2 é: " + (num % num2))

if (num > num2) {
    console.log("num é maior que num2")
} else if (num < num2) {
    console.log("num é menor que num2")
} else {
    console.log("num é igual a num2")
}


if (num > 5 && num < 15) {
    console.log("num está entre 5 e 15")
}
else if (num < 5 || num > 15) {
    console.log("num está fora do intervalo de 5 a 15")
}

else if (!(num > 5)) {
    console.log("num não é maior que 5")
}
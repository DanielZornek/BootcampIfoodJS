/*
    1) Crie um programa que dado um número imprima a sua tabuada.
*/
function calcularTabuada(numero){
    for(let i = 0; i <= 10; i++){
        console.log(`${numero} X ${i} = ${numero*i}`)
    }
}

calcularTabuada(4);
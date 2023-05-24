/*
    2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

function encontrarPares(){
    numeros = [43, 64, 9, 1, 673, 97431, 90, 32, 13, 22, 474];

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            console.log(`Par encontrado: ${numeros[i]}`)
        }
    }
}

encontrarPares();
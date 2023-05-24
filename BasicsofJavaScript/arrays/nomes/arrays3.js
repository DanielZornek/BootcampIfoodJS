/*
    3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

const nomes = ["Vegeta", "Granolla", "Vitória", "Ellie", "Vinicius", "Bardock", "Naruto", "Seiya", "victor", "Agostinho Carrar", "venilton"];

function encontrarNomesComV(){
    // console.log(nomes[0][0]);
    for(let i = 0; i < nomes.length; i++){
        if(nomes[i][0] === "V" || nomes[i][0] === "v"){
            console.log(`${nomes[i]}`);
        }
    }
}

encontrarNomesComV();
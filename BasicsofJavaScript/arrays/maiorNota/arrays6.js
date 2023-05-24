/*
    6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

let notas = [2, 7, 3, 8, 10, 4, 9, 9, 4, 2, 5, 7];
let maiorNota = 0;

function encontrarMaiorNota(){
    for(let i = 0; i < notas.length; i++){
        if(notas[i] > maiorNota){
            maiorNota = notas[i];
        }
    }
    console.log(`${maiorNota} é a maior nota tirada.`);
}   

encontrarMaiorNota();
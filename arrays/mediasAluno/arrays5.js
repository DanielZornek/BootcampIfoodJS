/*
    5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/

let mediaAlunos = [2, 7, 3, 8, 10, 4, 9, 7, 3, 4]; 
let mediasRetidas = [];

function encontrarAlunoDeRecuperacao(){
    for(let i = 0; i < mediaAlunos.length; i++){
        if(mediaAlunos[i] < 5){
            console.log(`Média de: ${mediaAlunos[i]}, está de recuperação!!!`);
            mediasRetidas.push(mediaAlunos[i]);
        }
    }

    console.log(`Notas retidas: ${mediasRetidas}, no total foram ${mediasRetidas.length} alunos.`);
}

encontrarAlunoDeRecuperacao();
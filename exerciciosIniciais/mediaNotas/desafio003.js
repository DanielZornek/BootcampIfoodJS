const nota1 = 5;
const nota2 = 7;
const nota3 = 3;

const media = (nota1 + nota2 + nota3)/3;

if(media < 5){
    console.log(`Sua nota média é de ${media}, você está reprovado!`);
}else if(media >= 5 && media <= 7){
    console.log(`Sua nota média é de ${media}, você está de recuperação!`);
}else if(media > 7 && media <= 10){
    console.log(`Sua nota média é de ${media}, você está aprovado!`);
}else{
    console.log("Desculpe não entendi, tente novamente com valores corretos. [ERROR]");
}
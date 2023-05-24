const peso = 81.2;
const altura = 1.83;

const imc = peso / (altura * altura);

if(imc <= 18.5){
    console.log(`O seu IMC é de ${imc.toFixed(3)}, e você está abaixo do peso!`);
}else if(imc > 18.5 && imc <= 25){
    console.log(`O seu IMC é de ${imc.toFixed(3)}, e você com o peso normal.`);
}else if(imc > 25 && imc <= 30){
    console.log(`O seu IMC é de ${imc.toFixed(3)}, e você está acima do peso!`);
}else if(imc > 30 && imc <= 40){
    console.log(`O seu IMC é de ${imc.toFixed(3)}, e você está obeso!`);
}else if(imc > 40){
    console.log(`O seu IMC é de ${imc.toFixed(3)}, e você com obeisdade grave!`);
}
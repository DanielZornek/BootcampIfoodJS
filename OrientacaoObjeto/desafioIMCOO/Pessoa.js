/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
    do seu IMC;
*/ 

class Pessoa {
    nome;
    peso;
    altura;
    imc

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        this.imc = this.peso / (this.altura * this.altura);
        return `O IMC da pessoa ${this.nome}, corresponde a ${this.imc.toFixed(3)}`;
    }

    classificarIMC(){
        if(this.imc < 18.5){
            return `Seu imc é de ${this.imc}, você está abaixo do peso ideal.`;
        }else if(this.imc >= 18.5 && this.imc <= 25){
            return `Seu imc é de ${this.imc}, seu peso está normal.`;
        }else if(this.imc >= 25 && this.imc <= 30){
            return `Seu imc é de ${this.imc}, você está com sobrepeso.`;
        }else if(this.imc >= 30 && this.imc <= 40){
            return `Seu imc é de ${this.imc}, você está obeso.`;
        }else{
            return `Seu imc é de ${this.imc}, você está com obesidade grave.`;
        }
    }
}

pessoa001 = new Pessoa("José", 70, 1.75);
console.log(pessoa001.calcularIMC());
console.log(pessoa001.classificarIMC());

pessoa002 = new Pessoa("Majin Boo", 280, 2.10);
console.log(pessoa002.calcularIMC());
console.log(pessoa002.classificarIMC());
/* 
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/
class Carro{
    marca;
    modelo;
    cor;
    gastoMedioPorKM

    constructor(marca, modelo, cor, gastoMedioPorKM){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM
    }

    calcularGastoCombustivel(distanciaEmKM, precoCombustivel){
        return `O ${this.marca} ${this.modelo}, gastará por volta de ${(distanciaEmKM *  this.gastoMedioPorKM * precoCombustivel).toFixed(3)} reais para realizar a viagem.`;
    }
}

Mustang1 = new Carro("Ford", "Mustang", "Vermelho", 1/6);
console.log(Mustang1.calcularGastoCombustivel(120, 5.51));

koegnissegAgeraR1 = new Carro("Koegnisseg", "Agera R", "Branco", 1/7);
console.log(koegnissegAgeraR1.calcularGastoCombustivel(60, 5.59));
const precoGasolina = 5.51;
const precoEtanol = 3.2076;
const tipoCombustivel = "etanol";
const gastoMedioPorKM = 9;
const distancia = 125;
let totalGasto;

const litrosGastos = distancia / gastoMedioPorKM;

if(tipoCombustivel === "Gasolina" || tipoCombustivel === "gasolina"){
    totalGasto = litrosGastos * precoGasolina;
    console.log(`O preço do litro da gasolina está ${precoGasolina}, você gastou ${litrosGastos.toFixed(3)} litros`);
}else if(tipoCombustivel === "Etanol" || tipoCombustivel === "etanol"){
    totalGasto = litrosGastos * precoEtanol;
    console.log(`O preço do litro do etanol está ${precoEtanol}, você gastou ${litrosGastos.toFixed(3)} litros`);
}

console.log(`Você gastará no total ${totalGasto.toFixed(3)} reais.`);
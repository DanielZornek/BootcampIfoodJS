const precoCombustivel = 5.51;
const gastoMedioPorKM = 7;
const percursoKm = 160;

const litrosConsumidos = percursoKm / gastoMedioPorKM;
const gastoTotal = litrosConsumidos * precoCombustivel;

console.log(gastoTotal);
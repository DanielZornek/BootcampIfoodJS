"use strict";
function retornaTiposVariaveis() {
    // tipos primitibos: boolean, string e number
    let verdade = true;
    let nome = "Daniel";
    let idade = 19;
    let altura = 1.83;
    // tipos especiais: null undefined
    let nulo = null; // só aceita null
    let indefinido = undefined;
    // tipos abrangente: void any
    let vazio;
    let qualquer = false; // aceita qualquer valor
    // Objects
    //  Objeto sem previsibilidade
    let produto = {
        name: "Café",
        preco: 8.99
    };
    let Produto001 = {
        name: "Café",
        preco: 12.59,
        quantidadeEstoque: 284
    };
    return `Tipo Boolean: ${verdade}
            Tipo String: ${nome}
            Tipo Number: ${idade}
            Tipo Number float: ${altura}
            Tipo null: ${nulo}
            Tipo undefined: ${indefinido}
            Tipo void: ${vazio}
            Tipo any: ${qualquer}
            Objeto sem previsibilidade: ${produto.name}
            Objeto com previsibilidade: ${Produto001.name}
            `;
}
console.log(retornaTiposVariaveis());

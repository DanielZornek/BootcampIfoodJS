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
    // Arrays = Vetores
    let dados = ["Goku", "Vegeta", "Granolla"];
    let dados2 = ["Naruto", "Sasuke", "Rock Lee"];
    // Arrays de Multi Types
    let infos = ["Daniel", 19, "Dabi", 25];
    // Todos os métodos de manipulação do próprio JS funcionam aqui também
    // Tuplas
    let boleto = ["Conta de água", 67.93, 17891798147812];
    let aniversário = new Date("2003.10.19 02:25");
    return `Tipo Boolean: ${verdade}
            Tipo String: ${nome}
            Tipo Number: ${idade}
            Tipo Number float: ${altura}
            Tipo null: ${nulo}
            Tipo undefined: ${indefinido}
            Tipo void: ${vazio}
            Tipo any: ${qualquer}
            Objeto sem previsibilidade: ${produto}
            Objeto com previsibilidade: ${Produto001}
            Array: ${dados}
            Array com mais de um tipo: ${infos}
            Tupla: ${boleto}
            Dates: ${aniversário}
            `;
}
console.log(retornaTiposVariaveis());

function retornaTiposVariaveis(){
    // tipos primitibos: boolean, string e number
    let verdade: boolean = true; 
    let nome: string = "Daniel";
    let idade: number = 19;
    let altura: number = 1.83;
    // tipos especiais: null undefined
    let nulo: null = null // só aceita null
    let indefinido: undefined = undefined      
    
    // tipos abrangente: void any
    let vazio: void
    let qualquer: any = false // aceita qualquer valor

    // Objects
    //  Objeto sem previsibilidade
    let produto = {
        name: "Café",
        preco: 8.99
    }

    //  Objeto com previsibilidade
    type ProdutoLoja = {
        name: string;
        preco: number;
        quantidadeEstoque: number
    }

    let Produto001: ProdutoLoja = {
        name: "Café",
        preco: 12.59,
        quantidadeEstoque: 284
    }

    // Arrays = Vetores
    let dados: string[] = ["Goku", "Vegeta", "Granolla"];
    let dados2: Array<string> = ["Naruto", "Sasuke", "Rock Lee"];

    // Arrays de Multi Types
    let infos: (string | number)[] = ["Daniel", 19, "Dabi", 25];
    // Todos os métodos de manipulação do próprio JS funcionam aqui também

    // Tuplas
    let boleto: [string, number, number] = ["Conta de água", 67.93, 17891798147812];

    let aniversário: Date = new Date("2003.10.19 02:25");

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
            ` 
}

console.log(retornaTiposVariaveis());
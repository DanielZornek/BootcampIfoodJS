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
            ` 
}

console.log(retornaTiposVariaveis());
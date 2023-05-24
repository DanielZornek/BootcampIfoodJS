const preco = 357.99;
const condicaoPagamento = "Parcelado";
let desconto;
let novoPreco;
let parcelas = 4;
let acrescimo;

if(condicaoPagamento === "Débito"){

    desconto = preco*0.10;
    novoPreco = preco - desconto;
    console.log(`Você pagará no ${condicaoPagamento}, o preço é de ${novoPreco}`);

}else if(condicaoPagamento === "Dinheiro" || condicaoPagamento === "PIX"){
    
    desconto = preco*0.15;
    novoPreco = preco - desconto;
    console.log(`Você pagará no ${condicaoPagamento}, o preço é de ${novoPreco}`);

}else if(condicaoPagamento === "Parcelado"){
    if(parcelas > 2){
        acrescimo = preco*0.1;
        novoPreco = preco + acrescimo;
        console.log(`Você pagará no ${condicaoPagamento}, o preço é de ${novoPreco}, pagando um acréscimo de ${acrescimo} de juros`);
    }
}

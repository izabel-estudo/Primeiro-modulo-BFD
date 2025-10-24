import strict from "assert/strict";



class Compra {
    livro:Livro;
    preco:Number;
    vendedor:String;
    data_venda:Number;
    qtd:Number;
    qtd:Number;
//* Cria um registro de compra e atualiza o estoque do livro.

    constructor(livro, preco, vendedor, data_venda, qtd) {
        this.livro = livro;
        this.preco = preco;
        this.vendedor = vendedor;
        this.data_venda = data_venda;
        this.qtd = qtd;
        this.precoUnitario = this.calcularPrecoUnitario();
        this.livro.qtdEstoque += qtd;
    }
/* Calcula o preço de custo unitário do livro com base no preço total e na quantidade.*/

    calcularPrecoUnitario() {
        return this.preco / this.qtd;
    }
/*Exibe (imprime no console) todos os detalhes da transação de compra. */
    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Livro: ${this.livro.titulo}`);
        console.log(`Preço Total: R$ ${this.preco.toFixed(2)}`);
        console.log(`Vendedor: ${this.vendedor}`);
        console.log(`Data da Venda: ${this.data_venda}`);
        console.log(`Quantidade: ${this.qtd}`);
        console.log(`Preço Unitário: R$ ${this.precoUnitario.toFixed(2)}`);
        console.log("---------------------");
    }
}
//Exporta a classe compra
module.exports = Compra;
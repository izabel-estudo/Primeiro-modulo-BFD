class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    numeroPaginas: number;
    qtdEstoque: number;
    // Gera um objeto livro a partir das informações Titulo, 
    // Autor...
    constructor(titulo:string, autor:string, anoPublicacao:number, numeroPaginas:number, qtdEstoque:number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.numeroPaginas = numeroPaginas;
        this.qtdEstoque = qtdEstoque;
    }

    // Printa pro console as propriedades do livro
    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
        console.log(`Número de Páginas: ${this.numeroPaginas}`);
        console.log(`Quantidade em Estoque: ${this.qtdEstoque}`);
        console.log("---------------------");
    }

}
/*Exporta a classe Livro */
module.exports = Livro;  
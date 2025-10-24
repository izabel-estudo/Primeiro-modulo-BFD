/*Tarefa: Vocês foram contratados por uma biblioteca, para fazer a engenharia reversa do sistema deles e aplicarem reengenharia para migrarem o sistema para Typescript
Vocês devem gerar uma explicação escrita nos comentários do código do funcionamento do sistema, explicando funções, variáveis e etc.
Gerem também uma lista de requisitos funcionais e não funcionais e um diagrama UML*/

class Emprestimo {

    // Gera um objeto emprestimos 
    constructor(livro, pessoa, dias_emprestimo) {
        this.livro = livro;
        this.pessoa = pessoa;
        this.dias_emprestimo = dias_emprestimo;
        this.livro.qtdEstoque -= 1; // Diminui a quantidade em estoque do livro.
    }
    /**
     * Imprime os detalhes do empréstimo no console
     */
    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Livro: ${this.livro.titulo}`);
        console.log(`Pessoa: ${this.pessoa.nome}`);
        console.log(`Dias de Empréstimo: ${this.dias_emprestimo}`);
        console.log("---------------------");
    }
    //Calcula a multa dos dias de demora de entrega do livro caso seja entregue em atrazo
    calcularMulta(demoraDias) {
        if (demoraDias <= this.dias_emprestimo) {
            return 0.0;
        }
    //Caso tenha multa, retorna o valor que varia com os dias de atrazos multiplicaso pelo numero de paginas 
        return (demoraDias - this.dias_emprestimo) * Math.ceil(this.livro.numeroPaginas / 100) * 2.0;
        
    } 

}
/*Exporta a classe Emprestimo*/
module.exports = Emprestimo;
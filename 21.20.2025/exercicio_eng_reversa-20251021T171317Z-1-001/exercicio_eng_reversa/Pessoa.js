class Pessoa {
    // Gera um objeto livro a partir das informações nome, cpf e data de nascimento   
    constructor(nome, cpf, dataNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    // Printa pro console as propriedades da pessoa
    imprimirDetalhes() {
        console.log("---------------------");
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
        console.log("---------------------");
    }
}

// Exportar a classe pessoa pra ser usada em outros lugares
module.exports = Pessoa;
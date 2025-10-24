const prompt = require('prompt-sync')(); // Importa prompt-sync para capturar input do teclado
const Livro = require('./Livro'); // Importa as classes necessárias dos outros arquivos
const Compra = require('./Compra');
const Emprestimo = require('./Emprestimo');
const Pessoa = require('./Pessoa');


// Cria arrays vazios de livros, compras, emprestimos e pessoas
// Cria arrays vazios para armazenar todas as instâncias de objetos do sistema.
// Estes arrays simulam o banco de dados/repositório de dados.
const livros = [];
const compras = [];
const emprestimos = [];
const pessoas = [];

// Pede informações sobre o livro novo ao usuário e adiciona ele ao array
const adicionarLivro = () => {
    const titulo = prompt('Título do livro: ');
    const autor = prompt('Autor do livro: ');
    const ano = prompt('Ano de publicação: ');
    const paginas = prompt('Número de páginas: ');
    const estoque = prompt('Qtd em estoque:');

    const livro = new Livro(titulo, autor, ano, paginas, estoque);
    livros.push(livro); // empurra o cadastro para o array de livros 
    console.log('Livro adicionado com sucesso!');
};

// Mostra uma lista com detalhes de cada livro
const listarLivros = () => {
    console.log("Lista de Livros:");
    livros.forEach((livro, index) => {
        console.log(`\nLivro ${index + 1}:`);
        livro.imprimirDetalhes();
    });
}


// Pede informações sobre o pessoa nova ao usuário e adiciona ela ao array
const adicionarPessoa = () => {
    const nome = prompt('Nome da pessoa: ');
    const cpf = prompt('CPF da pessoa: ');
    const dataNascimento = prompt('Data de nascimento da pessoa: ');

    const pessoa = new Pessoa(nome, cpf, dataNascimento);
    pessoas.push(pessoa);
    console.log('Pessoa adicionada com sucesso!');
};

// Mostra uma lista com detalhes de cada pessoas
const listarPessoas = () => {
    console.log("Lista de Pessoas:");
    pessoas.forEach((pessoa, index) => {
        console.log(`\nPessoa ${index + 1}:`);
        pessoa.imprimirDetalhes();
    });
};

// Pede para o usuário escolher um livro da lista para compra e pede informações sobre a compra nova e adiciona ela ao array
const adicionarCompra = () => {
    listarLivros();
    const livroIndex = parseInt(prompt('Selecione o número do livro para compra: ')) - 1;
    const preco = parseFloat(prompt('Preço total da compra: '));
    const vendedor = prompt('Nome do vendedor: ');
    const dataVenda = prompt('Data da venda: ');
    const qtd = parseInt(prompt('Quantidade comprada: '));

    const compra = new Compra(livros[livroIndex], preco, vendedor, dataVenda, qtd);
    compras.push(compra);
    console.log('Compra adicionada com sucesso!');
};

// Mostra uma lista com detalhes de cada compra
const listarCompras = () => {
    console.log("Lista de Compras:");
    compras.forEach((compra, index) => {
        console.log(`\nCompra ${index + 1}:`);
        compra.imprimirDetalhes();
    });
};

// Pede para o usuário escolher um livro e uma pessoa da lista para emprestimo e pede informações sobre o emprestimo novo e adiciona ele ao array
const adicionarEmprestimo = () => {
    listarLivros();
    const livroIndex = parseInt(prompt('Selecione o número do livro para empréstimo: ')) - 1;
    listarPessoas();
    const pessoaIndex = parseInt(prompt('Selecione o número da pessoa que está pegando o empréstimo: ')) - 1;
    const diasEmprestimo = parseInt(prompt('Número de dias para o empréstimo: '));

    const emprestimo = new Emprestimo(livros[livroIndex], pessoas[pessoaIndex], diasEmprestimo);
    emprestimos.push(emprestimo);
    console.log('Empréstimo adicionado com sucesso!');
};


// Mostra uma lista com detalhes de cada emprestimos
const listarEmprestimos = () => {
    console.log("Lista de Empréstimos:");
    emprestimos.forEach((emprestimo, index) => {
        console.log(`\nEmpréstimo ${index + 1}:`);
        emprestimo.imprimirDetalhes();
    });
};

// Pede para o usuário escolher um emprestimo da lista e pergunta a demora para calcular a multa
const devolverLivro = () => {
    listarEmprestimos();
    const emprestimoIndex = parseInt(prompt('Selecione o número do empréstimo para devolução: ')) - 1;
    const demoraDias = parseInt(prompt('Número de dias que demorou para devolver: '));

    const emprestimo = emprestimos[emprestimoIndex];
    console.log(`Multa a ser paga: ${emprestimo.calcularMulta(demoraDias)}`);
};




// Mostra uma lista de ações que o usuário pode tomar
const menu = () => {
    console.log("\nMenu:");
    console.log("1. Adicionar Livro");
    console.log("2. Listar Livros");
    console.log("3. Adicionar Pessoa");
    console.log("4. Listar Pessoas");
    console.log("5. Adicionar Compra");
    console.log("6. Listar Compras");
    console.log("7. Adicionar Empréstimo");
    console.log("8. Listar Empréstimos");
    console.log("9. Devolver Livro");
    console.log("0. Sair");
    const escolha = prompt('Escolha uma opção: ');

    switch (escolha) {   // Executa o comando relevante de acordo à escolha
        case '1':
            adicionarLivro();
            break;
        case '2':
            listarLivros();
            break;
        case '3':
            adicionarPessoa();
            break;
        case '4':
            listarPessoas();
            break;
        case '5':
            adicionarCompra();
            break;
        case '6':
            listarCompras();
            break;
        case '7':
            adicionarEmprestimo();
            break;
        case '8':
            listarEmprestimos();
            break;
        case '9':
            devolverLivro();
            break;
        case '0':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida!');
            menu();
    }
};


while (true) {  // Loop principal que executa o menu e deixa o usuário sair caso queira
    menu();
    const continuar = prompt('Deseja sair do sistema? (s/n): ');
    if (continuar.toLowerCase() == 's') {
        break;
    }  
}


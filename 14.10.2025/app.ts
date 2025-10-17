/*
Tarefa: Criar uma função async que usa o fetch para acessar o API no seguinte endereço:
https://meowfacts.herokuapp.com/
Dica: Observe como usamos o fetch anteriormente!

fetch("https://meowfacts.herokuapp.com/").then(
    (dados) => {
        console.log(dados);
    }
).catch(
    (erro) => {
        console.error(erro)
    }
);
*/

async function pegarDados(){
    try {
        const dados = await fetch("https://meowfacts.herokuapp.com/");
        const dadosProcessados = await dados.json();
        console.log(dadosProcessados);
    } catch (error:any) {
        console.error(error)
    }
}

/*
pegarDados()
console.log("Hello")
*/

async function variosDados(qtd:number) {
    const p = [];
    for (let index = 0; index < qtd; index++) {
        p.push(pegarDados())
    }
    await Promise.all(p);
}

variosDados(4)
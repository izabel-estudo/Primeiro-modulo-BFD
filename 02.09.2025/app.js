

/*Tarefa: Você foi encarregado de criar um sistema para uma clínica veterinária. 
Crie as função perguntaIdade, que usa o prompt-sync para perguntar a idade do animal e capturar o resultado*/

const prompt = require("prompt-sync")();

function perguntaIdade()
{
    const idade = prompt("Qual sua idade? ");
    return idade;
}

/*Em seguida, crie uma outra funcao calcularIdadeAjustada 
que calcula a idade “verdadeira” do animal (multiplicando por 7)
*/
function calcularIdadeAjustada(idadeAntig){
    const idadeNova = idadeAntig*7;
    return idadeNova;
}

const idadeOrig = perguntaIdade();
console.log(`Idade em anos humanos: ${idadeOrig}`);
console.log(`Idade em anos de cachorro: ${calcularIdadeAjustada(idadeOrig)}`);

/* outra forma de fazer*/

const calcularIdadeAjustada2 = (idadeAntig) => {
    const idadeNova = idadeAntig*7;
    return idadeNova;
};

console.log(`Idade em anos humanos: ${idadeOrig}`);
console.log(`Idade em anos de cachorro: ${calcularIdadeAjustada2(idadeOrig)}`);

/*Arrays:
São praticamente listas de elementos
Cuidado para não confundir com Lists
Armazenam vários elementos, normalmente do mesmo tipo
*/

/*Arrays:
Indexação com []
.length e .sort()
.push() e .pop()
.reverse()
.foreach*/

const notas = [5,10,8,7];
notas.push(41);
console.log(notas);
notas.pop();
console.log(notas);

console.log(notas[1]);

notas[1]=20;

console.log(notas);

notas.forEach( el => {
    console.log("Meu elemento é", el);
});
/*Tarefa: Uma cliente entrou na clínica veterinária com 3 gatos. 
Adapte seu programa para usar arrays e lidar com todos os gatos de uma vez.
Dica: Após ter a idade dos gatos dentro do array, tenta usar o forEach
 */

const gatos = []
gatos.push(perguntaIdade());
gatos.push(perguntaIdade());
gatos.push(perguntaIdade());

gatos.forEach(idadegato =>{
    console.log("A idade do gato é, em anos humanos: ", idadegato);
    const resul = calcularIdadeAjustada(idadegato);
    console.log("Em anos de gato: ", resul);
});










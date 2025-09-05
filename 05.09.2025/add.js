/*Objects
Um dos tipos de dados mais fundamentais do Javascript
Funcionam a partir de pares de chave e valor (keyvalue pair)
Metáfora do dicionário e armário
Pares também são chamados de Propriedades

"Tarefa": Você deve criar dois objetos com as propriedades 
nome, espécie, raça e idade e imprimir o valor de cada propriedade
individualmente*/

/*Podemos misturar os tipos de dados 
como quisermos Uma lista dentro de um objeto:
Até objetos dentro de outros objetos (nested objects):
E até funções (metódos)!
Para fazer referência ao objeto 
dentro de um de seus métodos, usamos o "this"
Cuidado! As funcões que usam a notação 
de seta (expressão de funções), 
não acessam o this da mesma forma

"Tarefa": Os nossos objetos agora vão ganhar três novas propriedades:
consultas: uma array de datas das consultas marcadas
dono: um objeto com as propriedades nome e celular
verificarConsultas: um método que verifica 
se há alguma consulta marcada,
imprimindo as datas dessas caso haja e “Nenhuma consulta encontrada” 
caso não*/


const gato = {
    nome: "Branquelo",
    especie: "gato",
    raca: "vira lata",
    idade: 2,
    consulta:["02/09/2025","05/09/25","09/09/25"],
    dono:{ nome: "Izabel", celular:"2199868758"},
    imprimirDadosDono(){
        console.log(this.dono.nome,this.dono.celular)
    },
}
console.log(gato);
console.log(gato.idade);

const cachorro = {
    "nome":"Peteleco",
   "especie": "cachorro",
    "raca": "vira lata",
    "idade": 2,
    consulta:["03/09/2025","04/09/25","05/09/25"],
    dono:{ nome: "Izabel", celular:"2199868758"},
    imprimirDadosDono(){
        console.log(this.dono.nome,this.dono.celular)
    }

};

console.log(cachorro.consulta.length),
console.log(cachorro["especie"]),


gato.imprimirDadosDono()
cachorro.imprimirDadosDono()

const nome = "Arthur";

//console.log(nome.replace("Art", "Thur"));
/*
const frase = "O Breno chegou 5 min atrasado";

console.log(frase.replaceAll("Breno","______"));

const receita= `
                    1. Cortar o pão,
                    2. fritar o ovo.
                    3. Colocar o ovo no pão.`;

const novaString = "Seguir receita"

const nomeNovo = receita.replaceAll("pão","arroz");
console.log(nomeNovo.toUpperCase());
*/
//Tarefa: Criar uma função : traduzirParaAlien(texto), que traca todos os "a"s e "e"s do texto por "u"s e coloca o texto inteiro em maiúsculo. utilize essa função com os ingredientes adaptados e a receita

const textoPTraduzir =  
`1. Colocar Leite,
2. Colocar farinha de trigo.
3. Colocar manteiga
4. Colocar ovos
5. Misturar todos os ingredientes
6. colocar a mistura na forma
7. Pre-aqueça o forno a 180 graus.
8. Colocar forma no forno e deixar assar por 30 min`;


function traduzirParaAlien(texto){
    let resul = texto.toUpperCase();
    resul = resul.replaceAll("A","U");
    resul = resul.replaceAll("E","U");
    console.log(resul);

}

traduzirParaAlien(textoPTraduzir);

//console.log(resul);






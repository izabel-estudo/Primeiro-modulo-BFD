





/*Tarefa: Construir dois novas funções fábricas criarDono(nome, celular) e criarPet(nome, espécie, raça, idade, dono). 
Em seguida, usem essas funções para adicionar os seguintes pets e donos ao sistema: */

const criaPet = (nome,especie,raca,idade,dono) => {
    /*criando a função*/
    return{
        nome: nome,
        especie:especie,
        raca:raca,
        idade:idade,
        dono:dono
    }/*chamando a função*/
}

const criaDono = (nome,celular) => {
   /*criando a função*/
    return {
        Nome:nome,
        Celular:celular,
    }/*chamando a função*/
}

const dono1 = criaDono("Arthur",219936127612);
const dono2 = criaDono("Jaco Pastorius",219936143487);

const pet1 = criaPet("Michaelwave","Gato","SRD",1,dono1);
const pet2 = criaPet("PMME1966","Gato","SRD",1,dono1);
const pet3 = criaPet("Carrapato","Cachorro","Shitzu",10,dono2);
const pet4 = criaPet(null,"Gato","Frajola",null,null);


console.log(pet1,pet2,pet3,pet4)

/*Tarefa: Separar as duas funções fábricas criadas em dois módulos ESM: pets.mjs e donos.mjs e utilizar eles a partir de um arquivo main.js.
Tarefa: No main.js, utilizando o prompt-sync, faça um sistema que permite cadastrar novos pets, donos e consultas, 
além de verificar as consultas existentes para um certo pet
 */





/*Tarefa: Separar as duas funções fábricas criadas em dois módulos ESM: pets.mjs e donos.mjs 
e utilizar eles a partir de um arquivo main.mjs.
 */

import PromptSync from "prompt-sync";
import { criaDono } from "./donos.mjs";
import { criaPet } from "./pets.mjs";

const dono1 = criaDono("Arthur",219936127612);
const dono2 = criaDono("Jaco Pastorius",219936143487);

const pet1 = criaPet("Michaelwave","Gato","SRD",1,dono1);
const pet2 = criaPet("PMME1966","Gato","SRD",1,dono1);
const pet3 = criaPet("Carrapato","Cachorro","Shitzu",10,dono2);
const pet4 = criaPet(null,"Gato","Frajola",null,null);


console.log(dono1,dono2);
console.log(pet1,pet3);


/*Tarefa: No main.mjs, utilizando o prompt-sync, 
faça um sistema que permite cadastrar novos pets, donos e consultas, 
além de verificar as consultas existentes para um certo pet
 */



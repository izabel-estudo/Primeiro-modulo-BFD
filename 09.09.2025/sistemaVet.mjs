import PromptSync from "prompt-sync";
import { criaDono } from "./donos.mjs";
import { criaPet } from "./pets.mjs";

const prompt = PromptSync();

const nome = prompt("Qual o nome do dono? ");
const cel = prompt("Qual o celular do dono? ");
const dono1 = criaDono(nome,cel);
console.log(dono1);
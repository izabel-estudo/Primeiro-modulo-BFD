//primeiro: declarar função,(quando eu crio a função)


function imprimirReceita(){
    const receita= `
                    1. Cortar o pão,
                    2. fritar o ovo.
                    3. Colocar o ovo no pão.`;
    
    console.log(receita);
}
 

function adaptarIngredientes(porcoes){
    //Pão com ovo
    const qtdOvos = 2;
    const qtdPao = 1;
    const porcaoOrig = 1;

    console.log(`Receita Pão com Ovo para ${porcoes} pessoas`);
    console.log(`${qtdOvos*porcoes} ovos`);
    console.log(`${qtdPao*porcoes} pães`);

}
//2 - chamando a função(quando mando o pc executar o que eu criei)

adaptarIngredientes(100000000);
imprimirReceita();
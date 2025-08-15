function adaptarIngredientes(porcoes){
    //Pão com ovo
    const qtdOvos = 2;
    const qtdLeite = 100;
    const qtdAcucar = 2;
    const qtdChocolate = 1;
    const qtdFarinha = 2;
    const qtdManteiga = 2
    const porcaoOrig = 2;

    console.log(`Receita Bolo de Chocolate para ${porcoes} pessoas`);
    console.log(`${qtdOvos*porcoes/porcaoOrig} ovos`);
    console.log(`${qtdLeite*porcoes/porcaoOrig} ml de leite`);
    console.log(`${qtdAcucar*porcoes/porcaoOrig} xícaras de açúcar`);
    console.log(`${qtdChocolate*porcoes/porcaoOrig} xícaras de açúcar`);
    console.log(`${qtdFarinha*porcoes/porcaoOrig} xícaras de farinha`);
    console.log(`${qtdManteiga*porcoes/porcaoOrig} colheres de sopa de manteiga`);

}


adaptarIngredientes(10)
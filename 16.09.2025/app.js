const pets = [{nome:"Fifi",idade:2},{nome:"Fofo",idade:13},{nome:"Fafa",idade:3}];

const lista = document.getElementById("lista");


pets.forEach(pet => {
    const newItem = document.createElement("li");
    newItem.innerText= pet.nome+ " - " + pet.idade;
    lista.appendChild(newItem);
});

const botao = document.getElementById("botao");

const alerta = () => {
    alert("O botao foi pressionado!");
}

const mudaCor = () => {
    botao.style.color= "white";
    botao.style.backgroundColor= "blue";

};

const resetCor = () => {
    botao.style.backgroundColor = "white";
    botao.style.color = "black";
};

botao.addEventListener("click",alerta)
botao.addEventListener("mouseover",mudaCor)
botao.addEventListener("mouseout",resetCor)

window.addEventListener("resize",mudaCor)

const mudaFundo = () => {
    texto.style.backgroundColor =  "yellow";
    texto.style.color = "blue";
};

const resetFundo = () => {
    texto.style.backgroundColor = "white";
    texto.style.color = "black";

};

const texto = document.getElementById("texto");

texto.addEventListener("mouseover",mudaFundo);
texto.addEventListener("mouseout",resetFundo);


const donos = [];

const form = document.getElementById("formularioDonos");


const criaDono = (nome,endereco,tel) => {
    return {
        nome,
        endereco,
        tel
    }
}


form.addEventListener("submit", (event)=> {
    event.preventDefault();
    /*
    const dataNovo = document.getElementById("data").value;
    const nomeNovo = document.getElementById("nome").value;
    const enderecoNovo = document.getElementById("endereco").value;
    const telefoneNovo = document.getElementById("telefone").value;
    const emailNovo = document.getElementById("email").value;
    const racaNovo = document.getElementById("raca").value;
    */
   const data = new FormData(form);
   console.log(data);
   const nomeNovo = data.get("nome");
   const telNovo = data.get("telefone");
    const enderecoNovo = data.get("endereco");
    //const donoNovo = criaDono(nomeNovo,enderecoNovo,telefoneNovo);

    donos.push(criaDono(nomeNovo,enderecoNovo,telNovo));
    //alert(`Seu formulário foi enviado com sucesso \nNome: ${nomeNovo}\nEndereço: ${enderecoNovo}\nTelefone: ${telefoneNovo}\nE-mail: ${emailNovo}\n Raça: ${racaNovo} `);
    alert(donos);

    form.reset();
});





/*Fazer uma classe GuardaInformacao e uma subclasse GuardaSegredo.
GuardaInformacao deve ter uma propriedade info, que não é possível acessar fora da classe ou subclasse. E dois métodos guardarInfo e falarInfo
GuardaSegredo deve também ter uma propriedade privada senha sobrescrever os métodos de sua classe pai para verificarem a senha ao guardar e falar a informaçã<o></o>
*/

class GuardaInformacao {
    protected info: string;
    constructor(informacao:string){
        this.info = informacao;
    }

    guardaInfo(infoNova:string){
        this.info = infoNova;
    }

    falarInfo(){
        console.log(this.info);
    }
}

class GuardaSegredo extends GuardaInformacao {
    private senha: number;

    constructor(informacao:string,senha:number) {
        super(informacao);
        this.senha = senha;
    }

    guardaInfo2(infoNova: string,senha:number): void {
        if(this.senha == senha) {
            this.info = infoNova;
        }
    }


    falarInfo2(senha:number): void {
        if(this.senha == senha) {
            console.log(this.info)
        }
    }
}


const gi = new GuardaInformacao("Isso é meu segredo");
gi.guardaInfo("Novo segredo")
gi.falarInfo()

const gs = new GuardaSegredo("Segredo 3",1234);

gs.guardaInfo2("Segredo 4",1234)
gs.falarInfo2(1234)


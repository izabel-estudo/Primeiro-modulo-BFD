
/*Tarefa: Criar duas classes Estudante e Turma
Estudante deve ter as propriedades nome, matricula e media e o método calcularMedia(g1,g2). A média de um aluno é inicialmente 0, e é calculada da seguinte forma:
(G1+2*G2)/3
Turma deve ter as propriedades nome e alunos e os métodos gerarNotaAleatoria():number, que retorna uma nota aleatória entre 0 e 10, e atribuirNotasMalucas(), que atribui a todos os alunos da turma uma nota aleatória, obtida através do outro método
*/
class Estudante {
    nome:string;
    nota:number;
    matricula:string;

    constructor(nome:string,matricula:string){
        this.nome = nome;
        this.matricula = matricula;
        this.nota = 0;
    }

    calcularMedia(g1:number,g2:number) {
        this.nota = (g1+2*g2)/3;
    }
}

const wladimir = new Estudante("Wladimir","13672186ASDADSH");
const manoel = new Estudante("Manoel","13672186ASDADSH");

class turma {
    nome:string;
    alunos:Array<Estudante>;

    constructor(nome:string,alunos:Array<Estudante>){
        this.nome = nome;
        this.alunos = alunos;
    }

    gerarNotaAleatoria():number {
        return Math.round(Math.random()*10);
    }

    atribuirNotasMalucas():void{
        this.alunos.forEach( aluno => {
            aluno
        });
    }

}


const turmaFrontEnd = new turma("React BFD",[wladimir,manoel]);


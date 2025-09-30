/*Tarefa: Criar as seguintes funções
calcularCubo: aceita como argumento um número e retorna o cubo dele
primeiraOuUltimaLetra: aceita uma string e uma booleana como argumento. Caso a booleana seja verdadeira, imprime a primeira letra da string, caso seja falsa imprime a última. Não retorna nada
*/
function calcularCubo(num: number): number {
    return num**3
}
const resposta: number = calcularCubo(3);

console.log(resposta);


function primeiraOuUltimaLetra(palavra: string, pOuU: boolean) {
    if (pOuU) {
        console.log(palavra[0]);
    } else {
        console.log(palavra[palavra.length - 1]);
    }
}

primeiraOuUltimaLetra("Izabel",false);

/*Tarefa: Implementar as seguintes funções e tipos
O tipo Aluno deve ter as propriedades nome, matricula e nota
O tipo Turma deve ter as propriedades materia, codigo e alunos
A função imprimirPresenca deve receber uma turma como argumento e imprimir o nome da matéria e uma lista dos alunos matriculados
A função matricularAluno deve receber uma turma e um aluno e incluir o aluno na turma
A função calcularMedia deve receber uma turma calcular a média das notas nessa turma e retorná-la
*/


// Definição de tipos
type Aluno = {
    nome: string;
    matricula: string;
    nota: number;
};

type Turma = {
    materia: string;
    codigo: string;
    alunos: Aluno[];
};

// Exemplo aluno 
const alunoExemplo: Aluno = {
    nome: "Izabel",
    matricula: "12345",
    nota: 9.5
};

const alunoExemplo2: Aluno = {
    nome: "Guto",
    matricula: "123456",
    nota: 8.5
};

// Exemplo turma 
const turmaExemplo: Turma = {
    materia: "Matemática",
    codigo: "MAT101",
    alunos: []
};

// Função para imprimir presença
function imprimirPresenca(turma: Turma): void {
    console.log(`Matéria: ${turma.materia}`);
    console.log("Alunos matriculados:");
    turma.alunos.forEach(aluno => {
        console.log(aluno.nome);
    });
}

// Função para matricular aluno
function matricularAluno(turma: Turma, aluno: Aluno): void {
    turma.alunos.push(aluno);
}

// Função para calcular média
function calcularMedia(turma: Turma): number {
    const total = turma.alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    return turma.alunos.length ? total / turma.alunos.length : 0;
}

matricularAluno(turmaExemplo,alunoExemplo)
matricularAluno(turmaExemplo,alunoExemplo2)

imprimirPresenca(turmaExemplo);

console.log(calcularMedia(turmaExemplo));



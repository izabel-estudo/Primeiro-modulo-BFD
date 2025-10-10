
/**/

class GerenciadorFormas {
    formas: Array<Forma>;
    
    constructor(formas:Array<Forma>) {
        this.formas = formas;
    }

    calcularSomaArea(){
        let soma = 0;
        this.formas.forEach(f => {
            soma = soma+ f.calcularArea();
        })
        return soma;
    }

    imprimirFormas(){

    }
}

abstract class Forma {
    lados: number;

    constructor(num_lados:number){
        this.lados = num_lados;
    }

    abstract calcularArea():number;
}

class Triangulo extends Forma {
    altura: number;
    base: number;

    constructor(altura:number,base:number){
        super(3);
        this.altura = altura;
        this.base = base;
    }


    calcularArea(): number {
        return this.base * this.altura / 2.0;
    }
}


const t1 = new Triangulo(10,10);

console.log(t1.calcularArea());



class Quadrado extends Forma {
    altura: number;
    base: number;

    constructor(altura:number,base:number){
        super(4);
        this.altura = altura;
        this.base = base;
    }


    calcularArea(): number {
        return this.base * this.altura / 2.0;
    }
}




class Retangulo extends Forma {
    altura: number;
    base: number;

    constructor(altura:number,base:number){
        super(4);
        this.altura = altura;
        this.base = base;
    }


    calcularArea(): number {
        return this.base * this.altura;
    }
}





class Circulo extends Forma{
    raio:number;

    constructor(raio:number){
        super(1);
        this.raio =  raio;
    }


    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}


const t2 = new Quadrado(10,10);
const t3 = new Retangulo(10,20);
const t4 = new Circulo(10);



const ger = new GerenciadorFormas([t2,t3,t4]);

console.log(ger.calcularSomaArea());









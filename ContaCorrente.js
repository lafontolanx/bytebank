import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0; //Atributo estático: Não é pertencente a cada conta separada. Será como se fosse uma "variável global" da classe.

    constructor(agencia, cliente){
        ContaCorrente.numeroDeContas += 1; // Como não estamos falando de uma conta em específico e sim de um atributo "global" da classe, não usamos o this.
    }
}
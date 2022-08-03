import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ //Extends: Está herdando as informações da classe Conta para a classe ContaCorrente.
    static numeroDeContas = 0; //Atributo estático: Não é pertencente a cada conta separada. Será como se fosse uma "variável global" da classe.

    constructor(agencia, cliente){
        super(agencia, cliente, 0); //Vai chamar o construtor da classe "pai"- Conta.
        ContaCorrente.numeroDeContas += 1; // Como não estamos falando de uma conta em específico e sim de um atributo "global" da classe, não usamos o this.
    }

    /*teste(){
        super.teste();
        console.log("teste conta corrente");
    }*/

    sacar(valor) {
        const taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
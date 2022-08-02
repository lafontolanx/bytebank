export class Cliente {
    
    get cpf(){
        this._cpf;
    }

    constructor(nome, cpf){ //Atribui para o objeto as informações quando declarado.
        this.nome = nome;   // this.acessor = parâmetro
        this._cpf = cpf;
    }
}
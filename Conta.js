export class Conta {
    // #var = Vaviável privada | _var = Variável privada "fake".
    // https://github.com/tc39/proposal-class-fields#private-fields
    constructor(agencia, cliente, saldoInicial){ //Inicializando as variáveis da classe com algum valor. Nesse caso os valores do parâmetro.
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    //Usando um atributo do tipo set podemos alterar a regra de como um atributo pode ou não ser modificado sem precisar alterar isso em diversos pontos do código.
    //Usar acessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades entá sempre segura.

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Métodos
    sacar(valor) {
        let taxa = 1;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){ //Eu quero sacar DESSA (this) conta corrente, independente de quem seja (Ricardo, Alice, etc.)
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor) {
        if(valor <= 0) return;
            this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)    
    }
}
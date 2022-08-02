export class ContaPoupanca{
    constructor(agencia, cliente, saldoInicial){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    // Métodos
    sacar(valor) {
        if(this._saldo >= valor){ //Eu quero sacar DESSA (this) conta corrente, independente de quem seja (Ricardo, Alice, etc.)
            this._saldo -= valor;
            return valor;
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
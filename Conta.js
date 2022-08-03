//Classe abstrata: Pode ser herdada mas não utilizada diretamente (Exemplo: const conta = new Conta())
export class Conta {
    // #var = Variável privada | _var = Variável privada "fake".
    // https://github.com/tc39/proposal-class-fields#private-fields
    constructor(agencia, cliente, saldoInicial){ //Inicializando as variáveis da classe com algum valor. Nesse caso os valores do parâmetro.
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo 'Conta' Diretamente, pois essa é uma classe abstrata.");
        }

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
    //Usar acessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está sempre segura.

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Método abstrato: está aqui só para ser sobrescrito em outras classes.
    sacar(valor) {
        throw new Error("O método 'Sacar' da conta é abstrato.")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){ //Eu quero sacar DESSA (this) conta corrente, independente de quem seja (Ricardo, Alice, etc.)
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if(valor <= 0) return;
            this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)    
    }

    /*teste(){
        console.log("teste conta");
    }*/
}
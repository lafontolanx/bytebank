import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupança.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

//Criando uma nova conta corrente
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.sacar(500);

//Criando uma nova conta conta corrente
const contaCorrenteAlice = new ContaCorrente(1001, cliente2);

//Transferindo 200 reais para a conta da Alice
let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);

//Abrindo uma conta poupança com saldo de 50 reais na conta da Alice.
const contaPopancaAlice = new ContaPoupanca(1001, cliente2, 50); // (agencia, cliente, saldo)

//console.log(contaPopancaAlice);
//console.log(contaCorrenteAlice);

//console.log(contaCorrenteAlice.teste());

const contaSalarioAlice = new ContaSalario(cliente1);
contaSalarioAlice.depositar(600);
contaSalarioAlice.sacar(10);

console.log(contaSalarioAlice);


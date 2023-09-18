let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const pf1 = new PessoaFisica(`Don`,23,new Date(1999, 10, 22),09774069463);
console.log('Pessoa Fisica: ' + pf1);

const pj1 = new PessoaJuridica(`Don`,24,new Date(1999, 10, 22), 88441641);
console.log('Pessoa Juridica:' + pj1);

const pessoa1 = new Pessoa(`Don`,25,new Date(1999, 10, 22));
console.log('Pessoa:' + pessoa1);
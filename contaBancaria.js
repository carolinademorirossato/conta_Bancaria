// Função para criar uma conta bancária
function criandoConta(nome, saldoInicial) {
    return {
        nome: nome,
        saldo: saldoInicial,

// Função para depositar dinheiro na conta
  depositar: function depositar(valor) {
    if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
    } else {
        console.log("O valor do depósito precisar ser maior que zero.");
    }
   },
//Função para retirar dinheiro da conta
  retirar: function(valor) {
    if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Retirada de R$ ${valor} realizada com sucesso!`);
    } else {
        console.log("Saldo insuficiente ou valor inválido.");
    }
   },
// Função para consultar o saldo da conta
  consultarSaldo: function() {
        console.log(`O saldo da conta de ${this.nome} é R$${this.saldo.toFixed(2)}`);
    }
   };
}

// Criando uma nova conta bancária
  let contaJoao = criandoConta("João", 1000);

//Consultando o saldo inicial
  contaJoao.consultarSaldo();

//Realizando um depósito
  contaJoao.depositar(500);

//Realizando uma retirada
  contaJoao.retirar(200);

//Consultando o saldo após as operações
  contaJoao.consultarSaldo();

//Tentando fazer uma retirada maior que o saldo
  contaJoao.retirar(2000);
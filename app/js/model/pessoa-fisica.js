class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(`${nome} - Física`, idade, dataNascimento);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    toString() {
        return `Nome: ${this.nome} 
        - Idade: ${this.idade}
        - Data de Nascimento: ${this.dataNascimento}
        - Cpf: ${this._cpf}`;
    }
}

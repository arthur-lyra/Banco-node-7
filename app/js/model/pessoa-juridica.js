class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(`${nome} - Jurídica`, idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    toString() {
        return `Nome: ${this.nome} 
        - Idade: ${this.idade}
        - Data de Nascimento: ${this.dataNascimento}
        - Cnpj: ${this._cnpj}`;
    }
}

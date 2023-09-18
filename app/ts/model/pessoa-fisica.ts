class PessoaFisica extends Pessoa {
    private _cpf: number;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: number ) {
        super(`${nome} - Física`, idade, dataNascimento);
        this._cpf = cpf;
    }

    get cpf() {
        return this._cpf;
    }

    toString(): string {
        return `Nome: ${this.nome} 
        - Idade: ${this.idade}
        - Data de Nascimento: ${this.dataNascimento}
        - Cpf: ${this._cpf}`;
    }
}
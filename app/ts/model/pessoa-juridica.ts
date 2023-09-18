class PessoaJuridica extends Pessoa {
    private _cnpj: number;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: number ) {
        super(`${nome} - Jurídica`, idade, dataNascimento);
        this._cnpj = cnpj;
    }

    get cnpj() {
        return this._cnpj;
    }

    
    toString(): string {
        return `Nome: ${this.nome} 
        - Idade: ${this.idade}
        - Data de Nascimento: ${this.dataNascimento}
        - Cnpj: ${this._cnpj}`;
    }
}
// 1) Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e
// setters. No setters valide se o nome for em branco retorne uma mensagem de nome
// inválido. Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem
// inválida. Se a idade for 0 retorne uma mensagem de idade inválida. Crie um método
// para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa
// maior de idade, caso contrário exibir a mensagem pessoa menor de idade.


//   -------------------------------- ~ -----------------------------------------------


class Pessoa {
    constructor(
        private _nome: string,
        private _sexo: string,
        private _idade: number
    ) {}

    get nome(){
        return this._nome
    }

    get sexo(){
        return this._sexo
    }

    get idade(){
        return this._idade
    }

    set nome(nome: string){
        if(nome.length == 0){
            throw new Error("Nome Inválido")
        }
        this._nome = nome
    }

    set sexo(sexo: string){
        if(sexo == "Masculino" || sexo == "Feminino"){
            this._sexo = sexo
        } else {
            throw new Error("Sexo Inválido")
        }
    }

    set idade(idade: number){
        if(idade <= 0){
            throw new Error("Idade Inválida")
        }
        this._idade = idade
    }

    public receberIdade(idade: number){
        if(idade >= 18){
            console.log("Pessoa maior de idade")
        } else {
            console.log("Pessoa menor de idade")
        }
    }
}

const pessoa = new Pessoa('André Gomes', 'Masculino', 25);
console.log(pessoa)
try {
    pessoa.nome = "Jack"
    console.log(pessoa.nome)
} catch (err) {
    // console.log(err.message)
}

try {
    pessoa.sexo = "Masculino"
    console.log(pessoa.sexo)
} catch (err) {
    // console.log(err.message)
}

console.log(pessoa.receberIdade(18))

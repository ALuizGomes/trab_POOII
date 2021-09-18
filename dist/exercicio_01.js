"use strict";
// 1) Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e
// setters. No setters valide se o nome for em branco retorne uma mensagem de nome
// inválido. Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem
// inválida. Se a idade for 0 retorne uma mensagem de idade inválida. Crie um método
// para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa
// maior de idade, caso contrário exibir a mensagem pessoa menor de idade.
//   -------------------------------- ~ -----------------------------------------------
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _sexo, _idade) {
        this._nome = _nome;
        this._sexo = _sexo;
        this._idade = _idade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome.length == 0) {
                throw new Error("Nome Inválido");
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            if (sexo == "Masculino" || sexo == "Feminino") {
                this._sexo = sexo;
            }
            else {
                throw new Error("Sexo Inválido");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade <= 0) {
                throw new Error("Idade Inválida");
            }
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.receberIdade = function (idade) {
        if (idade >= 18) {
            console.log("Pessoa maior de idade");
        }
        else {
            console.log("Pessoa menor de idade");
        }
    };
    return Pessoa;
}());
var pessoa = new Pessoa('André Gomes', 'Masculino', 25);
console.log(pessoa);
try {
    pessoa.nome = '';
    console.log(pessoa.nome);
}
catch (err) {
    console.log(err.message);
}
try {
    pessoa.sexo = '';
    console.log(pessoa.sexo);
}
catch (err) {
    console.log(err.message);
}
try {
    pessoa.idade = 0;
    console.log(pessoa.receberIdade(12));
}
catch (err) {
    console.log(err.message);
}
// pessoa.receberIdade(0)

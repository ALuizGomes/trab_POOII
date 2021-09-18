"use strict";
// 2) Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
// quantidade de dias. Crie os getters e setters. No setters crie validações para não
// aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
// zero. Crie um método passeio para receber a quantidade de dias e o valor da
// locação. O sistema calcule o total que será a multiplicação da quantidade de dias
// pelo valor da locação.
//   -------------------------------- ~ -----------------------------------------------
var Veiculos = /** @class */ (function () {
    function Veiculos(_modelo, _marca, _ano, _valorLocacao, _quantidadeDias) {
        this._modelo = _modelo;
        this._marca = _marca;
        this._ano = _ano;
        this._valorLocacao = _valorLocacao;
        this._quantidadeDias = _quantidadeDias;
    }
    Object.defineProperty(Veiculos.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            if (modelo.length == 0 || modelo == '0') {
                throw new Error("Modelo Inválido!");
            }
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            if (marca.length == 0 || marca == '0') {
                throw new Error("Marca Inválida!");
            }
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            if (ano <= 0) {
                throw new Error("Ano Inválido!");
            }
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "valorLocacao", {
        get: function () {
            return this._valorLocacao;
        },
        set: function (valorLocacao) {
            if (valorLocacao <= 0) {
                throw new Error("Valor da Locação Inválido!");
            }
            this._valorLocacao = valorLocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "quantidadeDias", {
        get: function () {
            return this._quantidadeDias;
        },
        set: function (quantidadeDias) {
            if (quantidadeDias <= 0) {
                throw new Error("Quantidade de Dias Inválida!");
            }
            this._quantidadeDias = quantidadeDias;
        },
        enumerable: false,
        configurable: true
    });
    Veiculos.prototype.passeio = function () {
        return this.quantidadeDias * this.valorLocacao;
    };
    return Veiculos;
}());
var veiculos = new Veiculos('Renegade', 'Jeep', 2018, 1000, 10);
console.log(veiculos);
try {
    veiculos.ano = 0;
    console.log(veiculos.ano);
}
catch (err) {
    console.log(err.message);
}
try {
    veiculos.modelo = '';
    console.log(veiculos.modelo);
}
catch (err) {
    console.log(err.message);
}
try {
    veiculos.valorLocacao = 0;
    console.log(veiculos.valorLocacao);
}
catch (err) {
    console.log(err.message);
}
try {
    veiculos.quantidadeDias = 0;
    console.log(veiculos.quantidadeDias);
}
catch (err) {
    console.log(err.message);
}
// console.log("Valor Total: ", veiculos.passeio())

"use strict";


// 4) Crie uma classe para calcular o imposto de renda. Crie uma classe Pai com os
// atributos nome e renda anual. Crie os getters e setters com as suas validações. Crie
// uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
// com saúde, crie os getter e setter com a validação. Crie uma classe filha Pessoa
// Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o
// getter e o setter com a validação.
// Regras para os cálculos
// Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
// Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. Se a
// pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.

// Exemplo: Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos
// com saúde, o imposto fica: (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
// Pessoa Jurídica: Pessoas jurídicas pagam 16% de imposto, porém, se a empresa
// possuir mais de 10 funcionários, ela paga 14% de imposto. Exemplo: Uma empresa
// Trabalho de POO II 2
// cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 *
// 14% = 56.000,00

// Pessoa Jurídica: Pessoas jurídicas pagam 16% de imposto, porém, se a empresa
// possuir mais de 10 funcionários, ela paga 14% de imposto. Exemplo: Uma empresa
// Trabalho de POO II 2
// cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 *
// 14% = 56.000,00

// Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
// Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. Se a
// pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.


//   ----------------------------------- ~ -----------------------------------------------


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

}) ();

var Imposto = /** @class */ (function(){
    function Imposto(_nome, _rendaAnual){
        this._nome = _nome;
        this._rendaAnual = _rendaAnual;
    }

    Object.defineProperty(Imposto.prototype, "nome", {
        get: function () {
            return this._nome;
        },

        set: function (nome) {
            if (nome == '') {
                throw new Error("Nome Inválido!");
            }
            this._nome = nome;
        },

        enumerable: false,
        configurable: true

    });

    Object.defineProperty(Imposto.prototype, "rendaAnual",{
        get: function(){
            return this._rendaAnual;
        },

        set: function (rendaAnual){
            if (rendaAnual == 0){
                throw new Error("Renda Inválida!");
            }
            this._rendaAnual = rendaAnual;
        },

        enumerable: false,
        configurable: true

    });

    return Imposto;

} ());

var PeFisica = /** @class */ (function (_super){
    __extends(PeFisica, _super);
    function PeFisica(_nome, _rendaAnual, gastosSaude){
        var _this = _super.call(this, _nome, _rendaAnual) || this;

        _this._gastosSaude = gastosSaude;

        return _this;
    }

    Object.defineProperty(PeFisica.prototype, "gastosSaude",{
        get: function(){
            return this._gastosSaude;
        },

        set: function(gastosSaude){
            if (gastosSaude < 0){
                throw new Error("Gasto Inválido!");
            }

            this._gastosSaude = gastosSaude;

        },

        enumerable: false,
        configurable: true

    });
    
    PeFisica.prototype.impostoCalculo = function(){
        if(this.gastosSaude == 0){
            console.log("Gastos com saúde inexistentes!")
        }else{
            this.gastosSaude * 0.05
        }

        if(this.rendaAnual < 20000){
            this.rendaAnual * 0.15 
        }else{
            this.rendaAnual * 0.25
        }

        var irf = this.rendaAnual * (this.rendaAnual < 20000 ? 0.15 : 0.25);
        var saudeDesc = this.gastosSaude * (this.gastosSaude != 0 ? 0.5 : 0);

        return irf - saudeDesc;
    };

    return PeFisica;

} (Imposto));

var PeJuridica = /** @class */ (function (_super) {
    __extends(PeJuridica, _super);
    function PeJuridica(_nome, _rendaAnual, numeroFuncionarios) {
        var _this = _super.call(this, _nome, _rendaAnual) || this;
        _this._numeroFuncionarios = numeroFuncionarios;
        return _this;
    }
    Object.defineProperty(PeJuridica.prototype, "numeroFuncionarios",{
        get: function(){
            return this._numeroFuncionarios;
        },
        set: function (numeroFuncionarios){
            if (numeroFuncionarios == 0){
                throw new Error("Quantidade Inválida");
            }

            this._numeroFuncionarios = numeroFuncionarios;

        },

        enumerable: false,
        configurable: true

    });

    PeJuridica.prototype.calculoImposto = function(){
        if (this.numeroFuncionarios < 10) {
            return this.rendaAnual * 0.16;
        }else{
            return this.rendaAnual * 0.14;
        }
    };

    return PeJuridica;

} (Imposto));

var peFisica = new PeFisica('André Luiz Gomes', 50000, 1000);
console.log(peFisica);

peFisica.gastosSaude = 500;
console.log('Imposto:', peFisica.impostoCalculo());

var peJuridica = new PeJuridica('Thallanar Entertainment', 20000, 8000);
console.log(peJuridica);

// try{
//     peJuridica.numeroFuncionarios = 0
//     console.log('Imposto:', peJuridica.calculoImposto())
// }catch (err){
//     console.log(err.message)
// }

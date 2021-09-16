"use strict";


// 3) Crie uma classe Fatura com os atributos números, descrição, quantidade
// Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
// comprada pelo preço.


//   -------------------------------- ~ -----------------------------------------------


var Fatura = /** @class */ (function(){
    function Fatura(_numeros, _descricao, _quantidadeComprada, _preco){
        this._numeros = _numeros;
        this._descricao = _descricao;
        this._quantidadeComprada = _quantidadeComprada;
        this._preco = _preco;
    }

    Object.defineProperty(Fatura.prototype, "numeros",{
        get: function(){
            return this._numeros;
        },

        set: function (numeros){
            this._numeros = numeros;
        },
        enumerable: false,
        configurable: true

    });

    Object.defineProperty(Fatura.prototype, "descricao",{
        get: function(){
            return this._descricao;
        },

        set: function (descricao){
            this._descricao = descricao;
        },

        enumerable: false,
        configurable: true

    });
    Object.defineProperty(Fatura.prototype, "quantidadeComprada",{
        get: function(){
            return this._quantidadeComprada;
        },

        set: function (quantidadeComprada){
            this._quantidadeComprada = quantidadeComprada;
        },

        enumerable: false,
        configurable: true

    });
    Object.defineProperty(Fatura.prototype, "preco",{
        get: function(){
            return this._preco;
        },
        
        set: function(preco){
            this._preco = preco;
        },

        enumerable: false,
        configurable: true

    });

    Fatura.prototype.valorFatura = function(){
        return this.quantidadeComprada * this.preco;
    };

    return Fatura;

} ());

var fatura = new Fatura(1, 'celular', 1, 2500);
console.log(fatura);

console.log("Valor da Fatura:", fatura.valorFatura());

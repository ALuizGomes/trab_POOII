"use strict";


// 5) Crie uma classe chamada Vendedores com os atributos nome, salario e valor da
// venda. Crie os getters e setters e as validações. Crie um método desconto para
// calcular 8% do salário.

// Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
// crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
// centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a
// região for sul a comissão será de 10% sobre o valor da venda. 
//Se a região for sudeste a comissão será de 12% sobre o valor da venda, 
//se a região for centrooeste a comissão será de 14% sobre o valor da venda, 
//se a região for norte a comissão será de 15% sobre o valor da venda, 
//se a região for nordeste a comissão será de 17% sobre o valor da venda. 
//Crie o método para calcular o salário total que será o salario mais a comissão.

// Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa,
// total de funcionários, crie os getters, setters e as suas validações. Crie um método
// para calcular a comissão. 
//Se o valor da venda for menor que 5.000,00 o valor da comissão será de 2% sobre o valor da venda. 
//Se o valor da venda for maior ou igual a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da venda. 
//Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será de 6% sobre o valor da venda. 
//Crie um método salario Total que será a soma do salario mais comissão e mais R$ 200,00 se o número de funcionários for menor que
// 100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100.


//   -------------------------------- ~ -----------------------------------------------


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } 
                instanceof Array && function (d, b) { d.__proto__ = b; }) || function (d, b){
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; 
                };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

        extendStatics(d, b);
        function __(){
             this.constructor = d; 
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}) ();

var Vendedores = /** @class */ (function (){
    function Vendedores(_nome, _salario, _valorVenda) {
        this._nome = _nome;
        this._salario = _salario;
        this._valorVenda = _valorVenda;
    }

    Object.defineProperty(Vendedores.prototype, "nome",{
        get: function(){
            return this._nome;
        },

        set: function (nome){
            if (nome == ''){
                throw new Error("Nome Inválido!");
            }
            this._nome = nome;
        },

        enumerable: false,
        configurable: true

    });

    Object.defineProperty(Vendedores.prototype, "salario",{
        get: function(){
            return this._salario;
        },
        
        set: function (salario){
            if (salario == 0){
                throw new Error("Salário Inválido!");
            }
            this._salario = salario;
        },

        enumerable: false,
        configurable: true

    });

    Object.defineProperty(Vendedores.prototype, "valorVenda",{
        get: function(){
            return this._valorVenda;
        },

        set: function (valorVenda){
            if (valorVenda == 0){
                throw new Error("Valor da Venda Inválido");
            }
            this._valorVenda = valorVenda;
        },

        enumerable: false,
        configurable: true

    });

    Vendedores.prototype.desconto = function(){
        return this._salario * 0.08;
    };
    return Vendedores;
} ());

var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(_nome, _salario, _valorVenda, regiao) {
        var _this = _super.call(this, _nome, _salario, _valorVenda) || this;
        _this._regiao = regiao;
        return _this;
    }
    Object.defineProperty(PessoaFisica.prototype, "regiao",{
        get: function () {
            return this._regiao;
        },
        set: function (regiao) {
            if (!PessoaFisica.REGIOES.includes(regiao)) {
                throw new Error("Região Inválida!");
            }
            this._regiao = regiao;
        },
        enumerable: false,
        configurable: true
    });

    PessoaFisica.prototype.comissao = function (){
        if (this.regiao == 'sul') {
            return this.valorVenda * 0.10;
        } else if (this.regiao == 'sudeste'){
            return this.valorVenda * 0.12;
        } else if (this.regiao == 'centroOeste'){
            return this.valorVenda * 0.14;
        } else if (this.regiao == 'norte'){
            return this.valorVenda * 0.15;
        }else{
            return this.valorVenda * 0.17;
        }
    };

    PessoaFisica.prototype.salarioTotal = function(){
        return this.salario + this.comissao();
    };

    PessoaFisica.REGIOES = ['sul', 'sudeste', 'centroOeste', 'norte', 'nordeste'];
    return PessoaFisica;

} (Vendedores));

var PessoaJuridica = /** @class */ (function (_super){
    __extends(PessoaJuridica, _super);

    function PessoaJuridica(_nome, _salario, _valorVenda, nomeEmpresa, totalFuncionarios){
        var _this = _super.call(this, _nome, _salario, _valorVenda) || this;

        _this._nomeEmpresa = nomeEmpresa;
        _this._totalFuncionarios = totalFuncionarios;

        return _this;
    }

    Object.defineProperty(PessoaJuridica.prototype, "nomeEmpresa", {
        get: function () {
            return this._nomeEmpresa;
        },

        set: function (nomeEmpresa) {
            if (nomeEmpresa == '') {
                throw new Error("Nome de Empresa Inválido!");
            }
            this._nomeEmpresa = nomeEmpresa;
        },

        enumerable: false,
        configurable: true
        
    });

    Object.defineProperty(PessoaJuridica.prototype, "totalFuncionarios",{
        get: function(){
            return this._totalFuncionarios;
        },

        set: function(totalFuncionarios){
            if (totalFuncionarios == 0){
                throw new Error("Total de Funcionários Inválido!");
            }

            this._totalFuncionarios = totalFuncionarios;
            
        },

        enumerable: false,
        configurable: true

    });
    PessoaJuridica.prototype.calComissao = function(){
        if (this.valorVenda < 5000){
            return this.valorVenda * 0.02;
        }else if (this.valorVenda >= 5000 && this.valorVenda <= 10000){
            return this.valorVenda * 0.04;
        }else{
            return this.valorVenda * 0.06;
        }
    };
    
    PessoaJuridica.prototype.totalSalario = function(){
        if (this.totalFuncionarios >= 100){
            return this.salario + this.calComissao() + 300;
        }else{
            return this.salario + this.calComissao() + 200;
        }
    };
    return PessoaJuridica;
} (Vendedores));

var vendedores = new Vendedores('André Luiz Gomes', 2000, 10000);

// console.log(vendedores)
// console.log("Desconto de 8% do salario:", vendedores.desconto())

// try {
//     vendedores.nome = 'Marcos'
//     console.log(vendedores.nome)
// }catch (err){
//     console.log(err.message)
// }

// try{
//     vendedores.salario = 1500
//     console.log(vendedores.salario)
// }catch (err){
//     console.log(err.message)
// }

// try{
//     vendedores.valorVenda = 5000
//     console.log(vendedores.valorVenda)
// }catch (err){
//     console.log(err.message)
// }

// let pessoaFisica = new PessoaFisica('Leonardo', 1000, 30000, 'sul');
// console.log(pessoaFisica)

// try{
//     pessoaFisica.regiao = 'sul'
//     console.log(pessoaFisica.regiao)
//     console.log('Salario total com comissao:', pessoaFisica.salarioTotal())
// }catch (err){
//     console.log(err.message)
// }

// let pessoaJuridica = new PessoaJuridica('Ermanoteu', 3000, 1000, 'TE Games', 120);
// console.log(pessoaJuridica)

// try{
//     pessoaJuridica.nomeEmpresa = ''
//     pessoaJuridica.totalFuncionarios = 0
//     pessoaJuridica.salario = 1000
//     pessoaJuridica.valorVenda = 11000
//     pessoaJuridica.totalFuncionarios = 130
//     console.log(pessoaJuridica.salario)
//     console.log(pessoaJuridica.totalFuncionarios)
//     console.log('Salario total com comissao:', pessoaJuridica.totalSalario())
// }catch (err){
//     console.log(err.message)
// }

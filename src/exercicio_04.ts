// 4) Crie uma classe para calcular o imposto de renda. Crie uma classe Pai com os
// atributos nome e renda anual. Crie os getters e setters com as suas validações. Crie
// uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
// com saúde, crie os getter e setter com a validação. Crie uma classe filha Pessoa
// Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o
// getter e o setter com a validação.

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


//   -------------------------------- ~ -----------------------------------------------


class Imposto {
    constructor (
        private _nome: string,
        private _rendaAnual: number
        ){}

        get nome(){
            return this._nome;
        }

        get rendaAnual(){
            return this._rendaAnual;
        }
        
        set nome(nome: string){
            if(nome == ''){
                throw new Error("Nome invalido")
            }
            this._nome = nome
        }

        set rendaAnual(rendaAnual: number){
            if(rendaAnual <= 0){
                throw new Error("Renda Invalida")
            }
            this._rendaAnual = rendaAnual
        }
}

class PFisica extends Imposto{
    private _gastosSaude: number
    constructor(_nome: string, _rendaAnual: number, gastosSaude: number )
    {
        super(_nome, _rendaAnual)
        this._gastosSaude = gastosSaude
    }

    get gastosSaude(){
        return this._gastosSaude;
    }

    set gastosSaude(gastosSaude: number){
        if(gastosSaude <= 0){
            throw new Error("Gasto Invalido")
        }
        this._gastosSaude = gastosSaude
    }

    impostoCalculo(){
        var irf = this.rendaAnual*(this.rendaAnual <= 20000 ? 0.15 : 0.25)
        var saudeDesc = this.gastosSaude*(this.gastosSaude != 0 ? 0.5 : 0)
        return irf - saudeDesc
    }
}

class PJuridica extends Imposto{
    private _numeroFuncionarios: number
    constructor(_nome: string, _rendaAnual: number, numeroFuncionarios: number )
    {
        super(_nome, _rendaAnual)
        this._numeroFuncionarios = numeroFuncionarios
    }

    get numeroFuncionarios(){
        return this._numeroFuncionarios;
    }

    set numeroFuncionarios(numeroFuncionarios: number){
        if(numeroFuncionarios <= 0){
            throw new Error("Quantidade Inválida")
        }
        this._numeroFuncionarios = numeroFuncionarios
    }

    calculoImposto(): number{  
        if(this.numeroFuncionarios < 10){
            return this.rendaAnual * 0.16
        } else {
            return this.rendaAnual * 0.14
        }
      }
}

const peFisica = new PFisica('André Luiz Gomes', 50000, 2000)
console.log(peFisica)

console.log('Imposto: ', peFisica.impostoCalculo())


const peJuridica = new PJuridica('Thallanar Entertainment', 40000, 25)
console.log(peJuridica)


try{
    peJuridica.nome = 'Thallanar Entertainment'
    peJuridica.rendaAnual = 400000
    peJuridica.numeroFuncionarios = 25
    console.log('Imposto: ', peJuridica.calculoImposto().toFixed(2))
}catch(err:any){
    console.log(err.message)
}

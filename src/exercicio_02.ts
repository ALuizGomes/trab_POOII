// 2) Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
// quantidade de dias. Crie os getters e setters. No setters crie validações para não
// aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
// zero. Crie um método passeio para receber a quantidade de dias e o valor da
// locação. O sistema calcule o total que será a multiplicação da quantidade de dias
// pelo valor da locação.


//   -------------------------------- ~ -----------------------------------------------



class Veiculos {
    constructor(
        private _modelo: string,
        private _marca: string,
        private _ano: number,
        private _valorLocacao: number,
        private _quantidadeDias: number
    ) {}

    get modelo(){
        return this._modelo 
    }

    get marca(){
        return this._marca 
    }

    get ano(){
        return this._ano 
    }

    get valorLocacao(){
        return this._valorLocacao 
    }

    get quantidadeDias(){
        return this._quantidadeDias 
    }

    set modelo(modelo: string){
        if(modelo.length == 0 || modelo == '0') {
            throw new Error("Modelo Inválido!")
        }
        this._modelo = modelo
    }

    set marca(marca: string){
        if(marca.length == 0 || marca == '0') {
            throw new Error("Marca Inválida!")
        }
        this._marca = marca
    }
    set ano(ano: number){
        if(ano <= 0) {
            throw new Error("Ano Inválido!")
        }
        this._ano = ano
    }
    set valorLocacao(valorLocacao: number){
        if(valorLocacao <= 0) {
            throw new Error("Valor da Locação Inválido!")
        }
        this._valorLocacao = valorLocacao
    }
    set quantidadeDias(quantidadeDias: number){
        if(quantidadeDias <= 0) {
            throw new Error("Quantidade de Dias Inválida!")
        }
        this._quantidadeDias = quantidadeDias
    }

    passeio(){
        return this.quantidadeDias * this.valorLocacao
    }
}

const veiculos = new Veiculos('Renegade', 'Jeep', 2018, 1000, 10)
console.log(veiculos)

try{
    veiculos.ano = 0
    console.log(veiculos.ano)
}catch(err:any){
    console.log(err.message)
}

try{
    veiculos.modelo = ''
    console.log(veiculos.modelo)
}catch(err:any){
    console.log(err.message)
}

try{
    veiculos.valorLocacao = 0
    console.log(veiculos.valorLocacao)
}catch(err:any){
    console.log(err.message)
}

try{
    veiculos.quantidadeDias = 0
    console.log(veiculos.quantidadeDias)
}catch(err:any){
    console.log(err.message)
}

// console.log("Valor Total: ", veiculos.passeio())

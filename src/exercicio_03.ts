// 3) Crie uma classe Fatura com os atributos números, descrição, quantidade
// Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
// comprada pelo preço.

class Fatura {
    constructor(
        private _numeros: number,
        private _descricao: string,
        private _quantidadeComprada: number,
        private _preco: number
    ){}

    get numeros(){
        return this._numeros
    }

    get descricao(){
        return this._descricao
    }

    get quantidadeComprada(){
        return this._quantidadeComprada
    }

    get preco(){
        return this._preco
    }

    set numeros(numeros: number){
        this._numeros = numeros
    }

    set descricao(descricao: string){
        this._descricao = descricao
    }

    set quantidadeComprada(quantidadeComprada: number){
        this._quantidadeComprada = quantidadeComprada
    }

    set preco(preco: number){
        this._preco = preco
    }

    valorFatura() {
        return this.quantidadeComprada * this.preco
    }
}

const fatura = new Fatura(1, 'celular', 2, 2500)
console.log(fatura)

console.log("Fatura: ", fatura.valorFatura())
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



class Vendedores {
    constructor(
        private _nome: string,
        private _salario: number,
        private _valorVenda: number
    ){}

    get nome() {
        return this._nome
    }

    get salario() {
        return this._salario
    }

    get valorVenda(){
        return this._valorVenda
    }

    set nome(nome: string){
        if(nome.length == 0){
            throw new Error("Nome Inválido!")
        }
        this._nome = nome
    }

    set salario(salario: number){
        if(salario <= 0){
            throw new Error("Salario Inválido!")
        }
        this._salario = salario
    }

    set valorVenda(valorVenda: number){
        if(valorVenda <= 0){
            throw new Error("Valor da Venda Inválido!")
        }
        this._valorVenda = valorVenda
    }

    desconto(){
        return this._salario * 0.08
    }
}

class PessoaFisica extends Vendedores {
    static REGIOES = ['sul', 'sudeste', 'centrooeste', 'norte', 'nordeste']
    private _regiao: string;

    constructor(_nome: string, _salario: number, _valorVenda: number, regiao: string)
    {
        super(_nome, _salario, _valorVenda);
        this._regiao = regiao;
    }

    get regiao() {
        return this._regiao
    }
    
    set regiao(regiao: string){
        if(!PessoaFisica.REGIOES.includes(regiao)){
            throw new Error("Regiao Invalida")
        }
        this._regiao = regiao
    }

    comissao(){
        if(this.regiao == 'sul'){
            return this.valorVenda * 0.10
        } else if (this.regiao == 'sudeste'){
            return this.valorVenda * 0.12
        } else if (this.regiao == 'centrooste'){
            return this.valorVenda * 0.14
        } else if (this.regiao == 'norte'){
            return this.valorVenda * 0.15
        } else {
            return this.valorVenda * 0.17
        }
    }

    salarioTotal(){
        return this.salario + this.comissao()
    }
}

class PessoaJuridica extends Vendedores {
    private _nomeEmpresa: string;
    private _totalFuncionarios: number;

    constructor(_nome: string, _salario: number, _valorVenda: number, nomeEmpresa: string, totalFuncionarios: number)
    {
        super(_nome, _salario, _valorVenda);
        this._nomeEmpresa = nomeEmpresa;
        this._totalFuncionarios = totalFuncionarios;
    }

    get nomeEmpresa(){
        return this._nomeEmpresa
    }

    get totalFuncionarios(){
        return this._totalFuncionarios
    }

    set nomeEmpresa(nomeEmpresa: string){
        if(nomeEmpresa == ''){
            throw new Error("Nome da Empresa invalido")
        }
        this._nomeEmpresa = nomeEmpresa
    }

    set totalFuncionarios(totalFuncionarios: number){
        if(totalFuncionarios <= 0){
            throw new Error("Total de Funcionarios incorreto")
        }
        this._totalFuncionarios = totalFuncionarios
    }

    calComissao(){
        if(this.valorVenda < 5000){
            return this.valorVenda * 0.02
        } else if (this.valorVenda >= 5000 && this.valorVenda <= 10000){
            return this.valorVenda * 0.04
        } else {
            return this.valorVenda * 0.06
        }
    }

    totalSalario(){
        if(this.totalFuncionarios >= 100){
            return this.salario + this.calComissao() + 300 
        } else {
            return this.salario + this.calComissao() + 200
        }
    }
}

const vendedores = new Vendedores('André Luiz Gomes', 2000, 10000)

// console.log(vendedores)

// console.log("Desconto de 8% do salario:", vendedores.desconto())

// try{
//     vendedores.nome = 'Marcos'
//     console.log(vendedores.nome)
// }catch(err){
//     console.log(err.message)
// }

// try{
//     vendedores.salario = 1500
//     console.log(vendedores.salario)
// }catch(err){
//     console.log(err.message)
// }

// try{
//     vendedores.valorVenda = 5000
//     console.log(vendedores.valorVenda)
// }catch(err){
//     console.log(err.message)
// }



// let pessoaFisica = new PessoaFisica('Leonardo', 1000, 30000, 'sul');

// console.log(pessoaFisica)

// try{
//     pessoaFisica.regiao = 'sul'
//     console.log(pessoaFisica.regiao)
//     console.log('Salario total com comissao:', pessoaFisica.salarioTotal())
// }catch(err){
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
// }catch(err){
//     console.log(err.message)
// }

// 6) Crie uma interface chamado IEndereço com os seguintes atributos rua, numero,
// bairro e cidade. Crie um variável do endereço que seja do tipo da interface
// endereço. Atribua um endereço uma rua, numero, bairro e cidade para a variável
// endereço que é do mesmo tipo da interface. Utilize o console.log para exibir o
// conteúdo da variável endereço.


//   -------------------------------- ~ -----------------------------------------------


interface IEndereco {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
}

let endereco: IEndereco
endereco = {
    rua: 'Sady Felipe',
    numero: 106,
    bairro: "Morada da Colina",
    cidade: "Volta Redonda"
}

console.log("Arquivos:", endereco)

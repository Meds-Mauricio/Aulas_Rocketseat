const listaDeProdutos = [
    {
        identificação: 1,
        nomeDoProduto: 'Arroz',
        descricaoDoProduto: 'Camil',
        avaliacaoDoProduto: 5,
        categoriaDoProduto: 'Grão',
        quantidadeNoEstoque: 35,

    },
    {
        identificacao: 2,
        nomeDoProduto: 'Feijão',
        descricaoDoProduto: 'Nenê',
        avaliacaoDoProduto: 4,
        categoriaDoProduto: 'Grão',
        quantidadeNoEstoque: 26,

    },
    {
        identificacao: 3,
        nomeDoProduto: 'Macarrão',
        descricaoDoProduto: 'Nissin',
        avaliacaoDoProduto: 5,
        categoriaDoProduto: 'Massa',
        quantidadeNoEstoque: 15,

    },
    {
        identificacao: 4,
        nomeDoProduto: 'Alface',
        descricaoDoProduto: 'Lisa',
        avaliacaoDoProduto: 5,
        categoriaDoProduto: 'Verdura',
        quantidadeNoEstoque: 8,

    },
    {
        identificacao: 5,
        nomeDoProduto: 'Danone',
        descricaoDoProduto: 'chandelle',
        avaliacaoDoProduto: 5,
        categoriaDoProduto: 'Fermentado',
        quantidadeNoEstoque: 12,

    },
    {
        identificacao: 6,
        nomeDoProduto: 'Manteiga',
        descricaoDoProduto: 'Doriana',
        avaliacaoDoProduto: 3,
        categoriaDoProduto: 'vegetal',
        quantidadeNoEstoque: 17,

    },
    {
        identificacao: 7,
        nomeDoProduto: 'Detergente',
        descricaoDoProduto: 'Ypê',
        avaliacaoDoProduto: 5,
        categoriaDoProduto: 'Limpeza',
        quantidadeNoEstoque: 22,

    },
    {
        identificacao: 8,
        nomeDoProduto: 'Amaciante',
        descricaoDoProduto: 'Fofo',
        avaliacaoDoProduto: 10,
        categoriaDoProduto: 'Limpeza',
        quantidadeNoEstoque: 27,

    },
    {
        identificacao: 9,
        nomeDoProduto: 'Filé de frango',
        descricaoDoProduto: 'JBS',
        avaliacaoDoProduto: 5,
        categoriaDoProduto: 'Aves',
        quantidadeNoEstoque: 10,

    },
]

let totalBruto = 35 + 26 + 15 + 8 + 12 + 17 + 22 + 27 + 10
console.log('Esse é o total bruto', totalBruto)

let quantidadeDeProduto = totalBruto - 27
console.log('Esse é a quantidadeDeProduto', quantidadeDeProduto)

function estoqueTotal(estoque) {
    if (estoque >= 50) {
        console.log('Estoque estável')
    } else {
        console.log ("Deve repor mais item no estoque")
    }
}

estoqueTotal(quantidadeDeProduto);

const temDesconto = listaDeProdutos ==='desconto' ? 'Tem desconto' : 'Não Existe Desconto'
console.log(temDesconto)


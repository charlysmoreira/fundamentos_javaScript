const carrinho = [
    { nome:"Caneta", qtd:10, preco:7.99 },
    { nome:"Lapis", qtd:4, preco:75.99 },
    { nome:"Caderno", qtd:5, preco:17.99 },
    { nome:"Impressora", qtd:0, preco:755.99 }
]

const nomes = item => item.nome;
console.log(carrinho.map(nomes))
const custo = item => item.qtd * item.preco;
console.log(carrinho.map(custo))

//Novo map
const compras = [
    { nome:"Caneta", qtd:10, preco:7.99 },
    { nome:"Lapis", qtd:4, preco:75.99 },
    { nome:"Caderno", qtd:5, preco:17.99 },
    { nome:"Impressora", qtd:0, preco:755.99 }
]

Array.prototype.meuMap = function (fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray;
}
const nomeNovaMap = item => item.nome;
console.log(compras.meuMap(nomeNovaMap))

//Novo filter
Array.prototype.meuFilter = function (fn){
    const novoFitro = []
    for (let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            novoFitro.push(this[i])
        }
    }
    return novoFitro;
}

const qtdMaiorQueZero = item => item.qtd > 0 
console.log(compras.meuFilter(qtdMaiorQueZero))

//Teste reduce
const totalItem = item => item.qtd * item.preco;
const listaTotal = compras.map(totalItem);
console.log(listaTotal)
const somaTotal = (acc, item) => acc + item;
const valorTotal = listaTotal.reduce(somaTotal);
console.log(valorTotal)

const listaCompras = [
    { nome:"Caneta", qtd:10, preco:7.99, fragil:true },
    { nome:"Lapis", qtd:4, preco:75.99, fragil:false },
    { nome:"Caderno", qtd:5, preco:17.99, fragil:false },
    { nome:"Impressora", qtd:1, preco:755.99, fragil:true }
]

const fragil = item => item.fragil
console.log(listaCompras.filter(fragil))

const precoTotal = item => item.qtd * item.preco
console.log(listaCompras.map(precoTotal))

const media = (acc, item, i, array) => (acc + item) / array.length;
console.log(listaCompras.map(precoTotal).reduce(media))


const vetor = [1,2,3,4,5,6,7]

const mult = vetor.map(el => el * 2)
console.log(mult);
const par = vetor.filter(el => el % 2 === 0);
console.log(par);
const func = (total, el) => total + el
const red = vetor.reduce(func)
console.log(red)
const avg = (total, el, i, a) => {
    if(i === a.length -1 ){
        return (total + el) / a.length;
    } else{
       return total + el
    }
}
console.log(vetor.reduce(avg));
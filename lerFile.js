//Ler arquivo
const fs = require('fs')
const ph = require('path')

const caminho = ph.join(__dirname, "dados.txt");

function exibirConteudo(_, conteudo){
    console.log(conteudo.toString());
}
fs.readFile(caminho, exibirConteudo);

//Ler arquivo com promise
function lerArquivo (path){
    return new Promise(resolve => {
        fs.readFile(path, (_, dados) => {
            resolve(dados.toString())
        })
    })
}
lerArquivo(caminho).then(console.log)
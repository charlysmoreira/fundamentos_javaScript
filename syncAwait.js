
function gerarNumero(min, max, temp){
    return new Promise(resolve => {
        setTimeout(() => {
            const valor = parseInt(Math.random()*(max - min)) + min
            resolve(valor);
        }, temp)
    })
}

const promiseAll = () => {
    return Promise.all([
        gerarNumero(1,10, 1000),
        gerarNumero(1,50, 1000),
        gerarNumero(1,100, 2000)
    ])
}

//promiseAll().then(console.log)


//Tratamento de erro em promise
function funcionaOuNao(valor, chanceError) {
    return new Promise((resolve, reject)  => {
        consol.log()
        if(Math.random() < chanceError){
            reject("teve erro")
        } else {
            resolve(valor)
        }
    } )    
}

funcionaOuNao("Sem error", 0.3)
    .then((t) => `Valor: ${t}`)
    .then(
        v => consol.log(),
        err => console.log(`Erro especifico ${err}` )
    )
    .catch(err => console.log(`Error geral: ${err}`))


//Sync Await
function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000) 
    })
}
async function executar(){
    let valor = await retornarValor();
    return valor
}
executar().then(console.log)

//Promise rapida 
async function retornarRapido(){
    return 20
}

async function executar2(){
    let valor = retornarRapido(); 
    return valor
}

async function exec(){
    let valorFinal = await executar2(); //retorna uma promise, se for pegar o valor deve usar o await
    console.log(valorFinal)
}
exec()

//Gerar numero Sync/Await
function gerarNumeroEntre(min, max, numeroProibido){
    if (min > max){
        [max, min] = [min, max] // destructor do lado esquerdo e array do lado direito
    }
    return new Promise( (resolve, reject) => {
        const fator = max - min + 1
        const numero = parseInt(Math.random()*fator) + min
        if(numeroProibido.includes(numero)){
            reject("Numero repitdo")
        }else {
            resolve(numero)
        }
    } )
}

async function gerarMegaSena(qdtNumero, tentativas = 1){
    try {
        const numeros = []
        for(let _ of Array(qdtNumero).fill()){
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch (error) {
        if(tentativas > 5){
            throw "Erro geral"
        } else{
            return gerarMegaSena(qdtNumero, tentativas + 1)
        }
    }
}

gerarMegaSena(10)
    .then(console.log)
    .catch(console.log)

gerarMegaSena(10)
    .then(valor => {
        if(valor.includes(44)){
            console.log('Error especifico na chamada :Ja tem o numeor 44')
        }else{
            console.log(valor)
        }
    })
    .catch(console.log)
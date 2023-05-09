//1 -> Escreva na tela todos os números pares de 0 a 100 

console.log("Escreva na tela todos os números pares de 0 a 100 ");

const numeroPar = () => {
    //let numero = 0;
    for (let i = 0; i <= 100; i++) {
        if(i % 2 == 0){
            console.log(i);
        }
    };
}

numeroPar();

//----------------------------------------------------------------------
// 2 -> Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números

// ex: [2, 4, 6, 8] -> Soma: 2 + 4 + 6 + 8 = 20

console.log("Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números");


const somarNumeros = () => {
    let arrayDeNum = [1, 2, 3, 2, 1];
    let somaTotal = 0; 
    for(let i = 0; i < arrayDeNum.length; i++){
        somaTotal = somaTotal + arrayDeNum[i];
    }
    console.log(somaTotal)
}
somarNumeros(); 

//----------------------------------------------------------------------
//3 -> Crie uma função que remova todos os números negativos de um array

//ex: [-1, 1, -2, 2, -3, 3] -> [1, 2, 3]

console.log("Crie uma função que remova todos os números negativos de um array");

const removeNum = () => {
    let arrayDeNum = [-1, 1, -2, 2, -3, 3];
    let novoArrayPositivo = [];
    for (let i = 0; i < arrayDeNum.length; i++){
        if(arrayDeNum[i] > 0){
            novoArrayPositivo.push(arrayDeNum[i]);
        }
    }console.log(novoArrayPositivo)
}
removeNum();

//----------------------------------------------------------------------
// 4 -> Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2

// ex: [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

console.log("Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2");

const multiplicarPorDois= () => {
    let arrayDeNum = [1, 2, 3, 4, 5];
    let novoArrayMultiplicado = [];
    for (let i = 0; i < arrayDeNum.length; i++){
        novoArrayMultiplicado.push(arrayDeNum[i] * 2)
    }
    console.log(novoArrayMultiplicado)
}
multiplicarPorDois()
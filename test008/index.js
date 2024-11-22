// Utiliza modo seguro do ECMAScript
"use strict";

// Cria array vazio
var myArray = [];

// Para cada posicao do array, atribuir o valor do propio indice + 1
// Ficara assim: myArray[0] === 1, etc
for (var i = 0; i < 100; i++)
{
    myArray.push(i+1);
}

// Funcao de pesquisa simples
// Maneira nao-otimizada de se fazer pesquisas
function simpleSearch(array, searchValue)
{
    // Para cada elemento do array
    for (var i = 0, nOfTries = 1; i < array.length; i++, nOfTries++)
    {
        // Caso o valor atual do array seja o valor da minha pesquisa
        if (array[i] === searchValue)
        {
            // Retorna log com informacoes da pesquisa
            return console.log(`With simple search, your search value ${searchValue} has the ${i+1} position in your list and it took me ${nOfTries} tries.`);
        }
    }

    // Caso tenha chegado ate aqui, o valor de pesquisa nao existe na lista
    // Nesse caso, retorna null
    return console.log(null);
}

// Funcao de pesquisa binaria
// Maneira otimizada de se fazer pesquisas, a quantidade de etapas e o logaritmo da quantidade de elementos da lista na base 2
function binarySearch(array, searchValue)
{
    var lowestValue = 0;
    var highestValue = array.length-1;

    var nOfTries = 1;

    // Enquanto o valor mais baixo da lista for menor ou igual ao valor mais alto
    while (lowestValue <= highestValue)
    {
        // Atualiza numero de tentativas
        nOfTries++;

        // Cria o valor central, que e a mediana entre os dois valores
        var mid = Math.floor((lowestValue + highestValue) / 2);

        // Cria o chute, que e o elemento que tem o indice como valor da variavel mid
        var guess = array[mid];

        // Caso tenhamos acertado no chute
        if (guess === searchValue)
        {
            return console.log(`With binary search, your search value ${searchValue} has the ${array.indexOf(guess)+1} position in your list and i took me ${nOfTries} tries.`);
        }
        // Caso o chute seja maior do que o valor de pesquisa
        else if (guess > searchValue)
        {
            // Atualiza o maior valor possivel
            highestValue = mid - 1;
        }
        // Caso o chute seja menor do que o valor de pesquisa
        else
        {
            // Atualiza o menor valor possivel
            lowestValue = mid + 1;
        }
    }

    // Caso tenhamos chegado ate aqui, o valor nao existe na lista e retorna null
    return console.log(null);
}

// Faz pesquisa simples
simpleSearch(myArray, 57);

// Faz pesquisa binaria
binarySearch(myArray, 57);

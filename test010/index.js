// Cria lista com nomes de cantores ficticios e quantidade de plays
var artistList = [
    ["RadioHead", 156],
    ["Kishore Kumar", 141],
    ["The Black Keys", 35],
    ["Neutral Milk Hotel", 94],
    ["Beck", 88],
    ["The Strokes", 61],
    ["Wilco", 111]
];

function getHighestIndex(array)
{
    // Define maior valor e maior indice
    var highestValue = array[0][1];
    var highestIndex = 0;

    // Para cada elemento do array exceto o primeiro
    for (var i = 1; i < array.length; i++)
    {
        // Caso o valor do indice atual seja maior que o definido
        if (array[i][1] > highestValue)
        {
            // Atualiza o maior valor e maior indice
            highestValue = array[i][1];
            highestIndex = i;
        }
    }

    // Retorna o indice que contem o maior valor
    return highestIndex;
}

function selectionSort(array)
{
    // Array ordenado
    var sortedArray = [];

    // Copia do array original
    var copyArray = array.slice();

    // Para cada elemento do array
    for (var i = 0; i < array.length; i++)
    {
        // Elimina e adiciona ao array sorteado o maior valor
        sortedArray.push(copyArray.splice(getHighestIndex(copyArray), 1)[0]);
    }

    // Depois da ordenacao, retorna o array sorteado
    return sortedArray;
}

// Cria texto formatado para exibir as informacoes do array
function showArray(array)
{
    // Separa das outras listas
    console.log("#".repeat(50));

    // Para cada elemento
    for (var i = 0; i < array.length; i++)
    {
        // Log
        console.log(`Nome: ${array[i][0]},\tPlays: ${array[i][1]}`);
    }

    // Separa das outras listas
    console.log("#".repeat(50));
}

// Array de artistas antes da ordenacao por selecao
console.log("Array de artistas antes da ordenacao por selecao:");

showArray(artistList);

// Separa das outras listas
console.log("\n");

// Array de artistas depois da ordenacao por selecao
console.log("Array de artistas depois da ordenacao por selecao:");

showArray(selectionSort(artistList));

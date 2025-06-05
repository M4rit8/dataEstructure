/*
Título: Aplicação prática do livo "Estrutura de Dados e Algoritmos com JavaScript"
Autor: Loiane Groner
Data: 2023
Descrição: Este código demonstra o uso de arrays em JavaScript, incluindo iteração, acesso a elementos e manipulação de dados.
Licença: MIT License

Referência: atualização do livro "Estrutura de Dados e Algoritmos com JavaScript" de Loiane Groner
*/

function changingArray(){
    // Cria um array vazio
    let daysOfWeek = new Array(); 
    // Inclui 7 posições no array
    daysOfWeek = Array[7];    
    // Preenche o array com os dias da semana
    daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Código utilizado para demonstrar o tamanho do array
    console.log("");
    console.log("Total de dias da semana: " + daysOfWeek.length);

    // Acessando e iterando sobre os elementos do array
    for (let i = 0; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    }
    console.log("O primeiro dia da semana é: " + daysOfWeek[0]);
    console.log("O último dia da semana é: " + daysOfWeek[daysOfWeek.length - 1]);
}
function changingFibonacci() {
    const fibonacci = [];
    fibonacci[1] = 1;
    fibonacci[2] = 1;
    for (let i = 3; i <= 20; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    for (let i = 1; i <= 20; i++) {
        console.log("Fibonacci " + i + ": " + fibonacci[i]);
    }
}
//Exporta a função para ser usada em outros módulos
module.exports = {changingArray, changingFibonacci};
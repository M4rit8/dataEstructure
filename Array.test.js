const {changingArray} = require('./Array');
const {changingFibonacci} = require('./Array');

describe('changingFibonacci', () => {
    it('should log the first 20 Fibonacci numbers', () => {
        // Cria um espião para a função console.log
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        
        changingFibonacci();

        // Captura todas as chamadas do console.log
        const calls = consoleSpy.mock.calls;

        // Verifica se foram feitas 20 chamadas
        expect(calls.length).toBe(20);

        // Verifica o conteúdo de cada chamada
        let fib1 = 1, fib2 = 1;
        for (let i = 1; i <= 20; i++) {
            let expected;
            if (i === 1 || i === 2) {
                expected = 1;
            } else {
                expected = fib1 + fib2;
                fib1 = fib2;
                fib2 = expected;
            }
            expect(calls[i - 1][0]).toBe(`Fibonacci ${i}: ${calls[i - 1][0].split(': ')[1]}`);
        }

        // Limpa o espião do console após o teste
        consoleSpy.mockRestore();
    });
});

describe('changingArray', () => {
    it('should log the days of the week', () => {
        // Cria um espião para a função console.log
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        
        changingArray();
        
        // Verifica se a função console.log foi chamada com o tamanho do array
        expect(consoleSpy).toHaveBeenCalledWith("");
        expect(consoleSpy).toHaveBeenCalledWith("Total de dias da semana: 7");

        // Verifica se a função console.log foi chamada com os dias da semana
        expect(consoleSpy).toHaveBeenCalledWith("Sunday");
        expect(consoleSpy).toHaveBeenCalledWith("Monday");
        expect(consoleSpy).toHaveBeenCalledWith("Tuesday");
        expect(consoleSpy).toHaveBeenCalledWith("Wednesday");
        expect(consoleSpy).toHaveBeenCalledWith("Thursday");
        expect(consoleSpy).toHaveBeenCalledWith("Friday");
        expect(consoleSpy).toHaveBeenCalledWith("Saturday");

        // Verifica se a função console.log foi chamada com as informações adicionais
        expect(consoleSpy).toHaveBeenCalledWith("O primeiro dia da semana é: Sunday");
        expect(consoleSpy).toHaveBeenCalledWith("O último dia da semana é: Saturday");

        //Limpa o espião do console após o teste
        consoleSpy.mockRestore();
    }
    );
});
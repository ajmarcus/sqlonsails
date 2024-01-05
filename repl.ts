// read, eval and print loop
// reads the user's input and prints it back to them after each newline

import { createInterface } from 'node:readline';

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const prompt = '>> ';

readline.setPrompt(prompt);
console.log('Welcome to your RechoPL! Type "exit" to quit.');
readline.prompt();

readline.on('line', (input: string) => {
    if (input === 'exit') {
        readline.close();
    } else {
        console.log(input);
        readline.prompt();
    }
});

readline.on('close', () => {
    console.log('Bye!');
    process.exit(0);
});

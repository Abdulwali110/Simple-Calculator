// Import the readline module for user input
import * as readline from 'readline';

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask question and return answer as a promise
function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    // Ask the user for the operation
    const operation = await askQuestion('Which operation would you like to perform? (add, subtract, multiply, divide): ');

    // Ask the user for the numbers
    const aStr = await askQuestion('Enter the first number: ');
    const bStr = await askQuestion('Enter the second number: ');

    const a = parseFloat(aStr);
    const b = parseFloat(bStr);

    // Perform the operation
    switch (operation) {
        case 'addition':
            console.log(`Result: ${a + b}`);
            break;
        case 'subtract':
            console.log(`Result: ${a - b}`);
            break;
        case 'multiply':
            console.log(`Result: ${a * b}`);
            break;
        case 'divide':
            if (b === 0) {
                console.log('Error: Division by zero is not allowed.');
            } else {
                console.log(`Result: ${a / b}`);
            }
            break;
        default:
            console.log('Error: Invalid operation.');
            break;
    }

    rl.close();
}

main();

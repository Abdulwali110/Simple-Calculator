"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the readline module for user input
const readline = __importStar(require("readline"));
// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to ask question and return answer as a promise
function askQuestion(question) {
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
            }
            else {
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

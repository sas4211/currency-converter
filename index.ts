#! /usr/bin/env node
import inquirer from 'inquirer'

const Currency: any ={
    USD:1, // BASE CURRENCY
    EUR:0.9,
    GDP:0.79,
    AE :3.75,
    INR:74.59,
    PKR:280
};

let userAnswer = await inquirer.prompt(
[
    {
        name : "from",
        type : "list",
        message: "Enter from Currency",
        choices:["USD","EUR","GDP","AE","INR","PKR"
        ]
    },
    {
        name : "to",
        type : "list",
        message: "Enter To Currency",
        choices:["USD","EUR","GDP","AE","INR","PKR"
        ]  
    },
    {
        name : "amount",
        type : "number",
        message :"Enter Your Amount",
    }
]

);

console.log(userAnswer)

let fromAnswer = Currency[userAnswer.from]
let toAnswer   = Currency[userAnswer.to]
let amountAns = userAnswer.amount

console.log(fromAnswer);
console.log(toAnswer);
console.log(amountAns);

let baseAmount = amountAns / fromAnswer

let convertAmount = baseAmount * toAnswer

console.log(convertAmount);

#! /usr/bin/env node
import inquirer from 'inquirer';

// make a calculator 


const answer  = await inquirer.prompt([{
    name: "SelectOperator",
    type: "list", 
    message: "select one of these Operator to perform Operation",
    choices: ["addition", "substraction", "multiplication", "division", "module", "exponentation"]
},
{
    name: "firstNumber",
    type: "number",
    message: "enter a first number"
},
{
    name: "secondNumber",
    type: "number",
    message: "enter your second number"
}])


if(answer.SelectOperator == "addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}else if(answer.SelectOperator == "substraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}else if(answer.SelectOperator == "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}else if(answer.SelectOperator == "division"){
    console.log(answer.firstNumber / answer.secondNumber)
}else if(answer.SelectOperator == "exponentation"){
    console.log(answer.firstNumber ** answer.secondNumber)
}else if(answer.SelectOperator == "module"){
    console.log(answer.firstNumber % answer.secondNumber)
}else{
    console.log("error Expected")
}



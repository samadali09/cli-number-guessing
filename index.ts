#! /usr/bin/env node

import inquirer from "inquirer"

const randomNamber = Math.floor(Math.random()*10 + 1);


const answers = await inquirer.prompt([
    {
        name: "userGuessAnNumber",
        type: "number",
        message: "please enter a number between 1 to 10.",

    }
]);

console.log (answers);
if(answers.userGuessAnNumber){
    console.log("Congratulation you guess a right number" )
}else{
    console.log("you guess a wrong number")
};
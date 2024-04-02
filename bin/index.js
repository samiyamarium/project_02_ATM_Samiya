#! /usr/bin/env node
var inquirer = require('inquirer');
inquirer.prompt([{
        name: 'UserID',
        type: 'input',
        message: 'Enter your UserID: '
    },
    {
        name: 'Pin',
        type: 'number',
        message: 'Enter your 4-digit Pin: ',
    }])
    .then(function (answers) {
    if (answers.UserID == 'sam' && answers.Pin == 1234) {
        console.info('\n Answers: \n', answers, '\n correct info, You can proceed');
        var atm_unlocked = Math.floor(Math.random() * 10000);
        console.log("\n Total Bank balance=", 10000);
        console.log("\n Amount to be withdrawn: ", atm_unlocked);
        console.log("\n Account banlance: ", 10000 - atm_unlocked);
    }
    else {
        console.info('\n Not valid: Try again ');
    }
});

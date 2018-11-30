const BaseMultiplicationRule = require('../../rules/baseMultiplicationRule');
function fizzBuzz1(numbersArrayToRunOn, rulesToInvoke){
    numbersArrayToRunOn.forEach(number => {
        rulesToInvoke.forEach(rule => {
            const result = rule.getValueForNumber(number);
            if (process.env.NODE_ENV !== 'test') {
                console.log(result);
            }
        });
    });
}

module.exports = fizzBuzz1;
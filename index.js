const BaseMultiplicationRule = require('./rules/baseMultiplicationRule');
const basicRulesRunner = require('./rulesRunner');
function case1(numbersArray, rulesRunner){
    const rule3 = new BaseMultiplicationRule(3);
    const rule5 = new BaseMultiplicationRule(5);
    const rule15 = new BaseMultiplicationRule(15);
    
    const ruleResultsOverrides = {};
    ruleResultsOverrides[rule3.ruleId()] = "fizz";
    ruleResultsOverrides[rule5.ruleId()] = "buzz";
    ruleResultsOverrides[rule15.ruleId()] = "fizzbuzz";

    rulesRunner(numbersArray, [rule3, rule5, rule15], ruleResultsOverrides);
}

case1(Array.from(Array(21),(x,i)=>i), basicRulesRunner);

module.exports = {case1: case1}
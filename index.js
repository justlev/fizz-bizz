const BaseMultiplicationRule = require('./rules/baseMultiplicationRule');
const StringContainsRule = require('./rules/stringContainsRule');
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

function case2(numbersArray, rulesRunner){
    const rule3 = new BaseMultiplicationRule(3);
    const rule5 = new BaseMultiplicationRule(5);
    const rule15 = new BaseMultiplicationRule(15);
    const stringContains3Rule = new StringContainsRule(3);
    
    const ruleResultsOverrides = {};
    ruleResultsOverrides[rule3.ruleId()] = "fizz";
    ruleResultsOverrides[rule5.ruleId()] = "buzz";
    ruleResultsOverrides[rule15.ruleId()] = "fizzbuzz";
    ruleResultsOverrides[stringContains3Rule.ruleId()] = "lucky";

    rulesRunner(numbersArray, [rule3, rule5, rule15, stringContains3Rule], ruleResultsOverrides);
}


//case1(Array.from(Array(21),(x,i)=>i), basicRulesRunner);
case2(Array.from(Array(21),(x,i)=>i), basicRulesRunner);

module.exports = {case1: case1, case2: case2}
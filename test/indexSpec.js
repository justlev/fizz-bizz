const assert = require('assert');
const rulesRunner = require('../rulesRunner');
const numbersHelper = require('./helpers/numbers');
const BaseMultiplicationRule = require('../rules/baseMultiplicationRule');
const sinon = require('sinon');
const index = require('../index');


describe('case 1', function(){
    const runnerSpy = sinon.spy(rulesRunner);
    const numbers = numbersHelper.getArrayRange(0,20);
    const rule3 = new BaseMultiplicationRule(3);
    const rule5 = new BaseMultiplicationRule(5);
    const rule15 = new BaseMultiplicationRule(15);
    
    const ruleResultsOverrides = {};
    ruleResultsOverrides[rule3.ruleId()] = "fizz";
    ruleResultsOverrides[rule5.ruleId()] = "buzz";
    ruleResultsOverrides[rule15.ruleId()] = "fizzbuzz";

    it('should call rules runner with correct params', function(){
        index.case1(numbers);
        assert(runnerSpy.called);
        const args = runnerSpy.getCall(0).args;
        assert.deepEqual(args[0], numbers);
        assert.deepEqual(args[1], rules);
        assert.deepEqual(args[2], ruleResultsOverrides);
    });
});

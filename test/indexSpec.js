const assert = require('assert');
const rulesRunner = require('../rulesRunner');
const numbersHelper = require('./helpers/numbers');
const BaseMultiplicationRule = require('../rules/baseMultiplicationRule');
const StringContainsRule = require('../rules/stringContainsRule');
const sinon = require('sinon');
const index = require('../index');


describe('index', function(){
    const numbers = numbersHelper.getArrayRange(0,20);
    const rule3 = new BaseMultiplicationRule(3);
    const rule5 = new BaseMultiplicationRule(5);
    const rule15 = new BaseMultiplicationRule(15);
    const stringContains3Rule = new StringContainsRule(3);

    describe('case1', function(){
        const runnerSpy = sinon.spy(rulesRunner);
        const ruleResultsOverrides = {};
        ruleResultsOverrides[rule3.ruleId()] = "fizz";
        ruleResultsOverrides[rule5.ruleId()] = "buzz";
        ruleResultsOverrides[rule15.ruleId()] = "fizzbuzz";
        it('should call rules runner with correct params', function(){
            index.case1(numbers, runnerSpy);
            assert(runnerSpy.called);
            const args = runnerSpy.getCall(0).args;
            assert.deepEqual(args[0], numbers);
            assert.deepEqual(args[1], [rule3, rule5, rule15]);
            assert.deepEqual(args[2], ruleResultsOverrides);
        });
    });

    describe('case2', function(){
        const runnerSpy = sinon.spy(rulesRunner);
        const ruleResultsOverrides = {};
        ruleResultsOverrides[rule3.ruleId()] = "fizz";
        ruleResultsOverrides[rule5.ruleId()] = "buzz";
        ruleResultsOverrides[rule15.ruleId()] = "fizzbuzz";
        ruleResultsOverrides[stringContains3Rule.ruleId()] = "lucky";
        it('should call rules runner with correct params', function(){
            index.case2(numbers, runnerSpy);
            assert(runnerSpy.called);
            const args = runnerSpy.getCall(0).args;
            assert.deepEqual(args[0], numbers);
            assert.deepEqual(args[1], [rule3, rule5, rule15, stringContains3Rule]);
            assert.deepEqual(args[2], ruleResultsOverrides);
        });
    });
});

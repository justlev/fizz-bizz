process.env.NODE_ENV = 'test';

const assert = require('assert');
const numbersHelper = require('../helpers/numbers');
const rulesRunner = require('../../rulesRunner');
const BaseMultiplicationRule = require('../../rules/baseMultiplicationRule');
const sinon = require('sinon');


describe('#rulesRunner', function(){
    const numbersToRunOn = numbersHelper.getArrayRange(1, 20);
    const stubRule1 = sinon.createStubInstance(BaseMultiplicationRule);
    const stubRule2 = sinon.createStubInstance(BaseMultiplicationRule);
    describe('running it on an array of 1-20', function(){
        describe('.output', function(){
            it('should check all passed rules if they are true', function(){
                rulesRunner(numbersToRunOn, [stubRule1, stubRule2]);
                assert(stubRule1.ruleApplies.called);
                assert(stubRule2.ruleApplies.called);
            });
            
            describe('when no rules results overwrites passed', function(){
                it('should return input numbers as output', function(){
                    const result = rulesRunner(numbersToRunOn, [stubRule1, stubRule2]);
                    assert.deepEqual(result.output, numbersToRunOn);
                });
            });
    
            describe('when some rules results overwrites passed', function(){
                const rule1Id = "ruleId";
                const replaceWith = "fuzz";
                stubRule1.ruleApplies.returns(true);
                stubRule1.ruleId.returns(rule1Id);
                stubRule2.ruleApplies.returns(false);
                const rulesOverwrites = {};
                rulesOverwrites[rule1Id] = replaceWith;
                it('should return input numbers as output', function(){
                    const result = rulesRunner([1,2,3], [stubRule1, stubRule2], rulesOverwrites);
                    assert.deepEqual(result.output, [replaceWith, replaceWith, replaceWith]);
                });
            });
        });

        describe('.stats', function(){
            describe('when no rules results overwrites passed', function(){
                it('should return input numbers as output', function(){
                    const result = rulesRunner(numbersToRunOn, [stubRule1, stubRule2]);
                    assert.deepEqual(result.stats, {integer: numbersToRunOn.length});
                });
            });
    
            describe('when some rules results overwrites passed', function(){
                const rule1Id = "ruleId";
                const replaceWith = "fuzz";
                const expectedStats = {};
                expectedStats[replaceWith] = numbersToRunOn.length;
                stubRule1.ruleApplies.returns(true);
                stubRule1.ruleId.returns(rule1Id);
                stubRule2.ruleApplies.returns(false);
                const rulesOverwrites = {};
                rulesOverwrites[rule1Id] = replaceWith;
                it('should return input numbers as output', function(){
                    const result = rulesRunner(numbersToRunOn, [stubRule1, stubRule2], rulesOverwrites);
                    assert.deepEqual(result.stats, expectedStats);
                });
            });
        });
    });
})
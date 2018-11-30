const assert = require('assert');
const numbersHelper = require('../helpers/numbers');
const BaseMultiplicationRule = require('../../rules/baseMultiplicationRule');

describe('BaseMultiplicationRule', function(){
    const numbersToTest = [2,3,14,10000];

    describe('#ruleId', function(){
        const number = 123;
        const instance = new BaseMultiplicationRule(number);
        const expected = `MULTIPLICATION_RULE_${number}`;
        it('returns base ruleId+number', function(){
            const actual = instance.ruleId();
            assert.equal(actual, expected);
        });
    });

    describe('#ruleApplies(number)"', function(){
        describe('when a multiplied number passed', function(){
            numbersToTest.forEach(number => {
                describe(`and the multiplier is ${number}`, function(){
                    const expectedResult = true;
                    const instance = new BaseMultiplicationRule(number);
                    const baseActualValue = instance.ruleApplies(number);
                    const multipliedBy13 = number*13;
                    const multipliedByItself = number*number;
                    const multipliedBy13Result = instance.ruleApplies(multipliedBy13);
                    const multipliedByItselfResult = instance.ruleApplies(multipliedByItself);
                    describe(`and the passed number is: ${number}`, function(){
                        it(`should return the value ${expectedResult}`, function(){
                            assert.equal(baseActualValue, expectedResult);
                        });
                    });

                    describe(`and the passed number is: ${multipliedBy13}`, function(){
                        it(`should return the value ${expectedResult}`, function(){
                            assert.equal(multipliedBy13Result, expectedResult);
                        });
                    });

                    describe(`and the passed number is: ${multipliedByItself}`, function(){
                        it(`should return the value ${expectedResult}`, function(){
                            assert.equal(multipliedByItselfResult, expectedResult);
                        });
                    });
                })
            });
        });
        
        describe ('when a not-multiplied number passed', function(){
            const numbersArray = numbersHelper.getArrayRange(1,12);
            const instance = new BaseMultiplicationRule(13);
            numbersArray.forEach(number => {
                describe(`and the number is ${number}`, function(){
                    it(`should return the original number ${number}`, function(){
                        const actualValue = instance.ruleApplies(number);
                        assert.equal(actualValue, false);
                    });
                });
            });
        });

        describe('when some multiplier is used', function(){
            const expectedResult = true;
            const instance = new BaseMultiplicationRule(15);
            describe('and 0 is passed', function(){
                const actual = instance.ruleApplies(0);
                it(`should return the expected value ${expectedResult}`, function(){
                    assert.equal(actual, expectedResult);
                });
            });
        })
    });
});
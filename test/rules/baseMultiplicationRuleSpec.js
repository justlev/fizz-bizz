const assert = require('assert');
const numbersHelper = require('../helpers/numbers');
const BaseMultiplicationRule = require('../../rules/baseMultiplicationRule');

describe('BaseMultiplicationRule', function(){
    const testsHash = {
        2: "test_2",
        3: "test_3",
        5: "test_5",
        100: "test_100"
    };

    describe('#getValueForNumber(number)"', function(){
        describe('when a multiplied number passed', function(){
            const numbersToTest = Object.keys(testsHash);
            numbersToTest.forEach(number => {
                describe(`and the multiplier is ${number}`, function(){
                    const expectedReplacement = testsHash[number];
                    const instance = new BaseMultiplicationRule(number, expectedReplacement);
                    const baseActualValue = instance.getValueForNumber(number);
                    const multipliedBy13 = number*13;
                    const multipliedByItself = number*number;
                    const multipliedBy13Result = instance.getValueForNumber(multipliedBy13);
                    const multipliedByItselfResult = instance.getValueForNumber(multipliedByItself);
                    describe(`and the passed number is: ${number}`, function(){
                        it(`should return the value ${expectedReplacement}`, function(){
                            assert.equal(baseActualValue, expectedReplacement);
                        });
                    });

                    describe(`and the passed number is: ${multipliedBy13}`, function(){
                        it(`should return the value ${expectedReplacement}`, function(){
                            assert.equal(multipliedBy13Result, expectedReplacement);
                        });
                    });

                    describe(`and the passed number is: ${multipliedByItself}`, function(){
                        it(`should return the value ${expectedReplacement}`, function(){
                            assert.equal(multipliedByItselfResult, expectedReplacement);
                        });
                    });
                })
            });
        });
        describe ('when a not-multiplied number passed', function(){
            const numbersArray = numbersHelper.getArrayRange(1,12);
            const instance = new BaseMultiplicationRule(13, 'Test');
            numbersArray.forEach(number => {
                describe(`and the number is ${number}`, function(){
                    it(`should return the original number ${number}`, function(){
                        const actualValue = instance.getValueForNumber(number);
                        assert.equal(number, actualValue);
                    });
                })
            });
        })

        describe('when some multiplier is used', function(){
            const expectedResult = 'Test';
            const instance = new BaseMultiplicationRule(15, expectedResult);
            describe('and 0 is passed', function(){
                const actual = instance.getValueForNumber(0);
                it(`should return the expected value ${expectedResult}`, function(){
                    assert.equal(actual, expectedResult);
                });
            });
        })
    });
});
const assert = require('assert');
const StringContainsRule = require('../../rules/stringContainsRule');

describe('StringContainsRule', function(){
    describe('#ruleId', function(){
        const number = 123;
        const instance = new StringContainsRule(number);
        const expected = `STRING_CONTAINS_${number}`;
        it('returns base ruleId+number', function(){
            const actual = instance.ruleId();
            assert.equal(actual, expected);
        });
    });

    describe('#ruleApplies(number)"', function(){
        describe ('when matching number passed', function(){
            const number = 24135;
            const instance = new StringContainsRule(13);
            it('should apply and return true', function(){
                const actualValue = instance.ruleApplies(number);
                assert.equal(actualValue, true);
            });
        });

        describe ('when equal number passed', function(){
            const number = 21;
            const instance = new StringContainsRule(21);
            it('should apply and return true', function(){
                const actualValue = instance.ruleApplies(number);
                assert.equal(actualValue, true);
            });
        });

        describe('when some other number passed', function(){
            const number = 4;
            const instance = new StringContainsRule(21);
            it('should not apply and return false', function(){
                const actualValue = instance.ruleApplies(number);
                assert.equal(actualValue, false);
            });
        });
    });
});
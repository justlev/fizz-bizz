const assert = require('assert');
const numbersHelper = require('../../helpers/numbers');
const fizzBuzz1 = require('../../../scenes/fizzBuzz1');
const BaseMultiplicationRule = require('../../../rules/baseMultiplicationRule');
const sinon = require('sinon');

describe('#fizzBuzz1', function(){
    const numbersToRunOn = numbersHelper.getArrayRange(1, 20);
    const stubRule1 = sinon.createStubInstance(BaseMultiplicationRule);
    const stubRule2 = sinon.createStubInstance(BaseMultiplicationRule);
    describe('running it on an array of 1-20', function(){
        it('should ask for replacement value from all passed rules rule', function(){
            fizzBuzz1(numbersToRunOn, [stubRule1, stubRule2]);
            assert(stubRule1.getValueForNumber.called);
            assert(stubRule2.getValueForNumber.called);
        })
    });
})
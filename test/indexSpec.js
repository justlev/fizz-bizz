const assert = require('assert');
const rulesRunner = require('../../rulesRunner');
const numbersHelper = require('./helpers/numbers');
const sinon = require('sinon');
const index = require('../index');


describe('case 1', function(){
    const runnerSpy = sinon.spy(rulesRunner);
    const numbers = numbersHelper.getArrayRange(1,20);
    const rules = [];
    it('should call rules runner with correct params', function(){
        index.case1();
        
        assert(runnerSpy.called);
        const args = runnerSpy.getCall(0).args;
        assert.equal(args[0], numbers);
        assert.equal(args[1], rules);
    })
})

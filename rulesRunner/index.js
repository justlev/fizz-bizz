function rulesRunner(numbersArrayToRunOn, rulesToInvoke, rulesToResults={}){
    const outputs = [];
    numbersArrayToRunOn.forEach(number => {
        let matchingRule = null;
        rulesToInvoke.forEach(rule => {
            const ruleApplies = rule.ruleApplies(number);
            if (ruleApplies) matchingRule = rule;
        });
        const roundOutput = matchingRule == null || rulesToResults[matchingRule.ruleId()] == null ?
                            number : rulesToResults[matchingRule.ruleId()];
        outputs.push(roundOutput);
        if (process.env.NODE_ENV !== 'test'){
            console.log(roundOutput);
        }
    });
    return outputs;
}

module.exports = rulesRunner;
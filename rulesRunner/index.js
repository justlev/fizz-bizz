function rulesRunner(numbersArrayToRunOn, rulesToInvoke, rulesToResults={}){
    const output = [];
    const stats = {};
    numbersArrayToRunOn.forEach(number => {
        let matchingRule = null;
        rulesToInvoke.forEach(rule => {
            const ruleApplies = rule.ruleApplies(number);
            if (ruleApplies) matchingRule = rule;
        });
        const roundOutput = matchingRule == null || rulesToResults[matchingRule.ruleId()] == null ?
                            number : rulesToResults[matchingRule.ruleId()];
        output.push(roundOutput);
        addStat(roundOutput, stats);
    });
    return {output: output, stats: stats};
}

function addStat(result, stats){
    const resultToUse = Number.isInteger(result) ? 'integer' : result;
    if (stats[resultToUse] == null) stats[resultToUse] = 0;
    stats[resultToUse]+=1;
}

module.exports = rulesRunner;
class StringContainsRule{
    constructor(number){
        this.numToContain = number;
        this.RULE_ID = "STRING_CONTAINS_"+number;
    }

    ruleApplies(number){
        const str = number.toString();
        if (str.indexOf(this.numToContain) !== -1){
            return true;
        }
        return false;
    }

    ruleId(){
        return this.RULE_ID;
    }
}

module.exports = StringContainsRule;
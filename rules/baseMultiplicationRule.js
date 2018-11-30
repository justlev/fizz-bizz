class BaseMultiplicationRule{
    constructor(number){
        this.multiplicator = number;
        this.RULE_ID = "MULTIPLICATION_RULE_"+number;
    }

    ruleApplies(number){
        if (number%this.multiplicator == 0){
            return true;
        }
        return false;
    }

    ruleId(){
        return this.RULE_ID;
    }
}

module.exports = BaseMultiplicationRule;
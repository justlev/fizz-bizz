class BaseMultiplicationRule{
    constructor(number, replaceWith){
        this.multiplicator = number;
        this.replaceWith = replaceWith;
    }

    getValueForNumber(number){
        if (number%this.multiplicator == 0){
            return this.replaceWith;
        }
        return number;
    }
}

module.exports = BaseMultiplicationRule;
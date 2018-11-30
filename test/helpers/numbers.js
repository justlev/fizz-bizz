module.exports = {
    getArrayRange: function(from, to){
        const toReturn = [];
        for (let i=from;i<=to;i++){
            toReturn.push(i);
        }
        return toReturn;
    }
}

function divideSum(resultDivision,coinsValue,currency) { 
    for (let propt in coinsValue) {
        if (currency >= coinsValue[propt]) {
            resultDivision[propt]+=1          
            currency-=coinsValue[propt]
            if (currency ==0) {
                for (let propt in resultDivision) {
                    if (resultDivision[propt]===0) {
                        delete resultDivision[propt]
                    }
                }

                return resultDivision;
            }
            return divideSum(resultDivision,coinsValue,currency);
        }
    }
    
}
module.exports = function makeExchange(currency) {
    console.log("start")
    let coinsValue  = {}
    if (currency ===0) {
        return coinsValue;
    }
    else if (currency<0) {
        return coinsValue;
    }
    else if (currency>10000) {
        coinsValue.error="You are rich, my friend! We don't have so much coins for exchange"
        return coinsValue;
    }
    else if (currency <= 10000) {
        coinsValue = {
            H : 50,
            Q : 25,
            D : 10,
            N : 5,
            P : 1.
        }
        let resultDivision = {H:0,Q:0,D:0,N:0,P:0.}
        resultDivision = divideSum(resultDivision,coinsValue,currency)
        return resultDivision;

    }
}

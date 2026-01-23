class Portfolio {
    constructor(){
        this.stocks = {};
    }
    isEmpty(){
        if(this.stocks == {}){
            return true;
        }
        return false;
    }
    purchase(symbol, shares){
        if(this.stocks[symbol]){
            this.stocks[symbol] += shares;
        } else {
            this.stocks[symbol] = shares;
        }
    }
    sell(symbol, shares){
        if(shares > this.stocks[symbol]){
            throw new Error("Not possible to sell this number of shares.");
        }
        if(this.stocks[symbol]){
            this.stocks[symbol] -= shares;
        }
        if(this.stocks[symbol] == 0){
            delete this.stocks[symbol];
        }
    }
    uniqueStocks(){
        return Object.keys(this.stocks).length;
    }
    getShares(symbol){
        return this.stocks[symbol];
    }
}

module.exports = Portfolio;
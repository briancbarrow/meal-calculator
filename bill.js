var Bill = function() {
    this.diners = [];
    for( var i=0; i<arguments.length; i++) {
        this.diners.push(arguments[i]);
    };
    this.grandTotal = function() {
        var total = 0;
        for(var i = 0; i < this.diners.length; i++) {
            total = total + this.diners[i].getTotal();
        }
        return total;
    }
    
};

module.exports = Bill;
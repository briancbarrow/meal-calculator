var Bill = function() {
    this.diners = [];
    for( var i = 0; i < arguments.length; i++) {
        this.diners.push(arguments[i]);
    };
    this.grandTotal = function() {
        var total = 0;
        for(var i = 0; i < this.diners.length; i++) {
            total = total + this.diners[i].getTotal() + this.diners[i].getTax();
        }
        console.log('Total: ', total.toFixed(2));
        return total;
    };
    this.totalTip = function() {
        var total = 0;
        for(var i = 0; i < this.diners.length; i++) {
            total = total + this.diners[i].getTip();
        }
        console.log('Tip Total: ', total);
        return total;
    };
    this.itemizedTotal = function() {
        for(var i = 0; i < this.diners.length; i++) {
            console.log(this.diners[i].name, 'Total:', this.diners[i].getTotal(), 'Tax:', this.diners[i].getTax(), 'Tip:', this.diners[i].getTip());
        }
    }
    
};

module.exports = Bill;
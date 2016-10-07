
var Diner = function(name, dishes) {
    this.name = name;
    this.dishes = dishes;
    this.getTotal = function() {
        var total = 0;
        for(var i = 0; i < dishes.length; i++) {
            total = total + dishes[i][1];
        }
        return total;
    };
    this.addDish = function(dish, cost) {
        this.dishes.push([dish, cost]);
    };
    this.getTax = function() {
        var total = this.getTotal();
        var tax = (total * 0.09).toFixed(2);
        return +tax;
    };
    this.getTip = function() {
        var total = this.getTotal();
        var tip = Math.ceil(total * 0.15);
        return tip;
    }
};

module.exports = Diner;
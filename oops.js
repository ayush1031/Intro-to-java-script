"use strict"
/*
const dish1 =
{
    name: "DAL MAKHNI",
    qty: 1
}
const dish2 =
{
    name: "SHAHI PANEER",
    qty: 1
}

console.log(dish1);
console.log(dish2);

*/

class Dish
{
    qty=0;

    constructor(title="NA",price=0)
    {
        this.title=title;
        this.price=price;
        this.qty++
    }
    
    show()
    {
        console.log(this.title+" priced at "+this.price);
        console.log("Quantity is "+this.qty);
    }

    get getQty()
    {
        return this.qty;
    }

    set setQty(qty)
    {
        this.qty=qty;
    }
}

let d1 = new Dish("DAL MAKHNI",150)
d1.qty=2;
d1.show();
console.log(d1.getQty)

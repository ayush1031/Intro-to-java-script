var prompt = require("prompt-sync")();

function Item(name="NA",price=0,quantity=0)
{
    this.name=name,
    this.price=price,
    this.quantity=quantity,
    this.showItem= function()
    {
        console.log(this.quantity +" "+ this.name+ " Item is ordered at price " +this.price +" each");
    }
    Item.prototype.store="JMD FURNITURES";
    Item.prototype.totalPrice=0;

    Item.prototype.show = function()
    {
        console.log("WELCOME TO "+Item.prototype.store);
        console.log(this.quantity +" "+ this.name+ " Item is ordered at price " +this.price +" each");
        console.log("Total amount to pay is "+Item.prototype.totalPrice);
    }
    this.updatePrice = function()
        {
           Item.prototype.totalPrice += this.price*this.quantity;
        }

}


var item = prompt("What item you wanna order ?");

item1 = new Item(item,500,2);
item1.updatePrice()
item1.show();

item2 =new Item("Chair",350,3);
item2.updatePrice()
item2.show();

let checkout=[]
checkout.push(item1.name)
console.log(checkout);


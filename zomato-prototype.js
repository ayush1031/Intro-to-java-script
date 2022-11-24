function Dish(name="NA", price=0,description="NA",quantity=1)
{
    this.name=name,
    this.price=price,
    this.description=description,
    this.quantity=quantity,
    //this.restaurant="Indian Sumner",
    this.show=function()
    {
        console.log(this.name+" is priced at "+this.price+" quantity is "+this.quantity);
        console.log("Total price for " +this.name+" is "+this.price*this.quantity)
    }
        this.increment=function(){
            this.quantity++;
            Dish.prototype.totalDishes++;
        }
        this.decrement=function(){
            this.quantity--;
            Dish.prototype.totalDishes--;
        }
        this.updatePrice = function()
        {
            Dish.prototype.totalPrice += this.price*this.quantity;
        }
}

Dish.prototype.restaurant="HOT BREADS"
Dish.prototype.totalPrice=0;
Dish.prototype.totalDishes=0;

Dish.prototype.show = function(){
    console.log("Welcome to "+Dish.prototype.restaurant);
    console.log("Total number of Dishes "+Dish.prototype.totalDishes);
    console.log("Total Amount "+Dish.prototype.totalPrice);
}

d1=new Dish("WHITE SAUCE PASTA",250," PASTA IN WHITE SAUCE ");
Dish.prototype.totalDishes++
d2=new Dish("HAKKA NOODLES",200," NOODLES IN VEGETABLES ",2);
Dish.prototype.totalDishes++
d3=new Dish("DAL MAKHNI",100," BLACK LENTILS",1);
Dish.prototype.totalDishes++
d4=new Dish("GARLIC NAAN",50,"GARLIC BREAD ",5);
Dish.prototype.totalDishes++

d1.increment();
d1.increment();
d3.increment();
d1.updatePrice();
d2.updatePrice();
d3.updatePrice();
d4.updatePrice();

let cart = [d1,d2,d3,d4];
function showDishes(item,index)
{
    console.log("~!~!~!~!~!~!")
    item.show()
    //console.log("~!~!~!~!~!~!")
}
Dish.prototype.show();
cart.forEach(showDishes)



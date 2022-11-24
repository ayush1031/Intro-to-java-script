function Dish(name="NA", price=0,description="NA",quantity=1)
{
    this.name=name,
    this.price=price,
    this.description=description,
    this.quantity=quantity,
    //this.restaurant="Indian Sumner",
    this.show=function(){
        console.log(this.name+" is priced at "+this.price);
        console.log("Quantity is "+quantity);
    }
}

let d1= new Dish(name="Malai kofta", price=300 , description="veg balls cooked in gravy");
let d2 = new Dish(name="Dal",price=100,description="Black lentils cooked overnight",quantity=2);

    d1.show()
    d2.show()

    console.log("Prototype of restaurant is"+Dish.prototype)
    Dish.prototype.restaurant="Indian Summer";
    //Dish.prototype.rating=5;
    console.log("Now Prototype of restaurant is "+Dish.prototype.restaurant);

    console.log(d1.restaurant);
    console.log(d2.restaurant);
    //console.log(d2.rating);

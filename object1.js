/*const dish1 ={
    name: "Dal makhni",
    price: 200,
    Desccription: "Black lentils"
}

const dish2= {
    dishName: "Panner makhni",
    price: 250,
    Description: "panner cooked in indian gravy"
}

let show = function()
{
    console.log("~~~~~")
    console.log(this.name +" is priced at "+ this.price);
    console.log(" Description is " +this.Description);
    console.log("~~~~~")
}
dish1.show=show
dish2.show=show

dish1.show()
dish2.show()

*/

// these objects do not have a standard way of attributes and value pair

// Constructor Functions => Standardized way 

function Dish(name="NA", price=0,description="NA")
{
    this.name=name,
    this.price=price,
    this.description=description,
    this.show=function(){
        console.log(this.name+" is priced at "+this.price);
    }
}

    let d1= new Dish(name="Malai kofta", price=300 , description="veg balls cooked in gravy");
    let d2 = new Dish();
    
    //console.log(d1);
    //console.log(d2);

    // d1 and d2 are not objects 
    // d1 and d2 are reference variables and they will hold hash code of Dish object
    // new is an operator it will create obeject in heap area on run time


    d1.show()
    d2.show()
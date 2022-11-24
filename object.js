/*
Objects are multi value containers and they store data as key value pair
*/

let student ={
    Rollno: 10,
    name: "AYUSH"
    }

let student1 ={
    Rollno:20,
    name: "ANSHU",
    Gender: "Male"
}

    //console.log("Type of student is "+typeof(student));
    //console.log(student);
    //console.log(student1);
    //console.log(student.name+" "+student1.name);
    console.log(student.name+" "+student1['Gender']);


    // Using for each loop => special type of loop

    for (key in student1){
        console.log(key);
    }

    // Nested Objects => objects in objects 
    
    let restaurant = {
        name: "indian summer",
        phone: '987654321',
        address:{
            Road: "Mall Road",
            city: "Ludhiana",
            state: "Punjab"
        },
        // creating array in object
        menu:[
        {
            name: "Dal Makhni",
            price: 200
        },
        {
            name: "Shahi Panner", 
            price: 300
        }
        ],
        // creating function in object => Method

        show: function()
        {
            console.log(this.name+"can be contacted at"+this.phone);
        }


        //console.log(this);
        //restaurant.show;
    }

    //console.log(restaurant);
    restaurant.show();
    console.log(restaurant)


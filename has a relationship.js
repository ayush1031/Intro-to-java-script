class user{
    constructor(name,mobile,email,addresses)
    {
        this.name=name
        this.mobile=mobile
        this.email=email
        this.addresses=addresses
    }
show()
{
    console.log("User is "+this.name+ " with mobile number : "+this.mobile+ " and email address : "+this.email+ " and address is ");
    for(let address of this.addresses){
            address.show();
        }
}
        }

class address{
    constructor(street,city,postcode,label)
    {
        this.street=street
        this.city=city
        this.postcode=postcode
        this.label=label
    }
    show()
    {
        console.log(this.street+" "+this.city+" "+this.postcode+" "+this.label);
    }
}

const a1= new address(street = "tony drive",city = "truganina",postcode="3029",label="home");
const a2= new address(street="360 collins street",city="Melbourne",postcode="3000",label="Work");

const addressArray=[a1,a2];

//addressArray[1].city="Glenory"

const u1 = new user(name = "Ayush",mobile = "9915559680",email = "ayushchhabra@gmail.com",address=addressArray)
u1.show();
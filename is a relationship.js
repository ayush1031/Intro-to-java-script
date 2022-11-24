//use "strict mode"
var prompt = require("prompt-sync")();
class user 
{
    constructor(name,email,phone)
    {
        console.log("User object constructed")
        this.name=name
        this.email=email
        this.phone=phone
    }
    show()
    {
        console.log(
        "USER DETAILS: \n "+
        " User name: "+this.name+
        " , User email: "+this.email+
        " , User phone: "+this.phone
                    );
    }
    askForUpgrdae()
    {
        var prime = prompt("Would you like to become prime user ?");
        if(prime==true)
        {
            this.updateUserToPrime()
        }
        else
        {
            console.log("THANK YOU !")
        }
        
    }

    updateUserToPrime()
    {
        this.isMusic=true;
        this.isVideo=true;
        this.freeDelivery=true;

    }


}

let u1 = new user(name="Ayush",email="ayush@gmail.com",phone="9915596800");
u1.show();

class primeUser extends user
{
    constructor()
    {
        console.log("~~~~~~~~~~~")
        console.log("Prime User Object Constructed")
        super(name,email,phone)
        this.isVideo=true;
        this.isMusic=true;
        this.freeDelivery=true;
    }    
    // if we use same name as in parent which is show its known as over riding => concept 

    show()
    {
        console.log("Prime User Details:")
        super.show()
        console.log("Prime Music "+this.isMusic)
        console.log("Prime Video "+this.isVideo)
        console.log("Free Deliveries "+this.freeDelivery)
        
    }

}

const u2 = new primeUser(name="Fionna",email="Fionna@gmail.com",phone=987654321);
u2.show();

let upgradedUser = u1.updateUserToPrime()
upgradedUser.show();

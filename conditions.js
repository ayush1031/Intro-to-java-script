var prompt = require("prompt-sync")();

let amount = prompt("Enter the amount");
console.log(amount);

let code = prompt("Enter the code");
console.log(code);

let proUser=true;

let discount;
let proDiscount;

if(amount>150)
{
    if(code=="ZOMATO")
    {
        console.log("PROMO CODE APPLIED");
        discount = 75;
    }
    else
    {
        console.log("PROMO CODE INVALID")
        discount=0;
    }
}
else
{
console.log("CANNOT APPLY PROMO CODE");
}
if(proUser)
{
    console.log("PRO USER WILL GET AN ADDITIONAL 10% OFF ")
    proDiscount=amount*0.10
}

amount = amount - discount - proDiscount;

console.log("PLEASE PAY " +amount);
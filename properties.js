/*let product ={
    phone: "Iphone 12 pro",
    brand: "Apple",
    price: 60000,
    
    // here we can write some logic before returning title    
    get getTitle()
    {
        return this.phone;
    },

    set setTitle(phone)
    // we can check here for validation
    {
        return this.phone=" :)"
    }
    
}

console.log(product.brand);
console.log(product.getTitle);

product.setTitle="Iphone 12 pro max";

console.log(product.brand);
console.log(product.phone);
console.log(product.getTitle);
*/

let driver =
{
     name: "ARJUN"
    ,status: true
    ,cabNumber: "PB10ED6418"

    ,set setStatus(status)
    {
        if(this.status != status)
        {
            this.status=status;
        }
    } 
}
driver.name="ARJUN DIXIT";
console.log(driver.name);








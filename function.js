function f(x){
let result =    x=x*x+1;
    
    console.log("Result is " +result);
}


//f(3)
//let output = f(2);


function bye(name)
{
    console.log("BYE "+name);
    return "THANK YOU";

}

function hello(name)
{
    console.log("HELLO "+name);
    bye(name); // nesting of fuctions 
}

//hello("AYUSH") => Execution Statements
//bye("CHLOE")  => Execution Statements

"The retrun of bye function __thank you__ will be return in hello frame "
"The retrun of hello function will be return in main frame "


function addNumbers(a,b)
{
    return a+b
}


let sum = addNumbers  // Reference Copy

console.log(sum(10,20));



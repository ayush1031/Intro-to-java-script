let prices =[10,50,80,40,30];
let area =[1000,5000,8000,4000,3000];
/*
let max=prices[0];
for(let idx=1; idx<prices.length; idx++)
{
    if(prices[idx]>max)
    {
        max=prices[idx];
    }
}
console.log("Maximum in prices is " +max);
*/
// Function 

/*function findMax(data){
let max =data[0];
for(let idx=1; idx<data.length; idx++)
{
    if(data[idx]>max)
    {
        max=data[idx];
    }
}
    return max;
}

console.log("Maximum in prices is " +findMax(data=prices));
console.log("Maximum in area is " +findMax(data=area));
*/

// Recursive approach

function findMax(data,length){
if(length == 1)
{
    return data[0];
}
else
{
    let num = findMax(data,length-1)
    if(num>data[length-1])
        {
            return num;
        }
        else
        {
                return data[length-1];
        }
}
}

numbers = [10,20,40,30];
let result = findMax(data=numbers, length = numbers.length);
console.log("Result is: "+result);
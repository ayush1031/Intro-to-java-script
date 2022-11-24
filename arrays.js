let numbers =[10,20,30,40,50]
/*
console.log(numbers)
console.log(numbers[2])
numbers[7]=100;
console.log(numbers[7])
console.log(numbers[6])
*/
//numbers[7]=100;
numbers[numbers.length]=111;
for(let idx=0;idx<numbers.length;idx++)
{
    console.log(numbers[idx]);
}

console.log("~~~~~~~~~~~~~");

for (element in numbers){
    console.log(element);
}
console.log("~~~~~~~~~~~~~");

for (idx in numbers)
{
    console.log(idx);
    console.log(numbers[idx]);
}
console.log("~~~~~~~~");

console.log(numbers);
numbers.sort();
console.log("~~~~~~~~");
console.log(numbers);
console.log("~~~~~~~~");
numbers.reverse();
console.log(numbers);
console.log("~~~~~~~~");
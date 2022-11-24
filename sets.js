// Sets are simple data structure 
/*
let item = new Set (["chiar","table","lamp"]);

console.log("Items are "+item);
console.log(typeof item);

console.log("names.values() are"+item.values());

for(let Element of item)
{
    console.log(Element)
}
console.log("~~~~~~~~~~~~")
// Adding operation in sets 
item.add("Books")
for(let Element of item)
{
    console.log(Element)
}
console.log("~~~~~~~~~~~~")
// Removing element in sets 
item.delete("Books")
for(let Element of item)
{
    console.log(Element)
}
*/
/*
console.log("~~~~~~~~~~~~")
// Weak Sets typically work on objects 
let employees = new WeakSet();
// Weak set will only allow objects
let emp1 = {
    name: "Anshu",
    salary: 60000
           } 
let emp2 = {
    name: "Ayush",
    salary: 90000
           }
employees.add(emp1);
employees.add(emp2);

console.log(employees)
console.log("~~~~~~~~~~")
console.log(typeof employees)
console.log("~~~~~~~~~~")

*/

// Operations on sets 

// 1 Union operation

let item1 = new Set (["chair","table","lamp","study_table"])
let item2 = new Set (["chair","sofa","lamp","dining_table"])

function unionOfSets(set1,set2)
{
    let set = new Set(set1)

    for(element of set2)
    {
        set.add(element)
    }
    return set
}
// Duplicacy in sets are not supported

let union = unionOfSets(set1=item1,set2=item2)
for(element of union)
{
    console.log(element)
}

console.log("~~~~~~~~~~~~")

function intersectionOfSets(set1,set2)
{
    let set=new Set
    for(element of set2)
    {
        if(set1.has(element))
        {
        set.add(element)
        }
    }
    return set
}
let intersection = intersectionOfSets(set1=item1,set2=item2)
for(element of intersection)
{
    console.log(element)
}
console.log("~~~~~~~~~~~")
// remove elements from set1 which are already available in set2 
function differenceOfSets(set1,set2)
{
    let set = new Set
    for(element of set1)
    if(set2.has(element))
    {
        set1.delete(element)
        set.add(set1)    
    }
    return set
}
let difference=differenceOfSets(set1=item1,set2=item2)
for(element of difference)
{
    console.log(element)
}
console.log("~~~~~~~~~~")





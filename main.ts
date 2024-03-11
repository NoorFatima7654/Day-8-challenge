//Question no 22
let freinds: string[] = ["Mishal","Arish","Huzaifa"];
console.log(freinds[3]);
//now correcting the error by accessing a valid  index 
console.log(freinds[2]);

//Question no 23

let car = 'subaru';


console.log("is car != 'honda city'? predict true")
console.log(car !='honda city')

console.log("is car == 'subaru'? predict false")
console.log(car == 'Subaru')

console.log("is car == 'subaru'? predict false")
console.log(car == 'Subaru')

console.log("is car == 'SUBARU'? predict false")
console.log(car == 'SUBARU')

console.log("is car.lenght==3?predict true")
console.log(car.length == 3)

console.log("is car.length !==10?predict true")
console.log(car.length != 10)

console.log("is 10> 45?pridict false")
console.log(10 >45)

console.log("is 3 <= 2?pridict false")
console.log(3<=2)

console.log("is 72 >= 63?pridict false")
console.log(72 >= 83)

console.log("is car =='subaru' && car.length ==6?predict true")
console.log(car == 'subaru'&& car.length == 6)


//Question no 24


// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); 
console.log("apple".toUpperCase() == "apple");

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); 

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); 
console.log(2 < 1); 

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); 
console.log(true || false); 

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); 

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); 




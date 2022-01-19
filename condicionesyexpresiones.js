// Exercise #1
let names = ["Maria", "Antony", "Joy", "Juan"]

// Part 1
names.push("Angel");
console.log(names);

// Part 2
function comparar (name){
    console.log(names.includes(name));
}
comparar("Joy");

// Part 3
let names = ["Maria", "Antony", "Joy", "Juan"];
let names2 = ["Maria", "Angel", "Joy", "Ricardo" ];
let iguales = 0;
function comparar(){
    for (let i =0; i<names.length;i++)
    for (let j = 0;j<names.length;j++)
	{
		if (names[i] == names2[j]){
            names2.splice(j, 1);
            iguales++;
        }
	}
    console.log(iguales);
}
comparar(names, names2);
names = names.concat(names2);
console.log(names);

// Part 4  
  console.log(names.map(namesLength => namesLength.length));

// Exercise #2 What do the following expressions evaluate to?

false || (true && false); // "false"
true || (11 + 12); // "true"
(31 + 22) || true; // "true"
true && (1 + 7); // "true"
false && (3 + 4); // "false"
(1 + 2) && true; // "true"
(32 * 4) >= 129; // "false"
false !== !true; // "false"
true === 4; // "false"
false === (847 === '847'); // "true"
false === (887 == '887'); // "false"
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // "true"

// Ejercicio #3 Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), greater than 100, or less than 0.

//numberRange(25);   // '25 is between 0 and 25'
//numberRange(75);   // '75 is between 26 and 100'
//numberRange(125);  // '125 is greater than 100'
//numberRange(-25);  // '-25 is less than 0'

function numberRange (number){
    if (number <= 25 && number >= 0){
        console.log(` ${number} is between 0 and 25 `)
    }else if(number <= 100 && number >= 26){
    console.log(` ${number} is between 26 and 100 `)
    }else if(number > 100){
        console.log(` ${number} is greater than 100 `)
    }else if(number < 0){
        console.log(` ${number} is less than 0 `)
    }else{
        alert("Solo acepta números") 
    }
}
numberRange (89);

// Additional Exercises What is shown on the console when f is console.log'd?
var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f); // Respuesta: Se muestra que el valor de f = 4
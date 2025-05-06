console.log("Hello World");

let name = "Gan Ninia";
console.log(name);

name = "Tai Linn Ong";
console.log(name);

//Cannot be change
const myName = "Huang Ba Dan";
console.log(myName);


const message = "Hello World"; //no need to spacify the data type
console.log(message);

const a = 10;
const b = 3;

const sum = a + b;
console.log(sum);

const minus = b - a;
console.log(minus);

const product = a * b;
console.log(product);

const division = a / b;
console.log(division);

const powerOf = a ** b;
console.log(powerOf);

const modulo = a % b;
console.log(modulo);

const greeting = "Hello " + name;
console.log(greeting);

const goodbye = `Goodbye ${name}`;
console.log(goodbye);

const hungry = true;
const tired = false;

console.log(hungry && tired);
console.log(hungry || tired);
console.log(!hungry);

const age = 16;
const withparect = true;
if(age > 18){
 console.log("You can watch the movie.")
}else{
 console.log("You cannot watch the movie.")
}

if(age < 12 || (age < 18 && !withparect)){
  console.log("You cannot watch the movie.")
}else{
  console.log("You can watch the movie.")
}

console.log(age == 16); //value equality -> check only value
console.log(age === 16);//strict equality -> check the type and value

console.log(age == "16"); //value equality -> check only value
console.log(age === "16");//strict equality -> check the type and value

console.log(true ==  1)
console.log(true === 1)

for(let i = 0; i < 10; i++){
  console.log(i);
}

for(let i = 10; i > 0; i--){
  console.log(i);
}

for(let i = 1; i < 10; i+=2){
  console.log(i);
}
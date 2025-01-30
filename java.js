// classes
// class fruits {
//     name = "apple";
// constructor(){
//     console.log("constructor",this.name);
// }
// getFruits(item){
//     return item
//     // return "orange";
//     // console.log("function")
// }
// }
// let f1 = new fruits
// f1 .getFruits();
// console.log(f1.getFruits());
// console.log(f1.getFruits("mango"));

// Inheritance
// what is inheritance?
// koch properties jo father se ya mother se child ma atay ho
// Inheritance is a mechanism in which one class can inherit the properties and methods of another class.
// to use parent properties in child class so we use Inheritance
// class category{
//     dryFruit(){
//         return "Almond is Dry Fruit"
//     }
//     pomeFruit(){
//         return "Apple is a pome Fruit"
//     }
// }
// class fruits extends category{
//     constructor(){
//         super()
//         console.log("constructor")
//     }
//     getFruit(){
//         return "get a Apple"
//     }
// }
// let f2 = new fruits()
// let c1 = new category()
// Extend Inheritance
// console.log(f2.pomeFruit());
// // console.log(f2.getFruit());
// console.log(f2.category());

// what is Super() keyword?
// super() keyword is used to call the constructor of the parent class.

// lexical scope for this
// lexical scope is a scope where variable is declared

// let data = {
//     list : "friends",
//     names : ["Peter", "Sam" , "Bruce"],
//     getFriends(){
//         // let that = this.list;
//         // // console.log(this.names);
//         // this.names.map(function(item){
//         //     // console.log("friend",item);
//         //     // console.log(this.list.name);
//         //     console.log(that,item);

//         // })
//         // right way to use this with lexical scope
//         this.names.map((item)=>{
//             console.log(this.list,item);
//         })
//     }
// }
// data.getFriends();
// what is this?
// this keyword is used to refer to the current object. It is used to access the properties
// what is the lexical scope of this?
// lexical scope of this is the scope where the this keyword is declared. In the above example,

// rest Operator
// what is rest operator?
// rest operator is used to pass a variable number of arguments to a function.
//Syntax
//The rest operator is denoted by three dots (...) followed by a variable name. It can be used in two ways:

//Function Parameters: To represent an indefinite number of arguments as an array.
//Array Destructuring: To extract the remaining elements of an array into a new array.

// function fruits(...a){
//     console.log("fruits",a,);
// }
// fruits("apple","banana","kiwi","strawberry");

// Promises
// why use promises?
// promises are used to handle asynchronous operations. They are used to handle the situation where the result of an operation is not known yet.
// what is undefined?
// undefined is a primitive value in JavaScript. It is used to represent an uninitialized variable.
// datatype
// let a = undefined;
// setTimeout(()=>{
//     a = "hello ECMA"
// },3000);
// alert(a);

// let newPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         a = "hello ECMA"
//         resolve ("done")
//     },3000);
// })
// newPromise.then(()=>{
//     alert(a);
// })

// new global function
// what is global function?
// global function is a function that is defined at the global scope. It can be accessed from anywhere in the code.

// console.log(isFinite(10));
// // true
// console.log(isFinite({}));
// // false
// console.log(isFinite(null));
// // true
// console.log(isFinite("10"));
// // false
// console.log(isFinite("a"));
// // false
// console.log(isFinite(a));
// // error
// console.log(isFinite("10fatima"));
// // true

// destructuring array
// what is destructuring Array?
// destructuring array is a feature in JavaScript that allows you to unpack values from arrays or objects into distinct variables.

// let fruits = ["apple","banana","orange"];
// // let [a,b,c="unknow fruit"] = fruits;
// // console.log(a,c,d);
// let [a,...x] = fruits;
// console.log(a,x);

// what is destructuring object?
// destructuring object is a feature in JavaScript that allows you to unpack values from objects into distinct variables .

// Ass-ECMA-04
// destructuring object
// let user = {name:"fatima",email:"abc@gmail.com",mobile:9999}
// // let {email,name=888}= user // default value has been given
// let {...name} = user // rest operators
// console.log(name);

// console. log(email,name);

// spread operator
//spread operator merge
// let things = ["fruits","furniture","table","kitchen"];
// function printAll(a,b,c){
// return a,b,c
// }
// console.log(...things);

// let fruits = ["apple","banana","orange"]
// let otherFruits = ["pineapple",...fruits,"strawberry","kiwi"]
// // let allFruits = [...fruits,...otherFruits]
// // console.log(allFruits);
// console.log(otherFruits);

// spread operator jb hm parameter pass karatay ha tb use hota hai
// rest operator jb use hoga jb hm parameter ko get krygy

// exponentiation operator
// exponentiation operator alternative math.pow(2,3)
// console.log(2*2);
// console.log(2**2);
// console.log(2**-2);
// console.log(2**-NaN); // Nan
// console.log(2**3**2); // 512 3**2 resolve first 2**3 resolve after
// // console.log(2***2); // error
// console.log(2*3**2); // 18
// console.log(2**3*2); // 16
// console.log(2*3*2); // 12

// Module
// module apko allow karyga ek file k koch code ko dosri file ma use karnay k lia

// export default function user(){
//     return "hello world"
// }

// generators
//we can pause and resume in generator
// syntax
function* steps() {
  let a = 10;
  let b = 20;
  console.log(10 + 20);
  yield "step 1 completed";
  console.log(10 - 20);
  yield "step 2 completed";
  console.log(10 * 20);
  yield "step 3 completed";
  return "all steps done";
}
// reload karnay k bad dobara pause or reload hoga "nahi"
let stp = steps()
function getSteps(){
console.log(stp.next());

}

// what is yield?
// yield is a keyword in JavaScript that is used to define generators. It is used to produce a series of values over time, rather than computing them at once and returning them in a list, which is how regular functions work.
// yield basicaly steps bnany k kam ata hai
// what is generators?
// Generators are a type of iterable, like arrays, objects using for...of, or sets . The main difference between generators and other iterables is that the latter cannot be paused and resumed.
// aise functions  jimko hm pause annd resume karsakty hain
// generators ko call karnay k lia pehlay iska object bnana parta hai or bd mai .next fuction use karna parta hai 
// or define karnay k lia star* lagan parta hai function k sath
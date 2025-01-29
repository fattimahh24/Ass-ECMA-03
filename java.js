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

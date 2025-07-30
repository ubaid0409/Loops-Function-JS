// Single function
function sayHello(name){
    console.log("Hello",name);
}sayHello("Ubaid");

// Arrow function
const sayHowAreYou = name => console.log("How are you",name); sayHowAreYou("Ubaid");

// High order function
function sayBye(name){
    console.log("Goodbye",name);
}
function calling(callback){
    callback("Ubaid");
}
calling(sayBye);

// Generator function
function *counter(){
    yield 1;
    yield 2;
    yield 3;
}
const con = counter();
console.log(con.next().value);
console.log(con.next().value);
console.log(con.next().value);
console.log(con.next().value);

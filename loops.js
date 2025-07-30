// For loop
for(let i=0; i<=5;){
    console.log("This is for loop",i);
    i++;
}

// while loop
let j=0;
while(j<=5){
    console.log("This is while loop",j);
    j++;
}

// do-while loop
let i=0;
do{
    console.log("This is do-while loop",i);
    i++;
}while(i<5);

// for-of loop
const arr =[1,2,3,4];
for (const value of arr){
    console.log("This is for-of loop",value);
}

// forEach loop
const fruit =["apple","banana","orange"];
fruit.forEach(function(fruit,index){
    console.log(fruit,"is at index",index);
})
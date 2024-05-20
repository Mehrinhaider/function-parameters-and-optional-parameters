"use strict";
//function  syntax 
//function then variable () {}
//basic function
/*function biodata (name:string) {
    console.log(`hello, ${name} welcome to my channel`);


}
biodata("mehrin");
biodata("haider");
biodata("shanzay");
biodata("kaleem");*/
//multiple parameter
/*function car(num1:number, num2:number) {
    console.log(num1 - num2)

}
car(9,6);*/
function biodata(name) {
    if (name) {
        console.log(`hello,${name} welcome to my programme`);
    }
    else {
        console.log(`sorry! you r not alligible`);
    }
}
biodata("mehrin ");
biodata();
//optional parameters
function CNIC(name, age) {
    if (name) {
        console.log(`hello, ${name}, ${age} you are allowed`);
    }
    else {
        console.log(`sorry! you are not allowed`);
    }
}
CNIC("mehrin", 18),
    CNIC();
//return 
function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(2, 5));
function salary(number) {
    return `hello, ${number} this is my slary`;
}
let totalSalary = salary(45000);
console.log(totalSalary);
function student(num1, num2) {
    return `hello, class ${5}, and ${6} are selected for annual function `;
}
let decision = student(5, 6);
console.log(decision);

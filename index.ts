//function  syntax 
//function then variable () {}

//basic function

function biodata1 (name:string) {
    console.log(`hello, ${name} welcome to my channel`);


}
biodata1("mehrin");
biodata1("haider");
biodata1("shanzay");
biodata1("kaleem");

//multiple parameter

function car(num1:number, num2:number) {
    console.log(num1 - num2)

}
car(9,6);

function biodata(name?:string) {
    if (name){
        console.log(`hello,${name} welcome to my programme`)
    }
    else {
        console.log(`sorry! you r not alligible`)

}
}
biodata("mehrin " );
biodata();

//optional parameters

function CNIC (name?:string, age?:number) {
    if (name){
        console.log(`hello, ${name}, ${age} you are allowed`)
    }else{
        console.log(`sorry! you are not allowed`)
    }

}
CNIC("mehrin" , 18),
CNIC();

//return 

function addition (num1:number, num2:number) {
    return  num1 + num2
}
 console.log(addition(2,5));

function salary (number:Number){
    return `hello, ${number} this is my slary`

}
let totalSalary:string = salary ( 45000)
console.log(totalSalary);

function student (num1:Number,num2:Number) {
    return `hello, class ${5}, and ${6} are selected for annual function `

}
let decision : string = student ( 5 ,6 );
console.log(decision);








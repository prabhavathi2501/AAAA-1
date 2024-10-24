//check the number is interger

// const val=10;
// const var1="god"
// console.log(!isNaN(val))//ture
// console.log(isNaN(val))//false
// console.log(!isNaN(var1))//false
// console.log(!isNaN(val))//ture


// let A=10;
// let B=10.5
// if(A===B){
//     console.log("its a ture")
// }
// else{
//     console.log("not interger")
// }



//how to implements class inheritance in javascripts?

//class can be extends by another class,and new class will inherits all of its parent class methods.
//object that initailized the chhild class  will then able to use methods from  both classes.

//1st methods

// class Car{
//     constructor(model,name){
//         this.model=model,
//         this.name=name

//     }
//     start(){
//         console.log(this.name)
//     }
// }
// class ElectricCar extends Car {
//     start(){
//         super.start();
//     }
// }
// result =new  ElectricCar("toyato","TSSD200");
// result.start();



// class Car{
//         constructor(model,name){
//             this.model=model,
//             this.name=name
    
//         }
//         start(){
//             console.log(this.name)
//         }
//         end(){
//             console.log("this is close ")
//         }
//     }
//     class ElectricCar extends Car {


//       dashboard(){
//         console.log("thhis is dahboard")
//       }
//         start(){
//             super.start();
//             super.end();
//             this.dashboard()
//         }
//     }
//     result =new  ElectricCar("toyato","TSSD200");
//     result.start();



// function ffff(){
//     for(i=0;i<10;i++){
//         if(i==8){
//             break
//         }
//         if(i==4){
//             continue
//         }
//         console.log(i)
//     }

// }
// ffff()



// function ddd(){
//  console.log(unescape("fgsjfgf"))
// }
// ddd()



//what is the length of the array
// var arr=["ball","bat","chart","tshart","dress"]
// delete arr[2];
// console.log(arr)  //[ 'ball', 'bat', <1 empty item>, 'tshart', 'dress' ]
// console.log(arr.length)//5

//how to return the boolean value
// const num=!1
// console.log(num)

//conditional statement how is used

// const person={
//     // name:"prabha"
//     // name:" "
// }
// const conditionalsatate=person.name || " "
// console.log(conditionalsatate)

//convert number to string


// const num=10;
// console.log(typeof num)//number 

//this code return as
// const num=10+"";
// console.log(typeof num)//string

//converting string to number

// let salary="4500";
// salary = +45
// console.log(salary);
// console.log(typeof salary)


//how to convert the 1st char is caps letters
// var arr=["sunday","tuesday","wednessday"];
// for(let  day of arr){
//     console.log(day.charAt(0).toUpperCase()+day.substring(1))
//     day=(day.charAt(0).toUpperCase()+day.substring(1))
//     console.log(day)
// }

//hhow to make sentance to given array?
// const sentance=["hello","praba","hoe","are","you"];
// console.log(sentance.join(" "))
//let sentance=["hello","praba","hoe","are","you"];
// let sec1=["1","2","3"] ;
//let sec2=["hello"]
// const result1=sentance.some((ele)=>sec1.includes(ele));//fasle
// const result=sentance.some((ele)=>sec2.includes(ele));//true
// console.log(result)



//how to check two string is annagram function


// function checksenctence(){
//     var sentance="Mary";
// var sentance2="Army";
//     let A=sentance.toLowerCase().split("").sort().join("")
//     // console.log(A)
//   let B=sentance2.toLowerCase().split("").sort().join("");
// //   console.log(B)
// return A===B
// }
// console.log(checksenctence())//true


//how can you extacts a few fields from the  given json object and form new array?

// const input={
//     "studuent":[
//         {
//             name:"prabha",
//             id:250,
//             email:"testmail@mail"
//         },
//         {
//             name:"deeksha",
//             id:250,
//              email:"testmail222@mail"
//         },
//         {
//             name:"charvik",
//             id:250,
//              email:"testmail3@mail"
//         }
//     ]
// }
// const result=input.studuent.map(function(item){
//     return item.id
// })
// console.log(result)

// const result1=input.studuent.map(function(item){
//     const stuobj={
//         name:item.name,
//         id:item.id,
//         email:item.email
//     }
//     return stuobj
// });
// console.log(result1)

//19 temperte letral?
// const var1="god";
// const var2="great";
// console.log(`${var1} ${var2}`)

//snipet
// var y=1;
// if(function f(){}){   //tis the function undeclred
//     y+=typeof f    //y=1 +undefined
// }
// console.log(y)//1undefined



//snipet
// function foo1(){
//     return {
//         bar:"hello"
//     }
// }
// function foo2(){
//     return                       //why becasue means next line declae to { }
//     {
//         bar:"hello"
//     }
// }
// function foo2(){
//     return   {                    //why becasue means same line declae to { } the output is
//                                      //{ bar: 'hello' }
//         bar:"hello"
//     }
// }
// console.log(foo1());//{ bar: 'hello' }

// console.log(foo2());//undefined


//snipet
// console.log(false=="0");//true
// console.log(false==="0");//false

//snipte;
// console.log(1<2<3)//true
// console.log(3>2>1)//false

//how will be clone the object

// const studentd={name:"prabha",age:25};
// const output=Object.assign({},studentd);
// console.log(output)
//console.log("GOD");
// const input="guvi";
// const split=input.split("").join(" , ");
// console.log(split)//g,u,v,i


// const arr="guvugeek";
// const res=[];
// const split=arr.split("");
// for(var i=0;i<split.length-1;i++){
// res.push(split[i]);
// }
// console.log(res)//['g', 'u', 'v','u', 'g', 'e', 'e']

// const input=[2.3, 4.5, 7.8];
// input.forEach((ele)=>{
//     console.log(ele);
// })

// const input="prabhavathi";
// const res=input.split("")
// res.forEach(element => {
//     console.log(element);
    
// });

// const input=[1,2,5];
// const res=[];
// input.forEach((ele)=>{
//    console.log(ele)

// })

// const input="1234";
// const a=input.split("")
// console.log(a)
// const even=[];
// const odd=[];
// for(var i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         even.push(a[i])
//     }
//     else{
//         odd.push(a[i])
//     }
// }
// console.log(even.join(" "));
// console.log(odd.join(" "))


// const input="18";
// const res=Math.pow(input,2);
// console.log(res);


// const a="5";
// for(var i=1;i<=a;i++){
//     console.log(i);
// }

// const a1=2;
// const b=3;
// for(i=1;i<=b;i++){
//     console.log(b)
// }

// const a=4;
// for(var i=1;i<=a;i++){
//     console.log(a)
// }


// const a="124";
// const res=a.split(" ");
// res.reduce((acc,curr)=>{
    
//     return acc+curr

// })
// console.log(acc)

// const a=6;
// for(i=1;i<=a;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// const a="137248";
// const res=[]
// const b=a.split("");

// for(var i=0;i<b.length-1;i++){
//     if(b[i]%2!=0){
//         res.push(b[i])
//     }
//     else if(b[i]%2===0){
//         console.log("-1")

//     }
    
// }
// console.log(res.join(" "));


function vowelsletter(str){
    let splitarr=str.split("");
    //console.log(splitarr);
    let nwestr=" ";
    for(const char of splitarr){
        const vow=["a","e","i","o","u"]
        if(vow.indexOf(char)===-1){
            nwestr =nwestr + char
        }
    }
    return nwestr

}
console.log(vowelsletter("codakate"))
console.log(vowelsletter("aeiou"))
console.log(vowelsletter("jfgkfgefj"))
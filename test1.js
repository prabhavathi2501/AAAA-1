// function revseword(str){
//     const res=str.split("").reverse().join("");
//     console.log(res)


// }
// console.log(revseword("Hello World"))

// let  A1= [1, 2, 3, 4, 1, 2, 3, 4 ]; 
//  let A2= [5, 6, 7, 8];
//  const res=A1.concat(A2)
//  function mergerdata(res){
//     return[...new Set(res)]

//  }
//  console.log(mergerdata(res))
// let arr = [2, 8, 1, -3, 6, 7, 5, 4,-12, 82, 31, -34, 56, -76, 57, 82]
// const result=arr.sort((a,b)=>a-b);
// console.log(result)

// const Input ={jack:"Three", jill: "Two",And:"one"};
// const res=Object.entries(Input);
// const output=res.map((item)=>{
//     return [item[0].toUpperCase(),item[1]]
// })
// const result=Object.fromEntries(output);
// console.log(result)

// function noofoccuen(str){
//    let result={}
//    for(let i in str){
//     let char=str[i]
//     if(!result[char]){
//         result[char]=0
//     }
//     result[char]++
//    }
//    return result


// }
// console.log(noofoccuen([3,4,3,5,3,6]));
// console.log(noofoccuen("jdfgsafugk"));

// let arr = [
//             'geeks', 2, 'geeks', 2, 'Javascript', 4,
//             'Javascript', 5, 'for', 6, 'Javascript', 1,
//             'for', 5, 7, 8, 'for'
//         ];
//         let result={}
//         arr.forEach((ele)=>{
//             console.log(ele)
//             if(result[ele]){
//                 result[ele]++
//             }
//             else{
//                 result[ele]=1
//             }

//         })
//         console.log(result)

// const arr=[1,2,[4,5],6,3,[7,8,[9,[1],5,4],7],5,2,[4,5,5,8,10,5588,5],3];
// const faltarr=(arr)=>{
//     let result=[];
//     for(let val of arr){
//         if(Array.isArray(val)){
//             result=[...result,...faltarr(val)]
//         }
//         else{
//             result.push(val)
//         }
//     }
//     return result
// }
// console.log(faltarr(arr))

// const arr = [{ name: "praba", age: 31, gender: "female" },
//         { name: "char", age: 6, gender: "male" },
//         { name: "siva", age: 27, gender: "male" },
//         { name: "deekaha", age: 9, gender: "female" },
//         { name: "xye", age: 25, gender: "trangebder" }
//         ];

//        let key="gender"
//     console.log(arr.reduce((acc,val)=>{
//         if(acc[val[key]]){
//             acc[val[key]].push(val)
//         }

//         else{
//             acc[val[key]]=[val]
//         }
//         return acc

//     },{})
// )

// const obj={a:1,b:2,c:3};
// const key=Object.keys(obj);
// console.log(key)
//  const val=Object.values(obj);
// //console.log(val)
// const ob=Object.entries(obj);
// console.log(ob)
// let res={};
// for(i=0;i<key.length;i++){
//     res[val[i]]=key[i]
// }
// console.log(res)

// const input={ a: 1, b: { c: 2 }, d: { e: { f: 3 } },g:{h:7} };
// function objectele(input){
//     let result=[];
//     for(let val in input){
//         if(typeof input[val]==="object" &&! Array.isArray(input[val])){
//           let subflatingobj=objectele(input[val])
//           for(let subobj in subflatingobj){
//             result[val+" "+subobj]=subflatingobj[subobj]
//             }
//         }
//         else{
//             result[val]=input[val]
//         }
       


        
//     }
//     return result
    

// }
// console.log(objectele(input))

// function missnumb(num){
//     let sum=0;
//     for(i=0;i<num.length;i++){
//         sum+=num[i]
//     }
//     let n=num.length+1
//     let req=n*(n+1)/2
//     return req-sum

// }
// console.log(missnumb([1,2,4,5]))

// function commonele(arr1,arr2){
//     const res=arr1.filter((ele)=>arr2.includes(ele))
//     return res

// }
// console.log(commonele([1,2,3,8,9,5],[1,2,5,5]))

// function chager(str){
//     let letters=str.split("");
//     let newarray=[]
//     for(const letter of letters){
//         if(letter===letter.toUpperCase()){
//             newarray.push(letter.toLowerCase())
//         }
//         else{
//             newarray.push(letter.toUpperCase())
//         }
//     }
//     return newarray.join("")

// }
// console.log(chager("jfgSSSFF"))


// function vowstr(str){
//     let splitarr=str.split("")
//     let newstr=" ";
//     for(const char of splitarr){
//         let vow=["a","e","i","o","u"];
//         if(vow.indexOf(char)===-1){
//             newstr +=char
//         }
//     }
//     return newstr

// }
// console.log(vowstr("ijdfgeitdsyuf"))

// function removstr(str){
//     let res=" ";
//     for(const char of str){
//         if(res.includes(char)==false){
//             res=res+char
//         }
//     }
//     return res

// }
// console.log(removstr("dsgfasdffdfffffdasa"))

// let input=[1,1,2,2,5,7,7,5,8,89];
// function duplicate(input){
//     let sortarr=input.sort();
//     console.log(sortarr)
//     for(i=0;i<sortarr.length;i++){
//         if(sortarr[i]==sortarr[i+1])
//             console.log(sortarr[i])
//     }
//     return sortarr


// }
// (duplicate(input))


// function rever(str){
//     let splitarr=str.split(" ");
//     let res=[];
//     splitarr.map((word)=>{
//         const noofletter=word.split("");
        
//         if(noofletter.length>5){
//             const result=noofletter.reverse().join("")
//             res.push(result)
//         }
//         else{
//             res.push(noofletter.join(""))
//         }

//     })
//     return res.join(" ");

// }
// console.log(rever("tis is the fiffgdgsgs"));
// console.log(rever("developer"))
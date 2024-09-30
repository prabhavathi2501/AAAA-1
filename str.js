// const input="prabha";
// const object={}
// for(var i=0;i<input.length;i++){
//     const char=input[i]
//     if(!object[char]){
//         object[char]=0
//     }
    
//         object[char]++
    

// }
// console.log(object)


// function noofoccurence(str){
//    const result={}
//    for(i=0;i<str.length;i++){
//     const char=str[i];
//     if(!result[char]){
//         result[char]=0
//     }
   
//         result[char]++
    
//    }
//    return result
// }
// console.log(noofoccurence("gfsdfgsadjfgfg"));
// console.log(noofoccurence(["jack","And","jack", "jill","jack","jill","jill","jack"]));
// console.log(noofoccurence([1,1,2,5,5,5,8,8,7]));
// console.log(noofoccurence("tthhhhiiss is ttthhe wworlld"))
// // console.log(result)

// let arr = [
//         'geeks', 2, 'geeks', 2, 'Javascript', 4,
//         'Javascript', 5, 'for', 6, 'Javascript', 1,
//         'for', 5, 7, 8, 'for'
//     ];
//     const result={};
//     arr.forEach((ele)=>{
//         //console.log(ele)
//         if(result[ele]){
//             result[ele]++
//         }
//         else{
//             result[ele]=1
//         }
//     })
//     console.log(result)

// function noofoccurence(str){
//     const result={};
//     for(var i=0;i<str.length;i++){
//         const char=str[i];
//         if(!result[char]){
//             result[char]=0
//         }
//         result[char]++
//     }
//     return result

// }
// console.log(noofoccurence("sfggdggg"));
// const arr=[1,2,[4,5],6,3,[7,8,[9,[1],5,4],7],5,2,[4,5,5,8,10,5588,5],3];


// const flat=(arr)=>{
//     let result=[];
//     for(let val of arr){
//         if(Array.isArray(val)){
//             result=[...result,...flat(val)]
//             //console.log(result)
//         }
//         else{
//             result.push(val)
//         }
//     }
//     return result

// }
// console.log(flat(arr));

// const arr = [{ name: "praba", age: 31, gender: "female" },
//     { name: "char", age: 6, gender: "male" },
//     { name: "siva", age: 27, gender: "male" },
//     { name: "deekaha", age: 9, gender: "female" },
//     { name: "xye", age: 25, gender: "trangebder" }
//     ];
    
//     let key="gender";
//     console.log(
//         arr.reduce((acc,val)=>{
//             if(acc[val[key]]){
//                 acc[val[key]].push(val)
//             }
//             else{
//                 acc[val[key]]=[val]
//             }
//             return acc

//         },{})
//     )
//  const obj={a:1,b:2,c:3};
// const key=Object.keys(obj);
// const val=Object.values(obj)
// console.log(key);
// console.log(val)
// const en=Object.entries(obj);
// console.log(en)
  
// let result={};
// for(i=0;i<key.length;i++){
//     result[key[i]]=val[i];

// }
// console.log(result)
// const arr=[1,4,[4,7,[8,8,98]]]
// const flatarr=(arr)=>{
//     let result=[];
//     for(let val of arr){
//         if(Array.isArray(val)){
//             result=[...result,...flatarr(val)]
//         }
//         else{
//             result.push(val)
//         }
//     }
//     return result

// }
// console.log(flatarr(arr))
// const input={ a: 1, b: { c: 2 }, d: { e: { f: 3 } },g:{h:7} };
// const objlist=(input)=>{
//    let result=[];
//     for(let val in input){
//         // if(!input.hasOwnProperty(val)){jr
//         //     continue
//         // }
//         if(typeof input[val]==="object"&&!Array.isArray(input[val])){
//             const subflatingobj=objlist(input[val]);
//             for(let subobj in subflatingobj){
//                 result[val+ " "+subobj]=subflatingobj[subobj]
//             }
            
//         }
       
//         else{
//             result[val]=input[val]
            
//         }
//     }
//     return result

//     }
//     console.log(objlist(input))
 
// function miss(arr){
//     let sum=0;
    
//     for(i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     let n=arr.length+1
//     console.log(n)
//     let req=n*(n+1)/2
// return req-sum


// }
// let arr=[1,2,3,5,6]
// console.log(miss(arr))
// let arr=[14,25,45,1,5,17];
// const res=arr.filter((ele)=>ele%2==0
  
// )
// const res1=arr.filter((ele)=>ele*2)
// console.log(res);
// console.log(res1)

// const arr=[1,78,98,789];
// const res=arr.reduce((acc,curr)=>{
//     return acc+curr

// },0);
// console.log(res);
// const input=[1,78,98,104];
// const res=input.reduce((max,ele)=>{
//     if(max<ele){
//         max=ele
//     }
//     return max

// },0)
// console.log(res)

// const users = [
//     {firstName: "Kamal",lastName: "Hasan",age:60},
//     {firstName: "Donald",lastName: "Trump",age:60},
//     {firstName: "Rajini",lastName: "Kanth",age:50},
//     {firstName: "Ajith",lastName: "Kumar",age:40},
//     ];

//     const res=users.map((x)=>x.firstName+" "+x.lastName);
//     console.log(res)
//     const fil=users.filter((x)=>x.age>=50).map((x)=>x.firstName);
//     console.log(fil);
//     const res1=users.reduce((acc,curr)=>{
//         return acc+curr.age

//     },0)
//     console.log(res1)

//                                            //7810995565

// const res=[147,789,785,456,963];
// const result=res.reduce((acc,curr)=>{
//     if(acc>curr){
//         curr=acc
//     }
//     return curr

// },0)
// console.log(result)

// const myMap = new Map();
// myMap.set(0, "zero");
// myMap.set(1, "one");
// for(const [keys, values]of myMap){
//     console.log(`${keys}:${values}`)

// }
// for(const key of  myMap.keys()){
//     console.log(key)
// }
// for(const values of myMap.values()){
//     console.log(values)
//}


// function fact(n){

//     if(n===0||n===1){
//         return 1
       
//     }
//     else{
//         return n*fact(n-1)
//     }

// }
// console.log(fact(3))
const input=[1,1,"n","m","n",4,8,9,40];
// function dup(input){
//     return[...new Set(input)]

// }
// console.log(dup(input))


// let dataObject={"cat":"Meow","dog": "Bark","cow": "Maa"}
// const output=Object.entries(dataObject);
// console.log(output);
// const populate = output.map((entery)=>entery[0].toUpperCase()+":"+entery[1]);
// console.log(populate);

// const result=Object.fromEntries(populate)
// console.log(result);
// let dataObject={"cat":"Meow","dog": "Bark","cow": "Maa"}
// const populated=Object.ent(dataObject);
// console.log(populated);
// const result=populated.map((enter)=>enter[0].toUpperCase()+" : "+enter[1]);
// console.log(result);
// const res=Object.fromEntries(result);
// console.log(res);

// const dataObject={"cat":"Meow","dog": "Bark","cow": "Maa"}
// function uppercase(dataObject){
//     const res=Object.entries(dataObject);
//     //console.log(res);
//     const result=res.map((item)=>{
//         return[item[0].toUpperCase(),item[1]]
//     })
//     const rr=Object.fromEntries(result);
//     console.log(rr)

// }
// uppercase(dataObject)
// const result= uppercase =>
//     Object.keys(uppercase).reduce((acc,k)=>{
//         acc[k.toUpperCase()]=uppercase[k]
//         return acc

//     },{})
//     console.log(result({"fdhg":"gysdy"}))


// function commonele(arr1,arr2){
//    const res=arr1.filter((ele)=>arr2.includes(ele))
// return res
// }
// console.log(commonele([1,2,3,8,9,5],[1,2,5,5]));
// console.log(commonele([-1, 3, 4, 6, 7, 9], [-1, 3]));
// console.log(commonele([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));
// console.log(commonele([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));
// console.log(commonele([1, 2, 3, 4, 5], [10, 12, 13, 15]))

// function changeofletter(str){
//     const letters=str.split("");
//     const newarray=[];
//     for(const letter of letters){
//         if(letter===letter.toUpperCase()){
//             newarray.push(letter.toLowerCase());
//         }
//         else{
//             newarray.push(letter.toUpperCase())
//         }
//     }
//     return newarray.join("")

// }

// let out=changeofletter("RREWWjfgjfdsj");
// console.log(out)

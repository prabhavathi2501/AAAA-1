// function reverseword(str){
//     let word=str.split(" ").reverse();
//     const res=word.map((item)=>item.split("").reverse().join(""));
//     return res.join(" ")

// }
// console.log(reverseword("Hello World"))

// let  A1= [1, 2, 3, 4, 1, 2, 3, 4 ]  
// let A2= [5, 6, 7, 8] 
// const merage=A1.concat(A2);
// console.log(merage);
// function common(merage){
//     return[...new Set(merage)]


// }
// console.log(common(merage))

// 

// function sortarr(arr){
//     const result=arr.sort((a,b)=>a-b);
//     return result



// }
    

// let arr = [2, 8, 1, -3, 6, 7, 5, 4,-12, 82, 31, -34, 56, -76, 57, 82]
//console.log(sortarr(arr));

const Input ={jack:"Three", jill: "Two",And:"one"};
// const enty=Object.entries(Input);
// console.log(enty);
// const out=enty.map((item)=>{
//     return[item[0].toUpperCase(),item[1]]
// })
// //console.log(out);
// const populate=Object.fromEntries(out);
// console.log(populate)

// const poppulated=(Input)=>{

//     const enty=Object.entries(Input);
// console.log(enty);
// const out=enty.map((item)=>{
//     return[item[0].toUpperCase(),item[1]]
// })
// //console.log(out);
// const populate=Object.fromEntries(out);
// console.log(populate)


// }
// console.log(poppulated(Input))

 
// function noofoccuen(str){
//     //console.log(str)
//     let result={};
//     for(let i in str){
//         let char=str[i]
//         if(!result[char]){
//             result[char]=0
//         }
        

//         result[char]++
//     }
//     return result
    
        
//     }
// console.log(noofoccuen([3,4,3,5,3,6]))
// console.log(noofoccuen("gsjffgyu"));

//  const str="apple";
//  let result={};
//  for(i=0;i<str.length;i++){
//     const char=str[i];
//     if(!result[char])
//     {
//         result[char]=0
//     }
//      result[char]++
     
   
//  }
// console.log(result)








// function nodup(numb){
//     let sortarr=numb.sort((a,b)=>a-b);
//     //console.log(sortarr);
//     for(i=0;i<sortarr.length;i++){
//         if(sortarr[i]==sortarr[i+1])
//         {
//            console.log(sortarr[i])
//         }
//         }
//         return 
//     }
   
    


// console.log(nodup([6,6,2,8,2,8,2,4,2,4]))



// function dup(str){
//     let result={};
//     for(i=0;i<str.length;i++){
//         const char=str[i]
//         if(!result[char]){
//             result[char]=0
//         }
//         result[char]++
//     }
// return result
// }
// console.log(dup(["jack","And","jack", "jill","jack","jill"]))

// function countele(arr){
//     // Array.sort(arr);
//     for(let i=0;i<arr.length;i++){
//       let count=1
//       for(j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j])
//           count++
        
//         else
//           break;
        
//         if(count>1){
         
//           console.log(arr[i]+ " : "+count)
//            i+=(count-1)
//         }
//       }
//     }
//   }
//   //const arr1=[2,2,1,1,5,5,6,6,6];
//   const arr2=[4,6,2,8,9,2,6,7,6];
//   const arr=arr2.sort();//
//   //console.log(arr)
//   countele(arr);
  
  

// const res=[1,2,2,5,5,5,78,98];
// const n= 5
// const out=res.indexOf(n);
// console.log(out)
// function dup(arr){
//     let res=arr.sort()
//     for(var i=0;i<res.length;i++){
//         if(res[i]==res[i+1]){
//             console.log(res[i])
//         }
//     }
//     return res

// }
// let arr=["h","h","o","p","p",2,2,5,7]
// dup(arr)

// let data = [{"name":"Karthik","salary":"23000"},{"name":"rohan","salary":"81734"},{"name":"varshini","salary":"12343"}]
// const res=data.sort(function(a,b){return (a.salary-b.salary)});
// const res1=data.sort(function(b,a){return (b.salary-a.salary)})
// console.log(res)
// console.log(res1)
//const result=data.map((item)=>item.name)
// console.log(result)
// const r1=data.forEach((ele)=>{
//     console.log(ele)
// })
// const r2=data.filter((val)=>val=23000).map((val)=>val)
// console.log(r2)

// let str="prabhavati";
// let a=str.split("")
// let even=[];
// let odd=[];
// for(var i=0;i<a.length;i++){
//     if(i%2==0){
//         even.push(a[i])
//     }
//     else{
//         odd.push(a[i])
//     }
// }
// console.log(even.join(""));
// console.log(odd.join(""))

// const arr=[11,47,84,12,1,2];
// const res=Math.max.apply(null,arr);
// console.log(res);

// const array1=[1,2,2,4,6,8,8,9,7,9,5,"p","p","p","set","set","o","o"];

// function dups(array1){
//     return[...new Set(array1)]

// }
// console.log(dups(array1))


// function remov(str){
//    let res=" ";
//    for(let char of str){
//     if(res.includes(char)==false){
//         res=res+char
//     }
//    }
//    return res
       
//     }
//     console.log(remov("helllouuuttt"));
//     console.log(remov("heelloouuuu"));//helou
//     console.log(remov("hello"));//helo
//     console.log(remov("aaaaa"));//a
//     console.log(remov("WWE!!!"));//WE!
//     console.log(remov("call 911"));//"cal 91


//function revstr(str){
    // 	var word=str.split(" ");
    // 	var res=[];
    // 	//console.log(word)
    // 	word.map((word)=>{
    // 		const noofletter=word.split("")
    // 		// console.log(noofletter)
    // 		if(noofletter.length > 5)
    // 			{
    // 				const result=noofletter.reverse().join("")
    //                 //console.log(result)
    // 			   res.push(result)
    // 			}
    // 			else{
    // 				res.push(noofletter.join(""))
    // 			}
                
    // 	});
        
    // 	return res.join(" ")
    // }
    // console.log(revstr("Revesttr"));
    // console.log(revstr("this is a fullstack developer"));
    // console.log(revstr("the is dog"));
    
    
//     function reversestr(str){

//         const res=str.split(" ");
//         let box=[];
//         res.map((res)=>{
//             const noofletter=res.split("");
//             if(noofletter.length>5){
//                 box.push(noofletter.reverse().join(""))
//             }
//             else{
//                 box.push(noofletter.join(""))
//             }
//         })
// return box.join(" ")



       
//     }
//     console.log(reversestr("helllloooo mainfff is i"));
//     console.log(reversestr("te god ya"));
//     console.log(reversestr("this is a fullstack developer"));



// function vowelsletter(str){
//    let splitarr=str.split("");
//    let res=" ";
//    for(const char of splitarr){
//     const vow=["a","e","i","o","u"]
//     if(vow.indexOf(char)===-1){
//         res=res+char
//     }
//    }
//    return res
// }
// console.log(vowelsletter("codakate"))
// console.log(vowelsletter("aeiou"))
// console.log(vowelsletter("jfgkfgefj"))

// function noofoccurence(str){
//      const result={}
//      for(i=0;i<str.length;i++){
//         const char =str[i];
//         if(!result[char]){
//             result[char]=0
//         }
//         result[char]++
//      }
//         return result
//      };
    
    
//     console.log(noofoccurence("gfsdfgsadjfgfg"));
//     console.log(noofoccurence(["jack","And","jack", "jill","jack","jill","jill","jack"]));
//     console.log(noofoccurence([1,1,2,5,5,5,8,8,7]));
//     console.log(noofoccurence("tthhhhiiss is ttthhe wworlld"))
    // console.log(result)
    

// let arr = [
//             'geeks', 2, 'geeks', 2, 'Javascript', 4,
//             'Javascript', 5, 'for', 6, 'Javascript', 1,
//             'for', 5, 7, 8, 'for'
//         ];
//         const result={};
//         arr.forEach((ele)=>{
//             if(!result[ele]){
//                 result[ele]=1
//             }
//             result[ele]++
//         })
//         console.log(result)



// const arr=[1,2,[4,5],6,3,[7,8,[9,[1],5,4],7],5,2,[4,5,5,8,10,5588,5],3];
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


// let input={ a: 1, b: { c: 2 }, d: { e: { f: 3 } },g:{h:7} };
// const objarr=(input)=>{
//     let result=[];
//     for(let val in input){
//         if(typeof input[val]=="object" && !Array.isArray(input[val])){
//             const subflatingobj=objarr(input[val])
//             for(let subobj in subflatingobj){
//                 result[val+" "+subflatingobj]=subflatingobj[subobj]
//             }
//         }
//         else{
//             result[val]=input[val]
//         }
//     }
//     return result

// }
// console.log(objarr(input))


// function missnumb(arr){
//     let sum=0;
//     for(i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     let n=arr.length+1
//     let equ=n*(n+1)/2
//     return equ-sum





// }





// let arr=[1,2,3,5,6]
// console.log(missnumb(arr))


// const arr=[1,78,98,789];
// const res=arr.reduce((acc,curr)=>{
//     return acc+curr
// },0)
// console.log(res)
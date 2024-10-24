// const sec1="i enjoy code"
// const sec2="enjoy"
// const res=sec1.split(" ")
// //console.log(res)
// if(res.includes(sec2)){
//     console.log("yes")
// }

// let data = [{"name":"Karthik","salary":"23000"},{"name":"rohan","salary":"81734"},{"name":"varshini","salary":"12343"}]
// // console.log(data)
// data.sort(function(a, b){
//     return a.salary-b.salary

// })

// console.log(data);
//  let out= data.map(item=>item.name);

// out.forEach(display);
// function display(element){
//     console.log(element)
// }
// console.log(

// let data = [{"name":"Karthik","salary":"23000"},{"name":"rohan","salary":"81734"},{"name":"varshini","salary":"12343"}]
// data.sort(function(a,b){return a.salary-b.salary});
// console.log(data);
// const output=data.map((item)=>item.name);
// const out=data.map((item)=>item.salary);
// out.forEach((ele)=>{
//     console.log(ele)
// })
// output.forEach((Element)=>{
//     console.log(Element)
// })

// 

// const input="prabhha";
// const a=input.split("")
// const evenarr=[];
// const oddarr=[];
// for(var i=0;i<a.length-1;i++){
//     if(i%2==0){
//         evenarr.push(a[i])
//     }
//     else{
//         oddarr.push(a[i])
//     }
// }
// console.log(evenarr.join(" ")+ " "+(oddarr.join(" ")));


// const arr=[11,47,84,12,1,2];
// const findarr=Math.min.apply(null,arr);
// const row=Math.max.apply(null,arr)
// console.log(findarr);
// console.log(row)



// const array1=[1,2,2,4,6,8,8,9,7,9,5,"p","p","p","set","set","o","o"];

// function dup(list){
//     return[...new Set(list)]

// }
// console.log(dup(array1))


// const number=[2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];
// function dup(list){
//     return [...new Set(list)]

// }
// console.log(dup(number))

// const num=[2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];
// function unq(num){
//     return[...new Set(num)]

// }
// console.log(unq(num))

// const str="gfsgajdsgjasfffff";
// console.log([...new Set(str)])



// function duponce(array){
//     let res=[];
//     for( i=0;i<array.length;i++){
//         if(array[i]==array[i+1]){
//            console.log(array[i])
//         }
//     }
// 	return array

// }
// let input=[2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5,2,2];
// const sortarr=input.sort((a,b)=>a-b);

// duponce(sortarr)


// function array(array){
//     let out=array.sort((a,b)=>a-b);
//     //console.log(out)
//     for( i=0;i<out.length;i++){
//         if(out[i]==out[i+1]){
//             console.log(out[i])
//         }
//     }
//     return out

// }
// let input=[2, 13, 4, 4, 2, 1,13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5,2,2];
// array(input)

// function remov(str){
//    var res=" ";
//    for(const char of str){
//     if(res.includes(char)==false)
//     {
//         res=res+char
//     }
//    }
//    return res
// }
// console.log(remov("helllouuu ttt"));
// console.log(remov("heelloouuuu"));//helou
// console.log(remov("hello"));//helo
// console.log(remov("aaaaa"));//a
// console.log(remov("WWE!!!"));//WE!
// console.log(remov("call 911"));//"cal 91


// function duplicate(arr){
//     let res=arr.sort();
//     for(var i=0;i<res.length;i++){
//         if(res[i]==res[i+1]){
//             console.log(res[i])
//         }
//     }
//     return res

// }
// let input=[1,1,2,2,5,7,7,5,8,89];
// duplicate(input)


//chhunk array

// 

// const arr2 = [1,2,3,4,4,5,5,3,2,1,8,9,9,12]
// function dup(arr2){
//     return arr2.filter((ele,index)=>
//     arr2.indexOf(ele)===index
//     )
// }
// console.log(dup(arr2));

// function revstr(str){
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


// function reversestr(str){
//     const res=str.split(" ");
//     const box=[];
//     res.map((res)=>{
//         const noofletter=res.split("");
//         if(noofletter.length>5){
//             const result=noofletter.reverse().join("")
//             box.push(result)
//         }
//         else{
//             box.push(noofletter.join(""))
//         }
//     })
//     return box.join(" ")
// }
// console.log(reversestr("helllloooo mainfff is i"));
// console.log(reversestr("te god ya"));
// console.log(reversestr("this is a fullstack developer"))


// function dupstr(str){
//     var res=" ";
//     for(const char of str)
// {
//     if(res.includes(char)==false)
//     {
//         res=res+char
//     }
// }
// return res
// }
// console.log(dupstr("pprrrabhha"))
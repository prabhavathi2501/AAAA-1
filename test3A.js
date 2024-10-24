// let dataObject={"cat":"Meow","dog": "Bark","cow": "Maa"}
// const res=Object.entries(dataObject);
// console.log(res)
// const result=res.map((item)=>item[0].toLocaleUpperCase()+ ": "+item[1]);
// console.log(result);
// const rrrr=Object.fromEntries(result);
// console.log(rrrr)



// function commonele(arr1,arr2){
//       const res=arr1.filter((ele)=>arr2.includes(ele))
//       return res
//     }
//     console.log(commonele([1,2,3,8,9,5],[1,2,5,5]));
//     console.log(commonele([-1, 3, 4, 6, 7, 9], [-1, 3]));
//     console.log(commonele([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));
//     console.log(commonele([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));
//     console.log(commonele([1, 2, 3, 4, 5], [10, 12, 13, 15]))


// function changeofletter(str){
//     let res=str.split("")
//     let newarr=[];
//     for(let letter of res){
//         if(letter===letter.toUpperCase()){
//             newarr.push(letter.toLowerCase())
//         }
//         else{
//             newarr.push(letter.toUpperCase())
//         }

//     }
//     return newarr.join("")

// }
// console.log(changeofletter("gfrjeBVSR"))

const arr = [{ name: "praba", age: 31, gender: "female" },
        { name: "char", age: 6, gender: "male" },
        { name: "siva", age: 27, gender: "male" },
        { name: "deekaha", age: 9, gender: "female" },
        { name: "xye", age: 25, gender: "trangebder" }
        ];

        let key="gender";
        console.log(
            arr.reduce((acc,val)=>{
                if(acc[val[key]]){
                    acc[val[key]].push(val)
                }
                else{
                    acc[val[key]]=[val]
                }

return acc


            },{})
        )
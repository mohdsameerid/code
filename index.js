
console.log("Welcome to Programiz!");

//////////////////// Star Printing ////////////////////////////////
// let str = "";
// for(let r = 1; r <= 5; r++){
//     for(let i = 1 ; i <= r; i++){
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str)


/////////////////////Reverse A number//////////////////////////////
// let array = [123];
// let num = array[0];
// console.log(num);
// let num2;

//   function reverseDigits(num) {
//    let rev_num = 0;
//     while(num > 0)
//     {
//      rev_num = rev_num * 10 + num % 10;
//      num = Math.floor(num / 10);
//      }
//         return rev_num;
//     }
//     console.log(reverseDigits(num));



///////////////////Prime Number////////////////////////////

// function demo2(data) {
//   for (let i = 2; i <= data - 1; i++) {
//     if (data % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// const res = demo2(3);
// console.log(res)



//////////Palindrome String//////////////////////////////////
// function demo(data){
//     let str = data.toUpperCase();
//     let left = 0;
//     let right = str.length-1;
//     while(left < right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// const res = demo("sbsh");
// console.log(res);


//////////////////////// Sub Array  ////////////////////////
// let arr = ["a","b","c"];
// //  a, ab , abc ,    b, bc,    c, 
// let str = ""

// for(let i = 0; i <= arr.length-1; i++){
//     for(let j = i; j <= arr.length-1; j++){

//         for(let k = i; k <= j; k++){
//             // console.log(arr[k] + "\t")
//             str += arr[k];
//         }
//         // console.log("hello\n")
//         str += "\n";
//         // console.log(arr[sp] + " " +arr[ep])
//     }
// }
// console.log(str)




const abc = [771, 257, 6];
const [,,y,,] = abc;

console.log(y)




let str = "{[(())]}";

function demo(str) {
  let count = 0;

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      count--;
    }
    else {
      count++;
    }
  }

  // for(let i = 0; i <= str.length-1; i++){
  // if(str[i] === ")"  || str[i] === "}" || str[i] === "]"){
  //        break;
  //     }
  //     else{
  //         count--;
  //     }
  // }

  if (count > 0) {
    console.log("brakets is not proper");
  } else {
    console.log("brakets is proper");
  }


}
demo(str);







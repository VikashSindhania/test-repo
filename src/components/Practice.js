// import React, { useEffect, useState } from "react";

// const Practice = () => {
//     const [names, setNames] = useState("Vikash");
//     const [color, setColor] = useState('red')

//     const count = () => {
//         setNames([apple]);

//     };

//     useEffect(() => {
//         setColor('a')
//     }, [color])

//     const apple = "Vikash Sindhania Sumitra Son";

//     const changeColor = () => {
//         setColor('pink')
//     }

//     return (
//         <div>
//             <h1>Hello Lets see my name :{names}</h1>
//             <h2>changeColor is here = {color}</h2>
//             <button onClick={count}> click here to see my full name</button>
//             <button className="" onClick={changeColor} color='red'> CHANGE COLOR</button>
//         </div >
//     );
// };

// export default Practice;

// function ReverseString(str) {
//     return str.split('').reverse().join('')
// }

// // Function call
// const str = ReverseString("Geeks for Geeks")
// console.log(str)

// function getMinMax(arr, n) {
//     const minmax = new Array();
//     var i;
//     var min;
//     var max;

//     /*If there is only one element then return it as min and max both*/
//     if (n === 1) {
//         minmax.max = arr[0];
//         minmax.min = arr[0];
//         return minmax;
//     }

//     /* If there are more than one elements, then initialize min
//   and max*/
//     if (arr[0] > arr[1]) {
//         minmax.max = arr[0];
//         minmax.min = arr[1];
//     } else {
//         minmax.max = arr[1];
//         minmax.min = arr[0];
//     }
//     for (i = 0; i < n; i++) {
//         if (arr[i] > minmax.max) {
//             minmax.max = arr[i];
//         } else if (arr[i] < minmax.min) {
//             minmax.min = arr[i];
//         }
//     }

//     return minmax;
// }

// var arr = [1000, 11, 445, 1, 330, 3000, -5];
// var arr_size = 7;
// const result = getMinMax(arr, arr_size);
// console.log(result)
// console.log(`\nMaximum element is ", {minmax.max}`);


// function getResult(arr, n, sum) {

//     const find = new Array()
//     var i;
//     var max;
//     var min;





//     // if i have only one element in an array..
//     if (n === 1) {
//         find.max = arr[0];
//         find.min = arr[0];

//         return find;
//     }

//     // if i have more than one element in an array..
//     if (arr[0] > arr[1]) {
//         find.max = arr[0];
//         find.min = arr[1];
//     }
//     else {
//         find.max = arr[1]
//         find.min = arr[0]
//     }
//     for (i = 2; i <= n; i++) {
//         if (arr[i] > find.max) {
//             find.max = arr[i];
//         }
//         else if (arr[i] < find.min) {
//             find.min = arr[i];
//         }
//     }
//     return find;

//     const sum = find.max + find.min;
// }


// var arr = [50, 1000, -35, -84, 663.1, 55, 86, 98, -130, -582, 58254]
// var n = 11
// const result = getResult(arr, n, sum)


// console.log(result)

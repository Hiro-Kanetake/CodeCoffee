// First Solution
// const reverseClumps = (arr, n) => {
//   const temp = [];                              // 1
//   const result = [];                            // 1
//   for (let i = 0; i < arr.length; i += n) {     // N
//     const arrToPush = arr.slice(i, i + n);      // N
//     temp.push(arrToPush);                       // N
//   }
//   for (const el of temp) {                      // N2
//     for (let i = el.length - 1; i >= 0; i--) {  // N2
//       result.push(el[i]);                       // N
//     }
//   }
//   return result;                                // 1
// };

// Second Solution
const reverseClumps = (arr, n) => {
    const result = [];                              // 1
    let indexCounter = n - 1;                       // 1
    for (let i = 0; i < arr.length; i++) {          // N
        if (indexCounter === -1) {                  // N/2 ?
            indexCounter = i + n - 1;               // N/2 ?
        }
        result.push(arr[indexCounter]);             // N
        indexCounter--;                             // N
    }
    return result;                                  // 1
};

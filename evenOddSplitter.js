const evenOddSplitter = (arr) => {
  // YOUR SOLUTION GOES HERE
  // Create result array
  const odd = [];
  const even = [];
  const result = [odd, even];
  for (let i = 0; i < arr.length; i++) {
    // add the elements in the odd indexes to result array as an array
    if (i % 2 === 0) {
      odd.push(arr[i]);
    // add the elements in the even indexes to result array as an array
    } else if (i % 2 !== 0) {
      even.push(arr[i]);
    }
  }
  // Return result array with 2 array elements
  return result;
};

// Refactored version;
// const evenOddSplitter = (arr) => {
//   // Create result array
//   const result = [];
//   // add the elements in the even indexes to result array as an array
//   result.push(arr.filter((el, i) =>  (i % 2 === 0)));
//   result.push(arr.filter((el, i) =>  (i % 2 !== 0)));
//   // Return result array with 2 array elements
//   return result;
// };
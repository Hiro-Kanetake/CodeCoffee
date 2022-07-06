const evenOddSplitter = (arr) => {
  // YOUR SOLUTION GOES HERE
  // Create result array
  const odd = [];
  const even = [];
  const result = [odd, even];
  // add the elements in the even indexes to result array as an array
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      odd.push(arr[i]);
    } else if (i % 2 !== 0) {
      even.push(arr[i]);
    }
    // add the elements in the odd indexes to result array as an array
  }
  // Return result array with 2 array elements
  return result;
};

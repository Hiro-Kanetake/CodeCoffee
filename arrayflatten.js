const arrayFlatten = (arr) => {
  // YOUR SOLUTION GOES HERE
  // Create a result array
  const result = [];
  // Create a function that checks if the element type is an array
  function isNotArray(item) {
    // If not array, push into result array
    if (!Array.isArray(item)) {
      result.push(item);
    // If array, repeat the checking function
    } else {
      for (const element of item) {
        isNotArray(element);
      }
    }
  }
  // Invoke the function to check the element
  isNotArray(arr);

  // Return a result array which has already been flattened
  return result;
};

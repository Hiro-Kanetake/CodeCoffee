const swapAdjacentPairs = (arr) => {
    const result = [];                              // 1
    for (let i = 0; i < arr.length; i++) {          // N
      if (i % 2 === 0) {                            // N/2
          result.push(arr[i]);                      // N/2
      } else {
        result.splice(i - 1, 0, arr[i]);            // N/2
      }
    }
    
    return result;                                  // 1
  };
  
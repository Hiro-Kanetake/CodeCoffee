const minMaxNumScraper = (strOfNums) => {
    // YOUR SOLUTION GOES HERE
    // Split strOfNums into separate numbers and turn into array of numbers
    const arrOfNums = strOfNums.split(" ");
    const min = Math.min(...arrOfNums);
    const max = Math.max(...arrOfNums);
    // return result array
    return [min, max];
};
  
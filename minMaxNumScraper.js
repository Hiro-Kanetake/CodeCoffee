const minMaxNumScraper = (strOfNums) => {
    // YOUR SOLUTION GOES HERE

    const arrOfNums = strOfNums.split(" ");
    const min = Math.min(...arrOfNums);
    const max = Math.max(...arrOfNums);

    return [min, max];
};
  
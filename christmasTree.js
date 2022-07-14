const christmasTree = (str, size) => {
    // YOUR SOLUTION GOES HERE
    let result = "";
    let strCounter = 0;
    let spaceCounter = size;
    const strAndSpace = `${str} `;
    const space = " ";

    if (str.length > 1 || str === "$") {
      return result;
    } else {
        for (let i = 0; i < size; i++) {
        spaceCounter--;
        strCounter++
        result += space.repeat(spaceCounter) + strAndSpace.repeat(strCounter);
        result = result.trimEnd() + "\n";
        }
    }
    return result.trimEnd();
  };

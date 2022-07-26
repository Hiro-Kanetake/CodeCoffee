// const alphaCountBack = (letter) => {
//     const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//     let result = "";

//     const countBackward = (alphabet) => {
//         const index = alphabets.indexOf(alphabet);
//         for (let i = index; i >= 0; i--) {
//             result += alphabets[i];
//         }
//         return result;
//     };

//     if (letter !== letter.toLowerCase()) {
//         return countBackward(letter);
//     } else {
//         let upperCasedLetter = letter.toUpperCase();
//         const upperCasedResult = countBackward(upperCasedLetter);
//         return upperCasedResult.toLowerCase()
//     }
// };

const alphaCountBack = (letter) => {
  const UTF16_unitCodes = Array.from(Array(26)).map((_, i) => i + 65);
  const alphabets = UTF16_unitCodes.map((x) => String.fromCharCode(x));
  let result = "";

  const countBackward = (alphabet) => {
    const index = alphabets.indexOf(alphabet);
    for (let i = index; i >= 0; i--) {
      result += alphabets[i];
    }
    return result;
  };

  if (letter !== letter.toLowerCase()) {
    return countBackward(letter);
  } else {
    let upperCasedLetter = letter.toUpperCase();
    const upperCasedResult = countBackward(upperCasedLetter);
    return upperCasedResult.toLowerCase();
  }
};

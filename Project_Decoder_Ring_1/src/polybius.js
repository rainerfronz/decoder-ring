// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(submission, encode = true) {
    //the letter/number postions
    const polyGrid = {
      1: ["a", "b", "c", "d", "e"],
      2: ["f", "g", "h", "(i/j)", "k"],
      3: ["l", "m", "n", "o", "p"],
      4: ["q", "r", "s", "t", "u"],
      5: ["v", "w", "x", "y", "z"],
    };

  
 
    let result = "";

    
    if (encode) {
      

      submission = submission.split("");
//loop the entry letters/numbers
      for (let i = 0; i < submission.length; i++) {
        if (submission[i] === " ") {
          result += submission[i];
        }
        if (submission[i] === "j" || submission[i] === "i") {
          result += 42;
        }

        let letter = submission[i];
        for (let j = 1; j < 6; j++) {
          if (polyGrid[j].includes(letter)) {
            let value = polyGrid[j].indexOf(letter) + 1;
            result += `${value}${j}`;
          }
        }
      }
      return result;
    }
// the decode
    if (!encode) {
      let count = 0;
      submission = submission.split("");
      

      for (let i = 0; i < submission.length; i++) {
        if (submission[i] !== " ") {
          count = count + 1;
        }
      }

      if (count % 2 !== 0) {
        return false;
      }

      for (let i = 0; i < submission.length; i++) {
        if (submission[i] === " ") {
          result += submission[i];
        } else {
          let col = submission[i];
          let row = submission[i + 1];
          let letter = polyGrid[row][col - 1];
          result += letter;
          i++;
        }
      }

      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
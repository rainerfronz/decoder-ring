// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(submission, shift, encode = true) {
    // check rules of casear
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false;
    }

    if (encode === true) {
      shift = shift * 1;
    }
    if (encode === false) {
      shift = shift * -1;
    }
        // make all enteries lowercase
    submission = submission.toLowerCase();
    //establish alphabet
    let letters = "abcdefghijklmnopqrstuvwxyz".split("");
    //results are a string
    let result = "";
    //loop thru the entry word or phrase
    for (let i = 0; i < submission.length; i++) {
      theLetter = submission[i];
      if (theLetter === " ") {
        result += theLetter;

        // terminates execution of the statements in the current iteration 
        // of the current or labeled loop, and continues execution of the loop with 
        // the next iteration.
        continue;
      }
      //punction treated as letters
      if (theLetter === "!" || theLetter === "?" || theLetter === ".") {
        result += theLetter;
        continue;
      }
        //the shift
      let value = letters.indexOf(theLetter);
      value = value + shift;
      if (value > 25) {
        value = value - 26;
      }
      if (value < 0) {
        value = value + 26;
      }
      result += letters[value];
    }

    

    return result;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;




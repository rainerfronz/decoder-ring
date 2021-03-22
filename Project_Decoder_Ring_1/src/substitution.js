const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    
     //encoder and rules
    if (encode) {
      input = input.toLowerCase();
      alphaOne = "abcdefghijklmnopqrstuvwxyz";
      alphaOne = alphaOne.split("");
      input = input.split("");
      
      if (!alphabet) {
        return false;
      }
      if (alphabet.length !== 26) {
        return false;
      }
      if (Array.from(new Set(alphabet)).length !== 26) return false;

      
//loop the submission
      let result = [];
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += input[i];
        }
        //loop the alphabet
        for (let j = 0; j < alphaOne.length; j++) {
          if (input[i] === alphaOne[j]) {
            let index = alphaOne.indexOf(alphaOne[j]);
            result += alphabet[index];
          }
        }
      }
      return result;
    }

    //the decode
    if (!encode) {

      alphaOne = "abcdefghijklmnopqrstuvwxyz";
      alphaOne = alphaOne.split("");
       input = input.split("")
//decode rules
      if (!alphabet) {
        return false;
      }
      if (alphabet.length !== 26) {
        return false;
      }
      

      let result = [];
//decode loop
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += input[i];
        } 
        else {

        for (let j = 0; j < alphabet.length; j++) {
          if (input[i] === alphabet[j]) {
            let index = alphabet.indexOf(alphabet[j]);
            result += alphaOne[index];
          }
        }
      }
    }
      return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;

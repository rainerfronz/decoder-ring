// // Checks the shift value if meets conditions 
// // If the shift value is not present, equal 
// to 0, less than -25, or greater than 25, the 
// function should return false.
// // Spaces should be maintained throughout, 
// as should other non-alphabetic symbols.
// // Capital letters can be ignored.
// // If a letter is shifted so that it goes "off"
//  the alphabet (e.g. a shift of 3 on the letter "z"), 
//  it should wrap around to the front of the alphabet 
//  (e.g. "z" becomes "c").

// caesar("thinkful", 3); //> 'wklqnixo'
// caesar("thinkful", -3); //> 'qefkhcri'
// caesar("wklqnixo", 3, false); //> 'thinkful'

// caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
// caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

// caesar("thinkful"); //> false
// caesar("thinkful", 99); //> false
// caesar("thinkful", -26); //> false


const expect = require("chai").expect;
const caesar = require("../src/caesar.js");
describe("function caesar", () => {
    it(" Should return false if  Shift is equal to 0 ", () => {
      

        
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 0, false)

        expect(actual).to.eql(false);
    });
  });
  
  describe("function caesar", () => {
    it("Should return false if value if Shift less than -25 ", () => {
      

        const expected = "false";
        const actual = caesar("BPQA qa I amkzmb umaaiom!", -28, false)

        expect(actual).to.eql(false);
    });
  });
  describe("function caesar", () => {
    it("Should return false if value if Shift  greater than 25 ", () => {
      

        
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 28, false)

        expect(actual).to.eql(false);
    });
  });

  describe("function caesar", () => {
    it("Should return false if value of Shift undefined", () => {
      

        
        const actual = caesar("BPQA qa I amkzmb umaaiom!", shift = undefined, false)

        expect(actual).to.eql(false);
    });
  });
  describe("function caesar", () => {
    it("Should return correct ciphered message for thinkful ", () => {
      

        
        const actual = caesar("thinkful", 3); //> 'wklqnixo
        

        expect(actual).to.eql('wklqnixo');
    });
  });

  describe("function caesar", () => {
    it("Should return correct ciphered message for BPQA qa I amkzmb umaaiom! " , () => {
      

        
      const actual =  caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
       // const actual = caesar("wklqnixo", -3, false); 

        expect(actual).to.eql('this is a secret message!');
    });
  });

  describe("function caesar", () => {
    it("Should return correct ciphered message for thinkful with no shift value " , () => {
      

        
        const actual =  caesar("thinkful"); //> false

        expect(actual).to.eql(false);
    });
  });

  

  describe("function caesar", () => {
    it("Should return correct ciphered message for This is a secret message! changed to decoded " , () => {
      

      const actual = caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
        

        expect(actual).to.eql('bpqa qa i amkzmb umaaiom!');
    });
  });

  describe("function caesar", () => {
    it("Should return false for input sent in with value less that -26 " , () => {
      

       const actual =  caesar("thinkful", -26); //> false
        

        expect(actual).to.eql(false);
    });
  });

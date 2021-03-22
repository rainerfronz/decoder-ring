// Write your tests here!

// The input could include spaces and letters
//  as well as special characters such as #, $, *, etc.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The alphabet parameter must be a string of
//  exactly 26 characters, which could include special
//   characters such as #, $, *, etc. Otherwise, it should return false.
// All of the characters in the alphabet parameter must be 
// unique. Otherwise, it should return false.
// Examples
// substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
// substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
// substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

// substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
// substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

// substitution("thinkful", "short"); //> false
// substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> fals

const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

// Checks the shift value if meets conditions 
describe("function substitution", () => {
    it(" Should return false if alphabet array is not present ", () => {
      

        
        const actual = substitution("jrufscpw", false); 

        expect(actual).to.eql(false);
    });
  });
  
  describe("function substitution", () => {
    it(" Should return false if substitution alphabet is not exactly 26 char ", () => {
      

        
        const actual = substitution("thinkful", "abcabca333333bcabcabcabcabcabcyz"); 
        expect(actual).to.eql(false);
    });
  });

  describe("function substitution", () => {
    it(" Should return false if substitution aplahabet does not contain unique chars ", () => {
      

        
        const actual = 
        substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); 

        expect(actual).to.eql(false);
    });
  });

describe("function substitution Encode Check", () => {
    it(" Should encode message correctly ", () => {
      

        
        const actual =   substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); 

        expect(actual).to.eql('jrufscpw');
    });
  });
  describe("function substitution Encode Check", () => {
    it(" Should work with any kind of unique characters ", () => {
      

        
        const actual =   substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); 

        expect(actual).to.eql("message");
    });
  });
  describe("function substitution Encode Check", () => {
    it(" Should leave in spaces ", () => {
      

        
        const actual =   substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); 

        expect(actual).to.eql('elp xhm xf mbymwwmfj dne');
    });
  });


describe("function substitution ", () => {
    it(" Should decode message correctly ", () => {
      

        
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);

        expect(actual).to.eql('thinkful');
    });
  });
  describe("function substitution ", () => {
    it(" Should work with any kind of unique characters ", () => {
      

        
        const actual =   substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); 

        expect(actual).to.eql("message");
    });
  });
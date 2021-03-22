// Write your tests here!
// You are welcome to assume that no additional symbols
//  will be included as part of the input. Only spaces 
//  and letters will be included.
// When encoding, your output should still be a string.
// When decoding, the number of characters in the string
//  excluding spaces should be even. Otherwise, return false.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The letters "I" and "J" share a space. 
// When encoding, both letters can be converted to 42, 
// but when decoding, both letters should somehow be shown.
// Examples

// polybius("thinkful"); //> "4432423352125413"
// polybius("Hello world"); //> '3251131343 2543241341'

// polybius("3251131343 2543241341", false); //> "hello world"
// polybius("4432423352125413", false); //> "th(i/j)nkful
// polybius("44324233521254134", false); //> false

const expect = require("chai").expect;
 const polybius = require("../src/polybius.js");
 
 
 describe("function polybius", () => {
    it("Should encode a message by translating each letter to numbered pairs  " , () => {
      
       
      const actual = polybius("thinkful");
        

        expect(actual).to.eql("4432423352125413");
    });
  });



  
  
  describe("function polybius", () => {
     it("Should translate chartacters i and j to 42 " , () => {
       
      const actual =  polybius("4432423352125413", false);
      
         
 
         expect(actual).to.eql("th(i/j)nkful");
     });
   });

     
  describe("function polybius", () => {
    it("Should allow spaces to remian in string" , () => {
      
     const actual =  
     polybius("3251131343 2543241341", false); 
     
        

        expect(actual).to.eql("hello world");
    });
  });

  describe("function polybius", () => {
    it("Translates number pairs into letters" , () => {
      
     const actual = polybius("thinkful"); 
 
    
     
        

        expect(actual).to.eql("4432423352125413");
    });
  });

  describe("function polybiuse", () => {
    it("translates 42 to both I and J " , () => {
      
     const actual =  polybius("4432423352125413", false); 
 
    
     
        

        expect(actual).to.eql("th(i/j)nkful");
    });
  });

  describe("function polybius", () => {
    it("Should leave space in string " , () => {
      
     const actual =   polybius("3251131343 2543241341", false); //> "hello world"
 
    
     
        

        expect(actual).to.eql("hello world");
    });
  });

 
  describe("Pfunction polybius", () => {
    it("Should return false if total of char is odd " , () => {
      
     const actual =  polybius("44324233521254134", false);
    
     
        

        expect(actual).to.eql(false);
    });
  }); 
var expect = require("chai").expect;
var functions = require("./../functions");

describe("Test suite from lambda-function-3", function(){
    it("Sum test case", function(){
        let a = 5;
        let b = 3;
        let res = functions.sum(a,b);        
        expect(res).be.equals(8);
    });
    it("Multiply test case", function(){
        let a = 5;
        let b = 3;
        let res = functions.multiply(a,b);        
        expect(res).be.equals(15);
    });
    it("Divide test case", function(){
        let a = 8;
        let b = 2;
        let res = functions.divide(a,b);        
        expect(res).be.equals(4);
    });
});

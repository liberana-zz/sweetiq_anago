var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("calculator", function () {
    describe("Addition", function () {
        it("Do basic operation", function () {
            var result = calculator.calc(1, 2, '+');
            expect(result).to.equal(3);
        });
    });
    describe("substraction", function () {
        it("Do basic operation", function () {
            var result = calculator.calc(6, 2, '-');
            expect(result).to.equal(4);
        });
    });
    describe("multiplication", function () {
        it("Do basic operation", function () {
            var result = calculator.calc(3, 2, '*');
            expect(result).to.equal(6);
        });
    });
    describe("division", function () {
        it("Do basic operation", function () {
            var result = calculator.calc(9, 3, '/');
            expect(result).to.equal(3);
        });
    });

    describe("invalid value", function () {
        it("non integer for val1", function () {
            var result = calculator.calc("abc", 3, '+');
            expect(result).to.equal("invalid val1");
        });
    });

    describe("invalid value", function () {
        it("non integer for val2", function () {
            var result = calculator.calc(4, "abc", '+');
            expect(result).to.equal("invalid val2");
        });
    });

    describe("invalid operator", function () {
        it("not allowed operator", function () {
            var result = calculator.calc(4, 7, '=');
            expect(result).to.equal("invalid operator");
        });
    });

});
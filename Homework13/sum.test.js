const {add} = require('./sum');

describe("Test sum function", ()=>{
    test("Test 0.1 + 0.2 = 0.3", ()=>{
        expect(add(0.1,0.2)).toBeCloseTo(0.3);
    });
});
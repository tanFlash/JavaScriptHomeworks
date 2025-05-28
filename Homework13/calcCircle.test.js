const circle = require('./calcCircle');

describe("Test calcCircle", () => {
    test("Test getCircleLength with argument 22", () => {
        expect(circle.getCircleLength(22)).toBeCloseTo(138.2, 1);
    });

    test("Test getCircleArea with argument 9", () => {
        expect(circle.getCircleArea(9)).toBeCloseTo(254.47);
    });

    test("Test getCircleLength without arguments", () => {
        expect(circle.getCircleLength()).toBeNaN();
    });

    test("Test getCircleArea without argumnets", () => {
        expect(circle.getCircleArea()).toBeNaN();
    });

});
const foodFile = require('./food');

const food = [

    { kind: 'potato', price: 10 },
    
    { kind: 'bred', price: 16 },
    
    { kind: 'pepper', price: 27 },
    
    { kind: 'banana', price: 32 },
    
    { kind: 'lemon', price: 50 }
    
];

describe("Test food function", () => {
    test("Filtered list length is 3", () => {
        expect(foodFile.filterFoodPrice(food, 12, 40)).toHaveLength(3);
    });

    test("Filtered list contains { kind: 'pepper', price: 27 }", () => {
        expect(foodFile.filterFoodPrice(food, 12, 40)).toContainEqual({ kind: 'pepper', price: 27 });
    });

    test("Filtered list has 2,3 and 4 elements", () => {
        expect(foodFile.filterFoodPrice(food, 12, 40)).toEqual([food[1], food[2], food[3]]);
    });

    test("The price of the first element is greater than 12", () => {
        expect(foodFile.filterFoodPrice(food, 12, 40)[0].price).toBeGreaterThan(12);
    });

    test("The price of third element is less than 40", () => {
        expect(foodFile.filterFoodPrice(food, 12, 40)[2].price).toBeLessThan(40);
    });

    test("The filtered list does not contain { kind: 'lemon', price: 50 }", () => {
        expect(foodFile.filterFoodPrice(food, 12, 40)).not.toContainEqual({ kind: 'lemon', price: 50 });
    });

    test("Filtered list does not have 5th item", () => {
        expect(foodFile.filterFoodPrice(food, 12, 40)[5]).toBe(undefined);
    });

    test('Filtered array contains only objects with property "kind"', () => {
        foodFile.filterFoodPrice(food, 12, 40).forEach(item => {
            expect(item).toHaveProperty('kind');
        });
    });
});



const {userList} = require('./userList');

describe("Test userList array", ()=>{
    test("Test if array contains admin", ()=>{

        expect(userList.includes("admin")).toBeTruthy();
    });
    
    test("Test if array starts with Nick", () => {
        expect(userList[0]).toBe('Nick');
    });

    test("Test if the last element is new_user_2", () => {
        expect(userList[userList.length-1]).toBe("new_user_2");
    });

    test("Test if the length of array is 5", () => {
        expect(userList.length).toBe(5);
    });

    test("Test if the third element is string type", () =>{
        expect(typeof userList[2]).toBe("string");
    })

    test("Test is array does not have 8th element", () => {
        expect(typeof userList[8]).toBe("undefined");
    })

});
var Add = require("../sum");

describe("Add ", () => {
    it("calculate x + y = z", ()=>{
        expect(Add(10,5)).toEqual(15);
    });

    it("calculate x + y != z", () =>{
        expect(Add(10, 5)).not.toEqual(15);
    })
})
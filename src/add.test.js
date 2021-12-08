// import addArray from "./add";
const addArray = require("./add");

test("all number", () => expect(addArray([1, 2, 3])).toBe(6));

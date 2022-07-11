const { push, pop, unshift } = require("./index.js");

describe("stuffs", () => {
  it("should add an element to an array", () => {
    const arr = ["a", "b", "c"];
    expect(push(arr, "d")).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[3]).toBe("d");
  });

 it("should remove an element from an array", () => {
    const arr = ["a", "b", "c"];
    expect(pop(arr)).toBe("c");
    expect(arr.length).toBe(2);
    expect(arr[1]).toBe("b");
  });

  it("should add element to the front of an array", () => {
    const arr = ["a", "b", "c"];
    expect(unshift(arr, "d")).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[0]).toBe("d");
  });
  
  
});

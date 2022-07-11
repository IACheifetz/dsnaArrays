const { push, pop, unshift, shift } = require("./index.js");

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
  
  it('should remove the first element of an array using shift', () => {
    const arr = ['a', 'b', 'c'];
    expect(shift(arr)).toBe('a');
    expect(arr.length).toBe(2);
    expect(arr[0]).toBe('b');
    
  })
});

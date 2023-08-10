import { sortData, filterData, computeStats } from "../src/data.js";

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  // it("returns `example`", () => {
  //   expect(example()).toBe("example");
  // });
});

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  // it("returns `anotherExample`", () => {
  //   expect(anotherExample()).toBe("OMG");
  // });
});

describe("computeStats", () => {
  it("is a function", () => {
    expect(typeof computeStats).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(computeStats("40")).toBe("75.4");
  });
});

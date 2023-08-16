import {
  sortData,
  filterData,
  computeStats,
  filterNames,
} from "../src/data.js";

const jon = {
  fullName: "Jon Snow",
  title: "King of the North",
  family: "Stark",
};

const arya = {
  fullName: "Arya Stark",
  title: "No One",
  family: "Stark",
};

const cersei = {
  fullName: "Cersei Lannister",
  title: "Lady of Casterly Rock",
  family: "Lannister",
};

const testeGot = [jon, arya, cersei];

describe("filterNames", () => {
  it("is a function", () => {
    expect(typeof filterNames).toBe("function");
  });

  it("retorna com dados do nome que foi pesquisado", () => {
    const name = "Cersei";
    expect(filterNames(testeGot, name)).toEqual([cersei]);
  });
});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("retorna os dados ordenados de A-Z", () => {
    const result = sortData(testeGot, "fullName", "A-Z");
    expect(result[0].fullName).toBe("Arya Stark");
  });
});

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("retorna os dados por família", () => {
    const result = filterData(testeGot, "Stark");
    expect(result[0].fullName).toBe("Jon Snow");
  });
});

describe("computeStats", () => {
  it("is a function", () => {
    expect(typeof computeStats).toBe("function");
  });

  it("returns `5.7`", () => {
    expect(computeStats(testeGot)).toBe("5.7");
  });
});

import { sortData, filterData, computeStats, filterNomes } from '../src/data.js';

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

describe('filterNomes', () => {
  it('is a function', () => {
    expect(typeof filterNomes).toBe('function');
  });

  it('retorna com dados do nome que foi pesquisado', () => {
    const name = "Cersei"
    expect(filterNomes(testeGot, name)).toEqual([cersei]);
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



describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('retorna os dados ordenados de Z-A', () => {
    const result = sortData(testeGot, "fullName", "A-Z");
    expect(result[0].fullName).toBe("Jon Snow");
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

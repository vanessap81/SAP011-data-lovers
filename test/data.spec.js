import { sortData, filterData, computeStats, filterNomes } from '../src/data.js';
//import got from '../src/main.js';
//import data from '../src/data/got.js';

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


const testeGot = [ jon, arya, cerse];

describe('filterNomes', () => {
  it('is a function', () => {
    expect(typeof filterNomes).toBe('function');
  });

  it('retorna com dados do nome que foi pesquisado', () => {
    const name = "Cersei"
    expect(filterNomes(testeGot, name)).toEqual([cersei]);
  });
});


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('retorna os dados ordenados de A-Z', () => {
    const result = sortData(testeGOt, "A-Z")
    const nameAZ = "Arya"
    expect(result[0].nameAZ).toBe("Arya");
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('retorna os dados ordenados de Z-A', () => {
    const result = sortData(testeGOt, "Z-A")
    const nameZA = "Jon"
    expect(result[0].nameZA).toBe("Jon");
  });
});

// porcentagens 

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

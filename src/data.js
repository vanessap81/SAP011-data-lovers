export const sortData = (data, sortBy, sortOrder) => {
  const dataCopy = data.slice();
  const sorted = dataCopy.sort(function (a, b) {
    return a[sortBy].localeCompare(b[sortBy]);
  });
  if (sortOrder === "A-Z") {
    return sorted;
  }
  if (sortOrder === "Z-A") {
    return sorted.reverse();
  }
};

export const filterData = (data, condition) => {
  const filteredData = data.filter((data) => data.family === condition);
  return filteredData;
};

export const computeStats = (data) => {
  const arrayLength = data.length;
  return ((arrayLength * 100) / 53).toFixed(1);
};

export const filterNames = (data, searchedName) => {
  return data.filter(
    (character) =>
      character.fullName.toUpperCase().includes(searchedName.toUpperCase()) ||
      character.family.toUpperCase().includes(searchedName.toUpperCase()) ||
      character.title.toUpperCase().includes(searchedName.toUpperCase())
  );
};

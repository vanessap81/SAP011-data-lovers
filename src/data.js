export function sortData(data, sortBy, sortOrder) {
  const dataCopy = data.slice();
  if (sortOrder === "A-Z") {
    const sorted = dataCopy.sort(function (a, b) {
      return a[sortBy].localeCompare(b[sortBy]);
    });
    return sorted;
  }
  if (sortOrder === "Z-A") {
    const sorted = dataCopy.sort(function (a, b) {
      return b[sortBy].localeCompare(a[sortBy]);
    });
    return sorted;
  }
}

export function filterData(data, condition) {
  const filteredData = data.filter((data) => data.family === condition);
  return filteredData;
}

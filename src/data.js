function sortData(data, sortBy, sortOrder) {
  const dataCopy = data.slice();
  if (sortOrder === "A-Z") {
    const sorted = dataCopy.sort(function (a, b) {
      return a[sortBy].localeCompare(b[sortBy]);
    });
    console.log(sorted);
  }
  if (sortOrder === "Z-A") {
    const sorted = dataCopy.sort(function (a, b) {
      return b[sortBy].localeCompare(a[sortBy]);
    });
    console.log(sorted);
  }
}

export default sortData;

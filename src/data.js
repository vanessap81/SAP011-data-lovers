function sortData(data, sortBy, sortOrder) {
  if (sortOrder === "A-Z") {
    console.log(
      data.sort(function (a, b) {
        return a.sortBy < b.sortBy ? -1 : a.sortBy > b.sortBy ? 1 : 0;
      })
    );
  } else if (sortOrder === "Z-A") {
    const reverseIt = data.sort(function (a, b) {
      return a.sortBy < b.sortBy ? -1 : a.sortBy > b.sortBy ? 1 : 0;
    });
    console.log(reverseIt.reverse());
  }
}

export default sortData;

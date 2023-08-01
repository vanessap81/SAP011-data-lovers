// estas funciones son de ejemplo

// export const example = () => {
//   return "example";
// };

// export const anotherExample = () => {
//   return "OMG";
// };

export const filterData = () => {
  const arrayGot = Object.values();
  const targaryenFilter = arrayGot.filter(
    (targaryenFamily) => targaryenFamily.family === "House Targaryen"
  );
  targaryenFilter.forEach((targaryenFamily) => {
    console.log(targaryenFamily);
  });
};

export const sortData = () => {
  return "OMG";
};
export const computeData = () => {
  return "OMG";
};

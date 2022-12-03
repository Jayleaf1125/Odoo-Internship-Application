const { locatedSearchValue, allPossiblePermutations, allPossiblePermutationsRecurssive, seperatePascalCase} = require('./index')

// Question 1
test(" Given a dictionary with lists as values, and a search value, return a list of all keys where the search value appears in the list", () => {
  const dictionary = {
      a: [0, 1, 2],
      b: [1, 2, 3],
      c: [0, 3],
    },
    search = 1;

  expect(locatedSearchValue(dictionary, search)).toEqual(["a", "b"]);
  expect(locatedSearchValue(dictionary, 3)).toEqual(["b", "c"]);
});

// Question 2
test("Given a list, return a list of all possible permutations of the elements (order the permutations does not matter", () => {
  expect(allPossiblePermutations([1, 2, 3])).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});
// Question 3
test("Write the recursive version of the previous problem", () => {
  expect(allPossiblePermutationsRecurssive([1, 2, 3])).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});
// Question 4
test("Given a string in PascalCase, return a string where words are all lower case and separated by a period", () => {
  expect(seperatePascalCase("MyPasswordFieldClass")).toEqual(
    `my.password.field.class`
  );
  expect(seperatePascalCase("RedBlueYellowGreen")).toEqual(
    `red.blue.yellow.green`
  );
});
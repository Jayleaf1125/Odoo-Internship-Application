function locatedSearchValue(dictionary, search) {
  const output = [];

  for (const [key, value] of Object.entries(dictionary)) {
    const isFound = binarySearch(value, search);

    if (isFound) {
      output.push(key);
    }
  }

  return output;
}

function binarySearch(array, value) {
  let start = 0,
    end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === value) return true;

    if (array[mid] < value) {
      start = mid + 1;
      continue;
    }

    if (array[mid] > value) {
      end = mid - 1;
      continue;
    }
  }

  return false;
}

function allPossiblePermutations(array) {
  if (array.length === 0) return null;
  if (array.length === 1) return array;

  const output = new Set();
}

function allPossiblePermutationsRecurssive() {
  return 1;
}

function seperatePascalCase(string) {
    const alphabet = {
        "A" : "a", 
        "B" : "b",
        "C" : "c",
        "D" : "d",
        "E" : "e",
        "F" : "f",
        "G" : "g",
        "H" : "h",
        "I" : "i",
        "J" : "j",
        "K" : "k",
        "L" : "l",
        "M" : "m",
        "N" : "n",
        "O" : "o",
        "P" : "p",
        "Q" : "q",
        "R" : "r",
        "S" : "s",
        "T" : "t",
        "U" : "u",
        "V" : "v",
        "W" : "w",
        "X" : "x",
        "Y" : "y",
        "Z" : "z"
    }

    let output = `${alphabet[string[0]]}`;
    
    for(let i = 1; i < string.length; i++) {
        const letter = string[i];

        if(!(letter in alphabet)) {
            output += letter;
            continue
        } else {
            output += `.${alphabet[letter]}`
        }
    }

    return output;
}

module.exports = {
  locatedSearchValue,
  allPossiblePermutations,
  allPossiblePermutationsRecurssive,
  seperatePascalCase,
};

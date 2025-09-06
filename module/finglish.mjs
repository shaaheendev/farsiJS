const letters = [
  ["a", "ا", "آ"],
  ["b", "ب"],
  ["p", "پ"],
  ["t", "ت", "ط"],
  ["s", "ث", "ص", "س"],
  ["j", "ج"],
  ["ch", "چ"],
  ["h", "ح", "ه"],
  ["kh", "خ"],
  ["d", "د"],
  ["z", "ظ", "ض", "ز", "ذ"],
  ["r", "ر"],
  ["zh", "ژ"],
  ["sh", "ش"],
  ["a", "ع"],
  ["gh", "غ", "ق"],
  ["f", "ف"],
  ["g", "گ"],
  ["k", "ک"],
  ["l", "ل"],
  ["m", "م"],
  ["n", "ن"],
  ["v", "و"],
  ["y", "ی"],
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6"],
  ["7", "7"],
  ["8", "8"],
  ["9", "9"],
  ["0", "0"],
];

const finglish = (word) => {
  return word
    .split("")
    .map((char) => {
      let fingChar;
      for (let i = 0; i < letters.length; i++) {
        if (letters[i].includes(char)) {
          fingChar = letters[i][0];
          break;
        }
      }
      if (!fingChar) {
        fingChar = char;
      }
      return fingChar;
    })
    .join("");
};

export default finglish;

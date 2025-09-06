import finglish from "./finglish.mjs";
import { keywords, isKeyword } from "./keywords.mjs";
import { builtins, isBuiltin } from "./builtins.mjs";
import isAlfaNumeric from "./isAlfaNumeric.mjs";

const compiler = (code) => {
  let outputs = [];
  let outputAdderCode = `function addOutput(...args) {outputs.push(args)}`;
  let isInString = "";
  let compiledCode = "";
  let lines = code.split("\n");
  lines.forEach((line) => {
    let newLine = "";
    let chars = line.split("");
    let currentWord = "";
    chars.forEach((char, i, arr) => {
      if (char === '"' || char === "'") {
        if (!isInString) {
          newLine += char;
          isInString = char;
          return;
        } else if (isInString === char) {
          newLine += char;
          isInString = "";
          return;
        }
      }
      if (isInString) {
        newLine += char;
        return;
      }
      if (isAlfaNumeric(char)) {
        currentWord += char;
      } else {
        if (currentWord && isKeyword(currentWord)) {
          if (char === "؛") {
            char = ";";
          }
          if (char === "،") {
            char = ",";
          }
          newLine += keywords[currentWord];
          newLine += char;

          currentWord = "";
        } else if (currentWord && isBuiltin(currentWord)) {
          if (char === "؛") {
            char = ";";
          }
          if (char === "،") {
            char = ",";
          }
          newLine += builtins[currentWord];
          newLine += char;

          currentWord = "";
        } else if (currentWord) {
          if (char === "؛") {
            char = ";";
          }
          if (char === "،") {
            char = ",";
          }
          newLine += finglish(currentWord);
          newLine += char;
          currentWord = "";
        } else {
          if (char === "؛") {
            char = ";";
          }
          if (char === "،") {
            char = ",";
          }
          newLine += char;
        }
      }
      if (i === arr.length - 1 && currentWord) {
        newLine += currentWord;
        currentWord = "";
      }
    });
    newLine += "\n";
    compiledCode += newLine;
  });
  let newCode =
    outputAdderCode + compiledCode.replaceAll("console.log(", "addOutput(");
  eval(newCode);
  return outputs;
};
export default compiler;

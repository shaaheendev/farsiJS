export const builtins = {
  کنسول: "console",
  چاپ: "log",
};
export const isBuiltin = (word) => {
  let bltins = Object.keys(builtins);
  if (bltins.includes(word)) {
    return true;
  } else {
    return false;
  }
};

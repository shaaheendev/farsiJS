export const builtins = {
  کنسول: "console",
  چاپ: "log",
  زمانگذار: "setTimeout",
  دورانگذار: "setInterval",
  دورانروب: "clearInterval",
  زمانروب: "clearTimeout",
};
export const isBuiltin = (word) => {
  let bltins = Object.keys(builtins);
  if (bltins.includes(word)) {
    return true;
  } else {
    return false;
  }
};

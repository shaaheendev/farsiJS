export const keywords = {
  بزار: "let",
  ثابت: "const",
  متغ: "var",
  عملگر: "function",
  برگردان: "return",
  اگر: "if",
  گرنه: "else",
  برای: "for",
  چنانچه: "while",
};

export const isKeyword = (word) => {
  let kywrds = Object.keys(keywords);
  if (kywrds.includes(word)) {
    return true;
  } else {
    return false;
  }
};

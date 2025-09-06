const isAlfaNumeric = (char) => {
  let chars = "۱۲۳۴۵۶۷۸۹۰اآبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی1234567890";
  if (chars.split("").includes(char)) {
    return true;
  } else {
    return false;
  }
};

export default isAlfaNumeric;

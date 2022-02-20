export function RegexValidator(val, type) {
  let regEx;
  switch (type) {
    case "text":
      regEx = /^[a-zA-Z\s]*$/;
      break;
    case "number":
      val = Number(val);
      regEx = /^0-9]*$/;
      break;
    case "email":
      regEx = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
      break;

    default:
      return null;
  }
  return regEx.test(val)
}

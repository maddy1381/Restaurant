export function RegexValidator(val, type) {
  let regEx;
  switch (type) {
    case "text":
      regEx = /^[a-zA-Z\s]*$/;
      break;
    case "number":
      regEx = /^0-9]*$/;
      break;
    case "email":
      regEx = /^[a-zA-Z\s]*$/;
      break;

    default:
      return null;
  }
  return regEx.test(val)
}

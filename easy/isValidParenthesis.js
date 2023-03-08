function isValid(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    switch (char) {
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      default:
        if (char !== stack.pop()) {
          return false;
        }
        break;
    }
  }
  return stack.length === 0;
}
console.log(isValid("{}"));

var isValid = function (s) {
  const validOpenings = new Set(["(", "[", "{"]);
  const stack = [];

  for (const char of s) {
    if (validOpenings.has(char)) {
      switch (char) {
        case "(":
          stack.push(")");
          break;
        case "[":
          stack.push("]");
          break;
        default:
          stack.push("}");
          break;
      }
    } else {
      if (stack.length > 0 && char === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0; // after having ran through all possible scenarios
};

const testOne = "()[]{}"; // done
const testTwo = "([])";

isValid(testTwo);

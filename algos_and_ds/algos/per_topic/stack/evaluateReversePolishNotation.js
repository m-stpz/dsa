/* 
Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

*/

/**
 * t: O(n)
 * s: O(n)
 *  n = tokens.length
 */
var evalRPN = function (tokens) {
  const operators = new Set(["+", "-", "*", "/"]); // s: O(1)
  const stack = [];

  // t: O(n)
  for (let char of tokens) {
    // t: O(1)
    if (operators.has(char) && stack.length >= 2) {
      const firstElement = Number(stack.pop()); // t: O(1)
      const secondElement = Number(stack.pop());

      const result = calculateResult(firstElement, secondElement, char);
      stack.push(result); // t: O(1)
    } else {
      stack.push(char);
    }
  }

  return Number(stack[0]);
};

// arimethcs, no increase time | space
function calculateResult(firstElement, secondElement, char) {
  switch (char) {
    case "+":
      return secondElement + firstElement;
    case "-":
      return secondElement - firstElement;
    case "*":
      return secondElement * firstElement;
    case "/":
      const result = secondElement / firstElement;

      if (result >= 0) {
        return Math.floor(result);
      } else {
        return Math.ceil(result);
      }
  }
}

evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);

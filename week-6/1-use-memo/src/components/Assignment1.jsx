import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive
// calculation(finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here
  const expensiveValue = useMemo(() => {
    if (input === 0 || input === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= input; i++) {
        result *= i;
      }
      return result;
    }
  }, [input]);
  // Your solution ends here
  console.log("Assignment 1 re-rendered");
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}

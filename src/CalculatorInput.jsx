import React from 'react';

const CalculatorInput = ({ input, setInput }) => {
  return (
    <div>
      <label>Enter numbers: </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
    </div>
  );
};

export default CalculatorInput;
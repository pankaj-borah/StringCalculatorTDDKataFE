import React, { useState } from 'react';
import { add } from './utils/add'; // Import the add function
import CalculatorInput from './CalculatorInput';
import ResultDisplay from './ResultDisplay';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const calculationResult = add(input);
      setResult(calculationResult);
      setError(null); // Clear any previous errors
    } catch (e) {
      setError((e).message);
      setResult(null); // Clear previous results
    }
  };

  return (
    <div className="calculator" data-testid='calculator-container'>
      <h1>String Calculator</h1>
      <CalculatorInput input={input} setInput={setInput} />
      <button onClick={handleCalculate}>Calculate</button>
      {error && (
        <div className="error" data-testid="error-display">
          {error}
        </div>
      )}
      {result !== null && <ResultDisplay result={result} />}
    </div>
  );
};

export default Calculator;
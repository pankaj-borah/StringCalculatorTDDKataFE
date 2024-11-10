import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div className="result" data-testid='result-display'>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default ResultDisplay;
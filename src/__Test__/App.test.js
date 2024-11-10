import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Calculator from '../Calculator';

describe('App Component', () => {
  test('renders the Calculator component', () => {
    render(<App />);

    // Test that the Calculator component is rendered
    const calculatorElement = screen.getByTestId('calculator-container');
    expect(calculatorElement).toBeInTheDocument();
  });
  
  test('should render the Calculator component and calculate result', () => {
    render(<App />);

    // Test that the Calculator component's input and button are rendered
    const inputField = screen.getByPlaceholderText('Enter numbers');
    const calculateButton = screen.getByText('Calculate');

    // Simulate typing into the input field
    fireEvent.change(inputField, { target: { value: '1,2,3' } });

    // Simulate clicking the calculate button
    fireEvent.click(calculateButton);

    // Check if the expected result is displayed
    const resultDisplay = screen.getByTestId('result-display');
    expect(resultDisplay).toBeInTheDocument();
    expect(resultDisplay).toHaveTextContent('6');  // Assuming 1+2+3 is the expected output
  });
});

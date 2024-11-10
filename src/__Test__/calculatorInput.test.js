import { render, screen, fireEvent } from '@testing-library/react';
import CalculatorInput from '../CalculatorInput';

describe('CalculatorInput Component', () => {
    test('should render the input field and accept user input', () => {
      const mockSetInput = jest.fn(); // Create a mock function for setInput
  
      render(<CalculatorInput input="1,2,3" setInput={mockSetInput} />);
  
      const inputField = screen.getByPlaceholderText('Enter numbers');
      expect(inputField).toBeInTheDocument();
  
      fireEvent.change(inputField, { target: { value: '4,5,6' } });
  
      // Assert that setInput was called with the new value
      expect(mockSetInput).toHaveBeenCalledWith('4,5,6');
    });
  });
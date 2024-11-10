import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';
import { add } from '../utils/add';

// Mock the add function
jest.mock('../utils/add', () => ({
  add: jest.fn(),
}));

describe('Calculator Component', () => {
  test('should render input field, button, and result display', () => {
    render(<Calculator />);

    const inputField = screen.getByPlaceholderText('Enter numbers');
    const calculateButton = screen.getByText('Calculate');
    const resultDisplay = screen.queryByText(/Result:/);

    expect(inputField).toBeInTheDocument();
    expect(calculateButton).toBeInTheDocument();
    expect(resultDisplay).not.toBeInTheDocument();
  });

  test('should calculate and display result when valid input is provided', () => {
    render(<Calculator />);

    const inputField = screen.getByPlaceholderText('Enter numbers');
    const calculateButton = screen.getByText('Calculate');
    

    // Mock the add function to return a specific result
    add.mockReturnValue(6);

    fireEvent.change(inputField, { target: { value: '1,2,3' } });
    fireEvent.click(calculateButton);
    const resultDisplay = screen.getByTestId('result-display');
    expect(resultDisplay).toHaveTextContent('Result: 6');
  });

  test('should handle errors and display error message', () => {
    render(<Calculator />);

    const inputField = screen.getByPlaceholderText('Enter numbers');
    const calculateButton = screen.getByText('Calculate');
    

    // Mock the add function to throw an error
    add.mockImplementation(() => {
      throw new Error('Invalid input');
    });

    fireEvent.change(inputField, { target: { value: 'invalid input' } });
    fireEvent.click(calculateButton);
    const errorMessage = screen.getByText('Invalid input');
    expect(errorMessage).toBeInTheDocument();
  });
});

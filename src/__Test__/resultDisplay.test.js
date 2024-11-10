import { render, screen } from '@testing-library/react';
import ResultDisplay from '../ResultDisplay';

describe('ResultDisplay Component', () => {
  test('should render the result text', () => {
    render(<ResultDisplay result={6} />);

    const resultText = screen.getByText(/Result: 6/);
    expect(resultText).toBeInTheDocument();
  });
});

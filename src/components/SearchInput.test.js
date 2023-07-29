import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserList from './UserList';

describe('Input Data Length Test', () => {
  test('should limit the input to a range of 1 to 30 letters', () => {
    render(<UserList />); // Render your component

    const inputElement = screen.getByPlaceholderText(/Find users/i);

    const isInRange = (inputValue) => inputValue.length >= 1 && inputValue.length <= 30;

    // Test with input of length 0
    fireEvent.change(inputElement, { target: { value: '' } });
    expect(isInRange(inputElement.value)).toBe(false);

    // Test with input of length 1
    fireEvent.change(inputElement, { target: { value: 'a' } });
    expect(isInRange(inputElement.value)).toBe(true);

    // Test with input of length 30
    fireEvent.change(inputElement, { target: { value: 'abcdefghijklmnopqrstuvwxyzabc' } });
    expect(isInRange(inputElement.value)).toBe(true);

    // Test with input of length 31 (should be truncated to 30 characters)
    fireEvent.change(inputElement, { target: { value: 'abcdefghijklmnopqrstuvwxyzabcdd' } });
    expect(isInRange(inputElement.value)).toBe(false);
  });
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dream team heading', () => {
  render(<App />);
  // Ми змінили пошук: замість "learn react" шукаємо твій заголовок
  const linkElement = screen.getByText(/My dream team/i);
  expect(linkElement).toBeInTheDocument();
});
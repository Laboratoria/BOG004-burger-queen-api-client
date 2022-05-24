import { render, screen } from '@testing-library/react';
import App from './App';

/*Que la aplicacion cargue y muestre el login */
test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ingresar/i);
  expect(linkElement).toBeInTheDocument();
});

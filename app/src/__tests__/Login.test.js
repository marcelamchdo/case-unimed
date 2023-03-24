import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

describe('LoginForm', () => {
  it('verify the existence of E-mail, Senha and Entrar fields', () => {
    render(<LoginForm/>);
    const usernameInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'example@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
  });
});
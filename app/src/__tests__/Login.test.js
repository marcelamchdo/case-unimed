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

  it('verify Entrar button is disabled', () => {
    render(<LoginForm/>);
    const usernameInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    expect(submitButton).not.toBeEnabled()
  });

  it('verify Entrar button is enabled', () => {
    render(<LoginForm/>);
    const usernameInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'example@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(submitButton).toBeEnabled()
  })
});
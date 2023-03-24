import { render, fireEvent, screen } from '@testing-library/react';
import RegisterForm from '../components/RegisterForm';

describe('RegisterForm', () => {
  it('verify the existence of E-mail, Senha and Entrar fields', () => {
    render(<RegisterForm/>);
    const nameInput = screen.getByLabelText('Nome');
    const usernameInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const checkPasswordInput = screen.getByLabelText('Senha');
    const registerButton = screen.getByText('Cadastrar');
    const backButton = screen.getByText('Volta');

    fireEvent.change(nameInput, { target: { value: 'Marcela' } });
    fireEvent.change(usernameInput, { target: { value: 'example@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(checkPasswordInput, { target: { value: 'password123' } });
    fireEvent.click(registerButton);
    fireEvent.click(backButton);
  });

  it('verify Entrar button is disabled', () => {
    render(<RegisterForm/>);
    const usernameInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    expect(submitButton).not.toBeEnabled()
  });

  it('verify Entrar button is enabled', () => {
    render(<RegisterForm/>);
    const usernameInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'example@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(submitButton).toBeEnabled()
  });

  it('verify Não tenho conta button is always enabled', () => {
    render(<RegisterForm/>);
    const submitButton = screen.getByText('Não tenho conta');
    expect(submitButton).toBeEnabled()
  })
});
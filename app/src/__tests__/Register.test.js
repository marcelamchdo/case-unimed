import { fireEvent, screen } from '@testing-library/react';
import RegisterForm from '../components/RegisterForm';
import { renderWithRouter } from './renderWith';
import { validate } from 'email-validator';

describe('RegisterForm', () => {
  it('verify the existence of all fields in forms', () => {
    renderWithRouter(<RegisterForm/>);
    const nameInput = screen.getByLabelText('Nome');
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const checkPasswordInput = screen.getByLabelText('Confirme sua senha');
    const registerButton = screen.getByText('Cadastrar');

    fireEvent.change(nameInput, { target: { value: 'Marcela' } });
    fireEvent.change(emailInput, { target: { value: 'example@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(checkPasswordInput, { target: { value: 'password123' } });
    fireEvent.click(registerButton);
  });

  it('should disable the Cadastrar button when the form is invalid', () => {
    renderWithRouter(<RegisterForm/>);
    const nameInput = screen.getByLabelText(/Nome/i);
    const emailInput = screen.getByLabelText(/E-mail/i);
    const passwordInput = screen.getByLabelText(/Senha/i);
    const checkPasswordInput = screen.getByLabelText(/Confirme sua senha/i);

    fireEvent.change(nameInput, { target: { value: 'Ma' } });
    fireEvent.change(emailInput, { target: { value: 'examplemplecom' } });
    fireEvent.change(passwordInput, { target: { value: 'password1' } });
    fireEvent.change(checkPasswordInput, { target: { value: 'password123' } });

    const enabled = () => {
      const button = nameInput.value.length > 3 && validate(emailInput.value) && passwordInput.value === checkPasswordInput.value
      return button
     }
    expect(enabled()).toBe(false)
  });

  it('should disable the Cadastrar button when the form is valid', () => {
    renderWithRouter(<RegisterForm/>);
    const nameInput = screen.getByLabelText(/Nome/i);
    const emailInput = screen.getByLabelText(/E-mail/i);
    const passwordInput = screen.getByLabelText(/Senha/i);
    const checkPasswordInput = screen.getByLabelText(/Confirme sua senha/i);

    fireEvent.change(nameInput, { target: { value: 'Marcela' } });
    fireEvent.change(emailInput, { target: { value: 'example@exemple.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(checkPasswordInput, { target: { value: 'password123' } });

    const enabled = () => {
      const button = nameInput.value.length > 3 && validate(emailInput.value) && passwordInput.value === checkPasswordInput.value
      return button
     }
    expect(enabled()).toBe(true)
  });
});
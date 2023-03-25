import { render, fireEvent, screen } from '@testing-library/react';
import RegisterForm from '../components/RegisterForm';
import { validate } from 'email-validator';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();


describe('RegisterForm', () => {
  it('verify the existence of all fields in forms', () => {
    const store = mockStore({user: {message:''}});
    render(
      <Provider store={store}>
        <RegisterForm/>
      </Provider>
    );
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
    const store = mockStore({user: {message:''}});
    render(
      <Provider store={store}>
        <RegisterForm/>
      </Provider>
    );
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
    const store = mockStore({user: {message:''}});
    render(
      <Provider store={store}>
        <RegisterForm/>
      </Provider>
    );
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
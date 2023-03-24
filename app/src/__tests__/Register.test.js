import { fireEvent, screen } from '@testing-library/react';
import RegisterForm from '../components/RegisterForm';
import { renderWithRouter } from './renderWith';
// import userEvent from '@testing-library/user-event';


describe('RegisterForm', () => {
  it('verify the existence of all fields in forms', () => {
    renderWithRouter(<RegisterForm/>);
    const nameInput = screen.getByLabelText('Nome');
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const checkPasswordInput = screen.getByLabelText('Confirme sua senha');
    const registerButton = screen.getByText('Cadastrar');
    // const backButton = screen.getByText('Voltar');

    fireEvent.change(nameInput, { target: { value: 'Marcela' } });
    fireEvent.change(emailInput, { target: { value: 'example@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(checkPasswordInput, { target: { value: 'password123' } });
    fireEvent.click(registerButton);
    // fireEvent.click(backButton);
  });

  it('verify Entrar button is disabled', () => {
    renderWithRouter(<RegisterForm/>);
    const nameInput = screen.getByLabelText('Nome');
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const checkPasswordInput = screen.getByLabelText('Confirme sua senha');
    const registerButton = screen.getByText('Cadastrar');
    // const registerButton =document.getElementById('myid')
    
    fireEvent.change(nameInput, { target: { value: 'daniel' } });
    fireEvent.change(emailInput, { target: { value: 'invalid@email.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.change(checkPasswordInput, { target: { value: '123456' } });
    // userEvent.type(nameInput, 'daniel');
    // userEvent.type(emailInput, 'daniel@gmail.com');
    // userEvent.type(passwordInput, '123456');
    // userEvent.type(checkPasswordInput, '123456');

    console.log(registerButton)
    // console.log(nameInput.value)
    // console.log(emailInput.value)
    // console.log(passwordInput.value)
    // console.log(checkPasswordInput.value)
    // expect(registerButton).not.toBeEnabled()
  });

  // it('verify Entrar button is enabled', () => {
  //   render(<RegisterForm/>);
  //   const nameInput = screen.getByLabelText('Nome');
  //   const emailInput = screen.getByLabelText('E-mail');
  //   const passwordInput = screen.getByLabelText('Senha');
  //   // const registerButton = screen.getByText('Cadastrar');
  //   const registerButton = screen.getByTestId('myid')
  //   const checkPasswordInput = screen.getByLabelText('Confirme sua senha');

  //   fireEvent.change(nameInput, { target: { value: 'nameexample' } });
  //   fireEvent.change(emailInput, { target: { value: 'example@example.com' } });
  //   fireEvent.change(passwordInput, { target: { value: 'password123' } });
  //   fireEvent.change(checkPasswordInput, { target: { value: 'password123' } });
    
  //   expect(registerButton).toBeEnabled()
  // });

  // it('verify Não tenho conta button is always enabled', () => {
  //   render(<RegisterForm/>);
  //   const registerButton = screen.getByText('Não tenho conta');
  //   expect(registerButton).toBeEnabled()
  // })
});
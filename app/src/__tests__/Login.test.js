import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from '../components/LoginForm';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../App'
const mockStore = configureMockStore();


describe('LoginForm', () => {
  it('should render without crashing', () => {
    const store = mockStore({user: {message:''}});
    render(
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
    const usernameInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'example@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
  });
  
  it('verify the existence of E-mail, Senha and Entrar fields', () => {
    const store = mockStore({user: {message:''}});
    render(
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
    const usernameInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'example@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
  });

  it('verify Entrar button is disabled', () => {
    const store = mockStore({user: {message:''}});
    render(
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
    const usernameInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    expect(submitButton).not.toBeEnabled()
  });

  it('verify Entrar button is enabled', () => {
    const store = mockStore({user: {message:''}});
    render(
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
    const usernameInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'example@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(submitButton).toBeEnabled()
  });

  it('verify Não tenho conta button is always enabled', () => {
    const store = mockStore({user: {message:''}});
    render(
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
    const submitButton = screen.getByText('Não tenho conta');
    expect(submitButton).toBeEnabled()
  })
});
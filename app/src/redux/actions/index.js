export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'

export const signupAction = (payload) => ({
  type: SIGNUP,
  payload: payload
});

export const LogEmail = (payload) => ({
  type: LOGIN,
  email: payload.email,
  name: payload.name
})


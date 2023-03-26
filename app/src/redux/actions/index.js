export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'
export const QUERY = 'QUERY'
export const CREATED = 'CREATED'

export const signupAction = (payload) => ({
  type: SIGNUP,
  payload: payload
});

export const LogEmail = (payload) => ({
  type: LOGIN,
  payload: payload
})

export const query = (payload) => ({
  type: QUERY,
  payload: payload
})

export const createdUpdated = (payload) => ({
  type: CREATED,
  payload: payload,
})

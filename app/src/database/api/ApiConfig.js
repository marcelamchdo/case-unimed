const axios = require('axios')

export const Api = () => {
  return axios.create({
    baseURL: 'http://localhost:3000'
  })
}
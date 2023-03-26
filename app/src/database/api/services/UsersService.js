import { Api } from "../ApiConfig"

const getAll = async () => {
  try {
    const {data}  = await Api().get('/users');
    return data; 
  } catch (error) {
    return error.stack
  }
}
const getById = async (id) => {
  try {
    const { data } = await Api().get(`/users/${id}`);
    return data; 
  } catch (error) {
    return error.stack
  }
}
const createUser = async (usersToCreate) => {
  try {
    const { data } = await Api().post('/users', usersToCreate);
    return data; 
  } catch (error) {
    return error.stack
  }
}
const updateById = async (id, dataToUpdate) => {
  try {
    const { data } = await Api().put(`/users/${id}`, dataToUpdate);
    return data; 
  } catch (error) {
    return error.stack
  }
}
const deleteById = async (id) => {
  try {
    await Api().delete(`/users/${id}`);
    return undefined; 
  } catch (error) {
    return error.stack
  }
}

export { 
  getAll,
  createUser,
  getById,
  updateById,
  deleteById,
}
import {render, screen} from '@testing-library/react'
import Users from '../components/Users'
import {Provider} from 'react-redux'
import configureMockStore from 'redux-mock-store'
const mockStore = configureMockStore()

const INITIAL_STATE = {message: '', email: '', name: '', query: '', created: false}

describe('Tests the Users component', () =>{
  it('Verifies table head content when component mounts', () =>{
    const store = mockStore({user: INITIAL_STATE});
    render(
      <Provider store={store}>
        <Users/>
      </Provider>
    );
    const content = ['Nome', 'Email', 'Permissão', 'Status']
    const table = screen.getByRole(/table/i).innerHTML
    content.forEach((i) => expect(table.includes(i)).toBe(true))
  })
})
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createMemoryHistory } from 'history'

import Header from './Header'

jest.mock('./LoginForm', () => ({ LoginFormWithAuth: () => <div>LoginForm content</div> }))
jest.mock('./RegisterForm', () => ({ RegisterFormWithAuth: () => <div>RegisterForm content</div> }))

describe('Header', () => {
  it('renders LoginForm correctly', () => {

    const mockStore = {
      getState: () => { },
      subscribe: () => { },
      dispatch: () => { }
    }
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <Header />
        </Provider>
      </Router>
    );

    fireEvent.click(getByText("Карта"));
    expect(history.location.pathname).toEqual('/map');
    fireEvent.click(getByText("Профиль"));
    expect(history.location.pathname).toEqual('/profile');
    fireEvent.click(getByText("Выйти"));
    expect(history.location.pathname).toEqual('/');
  })
})
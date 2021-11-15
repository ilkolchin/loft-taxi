import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createMemoryHistory } from 'history'

import LoginPart from "./LoginPart";

jest.mock('./LoginForm', () => ({ LoginFormWithAuth: () => <div>LoginForm content</div> }))
jest.mock('./RegisterForm', () => ({ RegisterFormWithAuth: () => <div>RegisterForm content</div> }))

describe('LoginPart', () => {
  it('renders LoginForm correctly', () => {

    const mockStore = {
      getState: () => { },
      subscribe: () => { },
      dispatch: () => { }
    }
    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <LoginPart />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch('LoginForm content')
  })

  it('renders RegisterForm correctly', () => {

    const mockStore = {
      getState: () => { },
      subscribe: () => { },
      dispatch: () => { }
    }
    const history = createMemoryHistory();
    history.push('/signup')

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <LoginPart />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch('RegisterForm content')
  })
})
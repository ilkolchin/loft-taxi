import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createMemoryHistory } from 'history'

import LoginPart from "./LoginPart";

jest.mock('./LoginForm', () => ({ __esModule: true, default: () => <div>LoginForm content</div> }))
jest.mock('./RegisterForm', () => ({ __esModule: true, default: () => <div>RegisterForm content</div> }))

describe('LoginPart', () => {
  it('renders correctly', () => {

    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: true } }),
      subscribe: () => { },
      dispatch: () => { }
    }
    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
          <LoginPart />
      </Router>
    );
    console.log(container.innerHTML);
    expect(container.innerHTML).toMatch('LoginForm content')

  })
})
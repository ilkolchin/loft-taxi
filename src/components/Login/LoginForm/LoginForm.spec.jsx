import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { LoginFormWithAuth } from "./LoginForm";


jest.mock('./LoginFormTemp', () => ({ LoginFormTemp: () => <div>LoginFormTemp content</div> }))

describe('LoginForm', () => {
  it('renders correctly when user is NOT logged in', () => {
    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: false } }),
      subscribe: () => { },
      dispatch: () => { }
    }
    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <LoginFormWithAuth />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch('LoginFormTemp content')
  })

  it('renders correctly when user is logged in', () => {
    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: true } }),
      subscribe: () => { },
      dispatch: () => { }
    }
    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <LoginFormWithAuth />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch('')
  })
})
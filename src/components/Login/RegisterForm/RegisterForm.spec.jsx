import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { RegisterFormWithAuth } from "./RegisterForm";

jest.mock('./RegisterFormTemp', () => ({ RegisterFormTemp: () => <div>RegisterFormTemp content</div> }))

describe('RegisterForm', () => {
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
          <RegisterFormWithAuth />
        </Provider>
      </Router>
    )

    expect(container.innerHTML).toMatch('RegisterFormTemp content')
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
          <RegisterFormWithAuth />
        </Provider>
      </Router>
    )

    expect(container.innerHTML).toMatch('')
  })
})
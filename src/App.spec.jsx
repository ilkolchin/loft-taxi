import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createMemoryHistory } from 'history'

import App from "./App";

jest.mock('./components/Header', () => ({ __esModule: true, default: () => <div>Header content</div> }))
jest.mock('./components/LoginPage', () => ({ __esModule: true, default: () => <div>LoginPage content</div> }))
jest.mock('./components/Profile', () => ({ __esModule: true, default: () => <div>Profile content</div> }))
jest.mock('./components/Map', () => ({ __esModule: true, default: () => <div>Map content</div> }))

describe('App', () => {
  it('renders correctly when logged out', () => {

    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: false } }),
      subscribe: () => { },
      dispatch: () => { }
    }

    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );

    expect(container.innerHTML).toMatch('LoginPage content')
  })

  it('renders correctly when logged in', () => {

    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: true } }),
      subscribe: () => { },
      dispatch: () => { }
    }

    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );

    expect(container.innerHTML).toMatch('LoginPage content')
  })
})
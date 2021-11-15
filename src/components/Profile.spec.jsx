import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import Profile from "./Profile";

jest.mock('./ProfileForm', () => ({ ProfileForm: () => <div>ProfileForm content</div> }))

describe('Profile', () => {
  it('renders correctly when card is not up to date', () => {
    const mockStore = {
      getState: () => ({ card: { isCardUpdated: false } }),
      subscribe: () => { },
      dispatch: () => { }
    }
    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <Profile/>
        </Provider>
      </Router>
    )

    expect(container.innerHTML).toMatch('ProfileForm content')
  })

  it('renders correctly when card is up to date', () => {
    const mockStore = {
      getState: () => ({ card: { isCardUpdated: true } }),
      subscribe: () => { },
      dispatch: () => { }
    }
    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <Profile/>
        </Provider>
      </Router>
    )

    expect(container.innerHTML).toMatch('Перейти на карту')
  })
})
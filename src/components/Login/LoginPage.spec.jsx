import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "./LoginPage";

jest.mock('./HelloPart', () => ({ __esModule: true, default: () => <div>HelloPart content</div> }))
jest.mock('./LoginPart', () => ({ __esModule: true, default: () => <div>LoginPart content</div> }))

describe('LoginPage', () => {
  it('renders HelloPart correctly', () => {
    const {container} = render(<LoginPage />);
    expect(container.innerHTML).toMatch('HelloPart content')
  })

  it('renders LoginPart correctly', () => {
    const { container } = render(<LoginPage />);
    expect(container.innerHTML).toMatch('LoginPart content')
  })
})
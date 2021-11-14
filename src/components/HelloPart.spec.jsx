import React from "react";
import { render } from "@testing-library/react";
import HelloPart from "./HelloPart";


describe('HelloPart', () => {
  it('renders correctly', () => {
    const { container } = render(<HelloPart />)
    expect(container.innerHTML).toMatch('img')
  })
})
import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { LoginFormTemp } from "./LoginFormTemp";

describe('LoginFormTemp', () => {
  describe('on submit', () => {
    it('provides data', async () => {
      const mockAuthenticate = jest.fn();
      const { getByLabelText, getByText } = render(
        <LoginFormTemp useDispatchHook={() => mockAuthenticate} />
      )

      const emailInput = getByLabelText('Email')
      const passwordInput = getByLabelText('Пароль')

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: 'testemail' } })
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } })
        fireEvent.click(getByText('Войти'))
      })

      expect(mockAuthenticate).toBeCalledWith({
        payload: { email: 'testemail', password: 'testpassword' },
        type: 'AUTHENTICATE'
      })
    })
  })
})
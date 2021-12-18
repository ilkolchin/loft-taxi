import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { RegisterFormTemp } from "./RegisterFormTemp";

describe('RegisterFormTemp', () => {
  describe('on submit', () => {
    it('provides data', async () => {
      const mockAuthenticate = jest.fn();
      const { getByLabelText, getByText } = render(
        <RegisterFormTemp useDispatchHook={() => mockAuthenticate} />
      )

      const emailInput = getByLabelText('Email*')
      const passwordInput = getByLabelText('Придумайте пароль*')
      const nameInput = getByLabelText('Имя*')
      const surnameInput = getByLabelText('Фамилия*')

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: 'testemail' } })
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } })
        fireEvent.change(nameInput, { target: { value: 'testname' } })
        fireEvent.change(surnameInput, { target: { value: 'testsurname' } })
        fireEvent.click(getByText('Зарегистрироваться'))
      })

      expect(mockAuthenticate).toBeCalledWith({
        payload: { email: 'testemail', password: 'testpassword', name: 'testname', surname: 'testsurname' },
        type: 'REGISTER'
      })
    })
  })
})
import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { ProfileForm } from "./ProfileForm";

describe('ProfileForm', () => {
  describe('on submit', () => {
    it('provides data', async () => {
      const mockAuthenticate = jest.fn();
      const { getByLabelText, getByText } = render(
        <ProfileForm useDispatchHook={() => mockAuthenticate} />
      )

      const cardNameInput = getByLabelText('Имя владельца')
      const cardNumberInput = getByLabelText('Номер карты')
      const cardDateInput = getByLabelText('MM/YY')
      const cardCvcInput = getByLabelText('CVC')

      await act(async () => {
        fireEvent.change(cardNameInput, { target: { value: 'testcardName' } })
        fireEvent.change(cardNumberInput, { target: { value: 'testcardNumber' } })
        fireEvent.change(cardDateInput, { target: { value: 'testcardDate' } })
        fireEvent.change(cardCvcInput, { target: { value: 'testcardCvc' } })
        fireEvent.click(getByText('Cохранить'))
      })

      expect(mockAuthenticate).toBeCalledWith({
        payload: { cardName: 'testcardName', cardNumber: 'testcardNumber', cardDate: 'testcardDate', cardCvc: 'testcardCvc' },
        type: 'UPDATECARD'
      })
    })
  })
})
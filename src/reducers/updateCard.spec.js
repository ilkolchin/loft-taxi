import card, { initialState } from "./updateCard";
import { CARDADDED } from "../actions";

describe('updateCard reducer', () => {
  it('changes state isCardUpdated to true', () => {
    const action = {
      type:CARDADDED
    }
    expect(card(initialState, action)).toEqual({
      isCardUpdated:true
    })
  })
})
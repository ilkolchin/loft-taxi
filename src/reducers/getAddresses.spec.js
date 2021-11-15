import address, { initialState } from "./getAddresses";
import { GETADDRESSES } from "../actions"

describe('getAddresses reducer', () => {
  it('add array with addresses to action payload', () => {
    const action = {
      type: GETADDRESSES,
      payload: []
    };
    expect(address(initialState, action)).toEqual({
      addresses: []
    })
  })
})
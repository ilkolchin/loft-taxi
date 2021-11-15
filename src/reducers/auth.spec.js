import auth, { initialState } from "./auth";
import { LOG_IN, LOG_OUT } from "../actions";

describe('auth reducer', () => {
  it('sets state isLoggedIn in true', () => {
    const action = {
      type: LOG_IN
    }
    expect(auth(initialState, action)).toEqual({
      isLoggedIn: true
    })
  })
  it('sets state isLoggedIn in false', () => {
    const action = {
      type: LOG_OUT
    }
    expect(auth(initialState, action)).toEqual({
      isLoggedIn: false
    })
  })
})
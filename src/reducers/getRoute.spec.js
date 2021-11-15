import route, { initialState } from "./getRoute";
import { GETROUTE } from '../actions'

describe('getRoute reducer', () => {
  it('add array with route to action payload', () => {
    const action = {
      type: GETROUTE,
      payload:[]
    }
    expect(route(initialState, action)).toEqual({
      route: []
    })
  })
})
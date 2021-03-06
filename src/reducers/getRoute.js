import { CLEARROUTE, GETROUTE } from "../actions"

const initialState = {
  route: []
}

export default function route (state = initialState, action) {
  switch (action.type) {
    case GETROUTE: {
      return {route: action.payload}
    } case CLEARROUTE: {
      return {route: []}
    }
    default: return state;
  }
}
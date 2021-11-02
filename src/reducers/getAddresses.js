import { GETADDRESSES } from "../actions"

const initialState = {
  addresses: []
}

export default function address(state = initialState, action) {
  switch (action.type) {
    case GETADDRESSES: {
      return {addresses: action.payload}
    }
    default: return state;
  }
}
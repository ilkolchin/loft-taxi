import { CARDADDED, CARDCHANGE } from "../actions";

const initialState = {
  isCardUpdated: true
}

export default function card(state = initialState, action) {
  switch (action.type) {
    case CARDADDED: {
      return { isCardUpdated: true }
    }
    case CARDCHANGE: {
      return { isCardUpdated: false }
    }
    default: return state
  }
}
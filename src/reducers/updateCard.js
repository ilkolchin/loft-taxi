import { CARDADDED } from "../actions";

const initialState = {
  isCardUpdated : false
}

export default  function card(state = initialState, action) {
  switch (action.type) {
    case CARDADDED: {
      return {isCardUpdated: true}
    }
    default: return state
  }
}
import { ADDERROR } from "../actions";

const initialState = {
  serverError: {}
}

export default function serverError(state = initialState, action) {
  switch (action.type) {
    case ADDERROR: {
      return { serverError: action.payload }
    }
    default: return state
  }
}
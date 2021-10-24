import { logIn } from "./actions";
import { serverRegister, serverLogin } from "./api";
import { AUTHENTICATE, REGISTER } from "./actions";

export const regMiddleware = (store) => (next) => async (action) => {
  if (action.type === REGISTER) {
    const { email, password, name, surname } = action.payload;
    const success = await serverRegister(email, password, name, surname)
    if (success) {
      store.dispatch(logIn())
    }
  } else {
    next(action)
  }
};

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const success = await serverLogin(email, password)
    if (success) {
      store.dispatch(logIn())
    }
  } else {
    next(action)
  }
};

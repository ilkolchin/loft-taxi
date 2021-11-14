import { call, put, takeEvery } from 'redux-saga/effects';
import { AUTHENTICATE, REGISTER, UPDATECARD, ASKFORCARD, ASKFORADDRESS, ASKFOROUTE } from './actions';
import { logIn, cardAdded, getAddresses, getRoute } from './actions';
import { serverLogin, serverRegister, serverUpdateCard, serverAddressList, serverGetRoute, serverGetCard } from './api';

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const success = yield call(serverLogin, email, password)
  if (success) {
    yield put(logIn())
  }
}

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload;
  const success = yield call(serverRegister, email, password, name, surname)
  if (success) {
    yield put(logIn())
  }
}

export function* updateCardSaga(action) {
  const { cardName, cardNumber, cardDate, cardCvc } = action.payload;
  const success = yield call(serverUpdateCard, cardName, cardNumber, cardDate, cardCvc)
  if (success) {
    yield put(cardAdded());
  }
}

export function* getCardSaga() {
  const { id, cardNumber, expiryDate, cardName, cvc } = yield call(serverGetCard);
  if ((id && cardNumber && expiryDate && cardName && cvc) !== undefined) {
    yield put(cardAdded());
  }
}

export function* getAddressesSaga() {
  const addresses = yield call(serverAddressList);
  yield put(getAddresses(addresses));
}

export function* getRouteSaga(action) {
  const { from, to } = action.payload;
  const route = yield call(serverGetRoute, from, to);
  yield put(getRoute(route));
}


export function* rootSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
  yield takeEvery(REGISTER, registrationSaga)
  yield takeEvery(UPDATECARD, updateCardSaga)
  yield takeEvery(ASKFORCARD, getCardSaga)
  yield takeEvery(ASKFORADDRESS, getAddressesSaga)
  yield takeEvery(ASKFOROUTE, getRouteSaga)
}
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REGISTER = 'REGISTER'

export const UPDATECARD = 'UPDATECARD'
export const CARDADDED = 'CARDADDED'
export const CARDCHANGE = 'CARDCHANGE'
export const ASKFORCARD = 'ASKFORCARD'

export const ASKFORADDRESS = 'ASKFORADDRESS'
export const GETADDRESSES = 'GETADDRESSES'

export const ASKFOROUTE = 'ASKFOROUTE'
export const GETROUTE = 'GETROUTE'
export const CLEARROUTE = 'CLEARROUTE'

export const ADDERROR = 'ADDERROR'




export const logIn = () => ({ type: LOG_IN })
export const logOut = () => ({ type: LOG_OUT })
export const authenticate = (email, password) => ({
  type: AUTHENTICATE, payload: { email, password }
})
export const registrate = (email, password, name, surname) => ({
  type: REGISTER, payload: { email, password, name, surname }
})


export const updateCard = (cardName, cardNumber, cardDate, cardCvc) => ({
  type: UPDATECARD, payload: { cardName, cardNumber, cardDate, cardCvc }
})
export const cardAdded = () => ({ type: CARDADDED })
export const cardChange = () => ({ type: CARDCHANGE })
export const askForCard = () => ({ type: ASKFORCARD })


export const askForAddress = () => ({ type: ASKFORADDRESS })
export const getAddresses = addresses => ({ type: GETADDRESSES, payload: addresses })


export const askForRoute = (from, to) => ({ type: ASKFOROUTE, payload: { from, to } })
export const getRoute = route => ({ type: GETROUTE, payload: route })
export const clearRoute = () => ({ type: CLEARROUTE })


export const addError = error => ({ type: ADDERROR, payload: error })
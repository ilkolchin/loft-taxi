import { recordSaga } from './recordSaga';
import { authenticateSaga, registrationSaga, updateCardSaga, getCardSaga, getAddressesSaga, getRouteSaga } from './sagas'
import { authenticate, register, updateCard, askForCard, askForAddress, askForRoute } from './actions'

jest.mock('./api', () => ({
  serverRegister: () => true,
  serverLogin: () => true,
  serverUpdateCard: () => true,
  serverGetCard: () => {
    const data = { cardName: 'test', expiryDate: 'test', cardNumber: 'test', id: 'test', cvc: 'test' }
    return data
  },
  serverAddressList: () => {
    const data = [];
    return data
  }, 
  serverGetRoute: () => {
    const data = [[],[],[]];
    return data
  },  //data
}))

describe('authenticateSaga', () => {
  describe('#AUTHENTICATE', () => {
    it('authenticates through api', async () => {
      const dispatched = await recordSaga(
        authenticateSaga,
        authenticate('testEmail', 'testPassword')
      )
      expect(dispatched).toEqual([
        {
          type: 'LOG_IN'
        }
      ])
    })
  })
})

describe('registrationSaga', () => {
  describe('#REGISTER', () => {
    it('registrates through api', async () => {
      const dispatched = await recordSaga(
        registrationSaga,
        register('testEmail', 'testPassword', 'testName', 'testSurname')
      )
      expect(dispatched).toEqual([
        {
          type: 'LOG_IN'
        }
      ])
    })
  })
})

describe('updateCardSaga', () => {
  describe('#UPDATECARD', () => {
    it('updates card through api', async () => {
      const dispatched = await recordSaga(
        updateCardSaga,
        updateCard('testCardName', 'testCardNumber', 'testCardDate', 'testCardCvc')
      )
      expect(dispatched).toEqual([
        {
          type: 'CARDADDED'
        }
      ])
    })
  })
})

describe('getCardSaga', () => {
  describe('#ASKFORCARD', () => {
    it('checks if card is up to date through api', async () => {
      const dispatched = await recordSaga(
        getCardSaga,
        askForCard()
      )
      expect(dispatched).toEqual([
        {
          type: 'CARDADDED'
        }
      ])
    })
  })
})

describe('getAddressesSaga', () => {
  describe('#ASKFORADDRESS', () => {
    it('provides addresses through api', async () => {
      const dispatched = await recordSaga(
        getAddressesSaga,
        askForAddress()
      )
      expect(dispatched).toEqual([
        {
          type: 'GETADDRESSES',
          payload: []
        }
      ])
    })
  })
})

describe('getRouteSaga', () => {
  describe('#ASKFOROUTE', () => {
    it('provides route through api', async () => {
      const dispatched = await recordSaga(
        getRouteSaga,
        askForAddress()
      )
      expect(dispatched).toEqual([
        {
          type: 'GETROUTE',
          payload: []
        }
      ])
    })
  })
})
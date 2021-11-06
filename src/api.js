export const serverRegister = async (email, password, name, surname) => {
  let user = {
    email: email,
    password: password,
    name: name,
    surname: surname
  }
  console.log(JSON.stringify(user));

  return fetch(
    'https://loft-taxi.glitch.me/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  ).then(res => res.json()).then(data => {
    localStorage.setItem('token', data.token);
    console.log(data);
    return data.success;
  });
}

export const serverLogin = async (email, password) => {
  let user = {
    email: email,
    password: password
  }
  console.log(JSON.stringify(user));

  return fetch(
    'https://loft-taxi.glitch.me/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  ).then(res => res.json()).then(data => {
    localStorage.setItem('token', data.token);
    console.log(data);
    return data.success;
  });
}

export const serverUpdateCard = async (cardName, cardNumber, cardDate, cardCvc) => {
  let user = {
    cardNumber: cardNumber,
    expiryDate: cardDate,
    cardName: cardName,
    cvc: cardCvc,
    token: localStorage.getItem('token')
  }
  console.log(JSON.stringify(user));

  return fetch(
    'https://loft-taxi.glitch.me/card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  ).then(res => res.json()).then(data => {
    console.log(data);
    return data.success;
  });
}

export const serverGetCard = async () => {
  let token = localStorage.getItem('token');
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`).then(res => res.json()).then(data => {
    console.log(data);
    return data;
  })
}

export const serverAddressList = async () => {
  return fetch('https://loft-taxi.glitch.me/addressList').then(res => res.json()).then(data => {
    return data.addresses
  })
}

export const serverGetRoute = async (from, to) => {
  return fetch(`https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`).then(res => res.json()).then(data => {
    console.log(data);
    return data
  })
}

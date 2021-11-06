import React from "react";
import Card from '@mui/material/Card';
import { CardContent, TextField, Typography, Box, Stack } from "@mui/material";
// import {MCIcon} from 'loft-taxi-mui-theme'
import CardImg from '../img/Group 45.png'
import { connect } from "react-redux";
import { updateCard } from '../actions'
import { Link } from 'react-router-dom';

class Profile extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    const { cardName, cardNumber, cardDate, cardCvc } = event.target;
    this.props.updateCard(
      cardName.value, cardNumber.value, cardDate.value, cardCvc.value
    )
  }

  render() {
    return (
      <div className="Login__inner">
        {!this.props.isCardUpdated ?

          <form onSubmit={this.handleSubmit}>
            <Card sx={{ minWidth: 275, minHeight: 275 }}>
              <CardContent>
                <Typography fontSize='36px' align='center' >Профиль</Typography>
                <Typography fontSize='18px' align='center' gutterBottom >Введите платежные данные</Typography>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={8}
                >
                  <Box sx={{ width: 355 }}>
                    <TextField id="standard-basic" label="Имя владельца" variant="standard" name="cardName" fullWidth />
                    <TextField id="standard-basic" label="Номер карты" variant="standard" name="cardNumber" fullWidth />
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={4}
                    >
                      <TextField id="standard-basic" label="MM/YY" name="cardDate" variant="standard" />
                      <TextField id="standard-basic" label="CVC" name="cardCvc" variant="standard" />
                    </Stack>
                  </Box>
                  <Box>
                    <img src={CardImg} alt="Card" />
                  </Box>
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                ><input type="submit" value="Сохранить" className="Login__submit" /></Stack>
              </CardContent>
            </Card>
          </form>

          :

          <Card sx={{ minWidth: 275, minHeight: 275 }}>
            <CardContent>
              <Typography fontSize='36px' align='center' >Профиль</Typography>
              <Typography fontSize='18px' align='center' gutterBottom >Ваши данные успешно обновлены!</Typography>
              <Stack
                justifyContent="center"
                alignItems="center"
              >
                <Link to='/map' className="Login__submit">Перейти на карту</Link>
              </Stack>
            </CardContent>
          </Card>}
      </div>
    )
  }
}

export default connect(
  (state) => ({ isCardUpdated: state.card.isCardUpdated }),
  { updateCard })
  (Profile);
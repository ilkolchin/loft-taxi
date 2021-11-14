import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { ProfileForm } from "./ProfileForm";

class Profile extends React.Component {

  render() {
    return (
      <div className="Login__inner">
        {!this.props.isCardUpdated ?

          <div className="Profile__wrapper">
            <h1 className="Profile__title">Профиль</h1>
            <h5 className="Profile__subtitle">Введите платежные данные</h5>
            <ProfileForm />
          </div>

          :

          <div className="Profile__wrapper Profile__content">
            <h1 className="Profile__title">Профиль</h1>
            <h5 className="Profile__subtitle">Платёжные данные обновлены. Теперь вы можете заказывать такси.</h5>
            <Link to='/map' className='Login__submit Profile__submit'>Перейти на карту</Link>
          </div>}
      </div>
    )
  }
}

export default connect(
  (state) => ({ isCardUpdated: state.card.isCardUpdated }),
  null
)(Profile);
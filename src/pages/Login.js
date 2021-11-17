import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    // this.enableLoginBtn = this.enableLoginBtn.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.userSubmit = this.userSubmit.bind(this);

    this.state = {
      loginName: '',
      isLoginBtnDisabled: true,
      loading: false,
      member: false,
    };
  }

  onInputChange({ target }) {
    const { value } = target;
    const minNameLength = 3;
    this.setState({
      loginName: value,
      isLoginBtnDisabled: value.length < minNameLength,
    });
  }

  // { ? <Redirect to="/search" /> : <Login />}
  // Crédito da refatoração ao companheiro de turma Eduardo Miyazak
  // enableLoginBtn() {
  //   const { loginName } = this.state;
  //   const minNameLength = 3;
  //   if (loginName.length < minNameLength) {
  //     this.setState({
  //       isLoginBtnDisabled: true,
  //     });
  //   } else {
  //     this.setState({
  //       isLoginBtnDisabled: false,
  //     });
  //   }
  // }

  userSubmit(event) {
    event.preventDefault();
    const { loginName } = this.state;
    this.setState({ loading: true }, () => {
      createUser({ name: loginName })
        .then(() => this.setState({ // .then desenenvolvido com ajuda de Eduardo Miyazaki
          loading: false,
          member: true,
        }));
    });
  }

  render() {
    const { loginName, isLoginBtnDisabled, loading, member } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <lable htmlFor="nameLogin">
            Nome:
            <input
              type="text"
              id="nameLogin"
              name="nameLogin"
              value={ loginName }
              onChange={ this.onInputChange }
              data-testid="login-name-input"
            />
          </lable>
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ isLoginBtnDisabled }
            onClick={ this.userSubmit }
          >
            Entrar
          </button>
          {loading && <Loading />}
          {member && <Redirect to="./search" />}
        </form>
      </div>
    );
  }
}

export default Login;

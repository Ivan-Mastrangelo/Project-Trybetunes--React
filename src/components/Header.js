import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.showMemberName = this.showMemberName.bind(this);
    this.state = {
      loginName: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.showMemberName();
  }

  showMemberName() {
    const { loginName } = this.state;
    this.setState({ loading: true }, async () => {
      const returnMemberName = await getUser(loginName);
      this.setState({
        loginName: returnMemberName.name,
        loading: false,
      });
    });
  }

  render() {
    const { loginName, loading } = this.state;

    return (
      <header data-testid="header-component">
        TrybeTunes
        {loading ? <Loading /> : <h3 data-testid="header-user-name">{loginName}</h3>}
        <nav>
          <Link to="/search" data-testid="link-to-search">Search </Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites </Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </nav>
      </header>
    );
  }
}

export default Header;

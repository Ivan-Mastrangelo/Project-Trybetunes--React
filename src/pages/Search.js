import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      // albumName: '',
      isSearchBtnDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { value } = target;
    const minNameLength = 2;
    this.setState({
      // albumName: value,
      isSearchBtnDisabled: value.length < minNameLength,
    });
  }

  render() {
    const { isSearchBtnDisabled } = this.state;

    return (
      <>
        <div data-testid="page-search">
          <Header />
        </div>
        <form>
          <label htmlFor="requestedAlbum">
            <input
              type="text"
              id="requestedAlbum"
              onChange={ this.onInputChange }
              data-testid="search-artist-input"
            />
          </label>
          <button
            type="submit"
            disabled={ isSearchBtnDisabled }
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
        </form>
      </>
    );
  }
}

export default Search;

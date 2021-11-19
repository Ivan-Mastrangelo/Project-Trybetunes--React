import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

class Search extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.AlbumRequest = this.AlbumRequest.bind(this);

    this.state = {
      artistName: '',
      name: '',
      isSearchBtnDisabled: true,
      loading: false,
      albumsList: [],
    };
  }

  onInputChange({ target }) {
    const { value } = target;
    const minNameLength = 2;
    this.setState({
      isSearchBtnDisabled: value.length < minNameLength,
      artistName: value,
    });
  }

  AlbumRequest(event) {
    event.preventDefault();
    const { artistName } = this.state;
    this.setState({ loading: true }, async () => {
      const returnAlbum = await searchAlbumsAPI(artistName);
      console.log(returnAlbum, artistName);
      this.setState({
        albumsList: [...returnAlbum],
        loading: false,
        name: artistName,
        artistName: '',
      });
    });
  }

  displaySearchResult() {
    const { albumsList, name } = this.state;
    if (albumsList.length > 0) {
      return (
        <div>
          <p>
            {`Resultado de álbuns de: ${name}`}
          </p>
          {albumsList.map(
            ({ collectionName, artworkUrl100, artistName, collectionId }) => (
              <div key={ collectionId }>
                <h4>{ collectionName }</h4>
                <img src={ artworkUrl100 } alt={ collectionName } />
                <h4>{ artistName }</h4>
                <Link
                  to={ `/album/${collectionId}` }
                  data-testid={ `link-to-album-${collectionId}` }
                >
                  Details
                </Link>
              </div>
            ),
          )}
        </div>
      );
    }
    return <p>Nenhum álbum foi encontrado</p>;
  }

  render() {
    const { isSearchBtnDisabled, loading, artistName } = this.state;
    return (
      <>
        <div data-testid="page-search">
          <Header />
        </div>
        <form>
          <label htmlFor="requestedAlbum">
            <input
              type="text"
              value={ artistName }
              id="requestedAlbum"
              onChange={ this.onInputChange }
              data-testid="search-artist-input"
            />
          </label>
          <button
            type="submit"
            disabled={ isSearchBtnDisabled }
            onClick={ this.AlbumRequest }
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
        </form>
        <div>{loading ? <Loading /> : this.displaySearchResult()}</div>
      </>
    );
  }
}

export default Search;

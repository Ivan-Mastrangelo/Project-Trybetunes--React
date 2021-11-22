import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.addTrackToFavorite = this.addTrackToFavorite.bind(this);

    this.state = {
      favoriteCheck: false,
      loading: false,
    };
  }

  async addTrackToFavorite() {
    const { tracks: { trackId } } = this.props;
    this.setState({ loading: true, favoriteCheck: true });
    await addSong(trackId);
    this.setState({ loading: false });
  }

  render() {
    const { favoriteCheck, loading } = this.state;
    const { tracks: { trackName, previewUrl, trackId } } = this.props;
    return (
      <div>
        <span>{ trackName }</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        {loading ? (<Loading />
        ) : (
          <form>
            <label htmlFor="favorite">
              Favorita
              <input
                type="checkbox"
                id={ trackId }
                checked={ favoriteCheck }
                onChange={ this.addTrackToFavorite }
                data-testid={ `checkbox-music-${trackId}` }
              />
            </label>
          </form>)}
      </div>
    );
  }
}

MusicCard.propTypes = {
  tracks: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
};

export default MusicCard;

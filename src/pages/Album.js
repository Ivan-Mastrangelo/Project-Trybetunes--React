import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    const {
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
      releaseDate,
      trackCount,
    } = this.props;
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <h3>{artistName}</h3>
          <h4>{artistId}</h4>
          <h4>{collectionId}</h4>
          <h4>{collectionName}</h4>
          <h4>{collectionPrice}</h4>
          <h4>{artworkUrl100}</h4>
          <h4>{releaseDate}</h4>
          <h4>{trackCount}</h4>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistId: PropTypes.number.isRequired,
  collectionId: PropTypes.number.isRequired,
  collectionName: PropTypes.string.isRequired,
  collectionPrice: PropTypes.number.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  trackCount: PropTypes.number.isRequired,
};

export default Album;

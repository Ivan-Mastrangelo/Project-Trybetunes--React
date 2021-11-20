import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

class Album extends React.Component {
  constructor() {
    super();

    this.getAlbumMusics = this.getAlbumMusics.bind(this);

    this.state = {
      tracks: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getAlbumMusics();
  }

  async getAlbumMusics() {
    const { match: { params } } = this.props;
    this.setState({ loading: true }, async () => {
      const returnTracks = await getMusics(params.id);
      this.setState({
        tracks: returnTracks,
        artistName: returnTracks[0].artistName,
        collectionName: returnTracks[0].collectionName,
        loading: false,
      });
    });
  }

  render() {
    const { artistName, collectionName, tracks, loading } = this.state;
    const allTracks = tracks.filter((track, index) => index !== 0 && track);
    return (
      <div data-testid="page-album">
        <Header />
        {loading ? (<Loading />
        ) : (
          <div>
            <h4 data-testid="artist-name">{ artistName }</h4>
            <h3 data-testid="album-name">{ collectionName }</h3>
            {allTracks.map((track) => (
              <div key={ track.trackNumber }>
                <MusicCard tracks={ track } />
              </div>
            ))}
          </div>)}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './details.css';
import { getSongDetails } from '../../redux/actions';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songsDetails: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } }, getSongDetailsData } = this.props;
    getSongDetailsData(id);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.songsDetails !== prevState.songsDetails) {
      return { songsDetails: nextProps.songsDetails };
    } return null;
  }

  render() {
    const {
      songsDetails: {
        Title, SubTitle, YoutubeUrl, Lyrics, ImageUrl,
      },
    } = this.state;
    return (
      <div className="Container">
        <header className="DetailsHeader">
          <div className="detailContainer">
            <Link to="/">Go Back Home...</Link>
            <p>
              <b>Title: </b>
              {Title}
            </p>
            <p>
              <b>Details: </b>
              {SubTitle}
            </p>
            <p>
              <b>Youtube URL: </b>
              <a href={YoutubeUrl}> Video URL....</a>
            </p>
            <p>
              <b>Lyrics: </b>
              {Lyrics}
            </p>
          </div>
          <div className="imageDetailsContainer">
            <img src={ImageUrl} alt="songs" className="imageDetails" />
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    songsDetails: state.home.songDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSongDetailsData: bindActionCreators(getSongDetails, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  getSongDetailsData: PropTypes.func,
  songsDetails: PropTypes.shape({}),
};

Details.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
  getSongDetailsData: () => {},
  songsDetails: {},
};

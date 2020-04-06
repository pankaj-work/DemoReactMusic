import React from 'react';
import PropTypes from 'prop-types';
import './songListUI.css';

const SongListUI = (params) => (
  <div className="container">
    <div
      onClick={params.onClickHandler}
      className="details"
    >
      <p>
        <b>Title: </b>
        {params.Title}
      </p>
      <p>
        <b>Details: </b>
        {params.SubTitle}
      </p>
    </div>
    <div className="imageContainer">
      <img src={params.ImageUrl} alt="songs" className="image" />
    </div>
  </div>
);

export default SongListUI;

SongListUI.prototype = {
  Title: PropTypes.string.isRequired,
  SubTitle: PropTypes.string.isRequired,
  ImageUrl: PropTypes.string,
  onClickHandler: PropTypes.func,
};

SongListUI.defaultProps = {
  Title: '',
  SubTitle: '',
  ImageUrl: '',
  onClickHandler: () => {},
};

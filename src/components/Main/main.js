import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './main.css';
import { getAllMusicList } from '../../redux/actions';
import homeBanner from '../../assets/images/banner-bg.jpg';
import {SongListUI} from '../Common';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicList: [],
    };
  }

  componentDidMount() {
    const { setInitialData } = this.props;
    setInitialData();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.musicList !== prevState.musicList) {
      return { musicList: nextProps.musicList };
    } return null;
  }

  onClickHandler = (params) => {
    console.log(params.ID);
    const { history } = this.props;
    history && history.push("/details/" + params.ID );
  };

  render() {
    const { musicList } = this.state;
    const items = musicList.map((data) => {
      return (<SongListUI
        Title={data.Title}
        SubTitle={data.SubTitle}
        ImageUrl={data.ImageUrl}
        onClickHandler={() => this.onClickHandler(data)} />);
    });
    return (
      <div className="AppContainer">
        <header className="App-header">
          <img src={homeBanner} alt="Banner" className="App-banner" />
          {items}
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    musicList: state.home.musicList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setInitialData: bindActionCreators(getAllMusicList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  setInitialData: PropTypes.func,
  musicList: PropTypes.shape(),
};

Main.defaultProps = {
  setInitialData: () => {},
  musicList: [],
};

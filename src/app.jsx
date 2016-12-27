import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';
import Moment from 'react-moment';

function Description (props) {
  return <p>This is a photo.</p>;
};

function Photo (props) {
  const sample = `./samples/${props.month}/sample.JPG`;
  return (
    <div className="photo">
      <img className="photo" src={sample} />
    </div>
  );
};
Photo.propTypes = {
  month:  React.PropTypes.string.isRequired
};

function Header (props) {
  return (
    <div className="header">
      <img className="header-photo" src="./samples/header.jpg" />
      <div className="header-text">
        <h1 className="header-title">Yearbum</h1>
        <Description className="header-description" />
      </div>
    </div>
  );
};

function TitleMonth (props) {
  const date = `1900-${props.month}-01 12:00`;
  return <Moment format="MMM">{date}</Moment>;
};
TitleMonth.propTypes = {
  month:  React.PropTypes.string.isRequired
};

function Tile (props) {
  return (
    <div className="tile">
      <Photo month={props.month} />
      <h2 className="photo-title">
        <TitleMonth month={props.month} />
      </h2>
      <Description ></Description>
    </div>
  );
};
Tile.propTypes = {
  month:  React.PropTypes.string.isRequired,
};

class PhotoTiles extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const options = {
      itemSelector: '.tile'
    };
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
      const month = ("0" + i).slice(-2);
      return <Tile key={i} month={month} />;
    });
    return (
      <div className="tiles">
        <Masonry options={options}>
          {list}
        </Masonry>
      </div>
    );
  }
};

class Yearbum extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="yearbum">
        <Header />
        <PhotoTiles />
      </div>
    );
  }
};

ReactDOM.render(
  <Yearbum />,
  document.getElementById('container')
);

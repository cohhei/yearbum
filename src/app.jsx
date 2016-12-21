import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';

function Description (props) {
  return <p>This is a photo.</p>;
};

function Photo (props) {
  return <div className="photo">
      <img className="image" src={props.src} />
      <h2 className="photo-title">{props.title}</h2>
      <Description ></Description>
    </div>;
};
Photo.propTypes = {
  src:    React.PropTypes.string.isRequired,
  title:  React.PropTypes.string.isRequired
};

class PhotoTiles extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const options = {
      itemSelector: '.photo'
    };
    const list = this.props.urls.map((url, i) => {return <Photo key={i} src={url} title={url} />;});
    return <Masonry options={options}>
        {list}
      </Masonry>;
  }
}
PhotoTiles.propTypes = {
  urls: React.PropTypes.array.isRequired
};

const urls = [
  'img1.jpg',
  'img2.jpg',
  'img2.jpg',
  'img1.jpg',
  'img2.jpg',
  'img1.jpg'
];
ReactDOM.render(
  <PhotoTiles urls={urls}/>,
  document.getElementById('container')
);

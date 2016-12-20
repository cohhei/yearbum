import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';

function Photo (props) {
  return <img className="photo" src={props.url} />;
};
Photo.propTypes = {
  url: React.PropTypes.string.isRequired
};

function PhotoList (props) {
  const list = props.urls.map(url => {return <Photo url={url} />;});
  console.log(list);
  return <div>{list}</div>;
};
PhotoList.propTypes = {
  urls: React.PropTypes.array.isRequired
};

class PhotoTiles extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const options = {
      itemSelector: '.photo',
      columnWidth: 180,
    };
    const list = this.props.urls.map((url, i) => {return <img key={i} src={url} width="120" />;});
    return <div id="tile">
      <Masonry options={options}>
        {list}
      </Masonry>
    </div>;
  }
}
PhotoTiles.propTypes = {
  urls: React.PropTypes.array.isRequired
};

const urls = [
  'img.jpg',
  'img.jpg',
  'img.jpg',
  'img.jpg',
  'img.jpg',
  'img.jpg'
];
ReactDOM.render(
  <PhotoTiles urls={urls}/>,
  document.getElementById('container')
);

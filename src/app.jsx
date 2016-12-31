import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';
import Moment from 'react-moment';
import Textarea from 'react-textarea-autosize';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initial
    };

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <Textarea className="description" value={this.state.value} onChange={this.handleChangeText}>
        {this.props.initial}
      </Textarea>
    );
  }
};
Description.propTypes = {
  initial: React.PropTypes.string.isRequired
};

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initial
    };

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <input type="text" id="title" value={this.state.value} onChange={this.handleChangeText} />
    );
  }
};
Title.propTypes = {
  initial: React.PropTypes.string.isRequired
};

const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: `./samples/${props.month}/sample.jpg`
    };

    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  handleChangeFile(e) {
      const files = e.target.files;
      const image_url = createObjectURL(files[0]);
      this.setState({src: image_url});
  }

  render() {
    return (
      <div>
        <label>
          <figure className="photo">
            <img className="photo" src={this.state.src} />
            <figcaption><p>Select Another Photo...</p></figcaption>
          </figure>
          <input type="file" onChange={this.handleChangeFile} accept="image/*" style={{display: "none"}} />
        </label>
      </div>
    );
  }
};
Photo.propTypes = {
  month:  React.PropTypes.string.isRequired
};

function Header (props) {
  return (
    <div id="header">
      <Photo month="header" />
      <div id="header-text">
        <Title initial="Yearbum" />
        <Description initial="This is my favorite photos in the year!" />
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
      <div className="tile-text">
        <h2 className="photo-title">
          <TitleMonth month={props.month} />
        </h2>
        <Description initial="Add description about this photo!"></Description>
      </div>
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

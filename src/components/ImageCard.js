import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgSpan: 0 };
    this.ImgRef = React.createRef();
  }
  componentDidMount() {
    this.ImgRef.current.addEventListener("load", this.setSpand);
  }

  setSpand = () => {
    const imgHeight = this.ImgRef.current.clientHeight;
    const imgSpan = Math.ceil(imgHeight / 10);
    this.setState({ imgSpan });
  };
  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.imgSpan}` }}>
        <a href={this.props.image.links.download} rel="noreferrer" download>
          <img ref={this.ImgRef} src={urls.regular} alt={alt_description} />
        </a>
      </div>
    );
  }
}

export default ImageCard;

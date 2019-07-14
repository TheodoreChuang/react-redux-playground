import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rowSpans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const imageHeight = this.imageRef.current.clientHeight;

    const rowSpans = Math.ceil(imageHeight / 10);

    this.setState({ rowSpans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.rowSpans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

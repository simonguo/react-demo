
import React from 'react';


const ImageFrame = React.createClass({
  propTypes: {
    url: React.PropTypes.string,
    width: React.PropTypes.number,
    onResize: React.PropTypes.func
  },
  getInitialState() {
    return {
      width: this.props.width
    };
  },
  handleZoomIn() {
    const { width } = this.state;
    this.setState({
      width: width + 10
    });
  },
  handleZoomOut() {
    const { width } = this.state;
    this.setState({
      width: width - 10
    });
  },
  render() {

    const { url } = this.props;
    const { width } = this.state;

    const style = {
      width
    };

    return (

      <div className="img-frame" >
        <img src={url} style={style} />
        <button onClick={this.handleZoomIn}> 放大 </button>
        <button onClick={this.handleZoomOut}> 缩小 </button>
      </div>
    );
  }
});

export default ImageFrame;

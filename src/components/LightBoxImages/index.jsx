import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

export default class LightboxImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
    };
  }

  render() {
    const { photoIndex } = this.state;

    return (
      <div>
        {this.props.isOpen && (
          <Lightbox
            mainSrc={this.props.images[photoIndex].url}
            nextSrc={
              this.props.images[(photoIndex + 1) % this.props.images.length].url
            }
            prevSrc={
              this.props.images[
                (photoIndex + this.props.images.length - 1) %
                  this.props.images.length
              ].url
            }
            onCloseRequest={this.props.onClick}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + this.props.images.length - 1) %
                  this.props.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

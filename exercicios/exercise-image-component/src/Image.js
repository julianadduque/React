import React from 'react';
import './style/Image.css';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } id='star'/>;
  }
}

export default Image;
//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Footer.css';

class Footer extends Component {
  static propTypes = {
    license: PropTypes.string
  };

  render() {
    const { license } = this.props;

    return (
      <div className="Footer">
        <p>{license}</p>
      </div>
    );
  }
}

export default Footer;

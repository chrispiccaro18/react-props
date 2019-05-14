import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  clickHandler = () => {
    console.log(this.props.title);
  }

  render() {
    return (
      <button onClick={this.clickHandler}>{this.props.title}</button>
    );
  }
}

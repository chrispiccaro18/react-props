import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';

export default class Button extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  clickHandler = () => {
    console.log(this.props.title);
  }

  render() {
    return (
      <button onClick={this.clickHandler} className={styles[this.props.title]}>{this.props.title}</button>
    );
  }
}

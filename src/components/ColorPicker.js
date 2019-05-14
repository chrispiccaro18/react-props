import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';

export default class Button extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  clickHandler = (event) => {
    console.log(event.target.textContent);
  }

  render() {
    const listItems = this.props.colors.map(color => {
      return <button key={color} onClick={this.clickHandler} className={styles[color]}>{color}</button>;
    });

    return (
      <>
        { listItems }
      </>
    );
  }
}

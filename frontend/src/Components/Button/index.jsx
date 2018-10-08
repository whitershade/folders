import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';


export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    className: '',
  }

  onClick = (e) => {
    const { props: { onClick } } = this;

    e.preventDefault();

    onClick();
  }

  render() {
    const {
      props: { children, className },
      onClick,
    } = this;

    return (
      <button
        type="button"
        onClick={onClick}
        className={`${styles.button} ${className}`}
      >
        {children}
      </button>
    );
  }
}

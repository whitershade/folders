import React, { PureComponent } from 'react';
import styles from './styles.module.css';


export default class Button extends PureComponent {
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
      <a
        href="#"
        onClick={onClick}
        className={`${styles.button} ${className}`}
      >
        {children}
      </a>
    );
  }
}

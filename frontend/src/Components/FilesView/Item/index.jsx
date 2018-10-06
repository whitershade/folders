import React, { PureComponent } from 'react';
import styles from './styles.module.css';


export default class Item extends PureComponent {
  render() {
    const {
      props: { children, onClick, type },
    } = this;

    return (
      <div
        onClick={onClick}
        className={`${styles.item} ${type === 'files' ? styles.file : ''}`}
      >
        { children }
      </div>
    );
  }
}

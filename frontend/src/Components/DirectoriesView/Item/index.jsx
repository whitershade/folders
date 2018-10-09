import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';


export default class Item extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
  }

  static defaultProps = {
    onClick: () => {},
    type: '',
  }

  render() {
    const {
      props: { children, onClick, type },
    } = this;

    return (
      <div
        onClick={onClick}
        tabIndex="0"
        role="button"
        onKeyPress={onClick}
        className={`${styles.item} ${type === 'directories' ? styles.directory : ''}`}
      >
        { children }
      </div>
    );
  }
}

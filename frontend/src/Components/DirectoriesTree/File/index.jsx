import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';


export default class File extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    const { props: { name } } = this;

    return (
      <div className={styles.file}>
        <span>
          {name}
        </span>
      </div>
    );
  }
}

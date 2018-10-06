import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import styles from './styles.module.css';


export default class Files extends PureComponent {
  static propTypes = {
    path: PropTypes.string.isRequired,
    parentId: PropTypes.string.isRequired,
    markDirectoryAsActive: PropTypes.func.isRequired,
    files: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  onClick = id => () => {
    const { props: { markDirectoryAsActive } } = this;

    markDirectoryAsActive(id);
  }

  render() {
    const {
      props: { files, parentId, path },
      onClick,
    } = this;

    return (
      <div>
        <h2 className={styles.title}>{path}</h2>
        <div className={styles.fileView}>
          {parentId ? (
            <Item onClick={onClick(parentId)}>
            ...
            </Item>
          ) : null}
          {
          files.map(({ id, type, name }) => (
            <Item
              key={id}
              onClick={type === 'directories' ? onClick(id) : null}
            >
              { name }
            </Item>
          ))
        }
        </div>
      </div>
    );
  }
}

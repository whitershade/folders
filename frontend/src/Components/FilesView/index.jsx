import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import OpenPermissionsFormButton from '../../Containers/Buttons/OpenPermissionsForm';
import styles from './styles.module.css';


export default class Files extends PureComponent {
  static propTypes = {
    path: PropTypes.string,
    parentId: PropTypes.string,
    activeDirectory: PropTypes.string.isRequired,
    markDirectoryAsActive: PropTypes.func.isRequired,
    files: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
    path: '',
    parentId: '',
  }

  onClick = id => () => {
    const { props: { markDirectoryAsActive } } = this;

    markDirectoryAsActive(id);
  }

  render() {
    const {
      props: {
        files, parentId, path, activeDirectory,
      },
      onClick,
    } = this;

    return (
      <div>
        { activeDirectory ? (
          <div className={styles.title}>
            <h2 className={styles.titleText}>{path}</h2>
            <OpenPermissionsFormButton activeDirectory={activeDirectory} />
          </div>
        ) : null }

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
              type={type}
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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import openedFolder from '../../../Images/opened-folder.svg';
import closedFolder from '../../../Images/closed-folder.svg';
import lockFolder from '../../../Images/lock.svg';
import styles from './styles.module.css';


export default class Folder extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isFolderOpen: PropTypes.bool,
    toggleFolder: PropTypes.func.isRequired,
    markDirectoryAsActive: PropTypes.func.isRequired,
    openEditDerectoryForm: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isFolderOpen: false,
  }

  onFolderClick = () => {
    const { props: { toggleFolder, id } } = this;

    toggleFolder(id);
  }

  onFolderDoubleClick = () => {
    const { props: { markDirectoryAsActive, id } } = this;

    markDirectoryAsActive(id);
  }

  onEditClick = () => {
    const { props: { markDirectoryAsActive, openEditDerectoryForm, id } } = this;

    markDirectoryAsActive(id)();
    openEditDerectoryForm();
  }

  render() {
    const {
      props: {
        name, markDirectoryAsActive, id, active, openEditDerectoryForm, isFolderOpen,
      },
      onEditClick,
      onFolderClick,
      onFolderDoubleClick,
    } = this;


    return (
      <div
        onDoubleClick={onFolderDoubleClick}
        className={`${styles.folder} ${active ? styles.active : ''}`}
      >
        <img
          onClick={onFolderClick}
          className={styles.folderImage}
          src={isFolderOpen ? openedFolder : closedFolder}
        />

        <span onClick={markDirectoryAsActive(id)}>
          {name}
        </span>

        <img
          onClick={onEditClick}
          src={lockFolder}
        />
      </div>
    );
  }
}

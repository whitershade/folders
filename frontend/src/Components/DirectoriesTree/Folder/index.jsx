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

  onFolderIconClick = () => {
    const { props: { toggleFolder, id } } = this;

    toggleFolder(id);
  }

  activateDirectory = () => {
    const { props: { markDirectoryAsActive, id } } = this;

    markDirectoryAsActive(id)();
  }

  onFolderClick = () => {
    const { activateDirectory } = this;

    activateDirectory();
  }

  onEditClick = () => {
    const {
      props: { openEditDerectoryForm },
      activateDirectory,
    } = this;

    activateDirectory();
    openEditDerectoryForm();
  }

  render() {
    const {
      props: { name, active, isFolderOpen },
      onEditClick,
      onFolderClick,
      onFolderIconClick,
    } = this;


    return (
      <div className={`${styles.folder} ${active ? styles.active : ''}`}>
        <div
          className={styles.folderIconImageWrapper}
          tabIndex="0"
          role="button"
          onClick={onFolderIconClick}
          onKeyPress={onFolderIconClick}
        >
          <img
            className={styles.folderImage}
            src={isFolderOpen ? openedFolder : closedFolder}
            alt={`${isFolderOpen ? 'opened folder' : 'closed folder'}`}
          />
        </div>

        <span
          tabIndex="0"
          role="button"
          onClick={onFolderClick}
          onKeyPress={onFolderClick}
          className={styles.folderName}
        >
          {name}
        </span>

        <div
          className={styles.editPermissionsImageWrapper}
          tabIndex="0"
          role="button"
          onClick={onEditClick}
          onKeyPress={onEditClick}
        >
          <img
            src={lockFolder}
            alt="edit permissions"
          />
        </div>
      </div>
    );
  }
}

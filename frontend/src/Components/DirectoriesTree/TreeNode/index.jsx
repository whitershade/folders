import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import File from '../File';
import Folder from '../Folder';
import TreeNodeContainer from '../../../Containers/DirectoriesTree/TreeNode';
import styles from './styles.module.css';


export default class TreeNode extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    children: null,
  }

  render() {
    const {
      props: {
        id,
        type,
        name,
        children,
        activeDirectory,
        markDirectoryAsActive,
        openEditDerectoryForm,
        isFolderOpen,
        openFolders,
        toggleFolder,
      },
    } = this;

    if (type === 'files') return <File id={id} name={name} />;

    return (
      <div>
        <Folder
          id={id}
          name={name}
          isFolderOpen={isFolderOpen}
          openFolders={openFolders}
          toggleFolder={toggleFolder}
          markDirectoryAsActive={markDirectoryAsActive}
          openEditDerectoryForm={openEditDerectoryForm}
          active={id === activeDirectory}
        />
        {
          isFolderOpen
            && (
              <div className={styles.innerPadding}>
                { children.map(child => (
                  <TreeNodeContainer
                    {...child.attributes}
                    key={child.id}
                    id={child.id}
                    type={child.type}
                    activeDirectory={activeDirectory}
                    markDirectoryAsActive={markDirectoryAsActive}
                    openEditDerectoryForm={openEditDerectoryForm}
                    toggleFolder={toggleFolder}
                  />
                ))}
              </div>
            )
          }
      </div>
    );
  }
}

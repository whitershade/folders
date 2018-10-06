import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import TreeNode from '../../Containers/DirectoriesTree/TreeNode';
import styles from './styles.module.css';


export default class DirectoriesTree extends PureComponent {
  static propTypes = {
    loadData: PropTypes.func.isRequired,
    openEditDerectoryForm: PropTypes.func.isRequired,
    markDirectoryAsActive: PropTypes.func.isRequired,
    activeDirectory: PropTypes.string,
    structure: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
    activeDirectory: '',
  }

  componentDidMount() {
    const { loadData } = this.props;

    loadData();
  }

  render() {
    const {
      structure,
      activeDirectory,
      markDirectoryAsActive,
      openEditDerectoryForm,
      isLoading,
    } = this.props;

    if (isLoading) return <Loading />;

    return (
      <div className={styles.directoriesTree}>
        {structure.map(({ id, type, attributes }) => (
          <TreeNode
            {...attributes}
            id={id}
            key={id}
            type={type}
            activeDirectory={activeDirectory}
            markDirectoryAsActive={markDirectoryAsActive}
            openEditDerectoryForm={openEditDerectoryForm}
          />
        ))}
      </div>
    );
  }
}

import { connect } from 'react-redux';
import {
  loadItems as loadDirectories,
  markItemAsActive as markDirectoryAsActive,
} from '../../Actions/Directories';
import { openEditDerectoryForm } from '../../Actions/App';
import Component from '../../Components/DirectoriesTree';


const mapStateToProps = state => ({
  isLoading: state.directories.isLoading,
  structure: state.directories.structure,
  activeDirectory: state.directories.activeDirectory,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => {
    dispatch(loadDirectories());
  },
  markDirectoryAsActive: id => () => dispatch(markDirectoryAsActive(id)),
  openEditDerectoryForm: () => dispatch(openEditDerectoryForm()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Component);

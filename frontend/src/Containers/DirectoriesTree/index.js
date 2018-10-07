import { connect } from 'react-redux';
import {
  loadItems as loadDirectories,
  markItemAsActive as markDirectoryAsActive,
} from '../../Actions/Directories';
import { openEditDerectoryForm } from '../../Actions/App';
import Component from '../../Components/DirectoriesTree';
import Selector from '../../Selectors/DirectoriesTree';


const mapDispatchToProps = dispatch => ({
  loadData: () => {
    dispatch(loadDirectories());
  },
  markDirectoryAsActive: id => () => dispatch(markDirectoryAsActive(id)),
  openEditDerectoryForm: () => dispatch(openEditDerectoryForm()),
});


export default connect(Selector, mapDispatchToProps)(Component);

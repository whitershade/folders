import { connect } from 'react-redux';
import {
  loadItems as loadDirectories,
  markItemAsActive as markDirectoryAsActive,
} from '../../Actions/Directories';
import Component from '../../Components/DirectoriesTree';
import Selector from '../../Selectors/DirectoriesTree';


const mapDispatchToProps = dispatch => ({
  loadData: () => {
    dispatch(loadDirectories());
  },
  markDirectoryAsActive: id => () => dispatch(markDirectoryAsActive(id)),
});


export default connect(Selector, mapDispatchToProps)(Component);

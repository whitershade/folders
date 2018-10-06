import { connect } from 'react-redux';
import { toggleFolder } from '../../Actions/Directories';
import Selector from '../../Selectors/DirectoriesTree/TreeNode';
import Component from '../../Components/DirectoriesTree/TreeNode';


const mapDispatchToProps = dispatch => ({
  toggleFolder: id => dispatch(toggleFolder(id)),
});


export default connect(Selector, mapDispatchToProps)(Component);

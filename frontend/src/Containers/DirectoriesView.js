import { connect } from 'react-redux';
import Component from '../Components/DirectoriesView';
import { markItemAsActive as markDirectoryAsActive } from '../Actions/Directories';
import Selector from '../Selectors/FilesView';


const mapDispatchToProps = dispatch => ({
  markDirectoryAsActive: id => dispatch(markDirectoryAsActive(id)),
});


export default connect(Selector, mapDispatchToProps)(Component);

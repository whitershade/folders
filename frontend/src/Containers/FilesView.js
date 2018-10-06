import { connect } from 'react-redux';
import Component from '../Components/FilesView';
import { markItemAsActive as markDirectoryAsActive } from '../Actions/Directories';


const mapStateToProps = (state) => {
  const result = { files: [], parentId: '', path: '' };

  if (state.directories.activeDirectory) {
    result.files = state.directories.data[state.directories.activeDirectory].attributes.children;
    result.parentId = state.directories.data[state.directories.activeDirectory].attributes.parentId;
    result.path = state.directories.data[state.directories.activeDirectory].attributes.path;
  }

  return { ...result };
};

const mapDispatchToProps = dispatch => ({
  markDirectoryAsActive: id => dispatch(markDirectoryAsActive(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Component);

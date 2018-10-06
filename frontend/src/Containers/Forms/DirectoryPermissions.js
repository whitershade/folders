import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { closeEditDirectoryForm } from '../../Actions/App';
import { loadItems as loadUsers } from '../../Actions/Users';
import { updatePermissions } from '../../Actions/Directories';
import { loadItems as loadPermissions } from '../../Actions/Permissions';
import Selector from '../../Selectors/Forms/DirectoryPermissions';
import Component from '../../Components/Forms/DirectoryPermissions';


const Form = reduxForm({
  form: 'DirectoryPermissions',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true, // fix issue "Redux Form - initialValues not updating with state" (http://stackoverflow.com/questions/38881324/redux-form-initialvalues-not-updating-with-state)
  updateUnregisteredFields: true,
  onSubmit: ({ permissions }, dispatch, { editId }) => {
    dispatch(closeEditDirectoryForm());
    dispatch(updatePermissions(editId, permissions));
  },
})(Component);

const mapDispatchToProps = dispatch => ({
  loadData: () => {
    dispatch(loadUsers());
    dispatch(loadPermissions());
  },
  closeEditDirectoryForm: () => dispatch(closeEditDirectoryForm()),
});


export default connect(Selector, mapDispatchToProps)(Form);

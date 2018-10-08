import { connect } from 'react-redux';
import Component from '../../Components/Buttons/OpenPermissionsForm';
import { openEditDerectoryForm } from '../../Actions/App';
import { markItemAsActive as markDirectoryAsActive } from '../../Actions/Directories';


const mergeProps = (props, { dispatch }, ownProps) => ({
  ...props,
  ...ownProps,
  onClick: () => {
    dispatch(markDirectoryAsActive(ownProps.activeDirectory));
    dispatch(openEditDerectoryForm());
  },
});


export default connect(null, null, mergeProps)(Component);

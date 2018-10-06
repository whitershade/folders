import { connect } from 'react-redux';
import Component from '../Components/App';


const mapStateToProps = state => ({
  isDirectoryFormOpen: state.app.isDirectoryFormOpen,
});


export default connect(mapStateToProps)(Component);

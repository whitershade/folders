import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';
import Loading from '../../Loading';
import Button from '../../Buttons/Default';
import Permissions from './Permissions';
import styles from './styles.module.css';


export default class DirectoryPemissionsForm extends PureComponent {
  static propTypes = {
    formName: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    closeEditDirectoryForm: PropTypes.func.isRequired,
    loadData: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    permissions: PropTypes.arrayOf(PropTypes.object).isRequired,
    allUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    isPushing: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    const { props: { loadData } } = this;

    loadData();
  }

  render() {
    const {
      props: {
        users,
        allUsers,
        formName,
        isLoading,
        isPushing,
        permissions,
        handleSubmit,
        closeEditDirectoryForm,
      },
    } = this;

    if (isLoading || isPushing) return <Loading />;

    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>
          Permissions for
          {' '}
          { formName }
        </h2>

        <FieldArray
          name="permissions"
          users={users}
          allUsers={allUsers}
          component={Permissions}
          permissions={permissions}
        />

        <div className={styles.buttons}>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={closeEditDirectoryForm}>
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications';
import DirectoriesView from '../../Containers/DirectoriesView';
import DirectoriesTree from '../../Containers/DirectoriesTree';
import DirectoryPermissionsForm from '../../Containers/Forms/DirectoryPermissions';
import styles from './styles.module.css';


export default class App extends PureComponent {
  static propTypes = {
    isDirectoryFormOpen: PropTypes.bool.isRequired,
  }

  render() {
    const { props: { isDirectoryFormOpen } } = this;

    return (
      <div className={styles.container}>
        <Notifications />
        <div className={styles.wrapper}>
          <aside className={styles.aside}>
            <DirectoriesTree />
          </aside>
          <main className={styles.main}>
            { isDirectoryFormOpen ? <DirectoryPermissionsForm /> : <DirectoriesView /> }
          </main>
        </div>
      </div>
    );
  }
}

/* eslint-disable no-shadow */
import { createSelector, createStructuredSelector } from 'reselect';
import { map, get, reduce } from 'lodash';


const users = ({ users: { data = [] } }) => data;
const usersIsLoading = ({ users: { isLoading } }) => isLoading;
const permissionsIsLoading = ({ permissions: { isLoading } }) => isLoading;
const permissions = ({ permissions: { data } }) => data;
const isPushing = ({ directories: { isPushing } }) => isPushing;
const formValues = ({ form }) => get(form, 'DirectoryPermissions.values.permissions');
const editId = ({ directories: { activeDirectory } }) => activeDirectory;
const directories = ({ directories: { data } }) => data;

const isLoading = createSelector(
  [usersIsLoading, permissionsIsLoading],
  (usersIsLoading, permissionsIsLoading) => usersIsLoading || permissionsIsLoading,
);

const usersOptions = createSelector(
  [users, formValues],
  (users, formValues = []) => {
    const unavailableUsers = formValues.reduce(
      (result, user) => ({ ...result, [user.email]: true }),
      {},
    );

    return reduce(users, (result, { attributes: { email, name } }) => {
      if (!unavailableUsers[email]) {
        result.push({
          value: email,
          label: `${name} (${email})`,
        });
      }

      return result;
    }, []);
  },
);

const allUsersOptions = createSelector(
  [users],
  users => map(users, ({ attributes: { email, name } }) => ({ value: email, label: `${name} (${email})` })),
);

const permissionsOptions = createSelector(
  [permissions],
  permissions => map(permissions, ({ id, attributes: { name } }) => ({
    value: id,
    label: name,
  })),
);

const initialValues = createSelector(
  [directories, editId],
  (directories, editId) => ({ permissions: directories[editId].attributes.permissions }),
);

const formName = createSelector(
  [directories, editId],
  (directories, editId) => directories[editId].attributes.path,
);

export default createStructuredSelector({
  editId,
  formName,
  isLoading,
  isPushing,
  initialValues,
  users: usersOptions,
  allUsers: allUsersOptions,
  permissions: permissionsOptions,
});

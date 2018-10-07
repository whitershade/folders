/* eslint-disable no-shadow */
import { createSelector, createStructuredSelector } from 'reselect';
import { find, get, isEmpty } from 'lodash';
import getStructure from '../Utils/getStructure';


const files = ({ directories: { files } }) => files;
const directories = ({ directories: { data } }) => data;
const activeDirectory = ({ directories: { activeDirectory } }) => activeDirectory;

const currentDirectory = createSelector(
  [directories, activeDirectory],
  (directories, activeDirectory) => directories[activeDirectory] || {},
);

const path = createSelector(
  [currentDirectory],
  currentDirectory => get(currentDirectory, 'attributes.path'),
);

const foldersAndFiles = createSelector(
  [directories, files, currentDirectory],
  (directories, files, currentDirectory) => {
    if (isEmpty(currentDirectory)) return [];

    return currentDirectory.attributes.children.map(({
      id: childId,
      type: childType,
    }) => {
      const {
        id,
        type,
        attributes: { name },
      } = childType === 'files' ? files[childId] : directories[childId];

      return { id, type, name };
    });
  },
);

const structure = createSelector(
  [directories, files],
  (directories, files) => getStructure(directories, files),
);

const parentId = createSelector(
  [currentDirectory, directories],
  (currentDirectory, directories) => {
    const parentDirectory = find(
      directories,
      ({ attributes: { children } }) => children.find(
        ({ id, type }) => id === currentDirectory.id && type === 'directories',
      ),
    );

    return get(parentDirectory, 'id');
  },
);


export default createStructuredSelector({
  path,
  parentId,
  structure,
  activeDirectory,
  files: foldersAndFiles,
});

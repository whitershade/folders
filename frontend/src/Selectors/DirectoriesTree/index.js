/* eslint-disable no-shadow */
import { createSelector, createStructuredSelector } from 'reselect';
import getStructure from '../../Utils/getStructure';


const isLoading = ({ directories: { isLoading } }) => isLoading;
const activeDirectory = ({ directories: { activeDirectory } }) => activeDirectory;
const directories = ({ directories: { data } }) => data;
const files = ({ directories: { files } }) => files;

const structure = createSelector(
  [directories, files],
  (directories, files) => getStructure(directories, files),
);


export default createStructuredSelector({
  isLoading,
  structure,
  activeDirectory,
});

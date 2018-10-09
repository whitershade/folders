/* eslint-disable no-shadow */
import { createSelector, createStructuredSelector } from 'reselect';
import { get } from 'lodash';


const id = (state, { id }) => id;
const directories = ({ directories: { data } }) => data;

const isFolderOpen = createSelector(
  [id, directories],
  (id, directories) => get(directories[id], 'attributes.isFolderOpen'),
);


export default createStructuredSelector({
  isFolderOpen,
});

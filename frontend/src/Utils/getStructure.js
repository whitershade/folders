import { forEach, isEmpty, differenceWith } from 'lodash';

const getFolderChildren = (folders, folderId, files) => {
  const initialChildren = folders[folderId].attributes.children;

  if (isEmpty(initialChildren)) return folders[folderId];

  const children = initialChildren.map(({ id, type }) => {
    if (type === 'files') return files[id];

    return getFolderChildren(folders, id, files);
  });

  return {
    ...folders[folderId],
    attributes: {
      ...folders[folderId].attributes,
      children,
    },
  };
};

export default function getStructure(folders, files) {
  const foldersIds = [];
  const notHighLevelFoldersIds = [];

  forEach(folders, (folder) => {
    foldersIds.push(folder.id);

    if (!isEmpty(folder.attributes.children)) {
      forEach(folder.attributes.children, ({ id, type }) => {
        if (type === 'directories') notHighLevelFoldersIds.push(id);
      });
    }
  });

  const highLevelFolders = differenceWith(foldersIds, notHighLevelFoldersIds);

  return highLevelFolders.map(folderId => getFolderChildren(folders, folderId, files));
}

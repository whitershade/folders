export default function openPathDirectory(directories, id) {
  const directory = directories[id];
  const { attributes: { parentId } } = directories[id];

  const directoryWithOpenedFolder = {
    ...directory,
    attributes: {
      ...directory.attributes,
      isFolderOpen: true,
    },
  };

  if (parentId) {
    return {
      ...openPathDirectory(directories, parentId),
      [directoryWithOpenedFolder.id]: directoryWithOpenedFolder,
    };
  }

  return { [directoryWithOpenedFolder.id]: directoryWithOpenedFolder };
}

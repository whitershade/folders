import { forEach } from 'lodash';


export default function addParentIds(directories) {
  const directoriesWithParentId = {};

  forEach(directories, ({ id: parentId, attributes: { children } }) => {
    forEach(children, ({ id, type }) => {
      if (type === 'directories') {
        directoriesWithParentId[id] = {
          ...directories[id],
          attributes: {
            ...directories[id].attributes,
            parentId,
          },
        };
      }
    });
  });

  return { ...directories, ...directoriesWithParentId };
}

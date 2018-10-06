const parentId = [''];

export default function getFolders(structure) {
  return structure.reduce((result, item) => {
    if (item.type !== 'directories') return result;
    parentId.push(item.id);

    const folder = {
      ...result,
      [item.id]: {
        ...item,
        attributes: {
          ...item.attributes,
          isFolderOpen: false,
          parentId: parentId[parentId.length - 2],
          children: item.attributes.children.map((
            { id, type, attributes: { name } },
          ) => ({
            id, type, name,
          })),
        },
      },
      ...getFolders(item.attributes.children),
    };

    parentId.pop();

    return folder;
  }, {});
}

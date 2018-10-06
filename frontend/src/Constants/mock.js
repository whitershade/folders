export const structure = [
  {
    id: '1',
    type: 'directories',
    attributes: {
      path: 'photos',
      name: 'photos',
      size: 600,
      permissions: [],
      children: [
        {
          id: '2',
          type: 'directories',
          attributes: {
            path: 'photos/summer',
            name: 'summer',
            size: 400,
            permissions: [
              { email: 'user1@email.com', permission: '1' },
              { email: 'user2@email.com', permission: '2' },
            ],
            children: [
              {
                id: '3',
                type: 'directories',
                attributes: {
                  path: 'photos/summer/june',
                  name: 'june',
                  size: 400,
                  permissions: [
                    { email: 'user1@email.com', permission: '1' },
                    { email: 'user2@email.com', permission: '2' },
                  ],
                  children: [
                    {
                      id: '1',
                      type: 'files',
                      attributes: {
                        path: 'photos/summer/june/windsurf.jpg',
                        name: 'windsurf.jpg',
                        size: 400,
                        extension: '.jpg',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: '4',
          type: 'directories',
          attributes: {
            path: 'photos/winter',
            name: 'winter',
            size: 200,
            children: [
              {
                id: '5',
                type: 'directories',
                attributes: {
                  path: 'photos/winter/january',
                  name: 'january',
                  size: 200,
                  permissions: [],
                  children: [
                    {
                      id: '2',
                      type: 'files',
                      attributes: {
                        path: 'photos/winter/january/ski.png',
                        name: 'ski.png',
                        size: 100,
                        extension: '.png',
                      },
                    },
                    {
                      id: '3',
                      type: 'files',
                      attributes: {
                        path: 'photos/winter/january/snowboard.jpg',
                        name: 'snowboard.jpg',
                        size: 100,
                        extension: '.jpg',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: '6',
    type: 'directories',
    attributes: {
      path: 'music',
      name: 'music',
      size: 700,
      permissions: [
        { email: 'user1@email.com', permission: '1' },
        { email: 'user2@email.com', permission: '2' },
      ],
      children: [
        {
          id: '7',
          type: 'directories',
          attributes: {
            path: 'music/SOAD',
            name: 'SOAD',
            size: 400,
            permissions: [
              { email: 'user1@email.com', permission: '1' },
              { email: 'user2@email.com', permission: '2' },
            ],
            children: [
              {
                id: '8',
                type: 'directories',
                attributes: {
                  path: 'music/SOAD/Toxicity',
                  name: 'Toxicity',
                  size: 400,
                  permissions: [
                    { email: 'user1@email.com', permission: '1' },
                    { email: 'user2@email.com', permission: '2' },
                  ],
                  children: [
                    {
                      id: '4',
                      type: 'files',
                      attributes: {
                        path: 'music/SOAD/Toxicity/Prison Song.mp3',
                        name: 'Prison Song.mp3',
                        size: 400,
                        extension: '.mp3',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: '9',
          type: 'directories',
          attributes: {
            path: 'music/Liser',
            name: 'Liser',
            size: 200,
            permissions: [
              { email: 'user1@email.com', permission: '1' },
              { email: 'user2@email.com', permission: '2' },
            ],
            children: [
              {
                id: '10',
                type: 'directories',
                attributes: {
                  path: 'music/Liser/TEENAGE LOVE',
                  name: 'TEENAGE LOVE',
                  size: 200,
                  permissions: [
                    { email: 'user1@email.com', permission: '1' },
                    { email: 'user2@email.com', permission: '2' },
                  ],
                  children: [
                    {
                      id: '5',
                      type: 'files',
                      attributes: {
                        path: 'music/Liser/TEENAGE LOVE/Послушай.mp3',
                        name: 'Послушай.mp3',
                        size: 100,
                        extension: '.mp3',
                      },
                    },
                    {
                      id: '6',
                      type: 'files',
                      attributes: {
                        path: 'music/Liser/TEENAGE LOVE/Пачка Сигарет.mp3',
                        name: 'Пачка Сигарет.mp3',
                        size: 100,
                        extension: '.mp3',
                      },
                    },
                  ],
                },
              },
              {
                id: '11',
                type: 'directories',
                attributes: {
                  path: 'music/Liser/Empty folder',
                  name: 'Empty folder',
                  size: 0,
                  permissions: [],
                  children: [],
                },
              },
            ],
          },
        },
      ],
    },
  },
];

export const users = {
  1: {
    id: '1',
    type: 'users',
    attributes: {
      email: 'user1@email.com',
      name: 'user1',
    },
  },
  2: {
    id: '2',
    type: 'users',
    attributes: {
      email: 'user2@email.com',
      name: 'user2',
    },
  },
  3: {
    id: '3',
    type: 'users',
    attributes: {
      email: 'user3@email.com',
      name: 'user3',
    },
  },
};

export const permissions = {
  1: {
    id: '1',
    type: 'permissions',
    attributes: {
      name: 'RO',
    },
  },
  2: {
    id: '2',
    type: 'permissions',
    attributes: {
      name: 'RW',
    },
  },
};

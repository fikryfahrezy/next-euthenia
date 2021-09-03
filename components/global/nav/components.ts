const components = [
  {
    id: '1',
    isSubLink: true,
    link: '/',
    title: 'work',
    sublink: [
      {
        id: '1',
        link: '/work/sct',
        title: 'slider centered title',
      },
      {
        id: '2',
        link: '/work/sci',
        title: 'slider centered image',
      },
      {
        id: '3',
        link: '/work/sbt',
        title: 'slider bottom title',
      },
      {
        id: '4',
        link: '/work/revealer',
        title: 'slice revealer',
      },
      {
        id: '5',
        link: '/work/masonry',
        title: 'masonry version',
      },
    ],
  },
  {
    id: '2',
    isSubLink: false,
    link: '/studio',
    title: 'studio',
    sublink: [],
  },
  {
    id: '3',
    isSubLink: false,
    link: '/news',
    title: 'news',
    sublink: [],
  },
  {
    id: '4',
    isSubLink: false,
    link: '/contact',
    title: 'contact',
    sublink: [],
  },
];

export default components;

export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/wsasouza.png',
      name: 'Walter Santos de Andrade Souza',
      role: 'Fullstack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-06 20:13:42'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content: 'Acabei de atualizar a trilha ReactJS do Ignite 🚀',
      },
      { type: 'link', content: '👉 app.rocketseat/ignite' },
    ],
    publishedAt: new Date('2022-06-03 14:15:22'),
  },
];

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

//author: {avatar_url:"", name:"", role:""}
// publishedAt: Date
// content: String

const posts = [
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
      name: 'Walter Santos de Andrade Souza',
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

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/wsasouza.png" alt="foto do usuário" />
          <div className={styles.authorInfo}>
            <strong>Walter Souza</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time title="03 de junho às 17:00" dateTime="2022-06-03 17:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea placeholder="Deixe o seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}

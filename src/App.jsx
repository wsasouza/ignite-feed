import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>Posts</main>
      </div>
    </div>
  );
}

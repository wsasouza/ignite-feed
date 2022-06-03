import { useState } from 'react';
import { Header } from './components/Header';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <p>Hello Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
    </div>
  );
}

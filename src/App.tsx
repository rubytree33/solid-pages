import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.scss';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <button class={styles.texture1}>button</button>
      </header>
    </div>
  );
};

export default App;

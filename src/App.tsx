import type { Component } from 'solid-js';
import styles from '@/styles/App.module.css';
import GrainBackground from './components/GrainBackground.tsx';

const App: Component = () => {
  return (
    <>
      <GrainBackground />
      <div class={styles.App}>
        <header class={styles.header}>
          <TestComponent/>
        </header>
      </div>
    </>
    
  );
};

function TestComponent() {
  return <div class='text-3xl font-bold underline'>Test</div>
}

export default App;

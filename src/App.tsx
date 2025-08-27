import type { Component } from 'solid-js';
import GrainBackground from './components/GrainBackground.tsx';

const App: Component = () => {
  return (
    <>
      <GrainBackground />
      <div>
        <header>
          <TestComponent/>
        </header>
      </div>
    </>
    
  );
};

function TestComponent() {
  return <p>Test</p>
}

export default App;

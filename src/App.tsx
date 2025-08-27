import type { Component } from 'solid-js';
import GrainBackground from '@/components/GrainBackground.tsx';
import Hero from '@/components/Hero.tsx';

const App: Component = () => {
  return (
    <>
      <GrainBackground />
      <div>
        <header>
          <Hero text="test text" />
        </header>
      </div>
    </>
    
  );
};


export default App;

import type { Component } from 'solid-js';
import GrainBackground from '@/components/GrainBackground.tsx';
import Hero from '@/components/Hero.tsx';
import Projects from '@/components/Projects.tsx';

const App: Component = () => {
  return (
    <>
      <GrainBackground />
      <div>
        <header>
          <Hero title="jay hawkins" subtitle="software engineer & student"/>
          <Projects />
        </header>
      </div>
    </>
    
  );
};


export default App;

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere';
import { MusicToggle } from './components/MusicToggle';
import { Scene01Mystery } from './components/scenes/Scene01Mystery';
import { Scene02NameReveal } from './components/scenes/Scene02NameReveal';
import { Scene03IdentityCheck } from './components/scenes/Scene03IdentityCheck';
import { Scene04Quiz } from './components/scenes/Scene04Quiz';
import { Scene05EmotionalShift } from './components/scenes/Scene05EmotionalShift';
import { Scene06ThreeSisters } from './components/scenes/Scene06ThreeSisters';
import { Scene07RakhiReveal } from './components/scenes/Scene07RakhiReveal';
import { Scene08GiftReveal } from './components/scenes/Scene08GiftReveal';
import { Scene09FinalLetter } from './components/scenes/Scene09FinalLetter';

function App() {
  const [currentScene, setCurrentScene] = useState(1);
  const [sisterName, setSisterName] = useState('');

  const handleNameComplete = (name: string) => {
    setSisterName(name);
    setCurrentScene(2);
  };

  const nextScene = () => {
    setCurrentScene(prev => prev + 1);
  };

  return (
    <div className="relative min-h-screen w-full bg-brand-dark overflow-hidden">
      <BackgroundAtmosphere />
      <MusicToggle />
      
      {/* Subtle Progress Indicator */}
      {currentScene > 1 && currentScene < 9 && (
        <div className="fixed bottom-6 right-6 z-50 font-sans text-xs text-brand-gold/30 tracking-[0.3em]">
          0{currentScene} / 09
        </div>
      )}

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentScene === 1 && (
            <Scene01Mystery key="scene1" onComplete={handleNameComplete} />
          )}
          {currentScene === 2 && (
            <Scene02NameReveal key="scene2" name={sisterName} onNext={nextScene} />
          )}
          {currentScene === 3 && (
            <Scene03IdentityCheck key="scene3" name={sisterName} onNext={nextScene} />
          )}
          {currentScene === 4 && (
            <Scene04Quiz key="scene4" onNext={nextScene} />
          )}
          {currentScene === 5 && (
            <Scene05EmotionalShift key="scene5" onNext={nextScene} />
          )}
          {currentScene === 6 && (
            <Scene06ThreeSisters key="scene6" onNext={nextScene} />
          )}
          {currentScene === 7 && (
            <Scene07RakhiReveal key="scene7" name={sisterName} onNext={nextScene} />
          )}
          {currentScene === 8 && (
            <Scene08GiftReveal key="scene8" onNext={nextScene} />
          )}
          {currentScene === 9 && (
            <Scene09FinalLetter key="scene9" name={sisterName} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;

import { useState, useRef } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

function App() {
  const [answered, setAnswered] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 120;
    const buttonHeight = 48;
    
    // Calculate safe boundaries
    const maxX = container.width - buttonWidth - 40;
    const maxY = container.height - buttonHeight - 40;
    
    // Generate random position within safe boundaries
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setAnswered(true);
  };

  if (answered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-white p-4">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
          <div className="space-y-4">
            <Heart className="w-16 h-16 mx-auto text-rose-500 fill-rose-500 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-rose-600 leading-tight">
              That's the best decision you've ever made❤️
            </h1>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-200 bg-white">
            <img 
              src="/assets/generated/valentine-meme.dim_1200x1200.png" 
              alt="Valentine celebration"
              className="w-full h-auto"
            />
          </div>
          
          <div className="flex items-center justify-center gap-2 text-rose-400">
            <Heart className="w-5 h-5 fill-rose-400" />
            <Heart className="w-6 h-6 fill-rose-400" />
            <Heart className="w-5 h-5 fill-rose-400" />
          </div>
        </div>
        
        <footer className="mt-12 text-center text-sm text-rose-400">
          © 2026. Built with <Heart className="inline w-4 h-4 fill-rose-400" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-rose-600 transition-colors"
          >
            caffeine.ai
          </a>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-white p-4">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="flex justify-center gap-3">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
            <Heart className="w-16 h-16 text-rose-400 fill-rose-400 animate-pulse delay-100" />
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse delay-200" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-rose-600 leading-tight">
            Will you be my Valentine?
          </h1>
          
          <p className="text-xl md:text-2xl text-rose-400 font-medium">
            Choose wisely... 💕
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="relative min-h-[300px] flex items-center justify-center"
        >
          <div className="flex gap-6 z-10">
            <Button
              onClick={handleYesClick}
              size="lg"
              className="text-xl px-12 py-6 h-auto bg-rose-500 hover:bg-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              Yes! 💖
            </Button>
          </div>
          
          <Button
            onPointerEnter={handleNoHover}
            onPointerDown={handleNoHover}
            onTouchStart={handleNoHover}
            size="lg"
            variant="outline"
            className="absolute text-xl px-12 py-6 h-auto border-2 border-rose-300 text-rose-500 hover:bg-rose-50 transition-all duration-200"
            style={{
              left: `${noPosition.x}px`,
              top: `${noPosition.y}px`,
              transform: 'translate(0, 0)',
              transition: 'left 0.3s ease-out, top 0.3s ease-out'
            }}
          >
            No
          </Button>
        </div>
        
        <div className="flex justify-center gap-2 opacity-50">
          <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
          <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
          <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
        </div>
      </div>
      
      <footer className="mt-12 text-center text-sm text-rose-400">
        © 2026. Built with <Heart className="inline w-4 h-4 fill-rose-400" /> using{' '}
        <a 
          href="https://caffeine.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-rose-600 transition-colors"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

export default App;

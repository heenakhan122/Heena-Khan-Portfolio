import { useEffect, useState } from "react";

interface HeroSectionProps {
  visible: boolean;
  onComplete: () => void;
  onNavClick: (targetId: string) => void;
}

export default function HeroSection({ visible, onComplete, onNavClick }: HeroSectionProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const jobTitles = [
    "CS Student",
    "part time barista", 
    "software engineer",
    "full stack developer",
    "AI enthusiast",
    "data platform engineer"
  ];

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [visible, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [jobTitles.length]);

  if (!visible) return null;

  return (
    <section id="hero" className="mb-12">
      <div className="border-l-4 border-terminal-green pl-4 mb-8">
        <div className="text-terminal-green text-lg mb-2">// About Me</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-terminal-white">Hello, I'm </span>
          <span className="text-terminal-green">Heena Khan</span>
        </h1>
        <p className="text-xl md:text-2xl text-terminal-white mb-6 min-h-[2rem]">
          <span className="inline-block transition-opacity duration-300">
            {jobTitles[currentTitleIndex]}
          </span>
        </p>
        <p className="text-terminal-gray text-lg mb-8">
          I'm Heena Khan, a Computer Science student at Stanford specializing in AI. I build data platforms, 
          web apps, and AI tools with an eye for both performance and design. My work spans from research-driven 
          projects to polished, user-facing apps — always with the goal of turning ideas into things people can 
          actually use. Outside of code, I keep my creativity flowing behind the espresso machine.
        </p>
        
        {/* Professional workspace image */}
        <div className="mb-8 border border-terminal-gray rounded">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
            alt="Professional developer workspace" 
            className="w-full h-64 object-cover rounded" 
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          <button 
            onClick={() => onNavClick('projects')}
            className="bg-terminal-green text-terminal-bg px-4 py-2 hover:bg-terminal-yellow transition-colors"
          >
            cd projects/
          </button>
          <button 
            onClick={() => onNavClick('contact')}
            className="border border-terminal-green text-terminal-green px-4 py-2 hover:bg-terminal-green hover:text-terminal-bg transition-colors"
          >
            ./contact.sh
          </button>
        </div>
      </div>
    </section>
  );
}

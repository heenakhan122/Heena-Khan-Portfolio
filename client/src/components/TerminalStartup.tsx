import { useEffect, useState } from "react";

interface TerminalStartupProps {
  visible: boolean;
  onComplete: () => void;
  skipAnimation: boolean;
}

export default function TerminalStartup({ visible, onComplete, skipAnimation }: TerminalStartupProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  
  const lines = [
    { text: "heena@stanford:~$ npm run start", className: "text-terminal-green" },
    { text: "Server starting...", className: "text-terminal-white" },
    { text: "Loading portfolio modules...", className: "text-terminal-white" },
    { text: "✓ Skills.js loaded successfully", className: "text-terminal-green" },
    { text: "✓ Projects.json loaded successfully", className: "text-terminal-green" },
    { text: "✓ Experience.md loaded successfully", className: "text-terminal-green" },
    { text: "Server listening on http://localhost:3000", className: "text-terminal-blue" },
    { text: "Welcome to Heena's portfolio! Type 'help' for available commands.", className: "text-terminal-yellow" }
  ];

  useEffect(() => {
    if (!visible) {
      setVisibleLines(0);
      return;
    }

    if (skipAnimation) {
      setVisibleLines(lines.length);
      setTimeout(onComplete, 100);
      return;
    }

    // Progressive line animation
    if (visibleLines < lines.length) {
      const delay = visibleLines === 0 ? 1000 : 1200; // First line takes longer, then consistent delays
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else if (visibleLines === lines.length) {
      // All lines are visible, complete the animation
      const completeTimer = setTimeout(onComplete, 1500);
      return () => clearTimeout(completeTimer);
    }
  }, [visible, visibleLines, skipAnimation, onComplete, lines.length]);

  if (!visible) return null;

  return (
    <div className="text-left font-mono text-sm">
      {lines.map((line, index) => (
        <div 
          key={index}
          className={`${index < visibleLines ? 'animate-in fade-in duration-300' : 'hidden'} ${
            index === 0 ? '' : index === 1 ? 'mt-2' : 'mt-1'
          }`}
        >
          <span className={line.className}>{line.text.includes('heena@stanford') ? (
            <>
              <span className="text-terminal-green">heena@stanford</span>
              <span className="text-terminal-blue">:</span>
              <span className="text-terminal-blue">~</span>
              <span className="text-terminal-white">$ npm run start</span>
            </>
          ) : line.text}</span>
        </div>
      ))}
    </div>
  );
}

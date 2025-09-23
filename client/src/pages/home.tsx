import { useState, useEffect, useRef } from "react";
import TerminalStartup from "@/components/TerminalStartup";
import ScrollingPortfolio from "@/components/ScrollingPortfolio";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isDragging, setIsDragging] = useState(false);
  
  const trailIdRef = useRef(0);

  const skipAnimation = () => {
    setAnimationComplete(true);
    setShowSkipButton(false);
  };

  useEffect(() => {
    // Custom cursor tracking only during drag
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Only add trail points when dragging
      if (isDragging) {
        setCursorTrail(prev => {
          const newTrail = [
            { x: e.clientX, y: e.clientY, id: trailIdRef.current++ },
            ...prev.slice(0, 8) // Keep more trail points for smoother effect
          ];
          return newTrail;
        });
      }
    };

    const handleMouseDown = () => {
      setIsDragging(true);
      document.body.style.cursor = 'none';
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = 'auto';
      // Clear trail when stopping drag
      setCursorTrail([]);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
    };
  }, [isDragging]);

  const onStartupComplete = () => {
    setAnimationComplete(true);
    setShowSkipButton(false);
  };

  return (
    <>
      {/* Global Custom Cursor - Works everywhere */}
      {isDragging && (
        <div 
          className="custom-cursor"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
          }}
        />
      )}
      
      {/* Global Cursor Trail - Works everywhere */}
      {isDragging && cursorTrail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            transitionDelay: `${index * 20}ms`,
          }}
        />
      ))}

      <div className="min-h-screen bg-terminal-bg">
        {/* Skip Animation Button */}
        {showSkipButton && (
          <button 
            onClick={skipAnimation}
            className="fixed top-4 right-4 z-50 bg-terminal-gray px-3 py-1 text-sm hover:bg-terminal-green hover:text-terminal-bg transition-colors duration-200"
          >
            Skip Animation ⏭
          </button>
        )}

        {!animationComplete && (
          <div className="min-h-screen">
            <div className="fixed top-16 left-8 z-40 max-w-md">
              <TerminalStartup 
                visible={true}
                onComplete={onStartupComplete}
                skipAnimation={false}
              />
            </div>
          </div>
        )}

        {animationComplete && <ScrollingPortfolio />}
      </div>
    </>
  );
}
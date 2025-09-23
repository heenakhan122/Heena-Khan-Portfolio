import { useEffect } from "react";

interface AboutSectionProps {
  visible: boolean;
  onComplete: () => void;
}

export default function AboutSection({ visible, onComplete }: AboutSectionProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [visible, onComplete]);

  if (!visible) return null;

  return (
    <section id="about" className="mb-12">
      <div className="mb-8">
        <div className="text-terminal-green mb-4">$ cat about.md</div>
        <div className="border-l-4 border-terminal-green pl-6 space-y-4">
          <h2 className="text-2xl font-bold text-terminal-green mb-4"># About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-terminal-white leading-relaxed">
                I'm Heena Khan, a Computer Science student at Stanford specializing in AI. I build data platforms, 
                web apps, and AI tools with an eye for both performance and design.
              </p>
              
              <p className="text-terminal-white leading-relaxed">
                My work spans from research-driven projects to polished, user-facing apps — always with the goal 
                of turning ideas into things people can actually use. Outside of code, I keep my creativity flowing 
                behind the espresso machine.
              </p>

              <div className="mt-6">
                <h3 className="text-terminal-green font-semibold mb-2">## Current Focus</h3>
                <ul className="space-y-1 text-terminal-white">
                  <li>• AI and machine learning applications</li>
                  <li>• Data visualization and statistical analysis</li>
                  <li>• Web development with React and JavaScript</li>
                  <li>• Computer vision and NLP projects</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="w-full max-w-sm rounded border border-terminal-gray bg-terminal-gray/20 p-8 text-center">
                <div className="text-terminal-green text-6xl mb-4">👩‍💻</div>
                <div className="text-terminal-white text-sm">
                  Professional headshot<br/>
                  would go here
                </div>
              </div>
              
              <div className="bg-terminal-gray p-4 rounded border border-terminal-green">
                <div className="text-terminal-green font-semibold mb-2">## Quick Stats</div>
                <div className="space-y-1 text-sm">
                  <div><span className="text-terminal-green">University:</span> Stanford University</div>
                  <div><span className="text-terminal-green">Major:</span> CS - Artificial Intelligence</div>
                  <div><span className="text-terminal-green">Graduation:</span> Dec 2026/Mar 2027</div>
                  <div><span className="text-terminal-green">Experience:</span> Multiple internships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

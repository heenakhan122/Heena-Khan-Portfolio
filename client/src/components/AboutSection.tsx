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
                I'm Heena Khan, a CS + Biology student at Stanford focused on computational neuroscience 
                and healthcare AI. I build data systems that bridge biological complexity and clinical 
                impact, from genomic analysis pipelines to cognitive assessment platforms.
              </p>
              
              <p className="text-terminal-white leading-relaxed">
                My toolkit spans Python data pipelines, R based bioinformatics workflows, and edge efficient 
                AI models. Whether it's processing genomic datasets or building offline first health apps, 
                I care about systems that work in the real world, not just in demos.
              </p>

              <div className="mt-6">
                <h3 className="text-terminal-green font-semibold mb-2">## What I'm Building Toward</h3>
                <ul className="space-y-1 text-terminal-white">
                  <li>• Brain computer interfaces & neural signal processing</li>
                  <li>• Computational biology & genomic data platforms</li>
                  <li>• Clinical grade AI for early disease detection</li>
                  <li>• Healthcare tools that scale to resource constrained settings</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="w-full max-w-sm rounded border border-terminal-gray bg-terminal-gray/20 p-8 text-center">
                <div className="text-terminal-green text-6xl mb-4">🧬</div>
                <div className="text-terminal-white text-sm">
                  Where biology meets<br/>
                  computation
                </div>
              </div>
              
              <div className="bg-terminal-gray p-4 rounded border border-terminal-green">
                <div className="text-terminal-green font-semibold mb-2">## Quick Stats</div>
                <div className="space-y-1 text-sm">
                  <div><span className="text-terminal-green">University:</span> Stanford University</div>
                  <div><span className="text-terminal-green">Major:</span> CS (AI Track) + Biology Minor</div>
                  <div><span className="text-terminal-green">Graduation:</span> Dec 2026</div>
                  <div><span className="text-terminal-green">Focus:</span> Neurotech & Healthcare AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

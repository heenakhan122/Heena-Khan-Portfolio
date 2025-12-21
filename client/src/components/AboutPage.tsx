import headshotImage from "@assets/IMG_9443_1755312948262.jpg";

return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-terminal-green mb-8 animate-fade-in-up">
          ABOUT <span className="text-terminal-white">&#123;</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in-up delay-200">
            <div>
              <h2 className="text-2xl font-bold text-terminal-green mb-4">Building Healthcare Tools That Actually Work</h2>
              <p className="text-terminal-white leading-relaxed text-lg">
                I'm Heena Khan, a CS + Biology student at Stanford who cares about making healthcare technology 
                that doesn't just look good in demos but works in the real world. I build data systems that turn 
                messy biological signals into tools clinicians can actually use, from genomic analysis pipelines 
                to cognitive assessment platforms.
              </p>
            </div>
            
            <div>
              <p className="text-terminal-white leading-relaxed">
                My path: analyzing glioma RNA sequencing data to find patterns that matter for diagnosis, then 
                engineering data pipelines at Neurotrack for Alzheimer's early detection, and designing offline 
                first health mapping tools for refugee communities. The thread connecting it all? I'm obsessed 
                with building systems that handle real world constraints and create measurable impact for patients.
              </p>
            </div>

            <div>
              <h3 className="text-terminal-green font-semibold mb-3 text-lg">What Drives My Work</h3>
              <ul className="space-y-2 text-terminal-white">
                <li className="flex items-center gap-2">
                  <span className="text-terminal-green">•</span>
                  Brain computer interfaces that help people with neurological conditions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-terminal-green">•</span>
                  Genomic analysis tools that guide treatment decisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-terminal-green">•</span>
                  Healthcare AI that works in clinics, not just research papers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-terminal-green">•</span>
                  Data systems built for the real world (offline capable, privacy preserving, resource efficient)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-terminal-green">•</span>
                  Technology that reaches underserved populations
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-terminal-green font-semibold mb-3 text-lg">Technical Focus</h3>
              <p className="text-terminal-white leading-relaxed">
                Python/R data engineering, bioinformatics workflows, edge efficient AI, clinical data pipelines, 
                systems designed for deployment in resource constrained settings.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-up delay-400">
            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-terminal-gray">University:</span>
                  <span className="text-terminal-white">Stanford University</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Major:</span>
                  <span className="text-terminal-white">CS (AI) + Biology</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Graduation:</span>
                  <span className="text-terminal-white">Dec 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Focus:</span>
                  <span className="text-terminal-white">Neurotech & Healthcare AI</span>
                </div>
              </div>
            </div>

            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-green">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Location</h3>
              <div className="space-y-2 text-terminal-white">
                <div>📍 Stanford, CA / Bay Area</div>
                <div>🌍 Open to remote opportunities</div>
              </div>
            </div>

            <div className="w-full max-w-sm rounded border border-terminal-gray bg-terminal-gray/20 p-4 text-center">
              <div className="w-full rounded border border-terminal-green overflow-hidden mb-4">
                <img 
                  src={`${import.meta.env.BASE_URL}heena-headshot.jpg`}
                  alt="Heena Khan - Stanford Computer Science Student"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              <div className="text-terminal-white text-sm">
                <div className="font-semibold">Heena Khan</div>
                <div className="text-terminal-gray">Stanford CS + Biology</div>
                <div className="text-terminal-green text-xs mt-2">Neurotech & Healthcare AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

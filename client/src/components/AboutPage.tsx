import headshotImage from "@assets/IMG_9443_1755312948262.jpg";

export default function AboutPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-terminal-green mb-8 animate-fade-in-up">
          ABOUT <span className="text-terminal-white">&#123;</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in-up delay-200">
            <div>
              <h2 className="text-2xl font-bold text-terminal-green mb-4">Hello, I'm Heena</h2>
              <p className="text-terminal-white leading-relaxed text-lg">
                I'm a Computer Science student at Stanford University specializing in Artificial Intelligence, 
                currently seeking internship opportunities in software engineering and data science.
              </p>
            </div>
            
            <div>
              <p className="text-terminal-white leading-relaxed">
                My experience spans full-stack development, data analysis, and UX design. I've worked with 
                companies like Neurotrack Technologies and nonprofits to build impactful technology solutions.
              </p>
            </div>

            <div>
              <h3 className="text-terminal-green font-semibold mb-3 text-lg">Current Focus</h3>
              <ul className="space-y-2 text-terminal-white">
                <li className="flex items-center gap-2">
                  <span className="text-terminal-green">→</span>
                  AI and machine learning applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-terminal-green">→</span>
                  Data visualization and statistical analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-terminal-green">→</span>
                  Web development with React and JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-terminal-green">→</span>
                  Computer vision and NLP projects
                </li>
              </ul>
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
                  <span className="text-terminal-white">CS - Artificial Intelligence</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Graduation:</span>
                  <span className="text-terminal-white">Dec 2026/Mar 2027</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Experience:</span>
                  <span className="text-terminal-white">Multiple internships</span>
                </div>
              </div>
            </div>

            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-green">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Location & Availability</h3>
              <div className="space-y-2 text-terminal-white">
                <div>📍 Stanford, CA / Remote</div>
                <div>🎯 Seeking summer 2025 internships</div>
                <div>🕒 Available June - August 2025</div>
              </div>
            </div>

            <div className="w-full max-w-sm rounded border border-terminal-gray bg-terminal-gray/20 p-4 text-center">
              <div className="w-full rounded border border-terminal-green overflow-hidden mb-4">
                <img 
                  src={headshotImage} 
                  alt="Heena Khan - Stanford Computer Science Student"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              <div className="text-terminal-white text-sm">
                <div className="font-semibold">Heena Khan</div>
                <div className="text-terminal-gray">Stanford CS Student</div>
                <div className="text-terminal-green text-xs mt-2">AI Specialization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Side dots indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-3">
        <div className="w-2 h-2 rounded-full bg-terminal-green"></div>
        <div className="w-2 h-2 rounded-full bg-terminal-gray/40"></div>
        <div className="w-2 h-2 rounded-full bg-terminal-gray/40"></div>
        <div className="w-2 h-2 rounded-full bg-terminal-gray/40"></div>
        <div className="w-2 h-2 rounded-full bg-terminal-gray/40"></div>
        <div className="w-2 h-2 rounded-full bg-terminal-gray/40"></div>
      </div>

      <div className="max-w-4xl px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-terminal-green mb-4">
            Heena
          </h1>
          <h2 className="text-2xl md:text-3xl text-terminal-white mb-6 tracking-wide">
            AI RESEARCHER & SOFTWARE ENGINEER
          </h2>
          <p className="text-terminal-gray text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Stanford Computer Science student specializing in Artificial Intelligence. 
            Passionate about building impactful technology through mobile applications, 
            data science, and machine learning research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => window.location.hash = 'contact'}
              className="px-8 py-3 bg-terminal-green text-terminal-bg font-semibold rounded hover:bg-terminal-green/90 transition-colors"
            >
              Contact Me
            </button>
            <button 
              onClick={() => window.location.hash = 'about'}
              className="px-8 py-3 border border-terminal-green text-terminal-green font-semibold rounded hover:bg-terminal-green/10 transition-colors flex items-center gap-2"
            >
              Learn More
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-terminal-green/20 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
}
interface ResumePageProps {
  onDownloadResume: () => void;
}

export default function ResumePage({ onDownloadResume }: ResumePageProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-terminal-green mb-8">
          RESUME <span className="text-terminal-white">&#123;</span>
        </h1>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between bg-terminal-gray/20 p-6 rounded border border-terminal-green">
            <div>
              <h2 className="text-2xl font-bold text-terminal-green mb-2">Heena Khan - Resume</h2>
              <p className="text-terminal-white">Stanford Computer Science Student | AI Specialization</p>
              <p className="text-terminal-gray text-sm">Last updated: August 2025</p>
            </div>
            <button
              onClick={onDownloadResume}
              className="bg-terminal-green text-terminal-bg px-6 py-3 hover:bg-terminal-yellow transition-colors font-semibold"
            >
              Download PDF
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
                <h3 className="text-terminal-green font-semibold mb-4 text-lg">Education</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-terminal-white font-medium">Stanford University</div>
                    <div className="text-terminal-gray text-sm">Bachelor of Science, Computer Science - Artificial Intelligence</div>
                    <div className="text-terminal-gray text-sm">Expected Graduation: December 2026/March 2027</div>
                  </div>
                  <div>
                    <div className="text-terminal-white font-medium">Relevant Coursework:</div>
                    <div className="text-terminal-gray text-sm">
                      Programming Abstractions, Data Structures & Algorithms, Discrete Mathematics, 
                      Probability and Statistics, Artificial Intelligence, Operating Systems, Computer Systems
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
                <h3 className="text-terminal-green font-semibold mb-4 text-lg">Contact Information</h3>
                <div className="space-y-2 text-terminal-white">
                  <div>📧 henakhan@stanford.edu</div>
                  <div>📞 (516) 613-1854</div>
                  <div>📁 github.com/heenakhan122</div>
                  <div>📍 Stanford, CA</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
                <h3 className="text-terminal-green font-semibold mb-4 text-lg">Key Skills</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-terminal-white font-medium mb-1">Programming:</div>
                    <div className="text-terminal-gray text-sm">Python, JavaScript, C++, Java, SQL, R, HTML/CSS, Node.js</div>
                  </div>
                  <div>
                    <div className="text-terminal-white font-medium mb-1">Frameworks & Libraries:</div>
                    <div className="text-terminal-gray text-sm">React, React Native, Pandas, Folium, OpenCV</div>
                  </div>
                  <div>
                    <div className="text-terminal-white font-medium mb-1">Tools & Platforms:</div>
                    <div className="text-terminal-gray text-sm">Git, Figma, HuggingFace, Chrome APIs</div>
                  </div>
                  <div>
                    <div className="text-terminal-white font-medium mb-1">Techniques:</div>
                    <div className="text-terminal-gray text-sm">Data Visualization, Statistical Modeling, A/B Testing</div>
                  </div>
                </div>
              </div>

              <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
                <h3 className="text-terminal-green font-semibold mb-4 text-lg">Experience Summary</h3>
                <div className="space-y-3 text-terminal-white text-sm">
                  <div>→ Software Intern at Neurotrack Technologies (2025)</div>
                  <div>→ Stanford Design Fellow at Pull for Progress (2024-Present)</div>
                  <div>→ Stanford Tech Fellow at Afghanistan Women's Council (2023-2024)</div>
                  <div>→ Multiple personal projects in AI/ML and web development</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
            <h3 className="text-terminal-green font-semibold mb-4 text-lg">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-terminal-white font-medium">Mobile Maristan (PWA)</div>
                <div className="text-terminal-gray text-sm">TIIP-aligned wellness app with guided journaling & dhikr practices</div>
              </div>
              <div className="space-y-2">
                <div className="text-terminal-white font-medium">Khaista Boutique</div>
                <div className="text-terminal-gray text-sm">Modern e-commerce frontend for Afghan handmade goods</div>
              </div>
              <div className="space-y-2">
                <div className="text-terminal-white font-medium">Healthcare Trainer Deployment (CS109)</div>
                <div className="text-terminal-gray text-sm">Probabilistic simulation for Burkina Faso healthcare optimization</div>
              </div>
              <div className="space-y-2">
                <div className="text-terminal-white font-medium">ModestFilter Chrome Extension</div>
                <div className="text-terminal-gray text-sm">Clothing site filtering by modesty criteria with user preferences</div>
              </div>
            </div>
          </div>

          <div className="text-center p-6 bg-terminal-gray/20 rounded border border-terminal-green">
            <div className="text-terminal-green font-semibold mb-2">Ready to contribute to your team!</div>
            <div className="text-terminal-white">Available for summer 2025 internships in software engineering, data science, and AI</div>
          </div>
        </div>
      </div>
    </div>
  );
}
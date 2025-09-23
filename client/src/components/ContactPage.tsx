interface ContactPageProps {
  onDownloadResume: () => void;
}

export default function ContactPage({ onDownloadResume }: ContactPageProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-terminal-green mb-8">
          CONTACT <span className="text-terminal-white">&#123;</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-terminal-green mb-4">Get In Touch</h2>
              <p className="text-terminal-white leading-relaxed text-lg mb-6">
                I'm currently seeking summer 2025 internship opportunities in software engineering, data science, and AI. 
                Let's connect and explore how we can work together!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-terminal-gray/20 rounded border border-terminal-gray hover:border-terminal-green transition-colors">
                <span className="text-terminal-green text-xl">📧</span>
                <div>
                  <div className="text-terminal-gray text-sm">Email</div>
                  <a 
                    href="mailto:henakhan@stanford.edu" 
                    className="text-terminal-blue hover:text-terminal-yellow transition-colors text-lg"
                  >
                    henakhan@stanford.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-terminal-gray/20 rounded border border-terminal-gray hover:border-terminal-green transition-colors">
                <span className="text-terminal-green text-xl">📞</span>
                <div>
                  <div className="text-terminal-gray text-sm">Phone</div>
                  <a 
                    href="tel:+15166131854" 
                    className="text-terminal-blue hover:text-terminal-yellow transition-colors text-lg"
                  >
                    (516) 613-1854
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-terminal-gray/20 rounded border border-terminal-gray hover:border-terminal-green transition-colors">
                <span className="text-terminal-green text-xl">📁</span>
                <div>
                  <div className="text-terminal-gray text-sm">GitHub</div>
                  <a 
                    href="https://github.com/heenakhan122" 
                    className="text-terminal-blue hover:text-terminal-yellow transition-colors text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/heenakhan122
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-terminal-gray/20 rounded border border-terminal-gray hover:border-terminal-green transition-colors">
                <span className="text-terminal-green text-xl">📄</span>
                <div>
                  <div className="text-terminal-gray text-sm">Resume</div>
                  <button 
                    onClick={onDownloadResume}
                    className="text-terminal-blue hover:text-terminal-yellow transition-colors text-lg"
                  >
                    Download Resume (PDF)
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-green">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Currently Available For</h3>
              <div className="space-y-3 text-terminal-white">
                <div className="flex items-start gap-3">
                  <span className="text-terminal-green mt-1">→</span>
                  <span>Summer 2025 software engineering internships</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-terminal-green mt-1">→</span>
                  <span>Data science and AI research opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-terminal-green mt-1">→</span>
                  <span>Part-time projects and collaborations</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-terminal-green mt-1">→</span>
                  <span>Open source contributions</span>
                </div>
              </div>
            </div>

            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Quick Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Location:</span>
                  <span className="text-terminal-white">Stanford, CA / Remote</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Availability:</span>
                  <span className="text-terminal-white">June - August 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Response Time:</span>
                  <span className="text-terminal-white">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Status:</span>
                  <span className="text-terminal-white">Stanford CS student</span>
                </div>
              </div>
            </div>

            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Preferred Communication</h3>
              <div className="space-y-2 text-terminal-white text-sm">
                <div>📧 Email for formal inquiries</div>
                <div>📞 Phone for urgent matters</div>
                <div>💻 GitHub for technical discussions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useEffect } from "react";

interface ContactSectionProps {
  visible: boolean;
  onComplete: () => void;
  onDownloadResume: () => void;
}

export default function ContactSection({ visible, onComplete, onDownloadResume }: ContactSectionProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [visible, onComplete]);

  if (!visible) return null;

  return (
    <section id="contact" className="mb-12">
      <div className="mb-8">
        <div className="text-terminal-green mb-4">$ ls contact/</div>
        <div className="border-l-4 border-terminal-green pl-6">
          <h2 className="text-2xl font-bold text-terminal-green mb-6"># Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-terminal-white">
                I'm currently seeking summer 2025 internship opportunities in software engineering, data science, and AI. 
                Let's connect and explore how we can work together!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-terminal-green">📧</span>
                  <a 
                    href="mailto:henakhan@stanford.edu" 
                    className="text-terminal-blue hover:text-terminal-yellow transition-colors"
                  >
                    henakhan@stanford.edu
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-terminal-green">📞</span>
                  <a 
                    href="tel:+15166131854" 
                    className="text-terminal-blue hover:text-terminal-yellow transition-colors"
                  >
                    (516) 613-1854
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-terminal-green">📁</span>
                  <a 
                    href="https://github.com/heenakhan122" 
                    className="text-terminal-blue hover:text-terminal-yellow transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/heenakhan122
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-terminal-green">📄</span>
                  <button 
                    onClick={onDownloadResume}
                    className="text-terminal-blue hover:text-terminal-yellow transition-colors"
                  >
                    Download Resume (PDF)
                  </button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-terminal-gray rounded border border-terminal-green">
                <div className="text-terminal-green font-semibold mb-2">$ ./quick-connect.sh</div>
                <div className="text-sm text-terminal-white">
                  Available for: Full-time internships, part-time projects, open source collaboration
                </div>
                <div className="text-sm text-terminal-gray mt-1">
                  Response time: Usually within 24 hours
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Professional collaboration workspace" 
                className="w-full rounded border border-terminal-gray" 
              />
              
              <div className="bg-terminal-gray/20 p-4 rounded border border-terminal-green">
                <div className="text-terminal-green font-semibold mb-2">## Currently</div>
                <div className="space-y-1 text-sm text-terminal-white">
                  <div>🎯 Seeking: Summer 2025 internships</div>
                  <div>📍 Location: Stanford, CA / Remote</div>
                  <div>🕒 Availability: June - August 2025</div>
                  <div>🎓 Status: Stanford CS student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

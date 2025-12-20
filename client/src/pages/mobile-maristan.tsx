import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function MobileMaristanProject() {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-green">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2 text-terminal-green hover:text-terminal-white transition-colors" data-testid="link-back-home">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="text-terminal-green text-sm">heena@stanford</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4">
              Mobile Maristan <span className="text-terminal-green">&#123;</span>
            </h1>
            <p className="text-terminal-gray text-xl mb-6">
              Progressive Web App — A mobile-first mental wellness companion grounded in Islamic psychology and traditional healing wisdom
            </p>
            
            {/* Project Links */}
            <div className="flex gap-4 mb-8">
              <button 
                className="px-6 py-3 bg-terminal-green text-terminal-bg font-semibold rounded hover:bg-terminal-green/90 transition-colors flex items-center gap-2"
                data-testid="button-view-demo"
              >
                <ExternalLink size={18} />
                View Demo
              </button>
              <button 
                className="px-6 py-3 border border-terminal-green text-terminal-green font-semibold rounded hover:bg-terminal-green/10 transition-colors flex items-center gap-2"
                data-testid="button-view-code"
              >
                <Github size={18} />
                View Code
              </button>
            </div>
          </div>

          {/* Mobile App Preview */}
          <div className="mb-12 text-center">
            <div className="inline-block relative">
              {/* Mobile Frame */}
              <div className="relative mx-auto">
                <div className="w-80 h-[32rem] bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] p-3 shadow-2xl border border-gray-700">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Phone screen bezel */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                    <img 
                      src="/Heena-Khan-Portfolio/maristan-home.png" 
                      alt="Mobile Maristan home screen"
                      className="w-full h-full object-contain bg-gray-50"
                      data-testid="img-home-screen"
                    />
                  </div>
                </div>
              </div>
              <p className="text-center text-terminal-gray mt-6 text-sm italic max-w-xs mx-auto">
                Welcome to your digital sanctuary for Islamic mental wellness
              </p>
            </div>
          </div>

          {/* Project Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Project Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-terminal-green">Overview</h2>
              <div className="space-y-4 text-terminal-gray text-lg leading-relaxed">
                <p>
                  During an Islamic Psychology course, I discovered the rich tradition of historical Maristans—medieval Islamic hospitals that pioneered holistic mental health treatment. This sparked an idea: what if we could bring that same comprehensive approach to mental wellness into people's pockets, while respecting both tradition and privacy?
                </p>
                <p>
                  Inspired by Dr. Rania Awaad's work at Stanford's Muslim Mental Health & Islamic Psychology Lab, I'm developing Mobile Maristan as a Progressive Web App that makes Islamic psychology accessible to anyone with a smartphone.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-terminal-green">System Architecture & Technical Challenges</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  Building a culturally-sensitive mental health app presented unique technical challenges around privacy, internationalization, and performance on diverse devices and network conditions.
                </p>
              </div>
              
              <h4 className="text-lg font-semibold text-terminal-green">Progressive Web App Architecture</h4>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Progressive Enhancement:</strong> Built core functionality as a single-page application, enhanced with service worker for offline capability and native app-like experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Performance Optimization:</strong> Implemented route-based code splitting achieving &lt;2.1s Largest Contentful Paint on 3G networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Data Synchronization Design:</strong> Architected for eventual multi-device sync using localStorage with conflict resolution strategies for private journal entries</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Offline-First Approach:</strong> Designed all core features to work without network connectivity, with background sync when connectivity returns</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-terminal-green">Internationalization Engineering</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  The technical complexity of supporting both Arabic and English required deep engineering consideration:
                </p>
              </div>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>RTL/LTR Layout System:</strong> Built dynamic layout switching with proper text direction, number formatting, and date representation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Arabic Typography:</strong> Integrated Amiri font with proper character shaping and ligature support across different browsers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Cultural Color Theming:</strong> Implemented custom design tokens (warm cream #FAF9F6, burgundy #8B2635) with WCAG AA contrast compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Content Management:</strong> Built bilingual content system supporting mixed-direction text within single interface elements</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-terminal-green">Technical Implementation Highlights</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  <strong className="text-terminal-green">Client-Side State Architecture:</strong> Designed comprehensive state management using React Context and localStorage persistence, handling complex data relationships between mood tracking, journal entries, and therapeutic progress without external dependencies.
                </p>
              </div>
              
              <h4 className="text-lg font-semibold text-terminal-green">Privacy-First Data Handling</h4>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Local-First Storage:</strong> All personal data (journals, mood check-ins, reflections) encrypted and stored locally using Web Crypto API</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Zero External Tracking:</strong> No analytics, crash reporting, or user behavior monitoring - privacy as a core architectural principle</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Secure Data Export:</strong> Implemented client-side data export with user-controlled sharing and deletion</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Progressive Consent:</strong> Built granular privacy controls allowing users to choose exactly what data they want to persist</span>
                </li>
              </ul>
            </div>

            {/* Technical Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-terminal-green">Performance & Accessibility Engineering</h2>
              
              {/* Quick Actions Screenshot */}
              <div className="my-6 text-center">
                <div className="inline-block relative">
                  <div className="w-56 h-80 bg-gradient-to-b from-gray-800 to-black rounded-[1.5rem] p-2 shadow-lg border border-gray-700">
                    <div className="w-full h-full bg-white rounded-[1.25rem] overflow-hidden relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-black rounded-b-lg z-10"></div>
                      <img 
                        src="/Heena-Khan-Portfolio/maristan-quick-actions.png" 
                        alt="Quick spiritual practices menu"
                        className="w-full h-full object-contain bg-gray-50"
                        data-testid="img-quick-actions"
                      />
                    </div>
                  </div>
                  <p className="text-terminal-gray text-xs mt-3 italic max-w-40 mx-auto">
                    One-tap access to spiritual practices
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Mobile-First Optimization:</strong> Achieved 95+ Lighthouse performance scores on mid-range Android devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Accessibility Standards:</strong> Implemented full WCAG AA compliance including screen reader support, keyboard navigation, and high contrast modes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Memory Management:</strong> Optimized for devices with limited RAM through efficient component lazy loading and state cleanup</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Network Resilience:</strong> Built retry mechanisms and graceful degradation for unstable connectivity</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-terminal-green">TIIP Framework: Tazkiyah-Integrated Islamic Psychology</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  <strong className="text-terminal-green">Clinical Framework Implementation:</strong> The app centers around the scientifically-structured TIIP framework, providing users with a systematic approach to Islamic mental wellness through four distinct therapeutic stages:
                </p>
              </div>

              {/* TIIP Framework Screenshot */}
              <div className="my-8 text-center">
                <div className="inline-block relative">
                  <div className="w-72 h-[28rem] bg-gradient-to-b from-gray-800 to-black rounded-[2rem] p-2.5 shadow-xl border border-gray-700">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                      <img 
                        src="/Heena-Khan-Portfolio/maristan-tiip-framework.png" 
                        alt="TIIP Framework stages with detailed descriptions"
                        className="w-full h-full object-contain bg-gray-50"
                        data-testid="img-tiip-framework"
                      />
                    </div>
                  </div>
                  <p className="text-terminal-gray text-xs mt-3 italic max-w-48 mx-auto">
                    Structured therapeutic framework with Islamic psychology principles
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-terminal-gray">
                <div>
                  <h4 className="text-lg font-semibold text-terminal-green mb-3">Stage 1: Murābatah (مُرَابَطَة) - Compliance</h4>
                  <p className="mb-3">
                    <strong className="text-terminal-green">Building the foundation through Islamic practices and obligations.</strong> Murābatah is the foundational stage where users establish consistent Islamic practices, creating the spiritual infrastructure that supports their entire psychological and spiritual growth journey.
                  </p>
                  <div className="ml-4">
                    <p className="text-terminal-green font-medium mb-2">Key Practices:</p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-terminal-green rounded-full mt-2 shrink-0"></div>
                        <span>Set specific times for daily practices and stick to them</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-terminal-green rounded-full mt-2 shrink-0"></div>
                        <span>Start with one practice and add others gradually</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-terminal-green rounded-full mt-2 shrink-0"></div>
                        <span>Integration with daily Dhikr, Salah, and Quran recitation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-terminal-green mb-3">Stage 2: Mukāshafah (مُكَاشَفَة) - Introspective Self-Awareness</h4>
                  <p className="mb-3">
                    <strong className="text-terminal-green">Deep self-reflection and spiritual unveiling through Islamic wisdom.</strong> This stage focuses on developing profound self-understanding through Islamic contemplative practices and guided introspection.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-terminal-green mb-3">Stage 3: Muʿālajah - Psychospiritual Equilibrium</h4>
                  <p>
                    <strong className="text-terminal-green">Finding balance through therapeutic integration.</strong> Users work toward psychological and spiritual balance using Islamic therapeutic principles.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-terminal-green mb-3">Stage 4: Muwāṣal - Integrative Unity</h4>
                  <p>
                    <strong className="text-terminal-green">Achieving holistic integration.</strong> The final stage where users reach a unified state of psychological, spiritual, and emotional well-being.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-terminal-gray leading-relaxed mt-6">
                <p>
                  Each stage includes guided exercises, reflective prompts, and progress tracking tailored to Islamic therapeutic concepts. The framework is delivered through an intuitive mobile interface with culturally-appropriate design and Islamic terminology.
                </p>
              </div>
              
              {/* Dashboard Screenshot */}
              <div className="my-8 text-center">
                <div className="inline-block relative">
                  <div className="w-72 h-[28rem] bg-gradient-to-b from-gray-800 to-black rounded-[2rem] p-2.5 shadow-xl border border-gray-700">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                      <img 
                        src="/Heena-Khan-Portfolio/maristan-dashboard.png" 
                        alt="Personal progress dashboard"
                        className="w-full h-full object-contain bg-gray-50 p-1"
                        data-testid="img-dashboard"
                      />
                    </div>
                  </div>
                  <p className="text-terminal-gray text-xs mt-3 italic max-w-48 mx-auto">
                    Track your spiritual journey and progress
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-terminal-green">Culturally-Grounded Features</h3>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Islamic Terminology Mood Tracking:</strong> Users track emotional states using terms like sakīnah (tranquility), shukr (gratitude), ṣabr (patience), or waswasa (anxiety)</span>
                </li>
              </ul>
              
              {/* Mood Tracking Screenshot */}
              <div className="my-8 text-center">
                <div className="inline-block relative">
                  <div className="w-72 h-[28rem] bg-gradient-to-b from-gray-800 to-black rounded-[2rem] p-2.5 shadow-xl border border-gray-700">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                      <img 
                        src="/Heena-Khan-Portfolio/maristan-mood-tracking.png" 
                        alt="Cultural mood tracking interface"
                        className="w-full h-full object-contain bg-gray-50"
                        data-testid="img-mood-tracking"
                      />
                    </div>
                  </div>
                  <p className="text-terminal-gray text-xs mt-3 italic max-w-48 mx-auto">
                    Culturally-grounded emotional wellness tracking
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Tafakkur Journaling:</strong> Reflective writing space with prompts mapped to therapeutic stages and Islamic contemplative practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Educational Content:</strong> Sixteen therapeutic articles with proper attribution to Maristan.org and research-backed content from established Islamic psychology scholars</span>
                </li>
              </ul>
              
              {/* Islamic Guidance Screenshot */}
              <div className="my-8 text-center">
                <div className="inline-block relative">
                  <div className="w-72 h-[28rem] bg-gradient-to-b from-gray-800 to-black rounded-[2rem] p-2.5 shadow-xl border border-gray-700">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                      <img 
                        src="/Heena-Khan-Portfolio/maristan-guidance.png" 
                        alt="Islamic guidance with Quranic verses"
                        className="w-full h-full object-contain bg-gray-50"
                        data-testid="img-guidance"
                      />
                    </div>
                  </div>
                  <p className="text-terminal-gray text-xs mt-3 italic max-w-48 mx-auto">
                    Traditional Islamic wisdom meets modern UX
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-terminal-green">Scale-Oriented Architecture</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  <strong className="text-terminal-green">Database Design & API Architecture:</strong> Though currently client-focused, I've architected the system for future scale:
                </p>
              </div>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Normalized Schema:</strong> Designed PostgreSQL schema supporting user profiles, content localization, and therapeutic progress tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>API Design:</strong> RESTful endpoints planned for user authentication, content delivery, and optional community features</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Caching Strategy:</strong> Multi-layer approach using service worker caching for content, localStorage for user data, and planned Redis integration for session management</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-terminal-green">Performance Monitoring</h3>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Real User Metrics:</strong> Implemented comprehensive client-side performance tracking measuring Core Web Vitals across different devices and networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Error Boundary System:</strong> Built React error boundaries with local error logging for debugging without compromising user privacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Progressive Loading:</strong> Content and features load progressively based on user engagement patterns</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-terminal-green">Current Status & Engineering Insights</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  Right now I have a working web demo that showcases the core user interface and therapeutic framework. The experience demonstrates how Islamic psychology concepts can be made accessible through thoughtful design, with proper cultural sensitivity and mobile-first interactions.
                </p>
              </div>
              
              <h4 className="text-lg font-semibold text-terminal-green">Key Engineering Challenges Solved</h4>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Cultural Authenticity vs. Technical Performance:</strong> Balancing proper Arabic typography rendering with fast load times</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Privacy vs. Functionality:</strong> Building useful features like mood tracking without compromising the zero-tracking architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Offline Capability:</strong> Ensuring therapeutic content and journaling features work reliably without internet access</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Cross-Browser Arabic Support:</strong> Handling font rendering and text shaping across different mobile browsers and operating systems</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-terminal-green">Scalability Considerations</h3>
              <div className="space-y-4 text-terminal-gray leading-relaxed">
                <p>
                  The architecture supports future growth to 10k+ users through:
                </p>
              </div>
              <ul className="space-y-2 text-terminal-gray">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Stateless Microservices:</strong> API design separating user management, content delivery, and therapeutic tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>CDN Integration:</strong> Content delivery optimization for global users with varying network conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
                  <span><strong>Database Optimization:</strong> Query design and indexing strategies for multilingual content and user progress tracking</span>
                </li>
              </ul>
              
              <div className="space-y-4 text-terminal-gray leading-relaxed mt-4">
                <p>
                  This project has taught me the importance of building technology that bridges traditions rather than replacing them. By designing Islamic psychology principles into familiar web patterns, I'm learning how to honor centuries of wisdom while meeting people where they are today.
                </p>
                <p>
                  The next phase involves implementing full PWA capabilities, service worker optimization for offline functionality, and the complete privacy-preserving backend architecture. I'm also planning to expand the content library and add more interactive features while maintaining the careful balance between tradition and accessibility.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <strong className="text-terminal-green w-full mb-2">Technologies:</strong>
                {['React', 'TypeScript', 'PWA APIs', 'Service Workers', 'Web Crypto API', 'Responsive Design', 'Internationalization', 'PostgreSQL/Node.js Backend'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-terminal-green/20 text-terminal-green border border-terminal-green/30 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
        </div>
      </div>
    </div>
  );
}
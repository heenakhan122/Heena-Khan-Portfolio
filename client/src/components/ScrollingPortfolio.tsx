import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
// All images are in public folder for GitHub Pages deployment
const headshotImage = "/Heena-Khan-Portfolio/heena-headshot.jpg";
const modestFilterImage = "/Heena-Khan-Portfolio/modestfilter-preview.webp";
const maristanImage = "/Heena-Khan-Portfolio/mobile-maristan-logo.svg";
const khaistaImage = "/Heena-Khan-Portfolio/khaista-boutique-logo.jpg";
import { 
  SiPython, 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiVite,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiGithubactions,
  SiDocker,
  SiVercel,
  SiPostgresql,
  SiSqlite,
  SiJest,
  SiEslint,
  SiPostman,
  SiFigma,
  SiCplusplus,
  SiR,
  SiExpress,
  SiOpencv
} from 'react-icons/si';
import { Database, Terminal, TestTube, BookOpen, TrendingUp, Code, Play, FileText, Cpu, Globe, Zap, Brain, ChevronLeft, ChevronRight } from 'lucide-react';

// Scroll Reveal Hook
function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}


// Color Splash Effect Component  
function ColorSplashEffect() {
  const [splashes, setSplashes] = useState<Array<{id: number, x: number, y: number, color: string}>>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const colors = ['#ff1493', '#00ffff', '#ff6b35', '#f7931e', '#00ff41', '#8a2be2'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      const newSplash = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        color: randomColor
      };

      setSplashes(prev => [...prev, newSplash]);

      // Remove splash after animation
      setTimeout(() => {
        setSplashes(prev => prev.filter(splash => splash.id !== newSplash.id));
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {splashes.map(splash => (
        <div
          key={splash.id}
          className="color-splash"
          style={{
            left: splash.x - 10,
            top: splash.y - 10,
            backgroundColor: splash.color
          }}
        />
      ))}
    </div>
  );
}

// Matrix Rain Component
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?`~';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    function draw() {
      if (!ctx || !canvas) return;
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;
      
      ctx.fillStyle = 'rgba(4, 4, 4, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Use theme color instead of hardcoded color
      const themeColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--terminal-green').trim() || '#00ff41';
      ctx.fillStyle = themeColor;
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    function animate() {
      draw();
      requestAnimationFrame(animate);
    }
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recompute columns and reset drops
      const newColumns = canvas.width / fontSize;
      drops.length = Math.floor(newColumns);
      for (let i = 0; i < drops.length; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}

export default function ScrollingPortfolio() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Initialize scroll reveal
  useScrollReveal();

  // Scroll progress for rainbow bar
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'landing', title: '', component: LandingSection },
    { id: 'about', title: 'ABOUT', component: AboutSection },
    { id: 'skills', title: 'SKILLS', component: SkillsSection },
    { id: 'work', title: 'WORK', component: WorkSection },
    { id: 'projects', title: 'PROJECTS', component: ProjectsSection },
    { id: 'contact', title: 'CONTACT', component: ContactSection },
    { id: 'resume', title: 'RESUME', component: ResumeSection }
  ];

  const scrollToSection = (index: number) => {
    if (isScrolling) return;
    setIsScrolling(true);
    
    const targetElement = sectionRefs.current[index];
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(index);
    }
    
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'j' || e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToSection(Math.min(activeSection + 1, sections.length - 1));
      } else if (e.key === 'k' || e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToSection(Math.max(activeSection - 1, 0));
      } else if (e.key >= '1' && e.key <= '7') {
        e.preventDefault();
        const sectionIndex = parseInt(e.key) - 1;
        if (sectionIndex < sections.length) {
          scrollToSection(sectionIndex);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeSection, sections.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const element = sectionRefs.current[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return (
    <div className="bg-terminal-bg">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Interactive Color Splash Effects */}
      <ColorSplashEffect />
      
      {/* Rainbow Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1">
        <div 
          className="progress-rainbow transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-green">
        <div className="flex items-center justify-between p-4">
          <div className="text-terminal-green text-sm">DRAG ANYWHERE</div>
          
          <div className="flex items-center gap-6 text-sm">
            {sections.slice(1).map((section, index) => {
              const sectionIndex = index + 1;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(sectionIndex)}
                  className={`transition-colors ${
                    activeSection === sectionIndex
                      ? 'text-terminal-green'
                      : 'text-terminal-gray hover:text-terminal-white'
                  }`}
                >
                  {index}. {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-50">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full border-2 transition-colors ${
              activeSection === index
                ? 'bg-terminal-green border-terminal-green'
                : 'bg-transparent border-terminal-gray hover:border-terminal-green'
            }`}
          />
        ))}
      </div>

      {/* Sections */}
      {sections.map((section, index) => {
        const SectionComponent = section.component;
        return (
          <section
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={index === 0 ? "min-h-screen" : "min-h-screen flex items-center justify-center"}
            id={section.id}
          >
            <div className="scroll-reveal">
              <SectionComponent scrollToSection={scrollToSection} />
            </div>
          </section>
        );
      })}

      {/* Interactive Command Line Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-t border-terminal-green/30 mobile-command-footer">
        <div className="flex items-center px-6 py-3 font-mono text-sm md:px-6 md:py-3 mobile-command-footer">
          <span className="text-terminal-green mr-2 text-xs md:text-sm">heena@stanford:~$</span>
          <div className="flex-1 flex items-center overflow-x-auto">
            <span className="text-terminal-gray mr-2 command-text hidden md:inline">try: </span>
            <button 
              onClick={() => scrollToSection(1)}
              className="text-terminal-green hover:text-pink-400 transition-colors mr-2 md:mr-4 hover:underline text-xs md:text-sm whitespace-nowrap"
              data-testid="cmd-about"
              aria-label="Go to About section"
            >
              whoami
            </button>
            <button 
              onClick={() => scrollToSection(2)}
              className="text-terminal-green hover:text-pink-400 transition-colors mr-2 md:mr-4 hover:underline text-xs md:text-sm whitespace-nowrap mobile-hidden"
              data-testid="cmd-skills"
              aria-label="Go to Skills section"
            >
              skills
            </button>
            <button 
              onClick={() => scrollToSection(4)}
              className="text-terminal-green hover:text-pink-400 transition-colors mr-2 md:mr-4 hover:underline text-xs md:text-sm whitespace-nowrap"
              data-testid="cmd-projects"
              aria-label="Go to Projects section"
            >
              projects
            </button>
            <button 
              onClick={() => scrollToSection(5)}
              className="text-terminal-green hover:text-pink-400 transition-colors mr-2 md:mr-4 hover:underline text-xs md:text-sm whitespace-nowrap"
              data-testid="cmd-contact"
              aria-label="Go to Contact section"
            >
              contact
            </button>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-terminal-green rounded-full animate-pulse"></div>
            <span className="text-terminal-green/70 text-xs hidden md:inline">ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Landing Section with Terminal Typing Animation
function LandingSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  
  const jobTitles = [
    "software engineer",
    "CS (AI) @ Stanford",
    "data infrastructure engineer",
    "full stack developer",
    "part time barista",
    "AI systems builder"
  ];

  const fullText = 'heena@stanford:~$ whoami\n> Heena Khan\n\nheena@stanford:~$ mission\n> CS (AI) @ Stanford | Software engineer who ships real systems\n\nheena@stanford:~$ focus\n> Data Infrastructure, AI Agents, Full-Stack, Systems Programming\n\nheena@stanford:~$ extras\n> Fueled by espresso, part-time barista';
  
  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < fullText.length) {
        setTerminalText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, Math.random() * 40 + 20);
      } else {
        setTypingComplete(true);
      }
    };
    
    const startTyping = setTimeout(typeText, 500);
    
    return () => clearTimeout(startTyping);
  }, []);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!typingComplete) return;
    
    // Start first title
    setTitleVisible(true);
    
    const titleCycle = () => {
      // Hide current title
      setTitleVisible(false);
      
      setTimeout(() => {
        // Switch to next title
        setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
        // Show new title with typing effect
        setTimeout(() => {
          setTitleVisible(true);
        }, 150);
      }, 250);
    };
    
    const interval = setInterval(titleCycle, 2500);
    
    return () => clearInterval(interval);
  }, [typingComplete, jobTitles.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl px-8 z-10 relative">
        {/* Terminal Window */}
        <div className="bg-terminal-bg border border-terminal-green rounded-lg mb-8 shadow-lg shadow-terminal-green/20">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-terminal-green/30">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-terminal-gray text-sm ml-4">Terminal - heena@stanford</span>
          </div>
          <div className="p-6 font-mono">
            <div className="text-terminal-green text-sm leading-relaxed whitespace-pre-wrap">
              {terminalText}
              {showCursor && <span className="bg-terminal-green text-terminal-bg">█</span>}
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-terminal-green/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-pink-400/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-terminal-green/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-pink-300/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* Main Content - Appears after typing */}
        <div className={`transition-all duration-1000 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} relative z-10`}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-terminal-green mb-2" data-text="Heena">
            Heena
          </h1>
          <p className="text-xl md:text-2xl text-terminal-gray mb-4 tracking-wide">
            CS @ Stanford
          </p>
          <h2 className="text-2xl md:text-3xl text-terminal-white mb-6 tracking-wide min-h-[3rem]">
            <span className={`inline-block transition-all duration-500 ${titleVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-2'}`}>
              {jobTitles[currentTitleIndex]}
            </span>
          </h2>
          <p className="text-terminal-gray text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            I'm Heena Khan, a software engineer and CS (AI) student at Stanford.
            I build data pipelines, AI agents, and full-stack systems — strong in
            systems programming, relational data modeling, and shipping production code.
            I've worked across biotech, health tech, and global development, but the
            engineering is the constant.
          </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollToSection && scrollToSection(5)} // Contact is index 5
            className="px-8 py-3 bg-terminal-green text-terminal-bg font-semibold rounded hover:bg-terminal-green/90 transition-colors"
          >
            Contact Me
          </button>
          <button 
            onClick={() => scrollToSection && scrollToSection(1)} // About is index 1
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

// About Section
function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  return (
    <div className="max-w-6xl px-8 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">ABOUT <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-terminal-gray text-lg leading-relaxed">
            I'm Heena Khan, a software engineer and CS (AI) student at Stanford with a Biology minor.
            I build data pipelines, AI agents, and full-stack applications — strong CS fundamentals
            from compilers to concurrency, with production experience at Roche/Genentech and Neurotrack.
          </p>

          <p className="text-terminal-gray text-lg leading-relaxed">
            At Roche I designed enterprise PostgreSQL databases, drift detection ETL pipelines, and
            an AI agent for natural language querying of live assay data. At Neurotrack I built
            high-throughput data curation pipelines and ML models over 10,000+ multimodal records.
          </p>

          <p className="text-terminal-gray text-lg leading-relaxed">
            My edge: I can go deep on systems (OS, compilers, memory) and ship full-stack product.
            The healthcare and biology work gives me domain breadth, but I'm competitive for any
            SWE, data engineering, or AI role — not just health tech.
          </p>

          <div className="space-y-4">
            <h3 className="text-terminal-green font-semibold text-lg mt-6 mb-3">Core Strengths</h3>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
              <span className="text-terminal-white">Data infrastructure — ETL pipelines, schema drift detection, relational modeling</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
              <span className="text-terminal-white">AI systems — agents, NL-to-SQL, ML pipelines, model evaluation</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
              <span className="text-terminal-white">Full-stack engineering — Django, React, PostgreSQL, Docker, CI/CD</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
              <span className="text-terminal-white">Systems fundamentals — concurrency, memory management, compiler design, OS</span>
            </div>
          </div>

          <div className="mt-6 bg-terminal-green/10 border border-terminal-green p-4 rounded">
            <p className="text-terminal-white text-sm">
              <strong className="text-terminal-green">Stack:</strong> Python, Java, C++, SQL, JavaScript/TypeScript,
              PostgreSQL, MySQL, Django, React, Docker, Linux, Bash, Git
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <div className="rounded border border-terminal-green overflow-hidden mb-4">
              <img 
                src={headshotImage} 
                alt="Heena Khan"
                className="w-full h-80 object-cover object-center"
              />
            </div>
            <div className="text-center text-terminal-white mb-6">
              <div className="font-semibold">Heena Khan</div>
              <div className="text-terminal-gray">Stanford CS (AI) + Biology</div>
              <div className="text-terminal-green text-sm mt-2">Data Infrastructure & AI Systems</div>
            </div>

            <div className="bg-terminal-gray/20 p-4 rounded border border-terminal-gray">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-terminal-gray">University:</span>
                  <span className="text-terminal-white">Stanford</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Major:</span>
                  <span className="text-terminal-white">CS (AI) + Bio</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-gray">Graduation:</span>
                  <span className="text-terminal-white">June 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}


// Skills Section
function SkillsSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const getSkillIcon = (skill: string) => {
    const skillLower = skill.toLowerCase();
    if (skillLower.includes('python')) return <SiPython className="text-[#3776ab]" />;
    if (skillLower.includes('c++')) return <SiCplusplus className="text-[#00599C]" />;
    if (skillLower.includes('java')) return <Code className="text-[#ED8B00]" size={16} />;
    if (skillLower.includes('r') && !skillLower.includes('react')) return <SiR className="text-[#276DC3]" />;
    if (skillLower.includes('sql')) return <Database className="text-[#336791]" size={16} />;
    if (skillLower.includes('html')) return <SiHtml5 className="text-[#E34F26]" />;
    if (skillLower.includes('css')) return <SiCss3 className="text-[#1572B6]" />;
    if (skillLower.includes('javascript')) return <SiJavascript className="text-[#F7DF1E]" />;
    if (skillLower.includes('node.js')) return <SiNodedotjs className="text-[#339933]" />;
    if (skillLower.includes('react native')) return <SiReact className="text-[#61DAFB]" />;
    if (skillLower.includes('react')) return <SiReact className="text-[#61DAFB]" />;
    if (skillLower.includes('pandas')) return <SiPandas className="text-[#150458]" />;
    if (skillLower.includes('folium')) return <Globe className="text-green-500" size={16} />;
    if (skillLower.includes('opencv')) return <SiOpencv className="text-[#5C3EE8]" />;
    if (skillLower.includes('huggingface')) return <Brain className="text-yellow-500" size={16} />;
    if (skillLower.includes('d3.js')) return <FileText className="text-orange-500" size={16} />;
    if (skillLower.includes('express')) return <SiExpress className="text-white" />;
    if (skillLower.includes('git')) return <SiGit className="text-[#F05032]" />;
    if (skillLower.includes('figma')) return <SiFigma className="text-[#F24E1E]" />;
    if (skillLower.includes('chrome api')) return <Cpu className="text-[#4285F4]" size={16} />;
    if (skillLower.includes('postgresql')) return <SiPostgresql className="text-[#336791]" />;
    if (skillLower.includes('drizzle')) return <Database className="text-terminal-green" size={16} />;
    if (skillLower.includes('web speech')) return <Zap className="text-purple-500" size={16} />;
    if (skillLower.includes('service worker')) return <Cpu className="text-blue-500" size={16} />;
    if (skillLower.includes('etl') || skillLower.includes('pipeline')) return <TrendingUp className="text-terminal-green" size={16} />;
    if (skillLower.includes('computer vision') || skillLower.includes('sentiment')) return <Brain className="text-terminal-green" size={16} />;
    if (skillLower.includes('pwa') || skillLower.includes('extension') || skillLower.includes('responsive')) return <Globe className="text-terminal-green" size={16} />;
    if (skillLower.includes('rest') || skillLower.includes('authentication') || skillLower.includes('real-time')) return <Zap className="text-terminal-green" size={16} />;
    return null;
  };

      const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'C++', 'SQL', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Systems & Tools',
      skills: ['Linux', 'Git', 'Bash', 'PostgreSQL', 'MySQL', 'Docker', 'Django', 'React']
    },
    {
      category: 'Concepts',
      skills: ['Concurrency', 'Multithreading', 'Memory Management', 'Compiler Design', 'Relational Data Modeling', 'REST APIs']
    },
    {
      category: 'Data & ML',
      skills: ['ETL Pipelines', 'Schema Drift Detection', 'Statistical Modeling', 'Geospatial ML', 'Data Curation', 'AI Agents']
    }
  ];

  return (
    <div className="max-w-6xl px-8 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">SKILLS <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="space-y-12">
        <p className="text-terminal-gray text-lg leading-relaxed max-w-4xl">
          Technical skills developed through data infrastructure work at Roche, AI research engineering
          at Neurotrack, and building full-stack applications for global health.
        </p>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-terminal-green text-lg font-semibold">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group px-4 py-2 bg-terminal-green/10 border border-terminal-green/20 rounded-full hover:bg-terminal-green hover:text-terminal-bg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-terminal-green/30 cursor-pointer"
                    data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    <span className="text-terminal-gray text-sm group-hover:text-terminal-bg font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 border border-terminal-green/30 rounded-lg bg-terminal-bg/50">
          <h3 className="text-terminal-green text-lg font-semibold mb-3">Current Focus</h3>
          <p className="text-terminal-gray text-sm leading-relaxed">
            Most experienced with Python data pipelines, PostgreSQL, and full-stack Django/React development.
            Strong in systems-level thinking — concurrency, compiler design, relational data modeling.
            Interested in data reliability, AI agents, and infrastructure problems at scale.
          </p>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}

// Work Section
function WorkSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
    const experiences = [
    {
      year: '2026',
      title: 'Software Engineering Intern – Data Infrastructure & Full Stack',
      company: 'Roche/Genentech',
      period: 'June 2026 – October 2026',
      location: 'Santa Clara, CA',
      description: 'Architected enterprise PostgreSQL database with multi-column indexing to store and query PCR and NGS assay records across Roche\'s diagnostic portfolio.',
      details: [
        'Built domain-specific AI agent over live assay data, enabling natural language querying of PCR records across multiple assay types by internal scientists.',
        'Engineered pre-ingestion drift detection pipeline monitoring schema validity and value distributions across ETL workflows, preventing silent data corruption in downstream agent responses.',
        'Developed full-stack Django + React application with real-time PCR amplification curve visualizations, deployed via Docker with automated CI/CD validation.'
      ],
      tags: ['PostgreSQL', 'Python', 'Django', 'React', 'AI Agent', 'ETL', 'Docker', 'CI/CD']
    },
    {
      year: '2025',
      title: 'AI Research Engineering Intern',
      company: 'Neurotrack Technologies',
      period: 'June 2025 – September 2025',
      location: 'Palo Alto, CA',
      description: 'Engineered high-throughput data curation and feature pipelines in Python/SQL, ingesting and normalizing 10,000+ multimodal assessment records across 9 heterogeneous input schemas.',
      details: [
        'Designed automated validation and noise-filtering algorithms to detect schema drift and artifact corruption, increasing input dataset reliability for downstream training pipelines.',
        'Trained and evaluated linear regression and parametric curve-fitting models in Python to map score distribution trajectories, using statistical evaluation metrics to prune 6 redundant assessment variants.'
      ],
      tags: ['Python', 'SQL', 'Data Pipelines', 'ML', 'Schema Drift Detection', 'Statistical Modeling']
    },
    {
      year: '2023',
      title: 'Stanford Tech Fellowship',
      company: 'Pull for Progress',
      period: 'June 2023 – September 2024',
      location: 'Stanford, CA',
      description: 'Engineered geospatial machine learning models in Python using multidimensional health metrics to predict regional risk profiles across 50,000+ healthcare data points.',
      details: [
        'Applied statistical modeling and spatial feature extraction to optimize healthcare worker deployment algorithms in resource-limited settings.',
        'Built reproducible data processing pipelines using Pandas and NumPy to clean, validate, and analyze high-dimensional public health datasets for strategic decision-making.'
      ],
      tags: ['Python', 'Pandas', 'NumPy', 'Geospatial ML', 'Statistical Modeling', 'Global Health']
    }
  ];

  return (
    <div className="max-w-6xl px-8 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">WORK <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="space-y-8">
        <p className="text-terminal-gray text-lg leading-relaxed max-w-4xl">
          My experience spans data infrastructure, AI systems, and full-stack engineering —
          from building enterprise-scale ETL pipelines and AI agents to geospatial ML and
          clinical data platforms.
        </p>

        <div className="relative max-w-4xl">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-terminal-green"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-terminal-green rounded-full border-4 border-terminal-bg z-10"></div>
                
                {/* Content */}
                <div className="ml-20 flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-terminal-green text-xl font-semibold">{exp.title} — {exp.company}</h3>
                    <div className="text-terminal-gray text-sm">{exp.period} · {exp.location}</div>
                    <p className="text-terminal-gray text-sm leading-relaxed max-w-2xl">{exp.description}</p>
                  </div>
                  
                  {exp.details && (
                    <div className="space-y-2 max-w-2xl">
                      {exp.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-terminal-gray text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                  
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-terminal-green/20 text-terminal-green text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}

// Projects Section
function ProjectsSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const projects = [
    {
      title: 'PCR Assay Data Platform — Roche',
      description: 'Enterprise PostgreSQL database, ETL drift detection pipeline, domain-specific AI agent for NL-to-SQL querying, and full-stack Django + React application for Roche\'s diagnostic assay portfolio.',
      tech: ['PostgreSQL', 'Python', 'Django', 'React', 'AI Agent', 'ETL', 'Docker', 'NL-to-SQL'],
      image: null,
      route: '/projects/roche'
    },
    {
      title: 'AMANI',
      description: 'AI-enabled WASH hazard mapping platform for refugee and low-resource settings. Phone-based AR system with offline-first reporting, edge AI, and human-in-loop verification. Stanford Healthcare Design Challenge Finalist.',
      tech: ['Computer Vision', 'Edge AI', 'React Native', 'Geospatial ML', 'AR'],
      image: `${import.meta.env.BASE_URL}amani-preview.png`,
      route: '/projects/amani'
    },
    {
      title: 'ModestFilter — Chrome Extension',
      description: 'Chrome extension using computer vision to filter clothing by modesty preferences with on-device processing.',
      tech: ['JavaScript', 'Chrome Extension APIs', 'computer vision', 'Web Workers'],
      image: modestFilterImage,
      route: '/projects/modestfilter'
    },
    {
      title: 'Offline Mental Wellness App',
      description: 'Offline-first mental wellness PWA with Arabic/English support and culturally appropriate design.',
      tech: ['JavaScript', 'PWA', 'offline-first architecture', 'internationalization'],
      image: maristanImage,
      route: '/projects/mobile-maristan'
    },
    {
      title: 'Khaista Boutique',
      description: 'E-commerce platform empowering 100+ Afghan women artisans to sell handmade goods globally.',
      tech: ['React', 'CSS Grid', 'Responsive Design', 'Accessibility', 'E-Commerce'],
      image: khaistaImage,
      route: '/projects/khaista-boutique'
    }
  ];

  const handlePrevious = () => {
    setCurrentProjectIndex(prev => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex(prev => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="max-w-6xl px-8 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">PROJECTS <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="space-y-8">
        <p className="text-terminal-gray text-lg leading-relaxed max-w-4xl">
          Selected projects showcasing my skills in AI-powered applications, data processing, and full-stack development.
        </p>

        {/* Project Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-terminal-bg/80 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-bg transition-all duration-200 p-3 rounded-full backdrop-blur-sm"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-terminal-bg/80 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-bg transition-all duration-200 p-3 rounded-full backdrop-blur-sm"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Single Project Display */}
          <div className="mx-16">
            <div className="group border border-terminal-green/30 rounded-lg overflow-hidden bg-terminal-bg/30 hover:border-terminal-green transition-all duration-500 transform-gpu hover:scale-[1.02] hover:shadow-2xl hover:shadow-terminal-green/20 hover:-translate-y-2 perspective-1000 hover:rotate-y-2 hover:rotate-x-1 h-80 md:h-96" style={{transformStyle: 'preserve-3d'}}>
              <div className="grid md:grid-cols-2 gap-0 h-full">
                {/* Project Image */}
                {currentProject.image ? (
                  <div className="w-full h-full overflow-hidden relative">
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title}
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                        currentProject.title === "Khaista Boutique" 
                          ? "object-contain bg-white p-4" 
                          : currentProject.title.includes("ModestFilter")
                          ? "object-contain bg-gray-100 p-2"
                          : "object-cover"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-terminal-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-terminal-green/10 flex items-center justify-center relative">
                    <span className="text-terminal-green text-sm">Project Image</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-terminal-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                )}
                
                {/* Project Info */}
                <div className="p-4 space-y-3 flex flex-col justify-between relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-terminal-green/10 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                  <h3 className="text-terminal-green text-lg md:text-xl font-semibold group-hover:text-pink-400 transition-colors duration-300">{currentProject.title}</h3>
                  <p className="text-terminal-gray leading-relaxed text-sm md:text-base group-hover:text-terminal-white transition-colors duration-300">{currentProject.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {currentProject.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-terminal-green/20 text-terminal-green text-xs rounded-full group-hover:bg-terminal-green/30 group-hover:scale-105 transition-all duration-300"
                        style={{animationDelay: `${techIndex * 50}ms`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Button */}
                  <Link 
                    href={currentProject.route}
                    className="px-4 py-2 bg-terminal-green text-terminal-bg font-semibold rounded hover:bg-pink-400 hover:shadow-lg transition-all duration-300 flex items-center gap-2 inline-flex transform hover:scale-105 group-hover:translate-x-2 text-sm"
                    data-testid="link-view-project"
                  >
                    View Project
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Project Counter and Dots */}
          <div className="text-center mt-6">
            <span className="text-terminal-gray">
              {currentProjectIndex + 1} of {projects.length}
            </span>
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProjectIndex 
                      ? 'bg-terminal-green' 
                      : 'bg-terminal-gray hover:bg-terminal-green/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}

// Contact Section
function ContactSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  return (
    <div className="max-w-4xl px-8 w-full text-center pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">CONTACT <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="space-y-8">
        <p className="text-terminal-gray text-lg leading-relaxed">
          I'm always interested in discussing technology that makes a positive impact, especially around accessibility, privacy, and global reach.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-terminal-green">Email:</span>
            <a href="mailto:henakhan@stanford.edu" className="text-terminal-white hover:text-terminal-green transition-colors">
              henakhan@stanford.edu
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-terminal-green">Phone:</span>
            <a href="tel:+15166131854" className="text-terminal-white hover:text-terminal-green transition-colors">
              (516) 613-1854
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-terminal-green">GitHub:</span>
            <a href="https://github.com/heenakhan122" target="_blank" rel="noopener noreferrer" className="text-terminal-white hover:text-terminal-green transition-colors">
              heenakhan122
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}

// Resume Section
function ResumeSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const resumePath = "/Heena_Khan_Resume.pdf";
  
  return (
    <div className="max-w-4xl px-8 w-full text-center pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">RESUME <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="space-y-8">
        <p className="text-terminal-gray text-lg leading-relaxed">
          Download my complete resume to learn more about my experience, 
          education, and technical skills.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={resumePath}
            download="Heena_Khan_Resume.pdf"
            className="px-8 py-3 bg-terminal-green text-terminal-bg font-semibold rounded hover:bg-terminal-green/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            <FileText size={20} />
            Download Resume
          </a>
          
          <a 
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-terminal-green text-terminal-green font-semibold rounded hover:bg-terminal-green/10 transition-colors inline-flex items-center justify-center gap-2"
          >
            View in Browser
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}

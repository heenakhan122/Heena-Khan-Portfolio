import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
// All images are in public folder for GitHub Pages deployment
const headshotImage = "/Heena-Khan-Portfolio/heena-stanford.jpg";
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
    { id: 'about', title: 'About', component: AboutSection },
    { id: 'skills', title: 'Skills', component: SkillsSection },
    { id: 'work', title: 'Experience', component: WorkSection },
    { id: 'projects', title: 'Projects', component: ProjectsSection },
    { id: 'contact', title: 'Contact', component: ContactSection },
    { id: 'resume', title: 'Resume', component: ResumeSection }
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
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-slate-100">
        <div
          className="h-full bg-terminal-green transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-8 py-4">
          <div className="text-white font-semibold text-sm tracking-wide">Heena Khan</div>
          <div className="flex items-center gap-8 text-sm">
            {sections.slice(1).map((section, index) => {
              const sectionIndex = index + 1;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(sectionIndex)}
                  className={`transition-colors ${
                    activeSection === sectionIndex
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Sections */}
      {sections.map((section, index) => {
        const SectionComponent = section.component;
        return (
          <section
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={index === 0 ? "min-h-screen bg-white" : `py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
            id={section.id}
          >
            <div className={index === 0 ? "" : "max-w-5xl mx-auto px-8 scroll-reveal"}>
              <SectionComponent scrollToSection={scrollToSection} />
            </div>
          </section>
        );
      })}

    </div>
  );
}

// Landing Section
function LandingSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(true);

  const jobTitles = [
    "software engineer",
    "data infrastructure engineer",
    "AI systems builder",
    "full stack developer",
    "part time barista",
  ];

  const fullText = 'heena@stanford:~$ whoami\n> Heena Khan — CS (AI) @ Stanford\n\nheena@stanford:~$ focus\n> Data Infrastructure · AI Agents · Full-Stack · Systems\n\nheena@stanford:~$ current\n> SWE Intern @ Roche/Genentech\n> PostgreSQL · Django · React · NL-to-SQL agent\n\nheena@stanford:~$ _';

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i < fullText.length) {
        setTerminalText(fullText.slice(0, i + 1));
        i++;
        setTimeout(type, Math.random() * 30 + 15);
      }
    };
    setTimeout(type, 400);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTitleVisible(false);
      setTimeout(() => {
        setCurrentTitleIndex(p => (p + 1) % jobTitles.length);
        setTitleVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        {/* Desktop: 3-column hero */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-center py-20" style={{minHeight: 'calc(100vh - 4rem)'}}>

          {/* Left */}
          <div className="text-right space-y-4">
            <h1 className="text-7xl lg:text-8xl font-bold text-gray-900 leading-none tracking-tight">
              software
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              CS (AI) at Stanford.<br />Building systems that ship.
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => scrollToSection && scrollToSection(5)}
                className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                Get in touch
              </button>
              <button
                onClick={() => scrollToSection && scrollToSection(4)}
                className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-500 hover:bg-gray-50 transition-all"
              >
                Projects →
              </button>
            </div>
          </div>

          {/* Center: photo */}
          <div className="flex flex-col items-center gap-5">
            <div className="relative">
              <img
                src={headshotImage}
                alt="Heena Khan at Stanford"
                className="w-60 h-80 object-cover object-top rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs font-mono px-3 py-1.5 rounded-full shadow-lg">
                Roche/Genentech · 2026
              </div>
            </div>
            <div className="text-center mt-2">
              <p className="text-xs font-bold tracking-widest uppercase text-terminal-green">Heena Khan</p>
              <p className="text-xs text-gray-400 mt-1">Stanford · CS (AI) · Class of 2027</p>
            </div>
          </div>

          {/* Right */}
          <div className="text-left space-y-4">
            <h1 className="text-7xl lg:text-8xl font-bold text-gray-900 leading-none tracking-tight">
              engineer.
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Data infrastructure.<br />AI agents. Full-stack systems.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Python', 'PostgreSQL', 'Django', 'React', 'Docker'].map(t => (
                <span key={t} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-full font-medium">{t}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col items-center text-center py-16 gap-6 justify-center" style={{minHeight: 'calc(100vh - 4rem)'}}>
          <img
            src={headshotImage}
            alt="Heena Khan"
            className="w-48 h-64 object-cover object-top rounded-2xl shadow-xl"
          />
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-terminal-green mb-2">CS (AI) · Stanford University</p>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-1">Heena Khan.</h1>
            <p className="text-gray-400 text-base mb-6">software engineer · data infrastructure · AI systems</p>
            <div className="flex justify-center gap-3">
              <button onClick={() => scrollToSection && scrollToSection(5)} className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg">Get in touch</button>
              <button onClick={() => scrollToSection && scrollToSection(4)} className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg">Projects →</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// About Section
function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  return (
    <div className="w-full">
      <div className="mb-10">
        <div className="w-8 h-0.5 bg-terminal-green mb-4 rounded-full" />
        <h2 className="text-3xl font-bold text-gray-900">About</h2>
      </div>

      <div className="grid md:grid-cols-5 gap-12 items-start">
        {/* Left: text */}
        <div className="md:col-span-3 space-y-5">
          <p className="text-gray-600 text-lg leading-relaxed">
            Software engineer and CS (AI) student at Stanford with a Biology minor. I build
            data pipelines, AI agents, and full-stack systems — strong CS fundamentals from
            compilers to concurrency, with production experience at Roche and Neurotrack.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            My edge: I go deep on systems and ship full-stack product. The biotech and health
            work gives me domain breadth, but I'm competitive for any SWE, data engineering,
            or AI role — not just health tech.
          </p>

          {/* Stat row */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            {[
              { num: '3', label: 'internships' },
              { num: '50k+', label: 'data points modeled' },
              { num: '2027', label: 'graduation' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-gray-900">{s.num}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Strength cards */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { title: 'Data Infrastructure', desc: 'ETL · drift detection · relational modeling' },
              { title: 'AI Systems', desc: 'agents · NL-to-SQL · eval frameworks' },
              { title: 'Full-Stack', desc: 'Django · React · PostgreSQL · Docker' },
              { title: 'CS Fundamentals', desc: 'OS · compilers · concurrency · memory' },
            ].map(c => (
              <div key={c.title} className="p-4 rounded-xl border border-slate-200 hover:border-terminal-green/40 hover:bg-slate-50 transition-all">
                <p className="text-sm font-semibold text-gray-800 mb-1">{c.title}</p>
                <p className="text-xs text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo + info */}
        <div className="md:col-span-2 flex flex-col items-center gap-4">
          <img
            src={headshotImage}
            alt="Heena Khan"
            className="w-full max-w-xs h-80 object-cover object-top rounded-2xl shadow-lg"
          />
          <div className="w-full max-w-xs space-y-2 text-sm">
            {[
              { label: 'University', val: 'Stanford' },
              { label: 'Major', val: 'CS (AI) + Biology' },
              { label: 'Currently', val: 'Roche/Genentech' },
              { label: 'Email', val: 'henakhan@stanford.edu' },
            ].map(r => (
              <div key={r.label} className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-gray-400">{r.label}</span>
                <span className="text-gray-800 font-medium">{r.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
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
    <div className="w-full">
      <div className="mb-12">
        <div className="w-8 h-0.5 bg-terminal-green mb-4 rounded-full"></div><h2 className="text-3xl font-bold text-gray-900">Skills</h2>
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
    },
    {
      year: '2023',
      title: 'Bioinformatics Research Intern',
      company: 'Petritsch Lab, Stanford University',
      period: 'January 2023 – September 2024',
      location: 'Stanford, CA',
      description: 'Led genome analysis project investigating RNA sequencing data to study molecular distinctions between glioma subtypes in a developmental and translational neuroscience lab.',
      details: [
        'Applied R-based statistical and bioinformatics workflows to extract biologically meaningful insights from high-dimensional sequencing datasets.',
        'Developed automation scripts for processing and managing large genomic datasets, improving analysis efficiency and reproducibility across lab workflows.'
      ],
      tags: ['R', 'RNA-seq', 'Bioinformatics', 'Genomics', 'Statistical Analysis', 'Automation']
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-12">
        <div className="w-8 h-0.5 bg-terminal-green mb-4 rounded-full"></div><h2 className="text-3xl font-bold text-gray-900">Experience</h2>
      </div>

      <div className="space-y-8">
        <p className="text-terminal-gray text-lg leading-relaxed max-w-4xl">
          My experience spans data infrastructure, AI systems, and full-stack engineering —
          from building enterprise-scale ETL pipelines and AI agents to geospatial ML and
          clinical data platforms.
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 rounded-2xl border border-slate-200 hover:border-terminal-green/30 hover:shadow-md transition-all bg-white">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg">{exp.title}</h3>
                  <p className="text-terminal-green text-sm font-medium mt-0.5">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-400 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{exp.description}</p>
              {exp.details && (
                <ul className="space-y-1.5 mb-4">
                  {exp.details.map((d, i) => (
                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-terminal-green mt-1 shrink-0">›</span>{d}
                    </li>
                  ))}
                </ul>
              )}
              {exp.tags && (
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-full">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      
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
      image: `${import.meta.env.BASE_URL}roche-preview.svg`,
      badge: null,
      route: '/projects/roche'
    },
    {
      title: 'AMANI',
      description: 'AI-enabled health mapping platform for low-resource settings. Offline-first reporting, edge AI computer vision, and human-in-loop verification.',
      tech: ['Computer Vision', 'Edge AI', 'React Native', 'TensorFlow Lite', 'PostgreSQL'],
      image: `${import.meta.env.BASE_URL}amani-preview.svg`,
      badge: 'Stanford Healthcare Design Challenge Finalist',
      route: '/projects/amani'
    },
    {
      title: 'ModestFilter — Chrome Extension',
      description: 'Chrome extension using computer vision to filter clothing by modesty preferences with on-device processing.',
      tech: ['JavaScript', 'Chrome Extension APIs', 'computer vision', 'Web Workers'],
      image: modestFilterImage,
      badge: null,
      route: '/projects/modestfilter'
    },
    {
      title: 'Offline Mental Wellness App',
      description: 'Offline-first mental wellness PWA with Arabic/English support and culturally appropriate design.',
      tech: ['JavaScript', 'PWA', 'offline-first architecture', 'internationalization'],
      image: maristanImage,
      badge: null,
      route: '/projects/mobile-maristan'
    },
    {
      title: 'Khaista Boutique',
      description: 'E-commerce platform empowering 100+ Afghan women artisans to sell handmade goods globally.',
      tech: ['React', 'CSS Grid', 'Responsive Design', 'Accessibility', 'E-Commerce'],
      image: khaistaImage,
      badge: null,
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
    <div className="w-full">
      <div className="mb-12">
        <div className="w-8 h-0.5 bg-terminal-green mb-4 rounded-full"></div><h2 className="text-3xl font-bold text-gray-900">Projects</h2>
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
            <div className="group border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-terminal-green/40 hover:shadow-lg transition-all duration-300 h-80 md:h-96">
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
                <div className="p-5 space-y-3 flex flex-col justify-between h-full">
                  <h3 className="text-terminal-green text-lg md:text-xl font-semibold transition-colors duration-300">{currentProject.title}</h3>
                  {currentProject.badge && (
                    <span className="inline-block px-2 py-0.5 bg-amber-50 border border-amber-300 text-amber-700 text-xs rounded-full font-medium">
                      {currentProject.badge}
                    </span>
                  )}
                  <p className="text-terminal-gray leading-relaxed text-sm md:text-base">{currentProject.description}</p>
                  
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
                    className="px-4 py-2 bg-terminal-green text-white font-medium rounded-lg hover:opacity-90 transition-all duration-200 flex items-center gap-2 inline-flex text-sm"
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

      
    </div>
  );
}

// Contact Section
function ContactSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  return (
    <div className="w-full text-center">
      <div className="mb-12">
        <div className="w-8 h-0.5 bg-terminal-green mb-4 rounded-full"></div><h2 className="text-3xl font-bold text-gray-900">Contact</h2>
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

      
    </div>
  );
}

// Resume Section
function ResumeSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const resumePath = "/Heena_Khan_Resume.pdf";
  
  return (
    <div className="w-full text-center">
      <div className="mb-12">
        <div className="w-8 h-0.5 bg-terminal-green mb-4 rounded-full"></div><h2 className="text-3xl font-bold text-gray-900">Resume</h2>
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

      
    </div>
  );
}

export default function WorkPage() {
  const experiences = [
    {
      title: "Software Intern – Data & UX Integration",
      company: "Neurotrack Technologies",
      location: "Palo Alto, CA",
      period: "June 2025 – August 2025",
      description: [
        "Designed and executed statistical analyses on cognitive assessment datasets containing 50,000+ patient records",
        "Built automated data pipelines using Python and R to clean and process questionnaire response data",
        "Collaborated with product managers to define core metrics around assessment completion rates and user engagement",
        "Implemented A/B testing frameworks to measure the impact of UX changes on questionnaire completion rates"
      ],
      technologies: ["Python", "R", "Statistical Analysis", "A/B Testing", "Data Pipelines"]
    },
    {
      title: "Stanford Design Fellow",
      company: "Pull for Progress",
      location: "Palo Alto, CA",
      period: "2024 - Present",
      description: [
        "Built interactive web applications using HTML/CSS, JavaScript, and D3.js with responsive design principles",
        "Developed a geospatial data visualization project using Python, Pandas, and Folium",
        "Resulted in increased user engagement and secured strategic collaborations including with Stanford Global Health Initiative"
      ],
      technologies: ["HTML/CSS", "JavaScript", "D3.js", "Python", "Pandas", "Folium"]
    },
    {
      title: "Stanford Tech and Innovation Fellow",
      company: "Afghanistan Women's Council",
      location: "New York, NY",
      period: "2023 – 2024",
      description: [
        "Built and designed Khaista Market e-commerce website using React, CSS Grid, and responsive design principles",
        "Enabled 100+ Afghan women artisans to showcase and sell handmade goods to global audiences",
        "Collaborated with the Afghanistan Women's Council to scope features and build frontend architecture",
        "Designed UI with focus on clarity, simplicity, and mobile responsiveness for international audiences"
      ],
      technologies: ["React", "CSS Grid", "Responsive Design", "UI/UX Design"]
    }
  ];

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-terminal-green mb-8">
          WORK <span className="text-terminal-white">&#123;</span>
        </h1>
        
        <div className="mb-8 p-6 bg-terminal-gray/20 rounded border border-terminal-green">
          <h2 className="text-2xl font-bold text-terminal-green mb-4">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-terminal-white">Mobile Maristan (PWA)</h3>
              <p className="text-terminal-gray text-sm">TIIP-aligned wellness app with guided journaling, dhikr/breath practices, and explainable state recommendations.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-terminal-white">Khaista Boutique</h3>
              <p className="text-terminal-gray text-sm">Modern e-commerce frontend for Afghan handmade goods with performance optimization.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-terminal-white">Healthcare Trainer Deployment (CS109)</h3>
              <p className="text-terminal-gray text-sm">Probabilistic simulation for optimal trainer allocation across Burkina Faso.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-terminal-white">ModestFilter Extension</h3>
              <p className="text-terminal-gray text-sm">Chrome extension filtering clothing sites by modesty criteria with user preferences.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray hover:border-terminal-green transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-terminal-green mb-1">{exp.title}</h3>
                  <div className="text-terminal-white font-medium">{exp.company}</div>
                  <div className="text-terminal-gray text-sm">{exp.location}</div>
                </div>
                <div className="text-terminal-blue font-medium mt-2 md:mt-0">{exp.period}</div>
              </div>
              
              <div className="mb-4">
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-terminal-white">
                      <span className="text-terminal-green mt-1 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`text-xs px-3 py-1 rounded ${
                      techIndex % 4 === 0 ? 'bg-terminal-green text-terminal-bg' :
                      techIndex % 4 === 1 ? 'bg-terminal-blue text-terminal-bg' :
                      techIndex % 4 === 2 ? 'bg-terminal-yellow text-terminal-bg' :
                      'bg-terminal-gray text-terminal-white border border-terminal-green'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-green">
            <h3 className="text-terminal-green font-semibold mb-4 text-lg">Currently Seeking</h3>
            <div className="space-y-3 text-terminal-white">
              <div className="flex items-center gap-3">
                <span className="text-terminal-green">🎯</span>
                <span>Summer 2025 software engineering internships</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-terminal-green">📊</span>
                <span>Data science and AI research opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-terminal-green">🌍</span>
                <span>Remote-friendly or Bay Area positions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-terminal-green">⏰</span>
                <span>Available June - August 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
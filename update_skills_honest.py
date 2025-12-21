import re

with open('client/src/components/ScrollingPortfolio.tsx', 'r') as f:
    content = f.read()

# More honest skill categories - only what you've actually used
new_skills = '''  const skillCategories = [
    {
      category: 'Languages & Core Tools',
      skills: ['Python', 'R', 'JavaScript', 'SQL', 'HTML/CSS', 'Git']
    },
    {
      category: 'Data Analysis & Bioinformatics',
      skills: ['Pandas', 'RNA-seq Analysis', 'Statistical Analysis', 'Data Visualization', 'ETL Workflows', 'Genomic Data Processing']
    },
    {
      category: 'Web Development',
      skills: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Responsive Design', 'Accessibility']
    },
    {
      category: 'Specialized Tools',
      skills: ['D3.js', 'Folium', 'Figma', 'Chrome Extension APIs', 'OpenCV', 'Computer Vision']
    },
    {
      category: 'Domains',
      skills: ['Healthcare Data Systems', 'Offline-First Architecture', 'Clinical Data Pipelines', 'Low-Bandwidth Optimization']
    }
  ];'''

# Replace the skillCategories array
pattern = r'const skillCategories = \[[\s\S]*?\];'
content = re.sub(pattern, new_skills, content, count=1)

# More honest intro
old_intro = r'My technical toolkit spans computational biology, healthcare data systems, and AI development —\s+built through bioinformatics research, neurotech internships, and global health projects\.'
new_intro = '''Technical skills developed through bioinformatics research at Petritsch Lab, data engineering 
          at Neurotrack, and building health-focused applications.'''

content = re.sub(old_intro, new_intro, content)

# More honest focus section
old_focus = r'Focused on building data systems for neuroscience and healthcare — from genomic analysis pipelines\s+to brain-computer interfaces to clinical AI tools\. Specializing in systems that bridge biological\s+complexity with computational intelligence and deploy in real-world clinical or low-resource settings\.'
new_focus = '''Most experienced with Python/R data pipelines, web development with React, and building tools 
            for healthcare applications. Interested in problems at the intersection of biology, data engineering, 
            and clinical impact.'''

content = re.sub(old_focus, new_focus, content)

with open('client/src/components/ScrollingPortfolio.tsx', 'w') as f:
    f.write(content)

print("✅ Skills section updated (honest version)!")

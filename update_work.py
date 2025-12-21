import re

with open('client/src/components/ScrollingPortfolio.tsx', 'r') as f:
    content = f.read()

# New experiences array
new_experiences = '''  const experiences = [
    {
      year: '2025',
      title: 'Software Engineering Intern, Data Platform',
      company: 'Neurotrack Technologies',
      period: 'June–August 2025',
      location: 'Palo Alto, CA',
      description: 'Designed and implemented modular data processing pipelines in Python and R to clean, structure, and analyze 10,000+ cognitive assessment records for a digital platform used in early Alzheimer\\'s detection and monitoring.',
      details: [
        'Preprocessed raw cognitive performance data using SQL and ETL workflows to improve data quality and support downstream modeling and clinical evaluation.',
        'Contributed to optimization of Neurotrack\\'s clinical cognitive assessment platform used by healthcare providers and patients for early detection of neurological decline.'
      ],
      tags: ['Python', 'R', 'SQL', 'Data Pipelines', 'Healthcare AI', 'Clinical Data']
    },
    {
      year: '2023',
      title: 'Bioinformatics Research Intern',
      company: 'Petritsch Lab, Stanford University',
      period: 'January 2023–September 2024',
      location: 'Stanford, CA',
      description: 'Led a genome analysis project analyzing RNA sequencing data to investigate molecular distinctions between glioma subtypes in a developmental and translational neuroscience lab.',
      details: [
        'Applied R-based statistical and bioinformatics workflows to extract biologically meaningful insights from high-dimensional sequencing datasets.',
        'Developed automation scripts for processing and managing large genomic datasets, improving analysis efficiency and reproducibility across lab workflows.'
      ],
      tags: ['R', 'Bioinformatics', 'RNA-seq Analysis', 'Genomics', 'Statistical Analysis', 'Automation']
    },
    {
      year: '2024',
      title: 'Design Fellow',
      company: 'Pull for Progress',
      period: '2024–Present',
      location: 'Stanford, CA',
      description: 'Built a geospatial healthcare worker deployment tool using Python, Pandas, and Folium to model risk scoring, cost effectiveness, and regional prioritization in Burkina Faso.',
      details: [
        'Developed interactive web applications and data stories using HTML, CSS, JavaScript, and D3.js to support global health partnerships, including work with the Stanford Global Health Center.',
        'Created data-driven visualizations that help decision-makers optimize healthcare resource allocation in low-resource settings.'
      ],
      tags: ['Python', 'Pandas', 'Folium', 'D3.js', 'Geospatial Analysis', 'Global Health']
    },
    {
      year: '2025',
      title: 'Healthcare Design Challenge — Finalist',
      company: 'AMANI Project, Stanford',
      period: '2025',
      location: 'Stanford, CA',
      description: 'Co-developed AMANI, a phone-based, AI-enabled mapping and reporting system for WASH hazards in refugee and low-resource settings.',
      details: [
        'Designed workflows for offline-first, geotagged hazard reporting to reduce outbreak response delays caused by limited connectivity.',
        'Contributed to system design incorporating on-device AI checks, edge-efficient models, and human-in-the-loop verification for public health triage.'
      ],
      tags: ['Computer Vision', 'Edge AI', 'React Native', 'Public Health Tech', 'Offline-First']
    },
    {
      year: '2023',
      title: 'Tech & Innovation Fellow',
      company: 'Khaista Boutique',
      period: '2023–2024',
      location: 'Remote',
      description: 'Built and launched a React-based e-commerce platform enabling Afghan women artisans to sell goods globally. Prioritized accessibility, low-bandwidth performance, and user-centered design in collaboration with community stakeholders.',
      details: [
        'Implemented responsive design optimized for low-bandwidth environments and older devices common in target markets.',
        'Built accessibility features including keyboard navigation and screen reader support to ensure platform inclusivity.'
      ],
      tags: ['React', 'Accessibility', 'Low-Bandwidth Optimization', 'Community Impact']
    }
  ];'''

# Replace the old experiences array
pattern = r'const experiences = \[[\s\S]*?\];'
content = re.sub(pattern, new_experiences, content, count=1)

# Update the intro paragraph
old_intro = r'I have had the opportunity to work on diverse projects spanning data science, web development,\s+and mobile applications\. Each experience has taught me something valuable and I continuously\s+improve in my learning journey\.'

new_intro = '''My experience spans computational neuroscience, bioinformatics, and health technology — 
          from analyzing genomic data and building cognitive assessment platforms to designing 
          AI-powered tools for global health applications.'''

content = re.sub(old_intro, new_intro, content)

with open('client/src/components/ScrollingPortfolio.tsx', 'w') as f:
    f.write(content)

print("✅ Work section updated!")

import re

with open('client/src/components/ScrollingPortfolio.tsx', 'r') as f:
    content = f.read()

# New skill categories focused on neurotech/biotech
new_skills = '''  const skillCategories = [
    {
      category: 'Computational Biology & Bioinformatics',
      skills: ['R', 'Python', 'RNA-seq Analysis', 'Genomic Data Processing', 'Statistical Analysis', 'Bioinformatics Workflows', 'High-Dimensional Data']
    },
    {
      category: 'Data Engineering & ML',
      skills: ['Python', 'SQL', 'ETL Pipelines', 'Pandas', 'Data Cleaning', 'Clinical Data Systems', 'Reproducible Analysis', 'Data Visualization']
    },
    {
      category: 'Healthcare AI & Edge Computing',
      skills: ['Computer Vision', 'Edge-Efficient AI', 'On-Device ML', 'Privacy-Preserving Systems', 'Human-in-the-Loop AI', 'Offline-First Architecture']
    },
    {
      category: 'Full-Stack & Deployment',
      skills: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Node.js', 'PostgreSQL', 'REST APIs', 'Progressive Web Apps', 'Low-Bandwidth Optimization']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Figma', 'D3.js', 'Folium', 'HuggingFace', 'OpenCV', 'Chrome APIs', 'Docker']
    }
  ];'''

# Replace the skillCategories array
pattern = r'const skillCategories = \[[\s\S]*?\];'
content = re.sub(pattern, new_skills, content, count=1)

# Update the intro paragraph
old_intro = r'Core technical skills from coursework, internships, and personal projects\.'
new_intro = '''My technical toolkit spans computational biology, healthcare data systems, and AI development — 
          built through bioinformatics research, neurotech internships, and global health projects.'''

content = re.sub(old_intro, new_intro, content)

# Update the "Current Focus" section
old_focus = r'Building reliable, user-centered software with emphasis on backend systems, progressive web apps, and computer vision applications\. Actively seeking Software Engineering internships for Summer 2025\.'
new_focus = '''Focused on building data systems for neuroscience and healthcare — from genomic analysis pipelines 
            to brain-computer interfaces to clinical AI tools. Specializing in systems that bridge biological 
            complexity with computational intelligence and deploy in real-world clinical or low-resource settings.'''

content = re.sub(old_focus, new_focus, content)

with open('client/src/components/ScrollingPortfolio.tsx', 'w') as f:
    f.write(content)

print("✅ Skills section updated!")

with open('client/src/components/ScrollingPortfolio.tsx', 'r') as f:
    lines = f.readlines()

# Find the projects array and add AMANI as the first project
for i in range(len(lines)):
    if 'const projects = [' in lines[i] and 'ProjectsSection' in ''.join(lines[i-10:i]):
        # Insert AMANI after the opening bracket
        amani_project = '''    {
      title: 'AMANI',
      description: 'AI-enabled WASH hazard mapping platform for refugee and low-resource settings. Phone-based AR system with offline-first reporting, edge AI, and human-in-loop verification. Stanford Healthcare Design Challenge Finalist.',
      tech: ['Computer Vision', 'Edge AI', 'React Native', 'Geospatial ML', 'AR'],
      image: `${import.meta.env.BASE_URL}amani-preview.png`,
      route: '/projects/amani'
    },
'''
        # Add AMANI before ModestFilter
        lines.insert(i+1, amani_project)
        break

with open('client/src/components/ScrollingPortfolio.tsx', 'w') as f:
    f.writelines(lines)

print("✅ AMANI added to projects carousel!")

import re

with open('client/src/components/ScrollingPortfolio.tsx', 'r') as f:
    content = f.read()

# Find the AboutSection function and replace it
new_about = '''function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  return (
    <div className="max-w-6xl px-8 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-2">ABOUT <span className="text-terminal-green">&#123;</span></h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-terminal-gray text-lg leading-relaxed">
            I'm Heena Khan, a CS + Biology student at Stanford focused on computational neuroscience 
            and healthcare AI. I build data systems that bridge biological complexity and clinical 
            impact, from genomic analysis pipelines to cognitive assessment platforms.
          </p>
          
          <p className="text-terminal-gray text-lg leading-relaxed">
            My background spans bioinformatics research analyzing glioma RNA sequencing data, software 
            engineering at Neurotrack Technologies building Alzheimer's detection tools, and health 
            tech design for global humanitarian applications. I'm drawn to problems where rigorous 
            data engineering meets real world health outcomes.
          </p>

          <p className="text-terminal-gray text-lg leading-relaxed">
            Whether it's processing genomic datasets or building offline first health apps, I care 
            about systems that work in the real world, not just in demos. I thrive on projects that 
            handle real constraints (low bandwidth, privacy requirements, resource limitations) and 
            create measurable impact for patients.
          </p>

          <div className="space-y-4">
            <h3 className="text-terminal-green font-semibold text-lg mt-6 mb-3">Core Focus Areas</h3>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
              <span className="text-terminal-white">Brain computer interfaces & neural signal processing</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
              <span className="text-terminal-white">Computational biology & genomic data platforms</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
              <span className="text-terminal-white">Healthcare AI systems with clinical deployment</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-terminal-green rounded-full mt-2"></div>
              <span className="text-terminal-white">Tools designed for real world constraints (offline capable, privacy preserving)</span>
            </div>
          </div>

          <div className="mt-6 bg-terminal-green/10 border border-terminal-green p-4 rounded">
            <p className="text-terminal-white text-sm">
              <strong className="text-terminal-green">Technical Toolkit:</strong> Python/R data engineering, 
              bioinformatics workflows, edge efficient AI, clinical data pipelines
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <div className="rounded border border-terminal-green overflow-hidden mb-4">
              <img 
                src={headshotImage} 
                alt="Heena Khan - Stanford Computer Science Student"
                className="w-full h-80 object-cover object-center"
              />
            </div>
            <div className="text-center text-terminal-white mb-6">
              <div className="font-semibold">Heena Khan</div>
              <div className="text-terminal-gray">Stanford CS + Biology</div>
              <div className="text-terminal-green text-sm mt-2">Neurotech & Healthcare AI</div>
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
                  <span className="text-terminal-white">Dec 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-terminal-green text-2xl">&#125;</div>
    </div>
  );
}'''

# Replace the old AboutSection with the new one
pattern = r'function AboutSection\(\{ scrollToSection \}[^}]+\{[^}]+scrollToSection\?\:[^}]+\}\) \{[\s\S]*?(?=\n// Contact Section|\nfunction ContactSection)'

content = re.sub(pattern, new_about + '\n\n', content, flags=re.MULTILINE)

with open('client/src/components/ScrollingPortfolio.tsx', 'w') as f:
    f.write(content)

print("✅ About section updated!")

import { skillsData } from "@/data/skills";

export default function SkillsPage() {
  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-terminal-green mb-8">
          SKILLS <span className="text-terminal-white">&#123;</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Programming Languages</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-terminal-white font-medium mb-2">Proficient:</div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.programming_languages.proficient.map((skill, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 bg-terminal-green text-terminal-bg rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-terminal-white font-medium mb-2">Familiar:</div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.programming_languages.familiar.map((skill, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 bg-terminal-gray text-terminal-white rounded border border-terminal-green"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Frontend Development</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-terminal-white font-medium mb-2">Frameworks:</div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.frontend.frameworks.map((skill, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 bg-terminal-blue text-terminal-bg rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-terminal-white font-medium mb-2">Styling:</div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.frontend.styling.map((skill, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 bg-terminal-yellow text-terminal-bg rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Data Science & ML</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-terminal-white font-medium mb-2">Libraries:</div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.data_science.libraries.map((skill, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 bg-terminal-green text-terminal-bg rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-terminal-white font-medium mb-2">Techniques:</div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.data_science.techniques.map((skill, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 bg-terminal-blue text-terminal-bg rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Stanford Coursework</h3>
              <div className="grid grid-cols-1 gap-2">
                {skillsData.coursework.map((course, index) => (
                  <div 
                    key={index}
                    className="text-terminal-white text-sm p-2 bg-terminal-gray/30 rounded border border-terminal-gray"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-green">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Experience Highlights</h3>
              <div className="space-y-3 text-terminal-white">
                <div className="flex items-start gap-3">
                  <span className="text-terminal-green mt-1">→</span>
                  <span>50,000+ patient records analyzed</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-terminal-green mt-1">→</span>
                  <span>Multiple responsive applications built</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-terminal-green mt-1">→</span>
                  <span>A/B testing and UX optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-terminal-green mt-1">→</span>
                  <span>Cross-functional team experience</span>
                </div>
              </div>
            </div>

            <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
              <h3 className="text-terminal-green font-semibold mb-4 text-lg">Tools & Platforms</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-terminal-white font-medium mb-2">Development:</div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.tools_platforms.development.map((tool, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 bg-terminal-yellow text-terminal-bg rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-terminal-white font-medium mb-2">Design:</div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.tools_platforms.design.map((tool, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 bg-terminal-green text-terminal-bg rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
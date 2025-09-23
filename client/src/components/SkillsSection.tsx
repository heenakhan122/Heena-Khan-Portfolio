import { useEffect } from "react";
import { skillsData } from "@/data/skills";

interface SkillsSectionProps {
  visible: boolean;
  onComplete: () => void;
}

export default function SkillsSection({ visible, onComplete }: SkillsSectionProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [visible, onComplete]);

  if (!visible) return null;

  return (
    <section id="skills" className="mb-12">
      <div className="mb-8">
        <div className="text-terminal-green mb-4">$ cat skills.json</div>
        <div className="border-l-4 border-terminal-green pl-6">
          <div className="bg-terminal-gray/20 p-6 rounded border border-terminal-gray">
            <pre className="text-terminal-white text-sm overflow-x-auto">
              <code>{JSON.stringify(skillsData, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

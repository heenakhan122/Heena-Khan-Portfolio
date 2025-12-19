import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function AmaniProject() {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-green">
        <div className="flex items-center justify-between p-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-terminal-green hover:text-terminal-white transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="text-terminal-green text-sm">heena@stanford</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4">
              AMANI <span className="text-terminal-green">&#123;</span>
            </h1>
            <p className="text-terminal-gray text-xl mb-6">
              Health + tech project — a privacy-minded prototype exploring how supportive workflows can be delivered in a culturally aware, low-friction UX.
            </p>

            {/* Project Links (update URLs when ready) */}
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="px-6 py-3 bg-terminal-green text-terminal-bg font-semibold rounded hover:bg-terminal-green/90 transition-colors flex items-center gap-2"
                data-testid="button-view-demo"
              >
                <ExternalLink size={18} />
                View Demo
              </a>
              <a
                href="https://github.com/heenakhan122"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-terminal-green text-terminal-green font-semibold rounded hover:bg-terminal-green/10 transition-colors flex items-center gap-2"
                data-testid="button-view-code"
              >
                <Github size={18} />
                View Code
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <div className="rounded border border-terminal-green overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=80"
                alt="AMANI project preview"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-terminal-green mb-6">Overview</h2>
            <div className="space-y-4 text-terminal-gray text-lg leading-relaxed">
              <p>
                AMANI is a portfolio case study focusing on how to design supportive, health-adjacent software that respects privacy, works under real-world constraints, and meets users where they are.
              </p>
              <p>
                The goal of this project was to pressure-test product decisions (on-device vs cloud, what data should never be collected, accessibility defaults, and how to keep the experience culturally respectful) while still shipping a usable prototype.
              </p>
              <p className="text-sm italic">
                Note: This is presented as a collaboration. The case study highlights my specific contributions and clearly separates team vs individual work.
              </p>
            </div>
          </div>

          {/* What I built */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-terminal-green mb-6">What I Built</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-terminal-green/30 rounded-lg bg-terminal-bg/30">
                <h3 className="text-terminal-green font-semibold mb-2">User flows</h3>
                <ul className="space-y-2 text-terminal-gray">
                  <li>• Fast, low-friction onboarding (no account required for core use)</li>
                  <li>• Clear consent + data boundaries (what is stored locally vs shared)</li>
                  <li>• Daily check-ins + lightweight reflection prompts</li>
                </ul>
              </div>
              <div className="p-6 border border-terminal-green/30 rounded-lg bg-terminal-bg/30">
                <h3 className="text-terminal-green font-semibold mb-2">Engineering focus</h3>
                <ul className="space-y-2 text-terminal-gray">
                  <li>• Offline-first patterns for resilience (spotty network)</li>
                  <li>• Accessible UI defaults (keyboard, contrast, readable type)</li>
                  <li>• Clean component boundaries for iteration + testing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-terminal-green mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "IndexedDB / local storage",
                "Accessibility-first UI",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-terminal-green/20 text-terminal-green text-sm rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Next */}
          <div className="p-6 border border-terminal-green/30 rounded-lg bg-terminal-bg/30">
            <h2 className="text-2xl font-semibold text-terminal-green mb-3">What’s Next</h2>
            <p className="text-terminal-gray leading-relaxed">
              If you’d like, I can turn this into a fully detailed case study (problem → constraints → decisions → iterations → results), and wire the demo/code links once they’re public.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

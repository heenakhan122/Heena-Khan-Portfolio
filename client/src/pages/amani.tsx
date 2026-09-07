import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function AmaniProject() {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-green">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2 text-terminal-green hover:text-terminal-white transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="text-terminal-green text-sm">heena@stanford</div>
        </div>
      </nav>

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-8">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4">
              AMANI <span className="text-terminal-green">&#123;</span>
            </h1>
            <p className="text-terminal-gray text-xl mb-6">
              AI-Powered WASH Hazard Mapping — Building health surveillance systems for refugee communities where infrastructure fails
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-terminal-green/20 text-terminal-green text-sm rounded border border-terminal-green/40 font-semibold">
                Stanford Healthcare Design Challenge Finalist
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Offline-First', 'Edge AI', 'React Native', 'TFLite', 'Privacy-by-Design'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-terminal-green/10 text-terminal-green text-sm rounded border border-terminal-green/30">{tag}</span>
              ))}
            </div>
          </div>

          {/* Problem */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">The Problem</h2>
            <div className="space-y-4 text-terminal-gray leading-relaxed">
              <p>In refugee camps, contaminated water taps and overflowing latrines can trigger cholera outbreaks within days. Existing WASH monitoring relies on slow, top-down paper-based surveys that miss early warnings. Community members notice hazards first but have no accessible way to report them.</p>
              <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                <p className="text-terminal-white font-semibold">The broken feedback loop:</p>
                <p>Community members notice hazards first — a contaminated tap, overflowing latrines, blocked drainage — but lack ways to report them. Humanitarian orgs rely on slow, top-down survey systems that miss critical early warnings.</p>
              </div>
              <div className="bg-terminal-green/5 border border-terminal-green/20 p-4 rounded">
                <p className="text-terminal-white font-semibold mb-2">Constraints we designed around:</p>
                <ul className="space-y-1 text-terminal-gray text-sm">
                  <li>• No reliable internet connectivity</li>
                  <li>• Older Android phones (3–4 years old, low RAM)</li>
                  <li>• Strict data privacy for vulnerable populations</li>
                  <li>• NGO response workflows that depend on human judgment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">Team</h2>
            <p className="text-terminal-gray mb-4">Multidisciplinary team — CS, Computational Modeling, International Relations, Human Biology. We had direct experience working with refugee families through academic support programs, which shaped a lot of our technical decisions in ways a purely academic team wouldn't have gotten to.</p>
            <div className="grid gap-3">
              {[
                { name: "Iayan Ansari", role: "Computational Modeling & ME", contrib: "Systems architecture and embedded software" },
                { name: "Alishba", role: "International Relations & Design", contrib: "Advocacy and user-centered design" },
                { name: "Heena Khan", role: "Computer Science", contrib: "AI workflow architecture and health data systems" },
                { name: "Lina", role: "Human Biology, Design & Policy", contrib: "Prototyping and accessibility design" },
                { name: "Roshan", role: "Biochemistry & Molecular Biology", contrib: "Healthcare workflows and analytics" },
              ].map(({ name, role, contrib }) => (
                <div key={name} className="border-l-2 border-terminal-green/50 pl-4">
                  <span className="text-terminal-green font-semibold">{name}</span>
                  <span className="text-terminal-gray text-sm"> ({role}) — {contrib}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Contributions */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">My Contributions</h2>
            <p className="text-terminal-gray mb-6">Technical lead for AI systems and health data architecture. Focused on components that would actually work under real humanitarian constraints.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Offline-First Reporting",
                  items: ["Geotagged hazard reporting that works entirely offline", "Sync-when-online queue with exponential backoff", "Data integrity preserved across network failures"],
                },
                {
                  title: "On-Device AI",
                  items: ["Edge-efficient CV pipeline (quantized TFLite)", "Human-in-the-loop verification — AI suggests, staff confirm", "Deduplication and audit trails for health triage"],
                },
                {
                  title: "Privacy-by-Design",
                  items: ["Anonymous reporter IDs, no PII stored", "Encrypted payloads — images stay on-device until sync", "Data flows that meet humanitarian protection standards"],
                },
                {
                  title: "NGO Workflow Integration",
                  items: ["User journeys for both community reporters and NGO responders", "Escalation pathways from detection to intervention", "Automation that augments frontline workers, not replaces them"],
                },
              ].map(({ title, items }) => (
                <div key={title} className="border-l-2 border-terminal-green pl-4 space-y-2">
                  <h3 className="text-terminal-white font-semibold">{title}</h3>
                  <ul className="space-y-1 text-terminal-gray text-sm">
                    {items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-terminal-green/10 border border-terminal-green/30 p-4 rounded">
              <p className="text-terminal-gray text-sm italic"><strong className="text-terminal-green">Guiding principle:</strong> Build for the constraints, not ideal conditions. Every decision asked: "Will this work on a 3-year-old Android phone with sporadic 2G in a refugee camp?"</p>
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">Technical Architecture</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-terminal-white font-semibold mb-3">Mobile App Flow (React Native)</h3>
                <div className="bg-terminal-green/5 border border-terminal-green/20 p-4 rounded text-sm text-terminal-gray space-y-1">
                  <p><span className="text-terminal-green">1. Capture</span> — Geotagged photo/video, works fully offline</p>
                  <p><span className="text-terminal-green">2. Annotate</span> — Auto-fill location, voice/text notes, guided prompts</p>
                  <p><span className="text-terminal-green">3. Verify</span> — On-device dedup, proximity check, AI classification</p>
                  <p><span className="text-terminal-green">4. Sync</span> — Queue offline, encrypt, sync when online, route to NGO dashboard</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "On-Device 3D Mapping",
                    desc: "Gaussian splatting + Visual-Inertial Odometry (VIO) for georeferenced hazard maps entirely on-device. AR overlays show safe vs. hazardous sources with confidence scores.",
                  },
                  {
                    title: "Edge CV Pipeline",
                    desc: "Quantized INT8 TFLite models for low RAM devices. On-device inference preserves privacy — no images leave the phone until encrypted sync.",
                  },
                  {
                    title: "Human-in-the-Loop",
                    desc: "AI suggests hazard classification, frontline workers confirm. Every dispatch is gated on human review. Full audit trail for every state transition.",
                  },
                  {
                    title: "Privacy Architecture",
                    desc: "Anonymous reporter IDs, AES-256 encrypted sync payloads, no PII collected. Field reports protected from potential misuse.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="border-l-2 border-terminal-green pl-4">
                    <h4 className="text-terminal-white font-semibold mb-1">{title}</h4>
                    <p className="text-terminal-gray text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Before/After */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">Before vs. After</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-red-400 font-semibold mb-3">Traditional WASH Monitoring</h3>
                <ol className="space-y-2 text-terminal-gray text-sm list-decimal list-inside">
                  <li>Community member notices contaminated tap</li>
                  <li>Tells coordinator (if they know who to contact)</li>
                  <li>Coordinator files paper report</li>
                  <li>Report enters bureaucratic queue</li>
                  <li>Days or weeks later: NGO investigates</li>
                  <li className="text-red-400 font-semibold">Outbreak already spreading</li>
                </ol>
              </div>
              <div>
                <h3 className="text-terminal-green font-semibold mb-3">With AMANI</h3>
                <ol className="space-y-2 text-terminal-gray text-sm list-decimal list-inside">
                  <li>Community member opens app, captures 15-second video</li>
                  <li>App auto-tags location, prompts for severity</li>
                  <li>On-device AI checks for duplicates, suggests classification</li>
                  <li>Report queues offline, syncs when connected</li>
                  <li>NGO dashboard shows real-time hazard map</li>
                  <li>Health worker confirms, dispatches response same day</li>
                  <li className="text-terminal-green font-semibold">Hazard addressed before outbreak</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { cat: "Mobile", items: ["React Native + Expo", "ARKit / ARCore", "SQLite (offline)", "AsyncStorage"] },
                { cat: "AI / CV", items: ["TensorFlow Lite (INT8 quantized)", "Gaussian Splatting", "Visual-Inertial Odometry", "On-device inference"] },
                { cat: "Backend", items: ["FastAPI", "PostgreSQL", "Encrypted sync queue", "RESTful NGO dashboard API"] },
                { cat: "Privacy", items: ["Anonymous reporter IDs", "AES-256-GCM payloads", "No PII collection", "Humanitarian data standards"] },
              ].map(({ cat, items }) => (
                <div key={cat}>
                  <h3 className="text-terminal-white font-semibold mb-2">{cat}</h3>
                  <ul className="space-y-1 text-terminal-gray text-sm">
                    {items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">Outcomes & Learnings</h2>
            <div className="bg-terminal-green/10 border border-terminal-green/30 p-4 rounded mb-6">
              <p className="text-terminal-green font-semibold mb-1">Stanford Healthcare Design Challenge — Finalist</p>
              <p className="text-terminal-gray text-sm">Presented to public health experts and impact investors. Scoped for real deployment with MSF, UNHCR, and UN WASH Cluster.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Constraints drive better design", desc: "Building for low bandwidth and older devices forced simplicity and reliability-first decisions we wouldn't have made otherwise." },
                { title: "Augment, don't replace", desc: "Human-in-the-loop respects frontline workers' contextual knowledge while scaling their capacity. Full automation would've broken trust." },
                { title: "Offline-first or nothing", desc: "An app that silently fails when offline loses community trust immediately. Local-first with background sync was non-negotiable." },
                { title: "Privacy is a trust problem", desc: "For vulnerable populations, data privacy isn't a compliance checkbox — it's the difference between people using the app or not." },
              ].map(({ title, desc }) => (
                <div key={title} className="border-l-2 border-terminal-green/50 pl-4">
                  <h4 className="text-terminal-white font-semibold mb-1">{title}</h4>
                  <p className="text-terminal-gray text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

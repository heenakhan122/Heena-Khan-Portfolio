import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

export default function AmaniProject() {
  return (
    <div className="min-h-screen bg-terminal-black text-terminal-white font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-terminal-green hover:text-terminal-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>cd ..</span>
          </Link>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-terminal-green">AMANI: AI-Powered WASH Hazard Mapping for Refugee Communities</h1>
            <p className="text-xl text-terminal-white/80">Building reliable health surveillance systems where infrastructure fails</p>
            <div className="bg-terminal-green/10 border border-terminal-green p-4 rounded">
              <p className="text-terminal-green font-semibold">Stanford Healthcare Design Challenge Finalist</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Offline-First Architecture', 'Privacy-Preserving Design', 'Edge AI + Computer Vision', 'Community-Driven Health Tech', 'Low-Resource Settings'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-terminal-green/10 text-terminal-green text-sm rounded border border-terminal-green/30">{tag}</span>
              ))}
            </div>
          </div>
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ ./problem_statement.sh</h2>
              <div className="space-y-4 text-terminal-white/90">
                <p>In refugee camps and displaced communities, unsafe water and sanitation hazards can trigger disease outbreaks in days. Yet current WASH (Water, Sanitation, Hygiene) monitoring systems take weeks to identify and respond to these risks.</p>
                <div className="border-l-2 border-terminal-green pl-4">
                  <h3 className="text-lg font-semibold text-terminal-white mb-2">The broken feedback loop:</h3>
                  <p>Community members often notice hazards first—a contaminated water tap, overflowing latrines, blocked drainage. But they lack accessible ways to report them. Meanwhile, humanitarian organizations rely on slow, top-down survey systems that miss critical early warnings.</p>
                </div>
                <p><strong className="text-terminal-green">The result?</strong> Preventable outbreaks of cholera, diarrhea, and waterborne diseases in already vulnerable populations.</p>
                <div className="bg-terminal-gray/20 p-4 rounded">
                  <p className="text-terminal-white font-semibold mb-2">The core challenge:</p>
                  <p>How do you build a health surveillance system that works when you have:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-terminal-white/80">
                    <li>Limited or no internet connectivity</li>
                    <li>Older smartphones as the only available devices</li>
                    <li>Vulnerable populations requiring strict data privacy</li>
                    <li>Need for immediate response, not bureaucratic delays</li>
                  </ul>
                </div>
                <p>This wasn't just a technical problem—it was a systems design challenge at the intersection of public health, AI, and humanitarian constraints.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ cat team_and_approach.md</h2>
              <div className="space-y-4">
                <p className="text-terminal-white/90">Our multidisciplinary team brought together expertise in engineering, data science, design, and community work with displaced families:</p>
                <div className="grid gap-3">
                  <div className="border-l-2 border-terminal-green/50 pl-4"><p className="text-terminal-white"><strong className="text-terminal-green">Iayan Ansari</strong> (Computational Modeling & Mechanical Engineering) - Systems architecture and embedded software</p></div>
                  <div className="border-l-2 border-terminal-green/50 pl-4"><p className="text-terminal-white"><strong className="text-terminal-green">Alishba</strong> (International Relations & Design) - Advocacy and user-centered design</p></div>
                  <div className="border-l-2 border-terminal-green/50 pl-4"><p className="text-terminal-white"><strong className="text-terminal-green">Heena Khan</strong> (Computer Science) - AI workflow architecture and health data systems</p></div>
                  <div className="border-l-2 border-terminal-green/50 pl-4"><p className="text-terminal-white"><strong className="text-terminal-green">Lina</strong> (Human Biology, Design & Policy) - Prototyping and accessibility design</p></div>
                  <div className="border-l-2 border-terminal-green/50 pl-4"><p className="text-terminal-white"><strong className="text-terminal-green">Roshan</strong> (Biochemistry & Molecular Biology) - Healthcare workflows and analytics</p></div>
                </div>
                <p className="text-terminal-white/80 text-sm mt-4">The team had direct experience working with refugee families through academic support programs, bringing crucial real-world context to our technical decisions.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ ./my_contributions.sh</h2>
              <p className="text-terminal-white/90 mb-4">As the technical lead for AI systems and health data architecture, I focused on designing workflows and system components that would work under real-world humanitarian constraints.</p>
              <div className="space-y-6">
                <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                  <h3 className="text-lg font-semibold text-terminal-white">Offline-First Reporting Workflows</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• Designed geotagged hazard reporting that works entirely offline</li>
                    <li>• Built sync-when-online queuing to handle intermittent connectivity</li>
                    <li>• Ensured data integrity across network failures</li>
                  </ul>
                </div>
                <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                  <h3 className="text-lg font-semibold text-terminal-white">On-Device AI Architecture</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• Contributed to edge-efficient computer vision pipeline design</li>
                    <li>• Integrated human-in-the-loop verification workflows (AI suggests, staff confirm)</li>
                    <li>• Implemented deduplication and audit trails for health triage</li>
                  </ul>
                </div>
                <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                  <h3 className="text-lg font-semibold text-terminal-white">Privacy-Preserving System Design</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• Designed data flows to protect vulnerable reporter identities</li>
                    <li>• Ensured compliance with humanitarian data protection standards</li>
                    <li>• Built privacy-by-design into every workflow</li>
                  </ul>
                </div>
                <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                  <h3 className="text-lg font-semibold text-terminal-white">Public Health Workflow Integration</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• Mapped user journeys for both community reporters and NGO responders</li>
                    <li>• Designed escalation pathways from detection to intervention</li>
                    <li>• Balanced automation with frontline worker expertise</li>
                  </ul>
                </div>
                <div className="bg-terminal-green/10 border border-terminal-green p-4 rounded mt-4">
                  <p className="text-terminal-white text-sm italic"><strong className="text-terminal-green">The guiding principle:</strong> Build a system that's reliable under constraints, not perfect under ideal conditions. Every design decision asked: "Will this work on a 3-year-old Android phone with sporadic 2G connectivity in a refugee camp?"</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ cat technical_architecture.json</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-terminal-white mb-3">System Components</h3>
                  <div className="bg-terminal-gray/20 p-4 rounded space-y-3">
                    <div>
                      <p className="text-terminal-green font-semibold">Mobile Application (React Native)</p>
                      <ol className="list-decimal list-inside mt-2 space-y-1 text-terminal-white/80 text-sm">
                        <li><strong>Capture:</strong> Geotagged photo/video documentation (works offline)</li>
                        <li><strong>Annotate:</strong> Auto-fill location, add voice/text notes, guided prompts</li>
                        <li><strong>Verify:</strong> On-device checks for duplication, proximity, basic classification</li>
                        <li><strong>Sync & Escalate:</strong> Queue offline, sync when available, route to response teams</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-terminal-white mb-3">Core Technical Innovations</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-terminal-green pl-4">
                      <h4 className="text-terminal-white font-semibold mb-2">On-Device 3D Scene Reconstruction</h4>
                      <p className="text-terminal-white/80 text-sm mb-2">Using Gaussian splatting combined with Visual-Inertial Odometry (VIO), the system enables users to create local 3D scenes entirely on-device.</p>
                      <ul className="list-disc list-inside space-y-1 text-terminal-white/70 text-sm">
                        <li>Georeferenced hazard mapping without cloud dependency</li>
                        <li>AR overlays showing safe water sources versus hazards with confidence scores</li>
                        <li>Reusable map layers accessible offline after initial admin labeling</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-terminal-green pl-4">
                      <h4 className="text-terminal-white font-semibold mb-2">Edge-Efficient Computer Vision</h4>
                      <ul className="list-disc list-inside space-y-1 text-terminal-white/80 text-sm">
                        <li>Quantized models optimized for low RAM and power consumption</li>
                        <li>Compatible with lower-end smartphones common in refugee communities</li>
                        <li>On-device processing preserves privacy and enables offline operation</li>
                        <li>Similar principles to edge processing in wearable medical devices and BCIs</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-terminal-green pl-4">
                      <h4 className="text-terminal-white font-semibold mb-2">Human-in-the-Loop Validation</h4>
                      <p className="text-terminal-white/80 text-sm mb-2">AI suggests hazard classification, frontline health workers confirm, system escalates with audit trail.</p>
                      <p className="text-terminal-white/70 text-sm">This design balances automation with community expertise, builds trust with vulnerable populations, and mirrors clinical AI validation workflows used in diagnostic tools.</p>
                    </div>
                    <div className="border-l-2 border-terminal-green pl-4">
                      <h4 className="text-terminal-white font-semibold mb-2">Privacy-by-Design Architecture</h4>
                      <ul className="list-disc list-inside space-y-1 text-terminal-white/80 text-sm">
                        <li>Encrypted cloud hosting for synced data</li>
                        <li>Anonymous reporter IDs with no PII collection</li>
                        <li>Compliance with humanitarian data protection standards</li>
                        <li>Field reports protected from potential misuse</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ diff traditional_workflow.txt amani_workflow.txt</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">- Traditional WASH Monitoring</h3>
                  <ol className="list-decimal list-inside space-y-2 text-terminal-white/70 text-sm">
                    <li>Community member notices contaminated tap</li>
                    <li>Tells camp coordinator (if they know who to contact)</li>
                    <li>Coordinator files paper report</li>
                    <li>Report enters bureaucratic processing queue</li>
                    <li>Days or weeks later: NGO team investigates</li>
                    <li className="text-red-400 font-semibold">Result: Outbreak already spreading</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-terminal-green font-semibold mb-3">+ With AMANI</h3>
                  <ol className="list-decimal list-inside space-y-2 text-terminal-white/70 text-sm">
                    <li>Community member opens app, captures 15-second video</li>
                    <li>App auto-tags location, prompts for severity details</li>
                    <li>On-device AI checks for duplicates, suggests classification</li>
                    <li>Report queues offline, syncs when connectivity available</li>
                    <li>NGO dashboard shows real-time hazard map with alerts</li><li>Health worker confirms, dispatches response same day</li>
                    <li className="text-terminal-green font-semibold">Result: Hazard addressed before outbreak</li>
                  </ol>
                </div>
              </div>
              <div className="mt-6 bg-terminal-green/10 border border-terminal-green p-4 rounded">
                <p className="text-terminal-white text-sm"><strong className="text-terminal-green">Impact:</strong> Compress response time from days to hours. Enable community-driven early warning systems that respect local knowledge while scaling organizational capacity.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ cat key_technical_decisions.md</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-terminal-green pl-4">
                  <h3 className="text-lg font-semibold text-terminal-white mb-2">Why Edge AI Instead of Cloud Processing?</h3>
                  <p className="text-terminal-white/80 text-sm mb-2">Intermittent connectivity in refugee camps made cloud-dependent systems unreliable. Processing on-device meant:</p>
                  <ul className="list-disc list-inside space-y-1 text-terminal-white/70 text-sm">
                    <li>Reports created and queued immediately, regardless of network status</li>
                    <li>Privacy preserved (sensitive images never leave device until encrypted sync)</li>
                    <li>Lower operational costs (no constant cloud compute requirements)</li>
                  </ul>
                </div>
                <div className="border-l-2 border-terminal-green pl-4">
                  <h3 className="text-lg font-semibold text-terminal-white mb-2">Why Human-in-the-Loop Instead of Full Automation?</h3>
                  <p className="text-terminal-white/80 text-sm mb-2">Frontline health workers have contextual knowledge AI cannot capture:</p>
                  <ul className="list-disc list-inside space-y-1 text-terminal-white/70 text-sm">
                    <li>Understanding of local hazard patterns</li>
                    <li>Relationships with community members</li>
                    <li>Cultural competence in sensitive situations</li>
                  </ul>
                  <p className="text-terminal-white/70 text-sm mt-2">Our system augments their expertise rather than replacing it, similar to how clinical diagnostic AI assists rather than replaces physicians.</p>
                </div>
                <div className="border-l-2 border-terminal-green pl-4">
                  <h3 className="text-lg font-semibold text-terminal-white mb-2">Why React Native for Mobile Development?</h3>
                  <ul className="list-disc list-inside space-y-1 text-terminal-white/80 text-sm">
                    <li>Cross-platform development (iOS and Android from single codebase)</li>
                    <li>Large ecosystem of offline-first libraries</li>
                    <li>Strong community support for humanitarian tech projects</li>
                    <li>Easier to train local developers for future maintenance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ ls -la tech_stack/</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-terminal-white font-semibold mb-3">Mobile & Frontend</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• React Native (offline-first architecture)</li>
                    <li>• ARKit/ARCore integration for 3D mapping</li>
                    <li>• Progressive Web App capabilities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-terminal-white font-semibold mb-3">AI & Computer Vision</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• Gaussian Splatting for 3D reconstruction</li>
                    <li>• Quantized CV models (TensorFlow Lite)</li>
                    <li>• Visual-Inertial Odometry (VIO)</li>
                    <li>• On-device inference pipeline</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-terminal-white font-semibold mb-3">Backend & Infrastructure</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• Encrypted cloud hosting</li>
                    <li>• Privacy-by-design data architecture</li>
                    <li>• Sync-when-online queuing system</li>
                    <li>• RESTful API for NGO dashboards</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-terminal-white font-semibold mb-3">Public Health Integration</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• WASH hazard taxonomy (WHO standards)</li>
                    <li>• NGO partnership workflows</li>
                    <li>• Community-driven reporting protocols</li>
                    <li>• Humanitarian data compliance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ ./outcomes_and_learnings.sh</h2>
              <div className="space-y-6">
                <div className="bg-terminal-green/10 border border-terminal-green p-4 rounded">
                  <p className="text-terminal-green font-semibold text-lg mb-2">Stanford Healthcare Design Challenge - Finalist</p>
                  <p className="text-terminal-white/80 text-sm">Our team advanced to the finalist round, presenting AMANI to healthcare innovators, public health experts, and impact investors.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-terminal-white mb-3">What Differentiated AMANI</h3>
                  <ul className="space-y-2 text-terminal-white/80 text-sm">
                    <li className="flex items-start gap-2"><span className="text-terminal-green mt-1">▹</span><span>Real-world deployment viability over theoretical innovation</span></li>
                    <li className="flex items-start gap-2"><span className="text-terminal-green mt-1">▹</span><span>Community-centered design that empowers vulnerable populations</span></li>
                    <li className="flex items-start gap-2"><span className="text-terminal-green mt-1">▹</span><span>Technical solutions to genuine edge AI, privacy, and offline architecture challenges</span></li>
                    <li className="flex items-start gap-2"><span className="text-terminal-green mt-1">▹</span><span>Clear pathway from technology implementation to measurable health outcomes</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-terminal-white mb-3">Key Technical Learnings</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-terminal-green/50 pl-4">
                      <h4 className="text-terminal-white font-semibold mb-1">Constraints Drive Better Design</h4>
                      <p className="text-terminal-white/70 text-sm">Building for low bandwidth, older devices, and vulnerable users forced simplicity, reliability, and privacy-first architecture. These constraints produced better design decisions than optimizing for ideal conditions.</p>
                    </div>
                    <div className="border-l-2 border-terminal-green/50 pl-4">
                      <h4 className="text-terminal-white font-semibold mb-1">Automation Must Augment Human Expertise</h4>
                      <p className="text-terminal-white/70 text-sm">Our human-in-the-loop approach respected frontline workers' knowledge while scaling their capacity. This principle applies across health tech applications, from diagnostic AI to genomic analysis tools to BCI systems.</p>
                    </div>
                    <div className="border-l-2 border-terminal-green/50 pl-4">
                      <h4 className="text-terminal-white font-semibold mb-1">Deployment Readiness From Day One</h4>
                      <p className="text-terminal-white/70 text-sm">AMANI wasn't designed as a prototype—every component considered real-world implementation with NGO partners. This meant planning for training, rollout, sustainability, and community adoption throughout the design process.</p>
                    </div>
                    <div className="border-l-2 border-terminal-green/50 pl-4">
                      <h4 className="text-terminal-white font-semibold mb-1">Privacy and Trust Are Foundational</h4>
                      <p className="text-terminal-white/70 text-sm">For vulnerable populations, data privacy isn't a compliance requirement—it's central to whether the system gets used at all. This shaped every technical architecture decision.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ cat potential_next_steps.md</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-terminal-green pl-4">
                  <h3 className="text-terminal-white font-semibold mb-2">Field Pilot Deployment</h3>
                  <p className="text-terminal-white/80 text-sm mb-2">Partner with MSF, UNHCR, or UN WASH Cluster for real refugee camp deployment. Collect metrics on:</p>
                  <ul className="list-disc list-inside space-y-1 text-terminal-white/70 text-sm">
                    <li>Time from hazard detection to intervention</li>
                    <li>User adoption rates among community members</li>
                    <li>Accuracy of AI hazard classification</li>
                    <li>Measurable impact on disease outbreak prevention</li>
                  </ul>
                </div>
                <div className="border-l-2 border-terminal-green pl-4">
                  <h3 className="text-terminal-white font-semibold mb-2">Expanded Computer Vision Capabilities</h3>
                  <p className="text-terminal-white/80 text-sm mb-2">Future iterations could:</p>
                  <ul className="list-disc list-inside space-y-1 text-terminal-white/70 text-sm">
                    <li>Classify hazard severity automatically (e.g., water turbidity analysis from video)</li>
                    <li>Detect multiple hazard types in single image</li>
                    <li>Provide quantitative risk scores to prioritize response</li>
                  </ul>
                </div>
                <div className="border-l-2 border-terminal-green pl-4">
                  <h3 className="text-terminal-white font-semibold mb-2">Continuous Learning Pipeline</h3>
                  <p className="text-terminal-white/70 text-sm">Use confirmed field reports as training data to improve AI suggestions over time, creating a feedback loop where better AI leads to less manual review and faster response.</p>
                </div>
                <div className="border-l-2 border-terminal-green pl-4">
                  <h3 className="text-terminal-white font-semibold mb-2">Integration with Existing Health Systems</h3>
                  <p className="text-terminal-white/70 text-sm">Connect AMANI to humanitarian early-warning systems (WHO Disease Outbreak News, UNHCR health dashboards) to enable proactive outbreak prevention at regional scale.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

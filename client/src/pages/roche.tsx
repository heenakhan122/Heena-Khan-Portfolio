import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function RocheProject() {
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
              PCR Assay Data Platform <span className="text-terminal-green">&#123;</span>
            </h1>
            <p className="text-terminal-gray text-xl mb-6">
              Roche / Genentech — Enterprise database, drift detection, AI agent, and full-stack app for the CSI Assay Team's diagnostic portfolio
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-terminal-green/20 text-terminal-green text-sm rounded border border-terminal-green/40 font-semibold">
                SWE Intern — Data Infrastructure & Full Stack · June–October 2026
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['PostgreSQL', 'Python', 'Django', 'React', 'AI Agent', 'ETL', 'Docker', 'Schema Drift Detection', 'NL-to-SQL'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-terminal-green/10 text-terminal-green text-sm rounded border border-terminal-green/30">{tag}</span>
              ))}
            </div>
          </div>

          {/* Problem */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">The Problem</h2>
            <div className="space-y-4 text-terminal-gray leading-relaxed">
              <p>The CSI Assay Team ran PCR and NGS experiments across dozens of diagnostic assays — all tracked in ad-hoc Excel sheets. No centralized database, no reliable ETL, no way to query assay data at scale.</p>
              <div className="bg-terminal-green/5 border border-terminal-green/20 p-4 rounded">
                <p className="text-terminal-white font-semibold mb-2">Specific gaps:</p>
                <ul className="space-y-1 text-terminal-gray text-sm">
                  <li>• PCR and NGS records scattered across heterogeneous Excel formats with no schema enforcement</li>
                  <li>• Scientists couldn't query historical assay data — every analysis required manual file hunting</li>
                  <li>• No mechanism to detect when upstream data formats drifted, causing silent ETL failures</li>
                  <li>• No way to ask natural language questions over assay data without writing raw SQL</li>
                </ul>
              </div>
              <p>Scope: design the database from scratch, build the ETL layer, ship an AI agent for NL querying, and deliver a full-stack app — in a single internship.</p>
            </div>
          </div>

          {/* Schema */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">Database Design</h2>
            <p className="text-terminal-gray mb-6">Designed a PostgreSQL schema from scratch to model PCR and NGS assay data across Roche's full diagnostic portfolio.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Class Table Inheritance",
                  desc: "result → pcr_result → hit_result avoids a single wide table while keeping queries efficient across result types.",
                },
                {
                  title: "Design-Time vs. Run-Time",
                  desc: "Separated template design tables (template_pool, hit_pcr_template) from run-time instances (template), so planned vs. executed experiments don't bleed into each other.",
                },
                {
                  title: "Targeted Indexing",
                  desc: "Composite indexes and a partial index on pcr_result(qc_flag) WHERE qc_flag = true — covering the most frequent QC filter queries without index bloat.",
                },
                {
                  title: "ETL Audit Trail",
                  desc: "Every ETL run logged to etl_run_log with source file, row counts, timestamps, and error state — full lineage for debugging and compliance.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="border-l-2 border-terminal-green pl-4">
                  <h3 className="text-terminal-white font-semibold mb-1">{title}</h3>
                  <p className="text-terminal-gray text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-terminal-green/5 border border-terminal-green/20 p-4 rounded text-sm text-terminal-gray">
              25+ tables · Multi-year assay data · Enterprise SSH-tunneled PostgreSQL · Shared across the CSI Assay Team
            </div>
          </div>

          {/* ETL & Drift */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">ETL & Schema Drift Detection</h2>
            <p className="text-terminal-gray mb-4">Built a pre-ingestion drift detection pipeline that runs before every ETL load. Upstream Excel formats from lab instruments change silently — column renames, added sheets, shifted data ranges — causing downstream ETL to ingest corrupt or missing data with no error signal.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border-l-2 border-terminal-green pl-4">
                <h3 className="text-terminal-white font-semibold mb-2">What the pipeline checks</h3>
                <ul className="space-y-1 text-terminal-gray text-sm">
                  <li>• Schema validity — expected columns, correct dtypes</li>
                  <li>• Value distribution — flag unexpected nulls, out-of-range values</li>
                  <li>• Sheet structure — for multi-sheet Excel sources</li>
                  <li>• Cross-source consistency — catch contradictions between linked files</li>
                </ul>
              </div>
              <div className="border-l-2 border-terminal-green pl-4">
                <h3 className="text-terminal-white font-semibold mb-2">ETL scripts shipped</h3>
                <ul className="space-y-1 text-terminal-gray text-sm font-mono">
                  <li><span className="text-terminal-green">insilico_etl.py</span> — hgDNA + interaction reports</li>
                  <li><span className="text-terminal-green">hit_report_etl.py</span> — 8-sheet PLR/HiT Excel</li>
                  <li><span className="text-terminal-green">pcr_run_etl.py</span> — PCR instrument CSV output</li>
                  <li><span className="text-terminal-green">plr_evab_etl.py</span> — PLR EVAB reports</li>
                  <li><span className="text-terminal-green">pool_etl.py</span> — HiT pool design files</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Agent */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">AI Agent (NL-to-SQL)</h2>
            <p className="text-terminal-gray mb-6">Domain-specific AI agent that lets scientists query assay data in natural language. Translates questions into SQL over the live PostgreSQL database — no SQL knowledge needed.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-2 border-terminal-green pl-4">
                <h3 className="text-terminal-white font-semibold mb-2">Architecture</h3>
                <ul className="space-y-1 text-terminal-gray text-sm">
                  <li>• NL-to-SQL grounded in actual DB schema (25+ tables, FKs, CTEs)</li>
                  <li>• Domain-specific prompt context — assay terminology, result hierarchies, QC semantics</li>
                  <li>• Schema drift integration — responses validated against current schema state</li>
                  <li>• Django API endpoint + React chat UI</li>
                </ul>
              </div>
              <div className="border-l-2 border-terminal-green pl-4">
                <h3 className="text-terminal-white font-semibold mb-2">Eval framework</h3>
                <p className="text-terminal-gray text-sm">Ground-truth Q&A evaluation set with automated scoring pipeline to measure agent accuracy — same pattern used in production LLM evaluation at AI labs.</p>
              </div>
            </div>
          </div>

          {/* Full-Stack */}
          <div className="mb-10 pb-10 border-b border-terminal-green/20">
            <h2 className="text-2xl font-bold text-terminal-green mb-6">Full-Stack Application</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-terminal-white font-semibold mb-2">Backend (Django + Django Ninja)</h3>
                <ul className="space-y-1 text-terminal-gray text-sm font-mono">
                  <li><span className="text-terminal-green">GET</span> /api/projects</li>
                  <li><span className="text-terminal-green">GET</span> /api/projects/:id/runs</li>
                  <li><span className="text-terminal-green">GET</span> /api/runs/:id/results</li>
                  <li><span className="text-terminal-green">GET</span> /api/runs/:id/curves</li>
                  <li><span className="text-terminal-green">GET</span> /api/etl/log</li>
                  <li><span className="text-terminal-green">POST</span> /api/agent/query</li>
                </ul>
              </div>
              <div>
                <h3 className="text-terminal-white font-semibold mb-2">Frontend (React + Vite)</h3>
                <ul className="space-y-1 text-terminal-gray text-sm">
                  <li>• Real-time PCR amplification curve visualization</li>
                  <li>• Assay run explorer with filtering/sorting</li>
                  <li>• Chat UI for the AI agent</li>
                  <li>• ETL run log and drift alert dashboard</li>
                </ul>
              </div>
              <div>
                <h3 className="text-terminal-white font-semibold mb-2">Infrastructure</h3>
                <ul className="space-y-1 text-terminal-gray text-sm">
                  <li>• Docker + Docker Compose</li>
                  <li>• CI/CD automated validation</li>
                  <li>• SSH-tunneled enterprise PostgreSQL</li>
                  <li>• Django ORM with managed=False (no migrations on prod DB)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-terminal-white font-semibold mb-2">Tech Stack</h3>
                <ul className="space-y-1 text-terminal-gray text-sm">
                  <li>• Python, Django, Django Ninja</li>
                  <li>• PostgreSQL — CTEs, window functions, partial indexes</li>
                  <li>• React, Vite, TypeScript</li>
                  <li>• pandas, openpyxl, custom validators</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

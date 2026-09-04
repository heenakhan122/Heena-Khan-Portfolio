import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

export default function RocheProject() {
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
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-terminal-green">
              PCR Assay Data Platform — Roche/Genentech
            </h1>
            <p className="text-xl text-terminal-white/80">
              Enterprise-scale database, drift detection pipeline, AI agent, and full-stack
              application for Roche's diagnostic assay portfolio
            </p>
            <div className="bg-terminal-green/10 border border-terminal-green p-4 rounded">
              <p className="text-terminal-green font-semibold">
                Software Engineering Intern — Data Infrastructure & Full Stack · June 2026 – October 2026
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['PostgreSQL', 'Python', 'Django', 'React', 'AI Agent', 'ETL', 'Docker', 'CI/CD', 'Schema Drift Detection', 'NL-to-SQL'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-terminal-green/10 text-terminal-green text-sm rounded border border-terminal-green/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Problem */}
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ ./problem_statement.sh</h2>
              <div className="space-y-4 text-terminal-white/90">
                <p>
                  Roche's CSI Assay Team ran PCR and NGS assay experiments across dozens of diagnostic
                  assays — all tracked in ad-hoc Excel sheets and manual records. There was no
                  centralized database, no reliable ETL pipeline, and no way to query assay data at scale.
                </p>
                <div className="border-l-2 border-terminal-green pl-4">
                  <h3 className="text-lg font-semibold text-terminal-white mb-2">The core problems:</h3>
                  <ul className="list-disc list-inside space-y-1 text-terminal-white/80 text-sm">
                    <li>PCR and NGS records scattered across heterogeneous Excel formats with no schema enforcement</li>
                    <li>Scientists couldn't query historical assay data — every analysis required manual file hunting</li>
                    <li>No mechanism to detect when upstream data formats drifted, causing silent ETL failures</li>
                    <li>No way to ask natural language questions over assay data without writing raw SQL</li>
                  </ul>
                </div>
                <p>
                  The task: design the database from scratch, build the ETL layer, ship an AI agent
                  for natural language querying, and deliver a full-stack application — in a single internship.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Database Architecture */}
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ cat schema_design.sql</h2>
              <div className="space-y-6">
                <p className="text-terminal-white/90">
                  Designed a PostgreSQL schema from scratch to model PCR and NGS assay data across
                  Roche's full diagnostic portfolio. Key design decisions:
                </p>
                <div className="space-y-4">
                  <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                    <h3 className="text-lg font-semibold text-terminal-white">Class Table Inheritance</h3>
                    <p className="text-terminal-white/80 text-sm">
                      Modeled the assay result hierarchy as <code className="text-terminal-green">result → pcr_result → hit_result</code> using
                      class table inheritance, avoiding a single wide table while keeping queries
                      efficient across result types.
                    </p>
                  </div>
                  <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                    <h3 className="text-lg font-semibold text-terminal-white">Design-Time vs. Run-Time Separation</h3>
                    <p className="text-terminal-white/80 text-sm">
                      Separated template design tables (<code className="text-terminal-green">template_pool</code>,{" "}
                      <code className="text-terminal-green">hit_pcr_template</code>) from run-time instances
                      (<code className="text-terminal-green">template</code>), enabling clean querying of planned vs.
                      executed experiments without schema coupling.
                    </p>
                  </div>
                  <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                    <h3 className="text-lg font-semibold text-terminal-white">Multi-Column Indexing for Query Latency</h3>
                    <p className="text-terminal-white/80 text-sm">
                      Added targeted composite indexes and a partial index on{" "}
                      <code className="text-terminal-green">pcr_result(qc_flag) WHERE qc_flag = true</code> — covering
                      the most frequent QC filter queries without index bloat.
                    </p>
                  </div>
                  <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                    <h3 className="text-lg font-semibold text-terminal-white">ETL Audit Trail</h3>
                    <p className="text-terminal-white/80 text-sm">
                      Every ETL run logged to <code className="text-terminal-green">etl_run_log</code> with source file,
                      row counts, timestamps, and error state — full lineage for debugging and compliance.
                    </p>
                  </div>
                </div>
                <div className="bg-terminal-gray/20 p-4 rounded text-sm text-terminal-white/70">
                  <p className="text-terminal-green font-semibold mb-1">Scale</p>
                  <p>25+ tables · Multi-year assay data · Enterprise SSH-tunneled PostgreSQL · Shared across the CSI Assay Team</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ETL & Drift Detection */}
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ python drift_detector.py --monitor</h2>
              <div className="space-y-6">
                <p className="text-terminal-white/90">
                  Built a pre-ingestion drift detection pipeline that runs before every ETL load.
                  The problem it solves: upstream Excel formats from lab instruments change silently
                  — column renames, added sheets, shifted data ranges — causing downstream ETL
                  to ingest corrupt or missing data with no error signal.
                </p>
                <div className="space-y-4">
                  <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                    <h3 className="text-lg font-semibold text-terminal-white">What the pipeline checks</h3>
                    <ul className="list-disc list-inside space-y-1 text-terminal-white/80 text-sm">
                      <li>Schema validity — expected columns present, correct dtypes</li>
                      <li>Value distribution monitoring — flag unexpected nulls, out-of-range values, new categories</li>
                      <li>Sheet structure integrity — for multi-sheet Excel sources (8-sheet HiT reports)</li>
                      <li>Cross-source consistency — catch contradictions between linked files</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                    <h3 className="text-lg font-semibold text-terminal-white">ETL scripts shipped</h3>
                    <ul className="list-disc list-inside space-y-1 text-terminal-white/80 text-sm">
                      <li><code className="text-terminal-green">insilico_etl.py</code> — hgDNA + interaction reports</li>
                      <li><code className="text-terminal-green">hit_report_etl.py</code> — 8-sheet PLR/HiT Excel reports</li>
                      <li><code className="text-terminal-green">pcr_run_etl.py</code> — PCR instrument CSV output</li>
                      <li><code className="text-terminal-green">plr_evab_etl.py</code> — PLR EVAB report ingestion</li>
                      <li><code className="text-terminal-green">pool_etl.py</code> — HiT pool design files (nonRT/RT)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-terminal-green/10 border border-terminal-green p-4 rounded">
                  <p className="text-terminal-white text-sm">
                    <strong className="text-terminal-green">Why this matters for data companies:</strong> Schema drift
                    is one of the most common silent failure modes in production data pipelines. This
                    is the same class of problem that Monte Carlo, Great Expectations, and Databricks
                    Delta Live Tables solve at platform scale. I built it from scratch on a live enterprise DB.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Agent */}
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ ./ai_agent.py --query "show me QC failures for RSV assay"</h2>
              <div className="space-y-6">
                <p className="text-terminal-white/90">
                  Built a domain-specific AI agent that lets scientists query PCR and NGS assay
                  data in natural language — no SQL required. The agent translates natural language
                  questions into SQL over the live PostgreSQL database.
                </p>
                <div className="space-y-4">
                  <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                    <h3 className="text-lg font-semibold text-terminal-white">Architecture</h3>
                    <ul className="list-disc list-inside space-y-1 text-terminal-white/80 text-sm">
                      <li>NL-to-SQL translation grounded in the actual DB schema (25+ tables, foreign keys, CTEs)</li>
                      <li>Domain-specific prompt context — assay terminology, result hierarchies, QC semantics</li>
                      <li>Drift detection integration — agent responses validated against current schema state</li>
                      <li>Django API endpoint exposing the agent to the frontend chat UI</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                    <h3 className="text-lg font-semibold text-terminal-white">Eval framework</h3>
                    <p className="text-terminal-white/80 text-sm">
                      Built a ground-truth Q&A evaluation set and automated scoring pipeline to measure
                      agent accuracy — the same pattern used in production LLM evaluation at AI labs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full-Stack App */}
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ docker compose up --build</h2>
              <div className="space-y-6">
                <p className="text-terminal-white/90">
                  Developed the full-stack application end-to-end: Django REST backend, React frontend
                  with real-time PCR amplification curve visualizations, containerized with Docker,
                  and deployed with automated CI/CD validation.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-terminal-white font-semibold mb-3">Backend (Django + Django Ninja)</h3>
                    <ul className="space-y-1 text-terminal-white/80 text-sm">
                      <li>• <code className="text-terminal-green">GET /api/projects</code></li>
                      <li>• <code className="text-terminal-green">GET /api/projects/:id/runs</code></li>
                      <li>• <code className="text-terminal-green">GET /api/runs/:id/results</code></li>
                      <li>• <code className="text-terminal-green">GET /api/runs/:id/curves</code></li>
                      <li>• <code className="text-terminal-green">GET /api/etl/log</code></li>
                      <li>• <code className="text-terminal-green">POST /api/agent/query</code></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-terminal-white font-semibold mb-3">Frontend (React + Vite)</h3>
                    <ul className="space-y-1 text-terminal-white/80 text-sm">
                      <li>• Real-time PCR amplification curve visualization</li>
                      <li>• Assay run explorer with filtering/sorting</li>
                      <li>• Chat UI for the AI agent</li>
                      <li>• ETL run log and drift alert dashboard</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-terminal-white font-semibold mb-3">Infrastructure</h3>
                    <ul className="space-y-1 text-terminal-white/80 text-sm">
                      <li>• Docker containerization</li>
                      <li>• Automated CI/CD validation pipeline</li>
                      <li>• SSH-tunneled connection to enterprise PostgreSQL</li>
                      <li>• Django ORM with <code className="text-terminal-green">managed=False</code> (no migrations on prod DB)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-terminal-white font-semibold mb-3">Data Model</h3>
                    <ul className="space-y-1 text-terminal-white/80 text-sm">
                      <li>• 25+ tables, class table inheritance</li>
                      <li>• Junction tables, partial indexes</li>
                      <li>• Full ETL audit lineage</li>
                      <li>• Multi-team shared schema</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why This Matters */}
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ cat why_this_matters.md</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                  <h3 className="text-lg font-semibold text-terminal-white">For data platform companies (Databricks, Snowflake, Fivetran, dbt)</h3>
                  <p className="text-terminal-white/80 text-sm">
                    I built every layer of a data platform from scratch: schema design, ETL with drift
                    detection, data quality monitoring, and a natural language interface. This is the same
                    problem space — just at enterprise scale for a real production database, not a toy dataset.
                  </p>
                </div>
                <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                  <h3 className="text-lg font-semibold text-terminal-white">For AI labs (Anthropic, OpenAI, Scale AI)</h3>
                  <p className="text-terminal-white/80 text-sm">
                    The AI agent + eval framework is exactly the pattern used in production LLM deployment:
                    domain-grounded prompting, schema-aware SQL generation, and automated evaluation against
                    ground truth. Built on a live system with real scientists as users.
                  </p>
                </div>
                <div className="border-l-2 border-terminal-green pl-4 space-y-2">
                  <h3 className="text-lg font-semibold text-terminal-white">For full-stack / SWE roles (FAANG, Notion, Roblox)</h3>
                  <p className="text-terminal-white/80 text-sm">
                    Shipped a production full-stack application: REST API, React frontend, Docker deployment,
                    CI/CD. Strong PostgreSQL and Django fundamentals, with React on top. Not a side project —
                    used by the CSI Assay Team at Roche.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card className="bg-terminal-black border-terminal-green">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-terminal-green mb-4">$ ls -la tech_stack/</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-terminal-white font-semibold mb-3">Backend & Data</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• Python 3, Django, Django Ninja</li>
                    <li>• PostgreSQL (enterprise, SSH-tunneled)</li>
                    <li>• SQL — CTEs, window functions, partial indexes</li>
                    <li>• ETL pipelines (pandas, openpyxl, custom validators)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-terminal-white font-semibold mb-3">AI & Agent</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• NL-to-SQL agent (domain-grounded prompting)</li>
                    <li>• Ground-truth eval framework</li>
                    <li>• Schema drift detection pipeline</li>
                    <li>• Statistical distribution monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-terminal-white font-semibold mb-3">Frontend</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• React + Vite + TypeScript</li>
                    <li>• Real-time PCR curve visualization</li>
                    <li>• Chat UI for agent queries</li>
                    <li>• ETL audit dashboard</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-terminal-white font-semibold mb-3">Infrastructure</h3>
                  <ul className="space-y-1 text-terminal-white/80 text-sm">
                    <li>• Docker + Docker Compose</li>
                    <li>• CI/CD automated validation</li>
                    <li>• Linux, Bash, Git</li>
                    <li>• Roche internal VM deployment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

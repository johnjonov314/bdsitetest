export default function DocsArchitecturePage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-2xl p-6">
        <h2>Site structure</h2>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 text-xs">
{`graph TD
  Home --> Platform
  Home --> Solutions
  Home --> Agents
  Home --> Industries
  Home --> Cases
  Home --> Contacts`}
        </pre>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Assistant flow</h3>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 text-xs">
{`sequenceDiagram
  participant U as User
  participant W as Widget
  participant A as /api/agent
  participant L as LAB API
  U->>W: mode + message
  W->>A: POST /api/agent
  A->>L: POST /agent
  L-->>A: structured JSON
  A-->>W: understanding/bundle/architecture/impact/next_steps
  W-->>U: structured report + CTA /contacts`}
        </pre>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>Data → AI → Agents</h3>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 text-xs">
{`flowchart LR
  D[Data Sources] --> G[Governance]
  G --> F[Feature Store]
  F --> M[Model Gateway]
  M --> O[Agent Orchestrator]
  O --> B[Business Apps]
  O --> V[Observability]`}
        </pre>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>LAB gateway</h3>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 text-xs">
{`graph TD
  Client --> API[/api/agent]
  API -->|timeout 25s| LAB[LAB_API_BASE_URL/agent]
  LAB --> API
  API --> Client
  API -->|fallback| Client`}
        </pre>
      </section>

      <section className="glass rounded-2xl p-6">
        <h3>API contract /api/agent</h3>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 text-xs">
{`POST /api/agent
{ mode: "solution" | "impact" | "architecture", message, context }

Response:
{
  understanding: string,
  bundle: string[],
  architecture: string[],
  impact: string[],
  next_steps: string[]
}`}
        </pre>
      </section>
    </div>
  );
}

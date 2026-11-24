import { useNavigate } from 'react-router-dom'

// ====================================================================
// Evidence OS | Investigative Hero Variant (Landing Page)
// Stitch screen: f09a9f1c8f1d4676b0183acc3bab4284
// Color scheme: Gold/Amber (#a16207) — as defined in Stitch for this screen
// ====================================================================

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#f8fafc] text-[#1e293b] min-h-screen flex flex-col overflow-x-hidden" style={{ fontFamily: 'Geist, sans-serif' }}>

      {/* ── TOP APP BAR ── */}
      <header className="bg-[#f8fafc]/80 backdrop-blur-xl fixed top-0 left-0 w-full z-50 flex justify-between items-center border-b border-[#cbd5e1]/30 h-16" style={{ padding: '0 32px' }}>
        <div className="flex items-center gap-8">
          <span className="text-headline-md font-bold tracking-tighter cursor-pointer" style={{ color: '#a16207', fontFamily: 'Geist' }} onClick={() => navigate('/')}>Evidence OS</span>
          <nav className="hidden md:flex gap-6">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/case/new') }} className="font-medium hover:text-[#8a5700] transition-colors duration-200" style={{ color: '#475569', fontFamily: 'Geist', fontSize: '16px' }}>Dashboard</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#475569]" style={{ fontSize: '18px' }}>search</span>
            <input
              type="text"
              placeholder="Query Intelligence..."
              className="bg-[#f1f5f9] border border-[#cbd5e1]/50 rounded py-1.5 pl-9 pr-4 text-[#1e293b] focus:border-[#a16207] focus:ring-0 focus:outline-none w-64 transition-colors"
              style={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}
            />
          </div>
          {/* New Case Button */}
          <button
            onClick={() => navigate('/case/new')}
            className="btn-mechanical flex items-center gap-2 px-4 py-1.5 hover:bg-[#ffd966] transition-colors"
            style={{ background: '#a16207', color: '#3d2d00', fontFamily: 'JetBrains Mono', fontSize: '14px', fontWeight: '500', borderRadius: '2px' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
            New Case
          </button>
          {/* Icon Actions */}
          <div className="flex items-center gap-3 border-l border-[#cbd5e1]/30 pl-4">
            <button className="text-[#475569] hover:text-[#a16207] transition-colors flex items-center justify-center h-8 w-8 rounded-full hover:bg-[#f1f5f9]/50">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-[#475569] hover:text-[#a16207] transition-colors flex items-center justify-center h-8 w-8 rounded-full hover:bg-[#f1f5f9]/50">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-[#e2e8f0] border border-[#cbd5e1] overflow-hidden ml-2 cursor-pointer flex items-center justify-center">
              <span className="material-symbols-outlined text-[#475569]" style={{ fontSize: '20px' }}>person</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-grow pt-16 relative z-10">

        {/* ── HERO SECTION ── */}
        <section className="relative flex items-center justify-center overflow-hidden border-b border-[#cbd5e1]/20 bg-white" style={{ minHeight: '870px', padding: '0 32px' }}>
          {/* Background Image */}
          <img
            src="/assets/hero-bg.jpg"
            alt="Golden Shatter Forensic Background"
            className="absolute inset-0 z-0 w-full h-full object-cover"
            style={{ opacity: 0.12 }}
          />
          {/* Hero Card */}
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center bg-white/90 p-12 rounded-xl backdrop-blur-sm border border-[#a16207]/20">
            {/* System Online Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a16207]/30 mb-6 uppercase tracking-wider"
              style={{ background: 'rgba(255,191,0,0.05)', color: '#a16207', fontFamily: 'JetBrains Mono', fontSize: '12px', boxShadow: 'inset 0 0 10px rgba(255,191,0,0.1)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a16207] animate-pulse" />
              System Online
            </div>
            {/* H1 */}
            <h1 className="text-[#1e293b] mb-4 tracking-tight drop-shadow-md" style={{ fontFamily: 'Geist', fontSize: '40px', fontWeight: '700', lineHeight: '48px', letterSpacing: '-0.02em' }}>
              Evidence OS
            </h1>
            {/* H2 */}
            <h2 className="mb-10 max-w-3xl drop-shadow-sm" style={{ color: '#a16207', fontFamily: 'Geist', fontSize: '32px', fontWeight: '600', lineHeight: '40px', letterSpacing: '-0.01em' }}>
              Reconstructing Intel
            </h2>
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/case/new')}
                className="btn-mechanical flex items-center justify-center gap-2 px-8 py-3"
                style={{ background: '#a16207', color: '#3d2d00', fontFamily: 'JetBrains Mono', fontWeight: '500', borderRadius: '2px', fontSize: '18px' }}
              >
                <span className="material-symbols-outlined icon-fill">play_arrow</span>
                Start New Investigation
              </button>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#475569] opacity-80 animate-bounce">
            <span className="mb-2 uppercase" style={{ color: '#a16207', fontFamily: 'JetBrains Mono', fontSize: '12px' }}>SCROLL</span>
            <span className="material-symbols-outlined" style={{ color: '#a16207' }}>arrow_downward</span>
          </div>
        </section>

        {/* ── PROCESSING PIPELINE ── */}
        <section className="py-24 relative z-10 border-b border-[#cbd5e1]/10" style={{ padding: '96px 32px', background: '#ffffff' }}>
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-12">
              <span className="material-symbols-outlined" style={{ color: '#a16207' }}>account_tree</span>
              <h3 style={{ fontFamily: 'Geist', fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: '#1e293b' }}>Processing Pipeline</h3>
              <div className="h-px bg-[#cbd5e1]/30 flex-grow ml-4" />
            </div>

            {/* Pipeline Nodes */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
              {/* Node 1 */}
              <PipelineNode icon="folder_open" label="Evidence Ingestion" sublabel="Raw data aggregation" active={false} />
              <div className="pipeline-line" />
              {/* Node 2 */}
              <PipelineNode icon="document_scanner" label="Entity Extraction" sublabel="NLP & Pattern Matching" active={false} />
              <div className="pipeline-line" />
              {/* Node 3 — Active */}
              <PipelineNode icon="hub" label="Knowledge Graph" sublabel="Relational Synthesis" active={true} />
              <div className="pipeline-line" />
              {/* Node 4 */}
              <PipelineNode icon="query_stats" label="Deep Analysis" sublabel="Temporal & Spatial modeling" active={false} />
              <div className="pipeline-line" />
              {/* Node 5 */}
              <PipelineNode icon="psychiatry" label="Explainable Insights" sublabel="XAI reporting logic" active={false} />
            </div>
          </div>
        </section>

        {/* ── CORE MODULES BENTO GRID ── */}
        <section className="py-24 relative z-10" style={{ padding: '96px 32px', background: '#f8fafc' }}>
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined" style={{ color: '#a16207' }}>view_quilt</span>
                <h3 style={{ fontFamily: 'Geist', fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: '#1e293b' }}>Core Modules</h3>
              </div>
              <span className="border border-[#cbd5e1]/30 px-2 py-1 rounded" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569' }}>
                SYS_VER: 4.2.1
              </span>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

              {/* Module 1: Knowledge Graph (Large - 8 cols) */}
              <div className="md:col-span-8 tactical-panel rounded-lg relative overflow-hidden flex flex-col justify-between" style={{ padding: '24px', minHeight: '300px' }}>
                <div className="absolute top-4 right-4 opacity-50" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569' }}>[MOD-KG-01]</div>
                <div>
                  <div className="h-12 w-12 rounded flex items-center justify-center mb-6" style={{ background: 'rgba(255,191,0,0.1)', border: '1px solid rgba(255,191,0,0.3)' }}>
                    <span className="material-symbols-outlined" style={{ color: '#a16207' }}>schema</span>
                  </div>
                  <h4 style={{ fontFamily: 'Geist', fontSize: '24px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Dynamic Knowledge Graph</h4>
                  <p style={{ fontFamily: 'Geist', fontSize: '16px', color: '#475569', maxWidth: '540px' }}>
                    Automatically construct complex multi-dimensional relationship maps from unstructured text, communication logs, and financial records. Features real-time node clustering and pathfinding algorithms.
                  </p>
                </div>
                {/* Simulated Graph Visual */}
                <div className="mt-8 h-32 w-full border border-[#cbd5e1]/20 rounded relative overflow-hidden group" style={{ background: 'rgba(255,255,255,0.8)' }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#a16207 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#a16207] rounded-full" style={{ boxShadow: '0 0 10px #a16207' }} />
                  <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#c2410c] rounded-full" style={{ boxShadow: '0 0 10px #c2410c' }} />
                  <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#1e293b] rounded-full" />
                  <svg className="absolute inset-0 w-full h-full" fill="none" style={{ stroke: 'rgba(203,213,225,0.7)' }}>
                    <line x1="25%" y1="50%" x2="75%" y2="33%" strokeDasharray="4 4" strokeWidth="1" />
                    <line x1="25%" y1="50%" x2="66%" y2="66%" strokeDasharray="4 4" strokeWidth="1" />
                    <line x1="75%" y1="33%" x2="66%" y2="66%" strokeDasharray="4 4" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              {/* Module 2: Temporal (4 cols) */}
              <div className="md:col-span-4 tactical-panel rounded-lg relative flex flex-col justify-between" style={{ padding: '24px' }}>
                <div className="absolute top-4 right-4 opacity-50" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569' }}>[MOD-TM-02]</div>
                <div>
                  <div className="h-10 w-10 rounded flex items-center justify-center mb-4" style={{ background: '#f1f5f9', border: '1px solid #cbd5e1' }}>
                    <span className="material-symbols-outlined text-[#1e293b]">history_toggle_off</span>
                  </div>
                  <h4 style={{ fontFamily: 'Geist', fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Temporal Intelligence</h4>
                  <p style={{ fontFamily: 'Geist', fontSize: '14px', color: '#475569' }}>
                    Sequence events across multiple timelines. Detect synchronization anomalies and calculate precise "Time to Event" probability scores based on historical actor behavior.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1 cursor-pointer hover:underline" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#a16207' }}
                  onClick={() => navigate('/reconstruction')}>
                  Explore Timeline <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                </div>
              </div>

              {/* Module 3: XAI (4 cols) */}
              <div className="md:col-span-4 tactical-panel rounded-lg relative flex flex-col justify-between" style={{ padding: '24px' }}>
                <div className="absolute top-4 right-4 opacity-50" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569' }}>[MOD-XA-03]</div>
                <div>
                  <div className="h-10 w-10 rounded flex items-center justify-center mb-4" style={{ background: '#f1f5f9', border: '1px solid #cbd5e1' }}>
                    <span className="material-symbols-outlined text-[#1e293b]">visibility</span>
                  </div>
                  <h4 style={{ fontFamily: 'Geist', fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Explainable AI (XAI)</h4>
                  <p style={{ fontFamily: 'Geist', fontSize: '14px', color: '#475569' }}>
                    Eliminate black-box outputs. Every insight generated is accompanied by a transparent logic tree, linking directly back to the verified source evidence documents.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <div className="h-1 w-full bg-[#f1f5f9] rounded overflow-hidden">
                    <div className="h-full bg-[#a16207]" style={{ width: '85%' }} />
                  </div>
                  <div className="flex justify-between" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569' }}>
                    <span>Confidence</span>
                    <span>85.4%</span>
                  </div>
                </div>
              </div>

              {/* Module 4: Anomaly (4 cols) */}
              <div className="md:col-span-4 tactical-panel rounded-lg relative flex flex-col justify-between" style={{ padding: '24px' }}>
                <div className="absolute top-4 right-4 opacity-50" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569' }}>[MOD-AD-04]</div>
                <div>
                  <div className="h-10 w-10 rounded flex items-center justify-center mb-4" style={{ background: 'rgba(147,0,10,0.2)', border: '1px solid rgba(147,0,10,0.5)' }}>
                    <span className="material-symbols-outlined text-[#b42318]">warning</span>
                  </div>
                  <h4 style={{ fontFamily: 'Geist', fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Anomaly Detection</h4>
                  <p style={{ fontFamily: 'Geist', fontSize: '14px', color: '#475569' }}>
                    Unsupervised learning models monitor transactional and behavioral flows to flag statistical outliers in real-time, reducing false positives by 40%.
                  </p>
                </div>
                <div className="mt-6 bg-[#ffffff] p-2 rounded border border-[#cbd5e1]/30">
                  <div className="flex items-center gap-2 mb-1" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#b42318' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>circle</span> DEV_VAR_X1
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569' }}>
                    &gt; Threshold breached: 0.92
                  </div>
                </div>
              </div>

              {/* Module 5: Provenance (4 cols) */}
              <div className="md:col-span-4 tactical-panel rounded-lg relative flex flex-col justify-between" style={{ padding: '24px' }}>
                <div className="absolute top-4 right-4 opacity-50" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569' }}>[MOD-PV-05]</div>
                <div>
                  <div className="h-10 w-10 rounded flex items-center justify-center mb-4" style={{ background: '#f1f5f9', border: '1px solid #cbd5e1' }}>
                    <span className="material-symbols-outlined text-[#1e293b]">fingerprint</span>
                  </div>
                  <h4 style={{ fontFamily: 'Geist', fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Provenance Tracking</h4>
                  <p style={{ fontFamily: 'Geist', fontSize: '14px', color: '#475569' }}>
                    Cryptographically secure audit trails for every piece of imported evidence. Maintain strict chain of custody protocols required for legal proceedings.
                  </p>
                </div>
                <div className="mt-6 flex gap-1">
                  <div className="h-2 flex-grow rounded-sm" style={{ background: 'rgba(255,191,0,0.4)' }} />
                  <div className="h-2 flex-grow rounded-sm" style={{ background: 'rgba(255,191,0,0.6)' }} />
                  <div className="h-2 flex-grow rounded-sm" style={{ background: 'rgba(255,191,0,0.8)' }} />
                  <div className="h-2 flex-grow rounded-sm" style={{ background: '#a16207', boxShadow: '0 0 5px #a16207' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA SECTION ── */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center border-t border-[#cbd5e1]/10" style={{ padding: '128px 32px', background: '#ffffff' }}>
          <h2 style={{ fontFamily: 'Geist', fontSize: '32px', fontWeight: '600', lineHeight: '40px', letterSpacing: '-0.01em', color: '#1e293b', marginBottom: '16px' }}>
            Ready to uncover the truth?
          </h2>
          <p style={{ fontFamily: 'Geist', fontSize: '16px', color: '#475569', marginBottom: '32px', maxWidth: '480px' }}>
            Initialize the Evidence OS engine and begin mapping complex entity networks immediately.
          </p>
          <button
            onClick={() => navigate('/case/new')}
            className="btn-mechanical flex items-center justify-center gap-2"
            style={{ background: '#a16207', color: '#3d2d00', fontFamily: 'JetBrains Mono', fontSize: '14px', fontWeight: '500', padding: '16px 40px', borderRadius: '2px', boxShadow: '0 0 20px rgba(255,191,0,0.2)' }}
          >
            Start Investigation
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full flex justify-between items-center bg-[#ffffff] border-t border-[#cbd5e1]/10 relative z-20" style={{ padding: '32px 32px' }}>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '14px', fontWeight: '500', color: '#a16207' }}>Evidence OS</span>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569', opacity: 0.7 }}>
          © 2024 FORENSIC INTELLIGENCE COMMAND. CLASSIFIED.
        </span>
        <div className="flex gap-6">
          {['Security', 'API', 'Compliance'].map(link => (
            <a key={link} href="#" className="hover:text-[#a16207] transition-colors"
              style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569' }}>
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

/* ── Pipeline Node Sub-component ── */
function PipelineNode({ icon, label, sublabel, active }: { icon: string; label: string; sublabel: string; active: boolean }) {
  return (
    <div className="flex flex-col items-center text-center w-full md:w-auto relative group">
      <div
        className="h-16 w-16 rounded-full flex items-center justify-center mb-4 z-10 relative transition-all duration-300"
        style={active
          ? { background: 'rgba(255,191,0,0.1)', border: '1px solid #a16207', boxShadow: 'inset 0 0 20px rgba(255,191,0,0.15)' }
          : { background: '#f1f5f9', border: '1px solid #cbd5e1' }
        }
      >
        <span className="material-symbols-outlined text-2xl" style={{ color: active ? '#a16207' : '#475569' }}>{icon}</span>
      </div>
      <span style={{ fontFamily: 'JetBrains Mono', fontSize: '14px', fontWeight: '500', letterSpacing: '0.02em', color: active ? '#a16207' : '#1e293b', marginBottom: '4px' }}>
        {label}
      </span>
      <span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569', maxWidth: '140px' }}>
        {sublabel}
      </span>
    </div>
  )
}

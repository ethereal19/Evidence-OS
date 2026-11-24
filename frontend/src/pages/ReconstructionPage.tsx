import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogSimulator } from '../hooks/useLogSimulator'

// ====================================================================
// Evidence OS | Active Intelligence Reconstruction
// Stitch screen: 6e14101adf5349c5a93937eddb742a3c
// Color: Blue palette (#2563eb primary, #a16207 amber accent)
// Layout: Sidebar + 3-panel (pipeline left, graph center, logs right)
// overflow: hidden — fixed height
// ====================================================================

export default function ReconstructionPage() {
  const navigate = useNavigate()
  const [summary, setSummary] = useState<any>(null)
  useLogSimulator('logs-feed', 3000)

  useEffect(() => {
    fetch('http://localhost:8000/api/insights/summary')
      .then(res => res.json())
      .then(data => setSummary(data))
      .catch(err => console.error('Failed to fetch summary', err))

    const timer = setTimeout(() => {
      navigate('/investigation')
    }, 8000) // 8 seconds simulated loading time
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#f8fafc', fontFamily: 'Geist, sans-serif', color: '#1e293b' }}>

      {/* ── LEFT SIDEBAR ── */}
      <aside className="flex flex-col h-full py-6 border-r border-[#cbd5e1]/20 w-64 transition-all duration-300 ease-in-out"
        style={{ background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)' }}>
        <div className="px-6 mb-8">
          <h1 style={{ fontFamily: 'Geist', fontSize: '24px', fontWeight: '600', color: '#1e293b' }}>Unit 01</h1>
          <p className="uppercase tracking-widest opacity-60" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#475569' }}>Forensic Division</p>
        </div>

        {/* Nav Items */}
        <nav className="flex-grow space-y-1">
          {[
            { icon: 'folder_open', label: 'Evidence Vault', path: '/evidence', active: false },
            { icon: 'hub', label: 'Entity Graph', path: '/investigation', active: false },
            { icon: 'description', label: 'Case Files', path: '/case/new', active: false },
            { icon: 'smart_card_reader', label: 'Digital Forensics', path: '/forensics', active: false },
            { icon: 'history', label: 'Timeline', path: '/reconstruction', active: true },
          ].map(item => (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-300 ${item.active
                ? 'border-r-4 border-[#a16207]'
                : 'text-[#475569] hover:text-[#1e293b]'
              }`}
              style={item.active ? { background: 'rgba(254,183,0,0.1)', color: '#8a5700' } : {}}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="uppercase tracking-wider" style={{ fontFamily: 'JetBrains Mono', fontSize: '14px', fontWeight: '500' }}>{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-4 mt-auto space-y-4">
          <button
            onClick={() => navigate('/case/new')}
            className="w-full py-3 rounded font-bold uppercase text-sm tracking-widest hover:brightness-110 active:scale-95 transition-transform"
            style={{ background: '#a16207', color: '#412d00' }}
          >
            New Investigation
          </button>
          <div className="space-y-1 pt-4 border-t border-[#cbd5e1]/20">
            <div className="flex items-center gap-3 text-[#475569] px-2 py-2 text-xs">
              <span className="material-symbols-outlined text-sm">help</span>
              <span>Help Center</span>
            </div>
            <div className="flex items-center gap-3 text-[#475569] px-2 py-2 text-xs">
              <span className="material-symbols-outlined text-sm">analytics</span>
              <span>System Status</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-grow flex flex-col relative overflow-hidden" style={{ background: '#f8fafc' }}>

        {/* Top Navigation */}
        <header className="flex justify-between items-center w-full h-16 border-b border-[#cbd5e1]/30 z-20 px-8"
          style={{ background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(16px)' }}>
          <div className="flex items-center gap-8">
            <span
              className="font-black tracking-widest cursor-pointer"
              onClick={() => navigate('/')}
              style={{ fontFamily: 'Geist', fontSize: '40px', fontWeight: '900', color: '#a16207', letterSpacing: '0.1em', lineHeight: '48px' }}
            >
              Evidence OS
            </span>
            <nav className="hidden md:flex gap-6">
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/case/new') }} className="font-medium hover:text-[#8a5700] transition-colors duration-200" style={{ color: '#475569', fontFamily: 'Geist', fontSize: '16px' }}>Dashboard</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search evidence..."
                className="border border-[#cbd5e1] rounded-full px-4 py-1 text-sm focus:outline-none focus:border-[#2563eb] transition-all w-64"
                style={{ background: 'rgba(255,255,255,0.96)', color: '#1e293b', fontFamily: 'Geist' }}
              />
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-[#475569] cursor-pointer hover:text-[#8a5700]">notifications</span>
              <span className="material-symbols-outlined text-[#475569] cursor-pointer hover:text-[#8a5700]">settings</span>
            </div>
            <img src="/assets/avatars/investigator-1.jpg" alt="Profile" className="w-8 h-8 rounded-full border border-[#a16207]/30 object-cover" />
          </div>
        </header>

        {/* ── DYNAMIC RECONSTRUCTION LAYER ── */}
        <div className="flex-grow flex p-6 gap-6 relative">

          {/* Background grid */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="w-full h-full scanline relative">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(152,203,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(152,203,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
          </div>

          {/* ── LEFT PANEL: Processing Pipeline ── */}
          <div className="w-72 glass-panel-blue rounded-xl p-4 flex flex-col z-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono', fontSize: '14px', fontWeight: '500', color: '#2563eb' }}>Pipeline v.4.2</h3>
              <span className="px-2 py-0.5 border border-[#cbd5e1] opacity-50" style={{ fontFamily: 'JetBrains Mono', fontSize: '10px' }}>ACTIVE_STREAM</span>
            </div>

            <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
              <PipelineStage color="#a16207" label="Parsing Evidence" sublabel="42.8 GB Raw Ingested" status="active" />
              <PipelineStage color="#2563eb" label="Extracting Entities" sublabel="Processing 1,240 nodes" status="processing" />
              <PipelineStage color="#64748b" label="Resolving Identities" sublabel="Pending Cross-Reference" status="pending" />
              <PipelineStage color="#64748b" label="Constructing Knowledge Graph" sublabel="" status="pending" />
              <PipelineStage color="#64748b" label="Running Graph Intelligence" sublabel="" status="pending" />
              <PipelineStage color="#64748b" label="Temporal Reconstruction" sublabel="" status="pending" />
              <PipelineStage color="#b42318" label="Anomaly Detection" sublabel="" status="error" />
              <PipelineStage color="#64748b" label="Generating Intelligence Signals" sublabel="" status="pending" />
            </div>

            {/* Progress bar */}
            <div className="mt-4 pt-4 border-t border-[#cbd5e1]/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-[#a16207] rounded-full animate-pulse" />
                <span className="uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#a16207' }}>Reconstructing...</span>
              </div>
              <div className="h-1 bg-[#e2e8f0] rounded-full overflow-hidden">
                <div className="h-full w-[45%] transition-all duration-1000" style={{ background: '#a16207', boxShadow: '0 0 8px #a16207' }} />
              </div>
            </div>
          </div>

          {/* ── MIDDLE PANEL: Animated Graph Reconstruction ── */}
          <div className="flex-grow relative z-10 flex flex-col">
            {/* Status tags */}
            <div className="absolute top-4 right-4 flex gap-4 z-10">
              <div className="glass-panel-blue px-3 py-1 rounded" style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#8a5700', border: '1px solid rgba(254,183,0,0.2)' }}>
                RECON_TYPE: MULTIDIMENSIONAL
              </div>
              <div className="glass-panel-blue px-3 py-1 rounded" style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#2563eb', border: '1px solid rgba(152,203,255,0.2)' }}>
                STABILITY: 94.2%
              </div>
            </div>

            {/* Graph area */}
            <div className="flex-grow relative flex items-center justify-center pointer-events-none" id="graph-area">
              <div className="relative w-96 h-96">
                {/* Orbit rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-dashed border-[#a16207]/20 rounded-full" style={{ animation: 'spin 20s linear infinite' }} />
                  <div className="absolute w-80 h-80 border border-[#2563eb]/10 rounded-full" style={{ animation: 'spin 30s linear infinite reverse' }} />
                </div>

                {/* Floating Nodes */}
                <div className="absolute node-pulse" style={{ top: '25%', left: '25%' }}>
                  <div className="w-4 h-4 bg-[#2563eb] rounded-full" style={{ boxShadow: '0 0 12px #2563eb' }} />
                  <span className="absolute whitespace-nowrap -translate-x-1/2 left-1/2" style={{ top: '-24px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#2563eb' }}>ENTITY_84A</span>
                </div>
                <div className="absolute node-pulse" style={{ bottom: '33%', right: '25%', animationDelay: '0.5s' }}>
                  <div className="w-3 h-3 bg-[#a16207] rounded-full" style={{ boxShadow: '0 0 10px #a16207' }} />
                  <span className="absolute whitespace-nowrap -translate-x-1/2 left-1/2" style={{ bottom: '-24px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#a16207' }}>TRANS_ID_981</span>
                </div>
                <div className="absolute node-pulse" style={{ top: '50%', right: '33%', animationDelay: '1.2s' }}>
                  <div className="w-5 h-5 bg-[#b42318] rounded-full" style={{ boxShadow: '0 0 15px #b42318' }} />
                  <span className="absolute whitespace-nowrap -translate-x-1/2 left-1/2" style={{ top: '-32px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#b42318' }}>ANOMALY_ERR</span>
                </div>

                {/* Central Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full blur-xl animate-pulse" style={{ background: 'linear-gradient(135deg, rgba(254,183,0,0.4), rgba(152,203,255,0.4))' }} />
                  <span className="material-symbols-outlined absolute text-4xl text-[#1e293b]">hub</span>
                </div>
              </div>
            </div>

            {/* ── Bottom Metric Cards ── */}
            <div className="grid grid-cols-4 gap-4 mt-auto">
              <MetricCard label="Entities Extracted" value={summary ? summary.total_entities.toLocaleString() : 'Loading...'} color="#2563eb" />
              <MetricCard label="Relationships Mapped" value={summary ? summary.total_relations.toLocaleString() : 'Loading...'} color="#8a5700" />
              <MetricCard label="Suspicious Clusters" value={summary ? summary.total_alerts.toString() : 'Loading...'} color="#c2410c" />
              <MetricCard label="Max Risk Actor" value={summary ? summary.max_risk_suspect : 'Loading...'} color="#b42318" />
            </div>
          </div>

          {/* ── RIGHT PANEL: Live Intelligence Logs ── */}
          <div className="w-80 glass-panel-blue rounded-xl flex flex-col z-10 overflow-hidden">
            <div className="p-4 bg-[#f1f5f9] border-b border-[#cbd5e1]/30 flex justify-between items-center">
              <h3 className="uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono', fontSize: '14px', fontWeight: '500' }}>Intelligence Logs</h3>
              <div className="flex gap-1">
                <span className="w-1 h-1 bg-[#2563eb] rounded-full" />
                <span className="w-1 h-1 bg-[#2563eb] rounded-full opacity-50" />
                <span className="w-1 h-1 bg-[#2563eb] rounded-full opacity-20" />
              </div>
            </div>

            {/* Log Feed */}
            <div
              id="logs-feed"
              className="flex-grow p-3 space-y-2 log-container overflow-y-auto"
              style={{ fontFamily: 'JetBrains Mono', fontSize: '11px' }}
            >
              <div className="flex gap-2"><span style={{ color: '#475569' }}>[14:02:11]</span><span style={{ color: '#2563eb' }}>INIT</span><span>Knowledge extraction phase 4...</span></div>
              <div className="flex gap-2"><span style={{ color: '#475569' }}>[14:02:12]</span><span style={{ color: '#a16207' }}>LINK</span><span>Entity ID #8410 connected to Root Cluster</span></div>
              <div className="flex gap-2"><span style={{ color: '#475569' }}>[14:02:15]</span><span style={{ color: '#b42318' }}>RESOLVE</span><span>Multiple alias detected for Node_Beta</span></div>
              <div className="flex gap-2 p-1 border-l-2 border-[#b42318]" style={{ background: 'rgba(255,180,171,0.1)' }}>
                <span style={{ color: '#475569' }}>[14:02:18]</span><span style={{ color: '#b42318', fontWeight: 'bold' }}>ALERT</span><span>Circularity detected in Transaction Flow A-01</span>
              </div>
              <div className="flex gap-2"><span style={{ color: '#475569' }}>[14:02:20]</span><span style={{ color: '#2563eb' }}>INFO</span><span>Temporal reconstruction stabilized (T+4h)</span></div>
              <div className="flex gap-2"><span style={{ color: '#475569' }}>[14:02:22]</span><span style={{ color: '#a16207' }}>GEO</span><span>Mapping location data from Metadata Packets</span></div>
              <div className="flex gap-2"><span style={{ color: '#475569' }}>[14:02:25]</span><span style={{ color: '#2563eb' }}>INIT</span><span>Parsing encrypted buffer 0x4F...</span></div>
              <div className="flex gap-2"><span style={{ color: '#475569' }}>[14:02:28]</span><span style={{ color: '#a16207' }}>MATCH</span><span>Biometric signature overlap (98.2%)</span></div>
              <div className="flex gap-2"><span style={{ color: '#475569' }}>[14:02:30]</span><span style={{ color: '#2563eb' }}>STREAM</span><span>Processing packet stream 184-B...</span></div>
              <div className="flex gap-2"><span style={{ color: '#475569' }}>[14:02:32]</span><span style={{ color: '#a16207' }}>ENTITY</span><span>Discovered hidden sub-group: 'NEXUS'</span></div>
            </div>

            {/* Mini Radar */}
            <div className="h-32 bg-[#ffffff] border-t border-[#cbd5e1]/30 relative overflow-hidden p-2">
              <div className="w-full h-full border border-[#2563eb]/20 rounded-lg relative overflow-hidden flex items-center justify-center">
                <div className="w-full h-px bg-[#2563eb]/20 absolute top-1/2" />
                <div className="h-full w-px bg-[#2563eb]/20 absolute left-1/2" />
                <div className="w-24 h-24 border border-[#2563eb]/10 rounded-full absolute" />
                <div className="w-16 h-16 border border-[#2563eb]/10 rounded-full absolute" />
                <div className="w-1.5 h-1.5 bg-[#b42318] rounded-full absolute animate-pulse" style={{ top: '25%', left: '33%' }} />
                <div className="w-1 h-1 bg-[#a16207] rounded-full absolute" style={{ bottom: '25%', right: '25%' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] to-transparent opacity-40" />
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER STATUS BAR ── */}
        <footer className="h-8 border-t border-[#cbd5e1]/10 px-6 flex items-center justify-between uppercase tracking-widest z-20"
          style={{ background: '#ffffff', fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#475569' }}>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#a16207] rounded-full" /> RECONSTRUCTION ENGINE: STABLE
            </span>
            <span>CPU LOAD: 42%</span>
            <span>GPU UTIL: 89%</span>
          </div>
          <div className="flex gap-4">
            <span>ENCRYPTION: AES-256-GCM</span>
            <span style={{ color: '#2563eb' }}>SESSION_ID: Evidence-OS-01-RECON</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

function PipelineStage({ color, label, sublabel, status }: { color: string; label: string; sublabel: string; status: 'active' | 'processing' | 'pending' | 'error' }) {
  return (
    <div className={`flex items-start gap-3 ${status !== 'active' ? 'opacity-50' : ''}`}>
      <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: color, boxShadow: status === 'active' ? `0 0 8px ${color}` : 'none' }} />
      <div className="flex-grow border-l border-[#cbd5e1]/30 pl-4 pb-4">
        <p style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: status === 'error' ? '#b42318' : status === 'active' ? color : '#1e293b' }}>{label}</p>
        {sublabel && <span style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#475569' }}>{sublabel}</span>}
      </div>
    </div>
  )
}

function MetricCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="glass-panel-blue p-4 rounded-xl" style={{ borderLeft: `2px solid ${color}` }}>
      <p className="uppercase" style={{ fontFamily: 'JetBrains Mono', fontSize: '10px', color: '#475569' }}>{label}</p>
      <h4 className="mt-1" style={{ fontFamily: 'Geist', fontSize: '24px', fontWeight: '600', color }}>{value}</h4>
    </div>
  )
}

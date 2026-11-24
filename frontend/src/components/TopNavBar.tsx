import { useNavigate, useLocation } from 'react-router-dom'

interface TopNavBarProps {
  avatarSrc: string
}

const NAV_LINKS = [
  { label: 'Dashboard', path: '/case/new' },
]

export default function TopNavBar({ avatarSrc }: TopNavBarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header
      className="bg-[#f8fafc]/80 backdrop-blur-xl fixed top-0 left-0 w-full z-50 flex justify-between items-center border-b border-[#cbd5e1]/30 h-16"
      style={{ padding: '0 32px' }}
    >
      {/* Left: Logo + Nav */}
      <div className="flex items-center gap-8">
        <span
          className="text-headline-xl font-black tracking-widest cursor-pointer"
          style={{ color: '#a16207' }}
          onClick={() => navigate('/')}
        >
          Evidence OS
        </span>
        <nav className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <a
                key={link.path}
                href="#"
                onClick={(e) => { e.preventDefault(); navigate(link.path) }}
                className={`font-medium transition-colors duration-200 ${isActive
                  ? 'text-[#8a5700] font-bold border-b-2 border-[#a16207] pb-1'
                  : 'text-[#475569] hover:text-[#8a5700]'
                }`}
                style={{ fontFamily: 'Geist, sans-serif', fontSize: '16px' }}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>

      {/* Right: Search + Icons + Avatar */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden lg:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#475569]" style={{ fontSize: '18px' }}>
            search
          </span>
          <input
            type="text"
            placeholder="Search case repository..."
            className="bg-[#ffffff] border border-[#cbd5e1]/30 rounded-lg pl-10 pr-4 py-1.5 text-[#1e293b] focus:ring-1 focus:ring-[#a16207] focus:border-[#a16207] outline-none w-64 transition-all"
            style={{ fontFamily: 'Geist', fontSize: '14px' }}
          />
        </div>

        {/* Notification */}
        <div className="relative group">
          <button className="material-symbols-outlined text-[#475569] hover:text-[#8a5700] transition-colors">
            notifications
          </button>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#b42318] rounded-full border-2 border-[#f8fafc]" />
        </div>

        {/* Settings */}
        <button className="material-symbols-outlined text-[#475569] hover:text-[#8a5700] transition-colors">
          settings
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 pl-4 border-l border-[#cbd5e1]/30">
          <img
            src={avatarSrc}
            alt="Investigator Profile"
            className="w-8 h-8 rounded-full border border-[#a16207]/30 object-cover"
          />
          <span className="text-technical-sm text-[#475569] hidden lg:block">
            ID-9422 // AGENT
          </span>
        </div>
      </div>
    </header>
  )
}

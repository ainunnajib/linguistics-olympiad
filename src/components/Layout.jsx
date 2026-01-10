import { Link, useLocation } from 'react-router-dom'

function Layout({ children }) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', emoji: '🏠' },
    { path: '/crash-course', label: '3hr Prep', emoji: '🚀', highlight: true },
    { path: '/lessons', label: 'Lessons', emoji: '📚' },
    { path: '/problems', label: 'Problems', emoji: '🧩' },
    { path: '/quiz', label: 'Quiz', emoji: '✏️' },
    { path: '/strategy', label: 'Strategy', emoji: '🎯' },
    { path: '/quickref', label: 'Quick Ref', emoji: '📋' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🔤</span>
              <span className="font-bold text-xl text-gray-900">SLO Prep</span>
            </Link>
            <nav className="flex gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-700'
                      : item.highlight
                        ? 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="hidden sm:inline">{item.emoji} </span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 animate-fade-in">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-600 font-medium">🇸🇬 Singapore Linguistics Olympiad Prep</p>
          <p className="mt-1 text-gray-400 text-sm">Built for aspiring linguists</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

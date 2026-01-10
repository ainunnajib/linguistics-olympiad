import { Link, useLocation } from 'react-router-dom'

function Layout({ children }) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', emoji: '🏠' },
    { path: '/lessons', label: 'Lessons', emoji: '📚' },
    { path: '/problems', label: 'Problems', emoji: '🧩' },
    { path: '/quiz', label: 'Quiz', emoji: '✏️' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-indigo-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🔤</span>
              <span className="font-bold text-xl text-indigo-900">SLO Prep</span>
            </Link>
            <nav className="flex gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-100'
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
      <main className="max-w-5xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>🇸🇬 Singapore Linguistics Olympiad Prep</p>
          <p className="mt-1">Built for aspiring linguists</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

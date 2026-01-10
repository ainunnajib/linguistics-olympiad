import { Link, useLocation } from 'react-router-dom'

function Layout({ children }) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: 'H' },
    { path: '/crash-course', label: '3hr Prep', icon: '!', highlight: true },
    { path: '/lessons', label: 'Lessons', icon: 'L' },
    { path: '/problems', label: 'Problems', icon: 'P' },
    { path: '/quiz', label: 'Quiz', icon: 'Q' },
    { path: '/strategy', label: 'Strategy', icon: 'S' },
    { path: '/quickref', label: 'Reference', icon: 'R' },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Ambient background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-navy-700/50 bg-navy-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
                <span className="text-navy-950 font-serif font-bold text-xl">S</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-serif text-xl font-semibold text-ink-100">SLO</span>
                <span className="font-serif text-xl font-semibold text-amber-400"> Prep</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-pill ${
                    location.pathname === item.path
                      ? 'nav-pill-active'
                      : item.highlight
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500/30'
                        : 'nav-pill-inactive'
                  }`}
                >
                  <span className="sm:hidden font-serif font-bold">{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-navy-700/50 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400/80 to-amber-600/80 flex items-center justify-center">
                <span className="text-navy-950 font-serif font-bold text-sm">S</span>
              </div>
              <div>
                <p className="font-serif text-ink-200">Singapore Linguistics Olympiad</p>
                <p className="text-ink-400 text-sm">Preparation Resources</p>
              </div>
            </div>

            {/* Decorative flourish */}
            <div className="hidden md:flex items-center gap-4 text-ink-500">
              <span className="flourish" />
              <span className="font-serif italic text-sm">Decode. Discover. Conquer.</span>
              <span className="flourish" />
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-ink-400">
              <Link to="/lessons" className="hover:text-amber-400 transition-colors">Lessons</Link>
              <Link to="/problems" className="hover:text-amber-400 transition-colors">Problems</Link>
              <Link to="/quiz" className="hover:text-amber-400 transition-colors">Quiz</Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-6 border-t border-navy-800/50 text-center text-ink-500 text-xs">
            <p>Built for aspiring linguists and puzzle solvers</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

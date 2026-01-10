import { Link } from 'react-router-dom'

function Home() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Quick Lessons',
      description: 'Master fundamental linguistics concepts through concise, focused lessons',
      link: '/lessons',
      accent: 'sky',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82 48.377 48.377 0 01-4.168.3.64.64 0 01-.657-.643z" />
        </svg>
      ),
      title: 'Practice Problems',
      description: '10 authentic olympiad-style challenges with step-by-step solutions',
      link: '/problems',
      accent: 'purple',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quiz Mode',
      description: '25+ questions to test and reinforce your understanding',
      link: '/quiz',
      accent: 'emerald',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: 'Exam Strategy',
      description: 'Time management and tactical approaches for competition day',
      link: '/strategy',
      accent: 'amber',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: 'Quick Reference',
      description: 'Essential patterns and terminology at your fingertips',
      link: '/quickref',
      accent: 'rose',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      title: '3-Hour Crash Course',
      description: 'Intensive, structured preparation for last-minute review',
      link: '/crash-course',
      accent: 'orange',
    },
  ]

  const topics = [
    { name: 'Number Systems', icon: '123' },
    { name: 'Writing Systems', icon: 'ABC' },
    { name: 'Phonology', icon: 'IPA' },
    { name: 'Morphology', icon: 'MOR' },
    { name: 'Syntax', icon: 'SYN' },
  ]

  const accentColors = {
    sky: 'group-hover:border-sky-500/50 group-hover:bg-sky-500/5',
    purple: 'group-hover:border-purple-500/50 group-hover:bg-purple-500/5',
    emerald: 'group-hover:border-emerald-500/50 group-hover:bg-emerald-500/5',
    amber: 'group-hover:border-amber-500/50 group-hover:bg-amber-500/5',
    rose: 'group-hover:border-rose-500/50 group-hover:bg-rose-500/5',
    orange: 'group-hover:border-orange-500/50 group-hover:bg-orange-500/5',
  }

  const iconColors = {
    sky: 'text-sky-400 group-hover:text-sky-300',
    purple: 'text-purple-400 group-hover:text-purple-300',
    emerald: 'text-emerald-400 group-hover:text-emerald-300',
    amber: 'text-amber-400 group-hover:text-amber-300',
    rose: 'text-rose-400 group-hover:text-rose-300',
    orange: 'text-orange-400 group-hover:text-orange-300',
  }

  return (
    <div className="space-y-16">
      {/* Urgent Banner */}
      <Link
        to="/crash-course"
        className="block relative overflow-hidden glass-card p-1 group hover-lift animate-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-gradient-to-r from-rose-500/10 via-orange-500/10 to-amber-500/10 rounded-xl p-4 border border-rose-500/20">
          <div className="flex items-center justify-center gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30">
              <svg className="w-5 h-5 text-rose-400 animate-pulse-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div className="text-center">
              <p className="font-semibold text-ink-100">Competition approaching? Start here.</p>
              <p className="text-sm text-ink-300">3-Hour Crash Course — structured prep when time is short</p>
            </div>
            <svg className="w-5 h-5 text-ink-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Hero Section */}
      <div className="text-center space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="inline-flex items-center gap-2 badge badge-amber mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Singapore Linguistics Olympiad</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink-50 leading-tight">
          Decode Languages.
          <br />
          <span className="text-gradient">Discover Patterns.</span>
        </h1>

        <p className="text-lg sm:text-xl text-ink-300 max-w-2xl mx-auto leading-relaxed">
          Master the art of linguistic puzzle-solving with structured lessons,
          authentic practice problems, and strategic preparation guides.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link to="/lessons" className="btn-primary">
            Start Learning
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link to="/problems" className="btn-secondary">
            View Problems
          </Link>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {features.map((feature, idx) => (
          <Link
            key={feature.title}
            to={feature.link}
            className={`group relative glass-card p-6 hover-lift transition-all duration-300 ${accentColors[feature.accent]} stagger-${idx + 1}`}
          >
            <div className={`w-12 h-12 rounded-xl bg-navy-700/50 border border-navy-600/50 flex items-center justify-center mb-4 transition-colors ${iconColors[feature.accent]}`}>
              {feature.icon}
            </div>
            <h3 className="font-serif text-xl font-semibold text-ink-100 mb-2 group-hover:text-amber-400 transition-colors">
              {feature.title}
            </h3>
            <p className="text-ink-400 text-sm leading-relaxed">
              {feature.description}
            </p>
            <div className="absolute top-6 right-6 text-ink-600 group-hover:text-amber-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Topics Overview */}
      <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink-100">Core Topics</h2>
            <p className="text-ink-400 text-sm mt-1">Essential areas covered in linguistics competitions</p>
          </div>
          <span className="flourish text-amber-500 hidden sm:block" />
        </div>
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <div
              key={topic.name}
              className="inline-flex items-center gap-3 bg-navy-700/30 border border-navy-600/30 px-4 py-3 rounded-xl hover:border-amber-500/30 hover:bg-amber-500/5 transition-colors cursor-default"
            >
              <span className="font-mono text-xs text-amber-500 font-medium bg-amber-500/10 px-2 py-1 rounded">
                {topic.icon}
              </span>
              <span className="text-ink-200">{topic.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent" />
        <div className="absolute inset-0 bg-navy-800/40" />
        <div className="relative p-8 sm:p-12 text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-xl shadow-amber-500/30">
              <svg className="w-8 h-8 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <h2 className="font-serif text-3xl font-bold text-ink-50 mb-4">
            Ready to Begin?
          </h2>
          <p className="text-ink-300 max-w-lg mx-auto mb-8">
            Start with the fundamentals, practice with real problems, and develop
            the pattern-recognition skills that define great linguists.
          </p>
          <Link to="/lessons" className="btn-primary">
            Begin Your Journey
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center justify-center gap-4 text-ink-500">
          <span className="flourish" />
          <span className="font-serif italic">About SLO</span>
          <span className="flourish" />
        </div>
        <p className="text-ink-400 max-w-2xl mx-auto text-sm leading-relaxed">
          The Singapore Linguistics Olympiad challenges students to solve linguistic puzzles
          requiring no prior knowledge of specific languages — only logical reasoning and
          pattern recognition. This platform helps you develop those exact skills.
        </p>
      </div>
    </div>
  )
}

export default Home

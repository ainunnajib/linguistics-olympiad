import { Link } from 'react-router-dom'

function ProblemCard({ problem, index = 0 }) {
  const difficultyConfig = {
    Easy: { badge: 'badge-green', label: 'Easy' },
    Medium: { badge: 'badge-yellow', label: 'Medium' },
    Hard: { badge: 'badge-red', label: 'Hard' },
  }

  const config = difficultyConfig[problem.difficulty] || difficultyConfig.Easy

  return (
    <Link
      to={`/problems/${problem.id}`}
      className="group block glass-card hover-lift animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6 flex items-start gap-5">
        {/* Icon */}
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-navy-700/50 border border-navy-600/50 flex items-center justify-center text-3xl group-hover:border-purple-500/30 group-hover:bg-purple-500/5 transition-all">
          {problem.emoji}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-serif text-lg font-semibold text-ink-100 group-hover:text-purple-400 transition-colors">
              {problem.title}
            </h3>
            <svg className="flex-shrink-0 w-5 h-5 text-ink-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>

          <p className="text-ink-400 text-sm leading-relaxed mb-3 line-clamp-2">
            {problem.description}
          </p>

          <div className="flex items-center gap-3">
            <span className="badge badge-purple">
              {problem.category}
            </span>
            <span className={`badge ${config.badge}`}>
              {config.label}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom border accent on hover */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/50 transition-all" />
    </Link>
  )
}

export default ProblemCard

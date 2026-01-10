import { Link } from 'react-router-dom'

function ProblemCard({ problem }) {
  const difficultyConfig = {
    Easy: 'badge-green',
    Medium: 'badge-yellow',
    Hard: 'badge-red',
  }

  return (
    <Link
      to={`/problems/${problem.id}`}
      className="card card-hover p-6 group"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl group-hover:scale-110 transition-transform duration-200">{problem.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-violet-600 transition-colors">
            {problem.title}
          </h3>
          <p className="text-gray-500 text-sm mt-1">{problem.description}</p>
          <div className="flex items-center gap-2 mt-3">
            <span className="badge badge-purple">
              {problem.category}
            </span>
            <span className={`badge ${difficultyConfig[problem.difficulty]}`}>
              {problem.difficulty}
            </span>
          </div>
        </div>
        <span className="text-gray-300 group-hover:text-violet-500 group-hover:translate-x-1 transition-all">→</span>
      </div>
    </Link>
  )
}

export default ProblemCard

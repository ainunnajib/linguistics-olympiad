import { Link } from 'react-router-dom'

function ProblemCard({ problem }) {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Hard: 'bg-red-100 text-red-700',
  }

  return (
    <Link
      to={`/problems/${problem.id}`}
      className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-purple-300 transition-all group"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl">{problem.emoji}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
            {problem.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{problem.description}</p>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {problem.category}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[problem.difficulty]}`}>
              {problem.difficulty}
            </span>
          </div>
        </div>
        <span className="text-gray-300 group-hover:text-purple-400 transition-colors">→</span>
      </div>
    </Link>
  )
}

export default ProblemCard

import { Link } from 'react-router-dom'

function LessonCard({ lesson }) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700',
  }

  return (
    <Link
      to={`/lessons/${lesson.id}`}
      className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-indigo-300 transition-all group"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl">{lesson.emoji}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
            {lesson.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{lesson.description}</p>
          <div className="flex items-center gap-3 mt-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[lesson.difficulty]}`}>
              {lesson.difficulty}
            </span>
            <span className="text-gray-400 text-xs">⏱️ {lesson.duration}</span>
          </div>
        </div>
        <span className="text-gray-300 group-hover:text-indigo-400 transition-colors">→</span>
      </div>
    </Link>
  )
}

export default LessonCard

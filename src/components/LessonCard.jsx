import { Link } from 'react-router-dom'

function LessonCard({ lesson }) {
  const difficultyConfig = {
    Beginner: 'badge-green',
    Intermediate: 'badge-yellow',
    Advanced: 'badge-red',
  }

  return (
    <Link
      to={`/lessons/${lesson.id}`}
      className="card card-hover p-6 group"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl group-hover:scale-110 transition-transform duration-200">{lesson.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
            {lesson.title}
          </h3>
          <p className="text-gray-500 text-sm mt-1">{lesson.description}</p>
          <div className="flex items-center gap-2 mt-3">
            <span className={`badge ${difficultyConfig[lesson.difficulty]}`}>
              {lesson.difficulty}
            </span>
            <span className="text-gray-400 text-xs">⏱️ {lesson.duration}</span>
          </div>
        </div>
        <span className="text-gray-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all">→</span>
      </div>
    </Link>
  )
}

export default LessonCard

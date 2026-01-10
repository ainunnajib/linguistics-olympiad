import { useParams, Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import MarkdownRenderer from '../components/MarkdownRenderer'

function LessonDetail() {
  const { id } = useParams()
  const lesson = lessons.find(l => l.id === parseInt(id))

  if (!lesson) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Lesson not found</h1>
        <Link to="/lessons" className="text-indigo-600 hover:underline">
          ← Back to Lessons
        </Link>
      </div>
    )
  }

  const currentIndex = lessons.findIndex(l => l.id === lesson.id)
  const prevLesson = lessons[currentIndex - 1]
  const nextLesson = lessons[currentIndex + 1]

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/lessons" className="text-indigo-600 hover:underline text-sm">
          ← Back to Lessons
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{lesson.emoji}</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{lesson.title}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {lesson.difficulty}
              </span>
              <span className="text-gray-500 text-sm">⏱️ {lesson.duration}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600">{lesson.description}</p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
        <MarkdownRenderer content={lesson.content} />
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
        {prevLesson ? (
          <Link
            to={`/lessons/${prevLesson.id}`}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
          >
            <span>←</span>
            <span>{prevLesson.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextLesson ? (
          <Link
            to={`/lessons/${nextLesson.id}`}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
          >
            <span>{nextLesson.title}</span>
            <span>→</span>
          </Link>
        ) : (
          <Link
            to="/problems"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
          >
            <span>Try Practice Problems</span>
            <span>→</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default LessonDetail

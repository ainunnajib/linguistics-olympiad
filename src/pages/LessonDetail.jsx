import { useParams, Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import MarkdownRenderer from '../components/MarkdownRenderer'

function LessonDetail() {
  const { id } = useParams()
  const lesson = lessons.find(l => l.id === parseInt(id))

  if (!lesson) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="font-serif text-2xl font-bold text-ink-100 mb-4">Lesson not found</h1>
        <Link to="/lessons" className="text-amber-400 hover:text-amber-300 transition-colors">
          ← Back to Lessons
        </Link>
      </div>
    )
  }

  const currentIndex = lessons.findIndex(l => l.id === lesson.id)
  const prevLesson = lessons[currentIndex - 1]
  const nextLesson = lessons[currentIndex + 1]

  const difficultyConfig = {
    Beginner: 'badge-green',
    Intermediate: 'badge-yellow',
    Advanced: 'badge-red',
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Breadcrumb */}
      <Link
        to="/lessons"
        className="inline-flex items-center gap-2 text-ink-400 hover:text-amber-400 text-sm transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Lessons
      </Link>

      {/* Header */}
      <div className="glass-card p-6 sm:p-8">
        <div className="flex items-start gap-5 mb-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-navy-700/50 border border-navy-600/50 flex items-center justify-center text-4xl">
            {lesson.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ink-100 mb-3">
              {lesson.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`badge ${difficultyConfig[lesson.difficulty]}`}>
                {lesson.difficulty}
              </span>
              <span className="flex items-center gap-1.5 text-ink-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {lesson.duration}
              </span>
            </div>
          </div>
        </div>
        <p className="text-ink-300 leading-relaxed">{lesson.description}</p>
      </div>

      {/* Content */}
      <div className="glass-card p-6 sm:p-8">
        <MarkdownRenderer content={lesson.content} />
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-navy-700/50">
        {prevLesson ? (
          <Link
            to={`/lessons/${prevLesson.id}`}
            className="group flex items-center gap-3 text-ink-400 hover:text-amber-400 transition-colors"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">{prevLesson.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextLesson ? (
          <Link
            to={`/lessons/${nextLesson.id}`}
            className="group flex items-center gap-3 text-ink-400 hover:text-amber-400 transition-colors"
          >
            <span className="text-sm">{nextLesson.title}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        ) : (
          <Link
            to="/problems"
            className="btn-primary text-sm"
          >
            Try Practice Problems
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

export default LessonDetail

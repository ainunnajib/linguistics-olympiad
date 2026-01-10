import LessonCard from '../components/LessonCard'
import { lessons } from '../data/lessons'

function Lessons() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-3xl font-bold text-ink-100">Lessons</h1>
            <p className="text-ink-400 text-sm">Core concepts for linguistics olympiad success</p>
          </div>
        </div>
      </div>

      {/* Lesson Cards */}
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <LessonCard key={lesson.id} lesson={lesson} index={index} />
        ))}
      </div>

      {/* Tips Section */}
      <div className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-ink-100 mb-2">Study Tips</h3>
            <ul className="text-ink-400 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                Read each lesson carefully and take notes on key patterns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                Try the example problems after each lesson to reinforce concepts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                Practice identifying patterns systematically — tables help!
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                Don't assume languages work like English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lessons

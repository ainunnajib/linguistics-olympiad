import LessonCard from '../components/LessonCard'
import { lessons } from '../data/lessons'

function Lessons() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📚 Lessons</h1>
        <p className="text-gray-600">
          Quick lessons to help you understand the main types of linguistics olympiad problems.
        </p>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

      <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
        <h3 className="font-semibold text-indigo-900 mb-2">💡 Study Tips</h3>
        <ul className="text-indigo-800 text-sm space-y-1">
          <li>• Read each lesson carefully and take notes</li>
          <li>• Try the example problems after each lesson</li>
          <li>• Practice identifying patterns systematically</li>
          <li>• Don't assume languages work like English!</li>
        </ul>
      </div>
    </div>
  )
}

export default Lessons

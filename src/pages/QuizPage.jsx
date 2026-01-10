import { useState } from 'react'
import Quiz from '../components/Quiz'
import { quizQuestions } from '../data/quizQuestions'

function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(quizQuestions.map(q => q.category))]

  const filteredQuestions = selectedCategory === 'all'
    ? quizQuestions
    : quizQuestions.filter(q => q.category === selectedCategory)

  // Shuffle questions
  const shuffledQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5)

  if (quizStarted) {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">✏️ Quiz</h1>
          <button
            onClick={() => setQuizStarted(false)}
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            ← Back to Setup
          </button>
        </div>
        <Quiz questions={shuffledQuestions.slice(0, 10)} />
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">✏️ Quiz</h1>
        <p className="text-gray-600">
          Test your linguistics olympiad knowledge with these quiz questions.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quiz Setup</h2>

        {/* Category Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-600">
                {Math.min(10, filteredQuestions.length)}
              </div>
              <div className="text-sm text-gray-600">Questions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">
                {filteredQuestions.length}
              </div>
              <div className="text-sm text-gray-600">Available in category</div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={() => setQuizStarted(true)}
          disabled={filteredQuestions.length === 0}
          className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
            filteredQuestions.length > 0
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Start Quiz →
        </button>
      </div>

      {/* Tips */}
      <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
        <h3 className="font-semibold text-indigo-900 mb-2">📝 Quiz Tips</h3>
        <ul className="text-indigo-800 text-sm space-y-1">
          <li>• Read each question carefully</li>
          <li>• Eliminate obviously wrong answers first</li>
          <li>• Apply what you learned in the lessons</li>
          <li>• Don't rush — think through each answer</li>
        </ul>
      </div>
    </div>
  )
}

export default QuizPage

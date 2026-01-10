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
      <div className="space-y-6">
        <div className="flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl font-bold text-ink-100">Quiz</h1>
          </div>
          <button
            onClick={() => setQuizStarted(false)}
            className="flex items-center gap-2 text-ink-400 hover:text-amber-400 text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Setup
          </button>
        </div>
        <Quiz questions={shuffledQuestions.slice(0, 10)} />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-3xl font-bold text-ink-100">Quiz</h1>
            <p className="text-ink-400 text-sm">Test your linguistics knowledge</p>
          </div>
        </div>
      </div>

      {/* Setup Card */}
      <div className="glass-card p-6 sm:p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="font-serif text-xl font-semibold text-ink-100 mb-6">Quiz Setup</h2>

        {/* Category Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-ink-300 mb-3">
            Select Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 shadow-lg shadow-amber-500/20'
                    : 'bg-navy-700/50 text-ink-300 border border-navy-600/50 hover:border-amber-500/30 hover:bg-amber-500/5'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz Info */}
        <div className="bg-navy-800/50 rounded-xl p-6 mb-8 border border-navy-700/50">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient">
                {Math.min(10, filteredQuestions.length)}
              </div>
              <div className="text-sm text-ink-400 mt-1">Questions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink-200">
                {filteredQuestions.length}
              </div>
              <div className="text-sm text-ink-400 mt-1">Available in category</div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={() => setQuizStarted(true)}
          disabled={filteredQuestions.length === 0}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
            filteredQuestions.length > 0
              ? 'btn-primary'
              : 'bg-navy-700/30 text-ink-500 cursor-not-allowed border border-navy-600/30'
          }`}
        >
          Start Quiz
          <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Tips */}
      <div className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-ink-100 mb-2">Quiz Tips</h3>
            <ul className="text-ink-400 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                Read each question carefully before answering
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                Eliminate obviously wrong answers first
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                Apply what you learned in the lessons
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                Don't rush — think through each answer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizPage

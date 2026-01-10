import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { problems } from '../data/problems'
import MarkdownRenderer from '../components/MarkdownRenderer'

function ProblemDetail() {
  const { id } = useParams()
  const problem = problems.find(p => p.id === parseInt(id))
  const [showHints, setShowHints] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [hintsRevealed, setHintsRevealed] = useState(0)

  if (!problem) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="font-serif text-2xl font-bold text-ink-100 mb-4">Problem not found</h1>
        <Link to="/problems" className="text-purple-400 hover:text-purple-300 transition-colors">
          ← Back to Problems
        </Link>
      </div>
    )
  }

  const currentIndex = problems.findIndex(p => p.id === problem.id)
  const prevProblem = problems[currentIndex - 1]
  const nextProblem = problems[currentIndex + 1]

  const difficultyConfig = {
    Easy: 'badge-green',
    Medium: 'badge-yellow',
    Hard: 'badge-red',
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Breadcrumb */}
      <Link
        to="/problems"
        className="inline-flex items-center gap-2 text-ink-400 hover:text-purple-400 text-sm transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Problems
      </Link>

      {/* Header */}
      <div className="glass-card p-6 sm:p-8">
        <div className="flex items-start gap-5 mb-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-navy-700/50 border border-navy-600/50 flex items-center justify-center text-4xl">
            {problem.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ink-100 mb-3">
              {problem.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge badge-purple">
                {problem.category}
              </span>
              <span className={`badge ${difficultyConfig[problem.difficulty]}`}>
                {problem.difficulty}
              </span>
            </div>
          </div>
        </div>
        <p className="text-ink-300 leading-relaxed">{problem.description}</p>
      </div>

      {/* Problem Content */}
      <div className="glass-card p-6 sm:p-8">
        <MarkdownRenderer content={problem.problem} />
      </div>

      {/* Hints Section */}
      <div className="glass-card overflow-hidden">
        <button
          onClick={() => setShowHints(!showHints)}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-navy-700/30 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-ink-100">Need a hint?</h3>
              <p className="text-ink-400 text-sm">{problem.hints.length} hints available</p>
            </div>
          </div>
          <svg className={`w-5 h-5 text-ink-400 transition-transform ${showHints ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showHints && (
          <div className="px-6 pb-6 space-y-3 animate-fade-in">
            {problem.hints.map((hint, index) => (
              <div key={index}>
                {index < hintsRevealed ? (
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                    <p className="text-ink-200 text-sm">
                      <span className="font-medium text-amber-400">Hint {index + 1}:</span> {hint}
                    </p>
                  </div>
                ) : index === hintsRevealed ? (
                  <button
                    onClick={() => setHintsRevealed(hintsRevealed + 1)}
                    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Reveal Hint {index + 1}
                  </button>
                ) : null}
              </div>
            ))}
            {hintsRevealed === problem.hints.length && (
              <p className="text-ink-500 text-sm">All hints revealed!</p>
            )}
          </div>
        )}
      </div>

      {/* Solution Section */}
      <div className="glass-card overflow-hidden">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif font-semibold text-ink-100">Solution</h3>
          </div>
          <button
            onClick={() => setShowSolution(!showSolution)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              showSolution
                ? 'bg-navy-700/50 text-ink-300 border border-navy-600/50'
                : 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-navy-950'
            }`}
          >
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </button>
        </div>

        {showSolution && (
          <div className="px-6 pb-6 pt-2 border-t border-navy-700/50 animate-fade-in">
            <MarkdownRenderer content={problem.solution} />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-navy-700/50">
        {prevProblem ? (
          <Link
            to={`/problems/${prevProblem.id}`}
            className="group flex items-center gap-3 text-ink-400 hover:text-purple-400 transition-colors"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">{prevProblem.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextProblem ? (
          <Link
            to={`/problems/${nextProblem.id}`}
            className="group flex items-center gap-3 text-ink-400 hover:text-purple-400 transition-colors"
          >
            <span className="text-sm">{nextProblem.title}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        ) : (
          <Link
            to="/quiz"
            className="btn-primary text-sm"
          >
            Take the Quiz
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProblemDetail

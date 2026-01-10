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
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Problem not found</h1>
        <Link to="/problems" className="text-indigo-600 hover:underline">
          ← Back to Problems
        </Link>
      </div>
    )
  }

  const currentIndex = problems.findIndex(p => p.id === problem.id)
  const prevProblem = problems[currentIndex - 1]
  const nextProblem = problems[currentIndex + 1]

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/problems" className="text-purple-600 hover:underline text-sm">
          ← Back to Problems
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{problem.emoji}</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{problem.title}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {problem.category}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {problem.difficulty}
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-600">{problem.description}</p>
      </div>

      {/* Problem Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-6">
        <MarkdownRenderer content={problem.problem} />
      </div>

      {/* Hints Section */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-amber-900">💡 Need a hint?</h3>
          <button
            onClick={() => setShowHints(!showHints)}
            className="text-amber-700 text-sm hover:underline"
          >
            {showHints ? 'Hide hints' : 'Show hints'}
          </button>
        </div>
        {showHints && (
          <div className="space-y-3">
            {problem.hints.map((hint, index) => (
              <div key={index}>
                {index < hintsRevealed ? (
                  <p className="text-amber-800 text-sm bg-amber-100 p-3 rounded">
                    <strong>Hint {index + 1}:</strong> {hint}
                  </p>
                ) : index === hintsRevealed ? (
                  <button
                    onClick={() => setHintsRevealed(hintsRevealed + 1)}
                    className="text-amber-700 text-sm hover:underline"
                  >
                    Reveal Hint {index + 1} →
                  </button>
                ) : null}
              </div>
            ))}
            {hintsRevealed === problem.hints.length && (
              <p className="text-amber-600 text-sm">All hints revealed!</p>
            )}
          </div>
        )}
      </div>

      {/* Solution Section */}
      <div className="bg-green-50 rounded-xl border border-green-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-green-900">✅ Solution</h3>
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
          >
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </button>
        </div>
        {showSolution && (
          <div className="mt-4 pt-4 border-t border-green-200">
            <MarkdownRenderer content={problem.solution} />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
        {prevProblem ? (
          <Link
            to={`/problems/${prevProblem.id}`}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
          >
            <span>←</span>
            <span>{prevProblem.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextProblem ? (
          <Link
            to={`/problems/${nextProblem.id}`}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
          >
            <span>{nextProblem.title}</span>
            <span>→</span>
          </Link>
        ) : (
          <Link
            to="/quiz"
            className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
          >
            <span>Take the Quiz</span>
            <span>→</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProblemDetail

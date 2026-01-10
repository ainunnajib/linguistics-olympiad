import { useState } from 'react'

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [quizComplete, setQuizComplete] = useState(false)

  const question = questions[currentQuestion]

  const handleAnswerSelect = (index) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === question.correct
    if (isCorrect) {
      setScore(score + 1)
    }

    setAnswers([...answers, { questionId: question.id, selected: selectedAnswer, correct: question.correct }])
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setQuizComplete(false)
  }

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="card p-8 text-center animate-fade-in">
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🏆' : percentage >= 60 ? '👏' : percentage >= 40 ? '💪' : '📚'}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
        <p className="text-4xl font-bold text-primary-600 mb-2">
          {score} / {questions.length}
        </p>
        <p className="text-gray-500 mb-6">
          {percentage >= 80
            ? "Excellent! You're ready for the olympiad!"
            : percentage >= 60
            ? "Good job! Keep practicing!"
            : percentage >= 40
            ? "Not bad! Review the lessons and try again."
            : "Keep studying! The lessons will help you improve."}
        </p>
        <button
          onClick={handleRestart}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="card p-6 md:p-8 animate-fade-in">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span className="font-medium text-gray-700">Score: {score}</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Category Badge */}
      <span className="badge badge-blue mb-4">
        {question.category}
      </span>

      {/* Question */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          let buttonClass = 'w-full text-left p-4 rounded-xl border-2 transition-all duration-150 '

          if (showResult) {
            if (index === question.correct) {
              buttonClass += 'border-emerald-400 bg-emerald-50 text-emerald-800'
            } else if (index === selectedAnswer && index !== question.correct) {
              buttonClass += 'border-rose-400 bg-rose-50 text-rose-800'
            } else {
              buttonClass += 'border-gray-100 text-gray-400 bg-gray-50/50'
            }
          } else if (selectedAnswer === index) {
            buttonClass += 'border-primary-400 bg-primary-50 text-primary-800 shadow-soft'
          } else {
            buttonClass += 'border-gray-100 hover:border-primary-200 hover:bg-primary-50/50'
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={buttonClass}
              disabled={showResult}
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gray-100 text-gray-600 text-sm font-semibold mr-3">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className={`p-4 rounded-xl mb-6 animate-fade-in ${
          selectedAnswer === question.correct
            ? 'bg-emerald-50 border border-emerald-200'
            : 'bg-amber-50 border border-amber-200'
        }`}>
          <p className="font-medium mb-1">
            {selectedAnswer === question.correct ? '✅ Correct!' : '❌ Not quite!'}
          </p>
          <p className="text-sm text-gray-600">{question.explanation}</p>
        </div>
      )}

      {/* Action Button */}
      {!showResult ? (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className={`w-full py-3 rounded-xl font-medium transition-all duration-150 ${
            selectedAnswer === null
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-soft-lg'
          }`}
        >
          Check Answer
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl font-medium bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-soft-lg transition-all duration-150"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  )
}

export default Quiz

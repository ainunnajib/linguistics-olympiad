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
      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🏆' : percentage >= 60 ? '👏' : percentage >= 40 ? '💪' : '📚'}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
        <p className="text-4xl font-bold text-indigo-600 mb-2">
          {score} / {questions.length}
        </p>
        <p className="text-gray-600 mb-6">
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
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>Score: {score}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Category Badge */}
      <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
        {question.category}
      </span>

      {/* Question */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all '

          if (showResult) {
            if (index === question.correct) {
              buttonClass += 'border-green-500 bg-green-50 text-green-800'
            } else if (index === selectedAnswer && index !== question.correct) {
              buttonClass += 'border-red-500 bg-red-50 text-red-800'
            } else {
              buttonClass += 'border-gray-200 text-gray-500'
            }
          } else if (selectedAnswer === index) {
            buttonClass += 'border-indigo-500 bg-indigo-50 text-indigo-800'
          } else {
            buttonClass += 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={buttonClass}
              disabled={showResult}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className={`p-4 rounded-lg mb-6 ${
          selectedAnswer === question.correct
            ? 'bg-green-50 border border-green-200'
            : 'bg-amber-50 border border-amber-200'
        }`}>
          <p className="font-medium mb-1">
            {selectedAnswer === question.correct ? '✅ Correct!' : '❌ Not quite!'}
          </p>
          <p className="text-sm text-gray-700">{question.explanation}</p>
        </div>
      )}

      {/* Action Button */}
      {!showResult ? (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            selectedAnswer === null
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          Check Answer
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  )
}

export default Quiz

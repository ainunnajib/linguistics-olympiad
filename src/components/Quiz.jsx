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
    const getResultData = () => {
      if (percentage >= 80) return { icon: 'trophy', color: 'amber', message: "Excellent! You're competition-ready." }
      if (percentage >= 60) return { icon: 'star', color: 'emerald', message: 'Great progress! A bit more practice will help.' }
      if (percentage >= 40) return { icon: 'chart', color: 'sky', message: 'Good start! Review the lessons and try again.' }
      return { icon: 'book', color: 'purple', message: 'Keep studying! The lessons will strengthen your skills.' }
    }
    const result = getResultData()

    return (
      <div className="glass-card p-8 sm:p-12 text-center animate-fade-in">
        {/* Result Icon */}
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
          result.color === 'amber' ? 'bg-amber-500/20 border border-amber-500/30' :
          result.color === 'emerald' ? 'bg-emerald-500/20 border border-emerald-500/30' :
          result.color === 'sky' ? 'bg-sky-500/20 border border-sky-500/30' :
          'bg-purple-500/20 border border-purple-500/30'
        }`}>
          {result.icon === 'trophy' && (
            <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
            </svg>
          )}
          {result.icon === 'star' && (
            <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          )}
          {result.icon === 'chart' && (
            <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          )}
          {result.icon === 'book' && (
            <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          )}
        </div>

        <h2 className="font-serif text-3xl font-bold text-ink-100 mb-2">Quiz Complete</h2>

        {/* Score Display */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-5xl font-bold text-gradient">{score}</span>
          <span className="text-2xl text-ink-400">/</span>
          <span className="text-2xl text-ink-400">{questions.length}</span>
        </div>

        {/* Percentage Bar */}
        <div className="max-w-xs mx-auto mb-6">
          <div className="h-2 bg-navy-700/50 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                percentage >= 80 ? 'bg-gradient-to-r from-amber-500 to-amber-400' :
                percentage >= 60 ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' :
                percentage >= 40 ? 'bg-gradient-to-r from-sky-500 to-sky-400' :
                'bg-gradient-to-r from-purple-500 to-purple-400'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-ink-400 text-sm mt-2">{percentage}% correct</p>
        </div>

        <p className="text-ink-300 mb-8">{result.message}</p>

        <button
          onClick={handleRestart}
          className="btn-primary"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="glass-card overflow-hidden animate-fade-in">
      {/* Progress Header */}
      <div className="bg-navy-800/50 border-b border-navy-700/50 px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="badge badge-amber">
              {question.category}
            </span>
            <span className="text-ink-400 text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="flex items-center gap-2 text-ink-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{score}</span>
          </div>
        </div>
        <div className="h-1.5 bg-navy-700/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500 ease-out"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Body */}
      <div className="p-6 sm:p-8">
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink-100 mb-8 leading-relaxed">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => {
            const letter = String.fromCharCode(65 + index)
            let optionClasses = 'group relative flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer '

            if (showResult) {
              if (index === question.correct) {
                optionClasses += 'border-emerald-500/50 bg-emerald-500/10'
              } else if (index === selectedAnswer && index !== question.correct) {
                optionClasses += 'border-rose-500/50 bg-rose-500/10'
              } else {
                optionClasses += 'border-navy-700/30 bg-navy-800/30 opacity-50'
              }
            } else if (selectedAnswer === index) {
              optionClasses += 'border-amber-500/50 bg-amber-500/10'
            } else {
              optionClasses += 'border-navy-700/50 bg-navy-800/30 hover:border-navy-600/50 hover:bg-navy-700/30'
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={optionClasses}
                disabled={showResult}
              >
                <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-serif font-bold text-sm transition-colors ${
                  showResult
                    ? index === question.correct
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : index === selectedAnswer
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : 'bg-navy-700/30 text-ink-500 border border-navy-600/30'
                    : selectedAnswer === index
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'bg-navy-700/30 text-ink-400 border border-navy-600/30 group-hover:border-navy-500/50'
                }`}>
                  {letter}
                </span>
                <span className={`text-left transition-colors ${
                  showResult
                    ? index === question.correct
                      ? 'text-emerald-300'
                      : index === selectedAnswer
                        ? 'text-rose-300'
                        : 'text-ink-500'
                    : selectedAnswer === index
                      ? 'text-ink-100'
                      : 'text-ink-300 group-hover:text-ink-200'
                }`}>
                  {option}
                </span>
                {showResult && index === question.correct && (
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {showResult && index === selectedAnswer && index !== question.correct && (
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className={`p-5 rounded-xl mb-6 animate-fade-in ${
            selectedAnswer === question.correct
              ? 'bg-emerald-500/10 border border-emerald-500/20'
              : 'bg-amber-500/10 border border-amber-500/20'
          }`}>
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                selectedAnswer === question.correct
                  ? 'bg-emerald-500/20'
                  : 'bg-amber-500/20'
              }`}>
                {selectedAnswer === question.correct ? (
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
              </div>
              <div>
                <p className={`font-medium mb-1 ${
                  selectedAnswer === question.correct ? 'text-emerald-300' : 'text-amber-300'
                }`}>
                  {selectedAnswer === question.correct ? 'Correct!' : 'Not quite right'}
                </p>
                <p className="text-ink-300 text-sm leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
              selectedAnswer === null
                ? 'bg-navy-700/30 text-ink-500 cursor-not-allowed border border-navy-600/30'
                : 'btn-primary'
            }`}
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full btn-primary py-4"
          >
            {currentQuestion < questions.length - 1 ? (
              <>
                Next Question
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            ) : (
              <>
                See Results
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default Quiz

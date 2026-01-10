import { Link } from 'react-router-dom'

function Home() {
  const features = [
    {
      emoji: '📚',
      title: 'Quick Lessons',
      description: 'Learn the fundamentals of linguistics olympiad problems',
      link: '/lessons',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
    },
    {
      emoji: '🧩',
      title: 'Practice Problems',
      description: '10 olympiad-style problems with hints and solutions',
      link: '/problems',
      color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
    },
    {
      emoji: '✏️',
      title: 'Quiz (25 Qs)',
      description: 'Test your knowledge with interactive quizzes',
      link: '/quiz',
      color: 'bg-green-50 hover:bg-green-100 border-green-200',
    },
    {
      emoji: '🎯',
      title: 'Exam Strategy',
      description: 'Time management and problem-solving tips',
      link: '/strategy',
      color: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
    },
    {
      emoji: '📋',
      title: 'Quick Reference',
      description: 'All key patterns and terminology in one place',
      link: '/quickref',
      color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
    },
    {
      emoji: '🚀',
      title: '3-Hour Crash Course',
      description: 'Structured prep plan for last-minute study',
      link: '/crash-course',
      color: 'bg-red-50 hover:bg-red-100 border-red-200',
    },
  ]

  const topics = [
    { emoji: '🔢', name: 'Number Systems' },
    { emoji: '✍️', name: 'Writing Systems' },
    { emoji: '🔊', name: 'Phonology' },
    { emoji: '🧩', name: 'Morphology' },
    { emoji: '📝', name: 'Syntax' },
  ]

  return (
    <div>
      {/* Urgent Banner */}
      <Link
        to="/crash-course"
        className="block mb-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-4 text-white hover:from-red-600 hover:to-orange-600 transition-all"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="text-2xl">⏰</span>
          <div className="text-center">
            <p className="font-bold text-lg">Competition Soon? Start Here!</p>
            <p className="text-sm opacity-90">3-Hour Crash Course → Click to begin</p>
          </div>
          <span className="text-2xl">🚀</span>
        </div>
      </Link>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🇸🇬 Singapore Linguistics
          <span className="text-indigo-600"> Olympiad</span> Prep
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Master the skills needed to solve linguistics puzzles.
          Perfect for beginners preparing for SLO.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.link}
            className={`block p-6 rounded-xl border-2 transition-all ${feature.color}`}
          >
            <span className="text-4xl block mb-3">{feature.emoji}</span>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </Link>
        ))}
      </div>

      {/* Topics Overview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Topics Covered</h2>
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <span
              key={topic.name}
              className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700"
            >
              <span>{topic.emoji}</span>
              <span>{topic.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Quick Start */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start?</h2>
        <p className="mb-6 text-indigo-100">
          Begin with the lessons to learn the fundamentals, then practice with example problems.
        </p>
        <Link
          to="/lessons"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
        >
          Start Learning →
        </Link>
      </div>

      {/* About SLO */}
      <div className="mt-12 text-center text-gray-600">
        <h3 className="font-semibold text-gray-900 mb-2">About Singapore Linguistics Olympiad</h3>
        <p className="max-w-2xl mx-auto text-sm">
          The Singapore Linguistics Olympiad (SLO) is an annual competition that challenges students
          to solve linguistic puzzles. No prior knowledge of languages or linguistics is required —
          just logical thinking and pattern recognition skills!
        </p>
      </div>
    </div>
  )
}

export default Home

import { Link } from 'react-router-dom'

function Home() {
  const features = [
    {
      emoji: '📚',
      title: 'Quick Lessons',
      description: 'Learn the fundamentals of linguistics olympiad problems',
      link: '/lessons',
      color: 'hover:border-blue-200 hover:bg-blue-50/50',
    },
    {
      emoji: '🧩',
      title: 'Practice Problems',
      description: '10 olympiad-style problems with hints and solutions',
      link: '/problems',
      color: 'hover:border-violet-200 hover:bg-violet-50/50',
    },
    {
      emoji: '✏️',
      title: 'Quiz (25 Qs)',
      description: 'Test your knowledge with interactive quizzes',
      link: '/quiz',
      color: 'hover:border-emerald-200 hover:bg-emerald-50/50',
    },
    {
      emoji: '🎯',
      title: 'Exam Strategy',
      description: 'Time management and problem-solving tips',
      link: '/strategy',
      color: 'hover:border-amber-200 hover:bg-amber-50/50',
    },
    {
      emoji: '📋',
      title: 'Quick Reference',
      description: 'All key patterns and terminology in one place',
      link: '/quickref',
      color: 'hover:border-teal-200 hover:bg-teal-50/50',
    },
    {
      emoji: '🚀',
      title: '3-Hour Crash Course',
      description: 'Structured prep plan for last-minute study',
      link: '/crash-course',
      color: 'hover:border-rose-200 hover:bg-rose-50/50',
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
    <div className="space-y-10">
      {/* Urgent Banner */}
      <Link
        to="/crash-course"
        className="block bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl p-5 text-white shadow-soft-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
      >
        <div className="flex items-center justify-center gap-4">
          <span className="text-3xl">⏰</span>
          <div className="text-center">
            <p className="font-bold text-lg">Competition Soon? Start Here!</p>
            <p className="text-sm text-white/90">3-Hour Crash Course → Click to begin</p>
          </div>
          <span className="text-3xl">🚀</span>
        </div>
      </Link>

      {/* Hero Section */}
      <div className="text-center py-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
          🇸🇬 Singapore Linguistics
          <span className="text-primary-600"> Olympiad</span> Prep
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto text-balance">
          Master the skills needed to solve linguistics puzzles.
          Perfect for beginners preparing for SLO.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Link
            key={feature.title}
            to={feature.link}
            className={`card card-hover p-6 ${feature.color}`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="text-4xl block mb-3">{feature.emoji}</span>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h2>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </Link>
        ))}
      </div>

      {/* Topics Overview */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Topics Covered</h2>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic.name}
              className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-gray-600 text-sm"
            >
              <span>{topic.emoji}</span>
              <span>{topic.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Quick Start */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center shadow-soft-lg">
        <h2 className="text-2xl font-bold mb-3">Ready to Start?</h2>
        <p className="mb-6 text-primary-100 max-w-md mx-auto">
          Begin with the lessons to learn the fundamentals, then practice with example problems.
        </p>
        <Link
          to="/lessons"
          className="inline-block bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors shadow-soft"
        >
          Start Learning →
        </Link>
      </div>

      {/* About SLO */}
      <div className="text-center py-4">
        <h3 className="font-semibold text-gray-900 mb-2">About Singapore Linguistics Olympiad</h3>
        <p className="max-w-2xl mx-auto text-sm text-gray-500">
          The Singapore Linguistics Olympiad (SLO) is an annual competition that challenges students
          to solve linguistic puzzles. No prior knowledge of languages or linguistics is required —
          just logical thinking and pattern recognition skills!
        </p>
      </div>
    </div>
  )
}

export default Home

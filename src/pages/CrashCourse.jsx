import { Link } from 'react-router-dom'

function CrashCourse() {
  return (
    <div>
      <div className="mb-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <p className="text-red-800 font-semibold">⏰ Competition in 3 hours? You're in the right place!</p>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🚀 Last 3 Hours Crash Course</h1>
        <p className="text-gray-600">
          Focus on what matters most. Follow this sequence.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-6">

        {/* Hour 1 */}
        <div className="bg-white rounded-xl border-2 border-indigo-500 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Hour 1: Core Concepts</h2>
              <p className="text-indigo-600 font-medium">0:00 - 1:00</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">📚 Quick Lesson Review (30 min)</h3>
              <p className="text-sm text-gray-600 mb-3">Skim these lessons - focus on the strategies, not memorization:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <Link to="/lessons/1" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-indigo-500 transition-colors">Number Systems</Link>
                <Link to="/lessons/2" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-indigo-500 transition-colors">Writing Systems</Link>
                <Link to="/lessons/3" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-indigo-500 transition-colors">Sound Changes</Link>
                <Link to="/lessons/4" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-indigo-500 transition-colors">Morphology</Link>
                <Link to="/lessons/5" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-indigo-500 transition-colors">Syntax</Link>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">📋 Study Quick Reference (15 min)</h3>
              <p className="text-sm text-gray-600 mb-3">Get familiar with key terminology and patterns:</p>
              <Link to="/quickref" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                Open Quick Reference →
              </Link>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">🎯 Read Exam Strategy (15 min)</h3>
              <p className="text-sm text-gray-600 mb-3">Learn the approach that will save you time:</p>
              <Link to="/strategy" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                Open Strategy Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Hour 2 */}
        <div className="bg-white rounded-xl border-2 border-green-500 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Hour 2: Active Practice</h2>
              <p className="text-green-600 font-medium">1:00 - 2:00</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">🧩 Solve Practice Problems (45 min)</h3>
              <p className="text-sm text-gray-600 mb-3">Work through these - actually solve them, don't just read:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <Link to="/problems/1" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-green-500 transition-colors">🔢 Toki Pona Numbers</Link>
                <Link to="/problems/2" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-green-500 transition-colors">🧩 Swahili Verbs</Link>
                <Link to="/problems/3" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-green-500 transition-colors">🔊 Japanese Phonology</Link>
                <Link to="/problems/4" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-green-500 transition-colors">📝 Turkish Syntax</Link>
                <Link to="/problems/7" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-green-500 transition-colors">🔢 Basque Numbers</Link>
              </div>
              <div className="mt-3 p-3 bg-yellow-100 rounded-lg text-sm text-yellow-800">
                <strong>Tip:</strong> Spend ~8 min per problem. Use hints if stuck after 5 min. Check solutions to learn the approach.
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">✏️ Take a Quiz (15 min)</h3>
              <p className="text-sm text-gray-600 mb-3">Test your pattern recognition:</p>
              <Link to="/quiz" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                Start Quiz →
              </Link>
            </div>
          </div>
        </div>

        {/* Hour 3 */}
        <div className="bg-white rounded-xl border-2 border-orange-500 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Hour 3: Polish & Prepare</h2>
              <p className="text-orange-600 font-medium">2:00 - 3:00</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">🧩 Harder Problems (30 min)</h3>
              <p className="text-sm text-gray-600 mb-3">Challenge yourself with medium/hard problems:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <Link to="/problems/5" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-orange-500 transition-colors">✍️ Mystery Script</Link>
                <Link to="/problems/6" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-orange-500 transition-colors">🇬🇪 Georgian Verbs</Link>
                <Link to="/problems/8" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-orange-500 transition-colors">🌺 Hawaiian Phonology</Link>
                <Link to="/problems/9" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-orange-500 transition-colors">🏛️ Latin to Romance</Link>
                <Link to="/problems/10" className="bg-white px-3 py-2 rounded border text-center text-sm hover:border-orange-500 transition-colors">🇰🇷 Korean Honorifics</Link>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">📋 Final Review (20 min)</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Re-read Quick Reference one more time</li>
                <li>✓ Review any problems you got wrong</li>
                <li>✓ Remember the problem-solving framework</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">🧘 Relax & Prepare (10 min)</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Gather your supplies (pens, water, watch)</li>
                <li>✓ Take some deep breaths</li>
                <li>✓ Trust your preparation</li>
                <li>✓ Remember: these puzzles are meant to be solvable!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-bold mb-4">🔑 Key Takeaways to Remember</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">The Method</h3>
              <ol className="space-y-1 opacity-90 list-decimal list-inside">
                <li>Read everything first</li>
                <li>Organize data in tables</li>
                <li>Find repeated patterns</li>
                <li>Test with ALL examples</li>
                <li>Answer every question</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-2">The Mindset</h3>
              <ul className="space-y-1 opacity-90">
                <li>• Don't assume it's like English</li>
                <li>• Patterns are regular - find them</li>
                <li>• Partial credit counts</li>
                <li>• Move on if stuck, come back later</li>
                <li>• You CAN solve this!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Good luck */}
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🍀</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Good Luck!</h2>
          <p className="text-gray-600">You've got this. Trust your analysis, stay calm, and show your work.</p>
        </div>
      </div>
    </div>
  )
}

export default CrashCourse

import { Link } from 'react-router-dom'

function CrashCourse() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <div className="glass-card p-4 mb-6 border-rose-500/30 bg-rose-500/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-400 animate-pulse-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-rose-300 font-semibold">Competition in 3 hours? You're in the right place!</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-3xl font-bold text-ink-100">3-Hour Crash Course</h1>
            <p className="text-ink-400 text-sm">Focus on what matters most. Follow this sequence.</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {/* Hour 1 */}
        <div className="glass-card overflow-hidden border-sky-500/30">
          <div className="bg-sky-500/10 p-4 border-b border-sky-500/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 text-navy-950 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-sky-500/30">1</div>
              <div>
                <h2 className="font-serif text-xl font-bold text-ink-100">Hour 1: Core Concepts</h2>
                <p className="text-sky-400 font-medium text-sm">0:00 - 1:00</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Quick Lesson Review (30 min)
              </h3>
              <p className="text-sm text-ink-400 mb-3">Skim these lessons - focus on the strategies, not memorization:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <Link to="/lessons/1" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-sky-500/50 hover:text-sky-400 transition-colors">Number Systems</Link>
                <Link to="/lessons/2" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-sky-500/50 hover:text-sky-400 transition-colors">Writing Systems</Link>
                <Link to="/lessons/3" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-sky-500/50 hover:text-sky-400 transition-colors">Sound Changes</Link>
                <Link to="/lessons/4" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-sky-500/50 hover:text-sky-400 transition-colors">Morphology</Link>
                <Link to="/lessons/5" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-sky-500/50 hover:text-sky-400 transition-colors">Syntax</Link>
              </div>
            </div>

            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                Study Quick Reference (15 min)
              </h3>
              <p className="text-sm text-ink-400 mb-3">Get familiar with key terminology and patterns:</p>
              <Link to="/quickref" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 text-navy-950 px-4 py-2 rounded-lg text-sm font-medium hover:from-sky-400 hover:to-sky-500 transition-all">
                Open Quick Reference
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Read Exam Strategy (15 min)
              </h3>
              <p className="text-sm text-ink-400 mb-3">Learn the approach that will save you time:</p>
              <Link to="/strategy" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 text-navy-950 px-4 py-2 rounded-lg text-sm font-medium hover:from-sky-400 hover:to-sky-500 transition-all">
                Open Strategy Guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Hour 2 */}
        <div className="glass-card overflow-hidden border-emerald-500/30">
          <div className="bg-emerald-500/10 p-4 border-b border-emerald-500/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 text-navy-950 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-emerald-500/30">2</div>
              <div>
                <h2 className="font-serif text-xl font-bold text-ink-100">Hour 2: Active Practice</h2>
                <p className="text-emerald-400 font-medium text-sm">1:00 - 2:00</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82 48.377 48.377 0 01-4.168.3.64.64 0 01-.657-.643z" />
                </svg>
                Solve Practice Problems (45 min)
              </h3>
              <p className="text-sm text-ink-400 mb-3">Work through these - actually solve them, don't just read:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
                <Link to="/problems/1" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors">Toki Pona Numbers</Link>
                <Link to="/problems/2" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors">Swahili Verbs</Link>
                <Link to="/problems/3" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors">Japanese Phonology</Link>
                <Link to="/problems/4" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors">Turkish Syntax</Link>
                <Link to="/problems/7" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors">Basque Numbers</Link>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 text-sm text-amber-300">
                <span className="font-medium">Tip:</span> Spend ~8 min per problem. Use hints if stuck after 5 min. Check solutions to learn the approach.
              </div>
            </div>

            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Take a Quiz (15 min)
              </h3>
              <p className="text-sm text-ink-400 mb-3">Test your pattern recognition:</p>
              <Link to="/quiz" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-navy-950 px-4 py-2 rounded-lg text-sm font-medium hover:from-emerald-400 hover:to-emerald-500 transition-all">
                Start Quiz
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Hour 3 */}
        <div className="glass-card overflow-hidden border-orange-500/30">
          <div className="bg-orange-500/10 p-4 border-b border-orange-500/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 text-navy-950 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-orange-500/30">3</div>
              <div>
                <h2 className="font-serif text-xl font-bold text-ink-100">Hour 3: Polish & Prepare</h2>
                <p className="text-orange-400 font-medium text-sm">2:00 - 3:00</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82 48.377 48.377 0 01-4.168.3.64.64 0 01-.657-.643z" />
                </svg>
                Harder Problems (30 min)
              </h3>
              <p className="text-sm text-ink-400 mb-3">Challenge yourself with medium/hard problems:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <Link to="/problems/5" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-orange-500/50 hover:text-orange-400 transition-colors">Mystery Script</Link>
                <Link to="/problems/6" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-orange-500/50 hover:text-orange-400 transition-colors">Georgian Verbs</Link>
                <Link to="/problems/8" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-orange-500/50 hover:text-orange-400 transition-colors">Hawaiian Phonology</Link>
                <Link to="/problems/9" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-orange-500/50 hover:text-orange-400 transition-colors">Latin to Romance</Link>
                <Link to="/problems/10" className="bg-navy-700/50 border border-navy-600/50 px-3 py-2 rounded-lg text-center text-sm text-ink-300 hover:border-orange-500/50 hover:text-orange-400 transition-colors">Korean Honorifics</Link>
              </div>
            </div>

            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                Final Review (20 min)
              </h3>
              <ul className="text-sm text-ink-400 space-y-2">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Re-read Quick Reference one more time</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Review any problems you got wrong</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Remember the problem-solving framework</li>
              </ul>
            </div>

            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Relax & Prepare (10 min)
              </h3>
              <ul className="text-sm text-ink-400 space-y-2">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Gather your supplies (pens, water, watch)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Take some deep breaths</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Trust your preparation</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Remember: these puzzles are meant to be solvable!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-purple-500/10 to-transparent" />
          <div className="absolute inset-0 bg-navy-800/40" />
          <div className="relative p-6">
            <h2 className="font-serif text-xl font-bold text-ink-100 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              Key Takeaways to Remember
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-amber-400 mb-2">The Method</h3>
                <ol className="space-y-1.5 text-ink-300 list-decimal list-inside">
                  <li>Read everything first</li>
                  <li>Organize data in tables</li>
                  <li>Find repeated patterns</li>
                  <li>Test with ALL examples</li>
                  <li>Answer every question</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-amber-400 mb-2">The Mindset</h3>
                <ul className="space-y-1.5 text-ink-300">
                  <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Don't assume it's like English</li>
                  <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Patterns are regular - find them</li>
                  <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Partial credit counts</li>
                  <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Move on if stuck, come back later</li>
                  <li className="flex items-start gap-2"><span className="text-amber-500">•</span> You CAN solve this!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Good luck */}
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 mb-4 shadow-xl shadow-emerald-500/30">
            <span className="text-3xl">🍀</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-ink-100 mb-2">Good Luck!</h2>
          <p className="text-ink-400">You've got this. Trust your analysis, stay calm, and show your work.</p>
        </div>
      </div>
    </div>
  )
}

export default CrashCourse

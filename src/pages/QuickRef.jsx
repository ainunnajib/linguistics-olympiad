function QuickRef() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-3xl font-bold text-ink-100">Quick Reference</h1>
            <p className="text-ink-400 text-sm">Essential patterns and terminology at a glance</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Number Systems */}
        <div className="glass-card p-6">
          <h2 className="font-serif text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sm">123</span>
            Number Systems
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2">Common Bases</h3>
              <ul className="text-sm space-y-1.5 text-ink-300">
                <li><span className="text-sky-400 font-medium">Base-5 (quinary)</span> - hand counting</li>
                <li><span className="text-sky-400 font-medium">Base-10 (decimal)</span> - most common</li>
                <li><span className="text-sky-400 font-medium">Base-12 (duodecimal)</span> - dozen, gross</li>
                <li><span className="text-sky-400 font-medium">Base-20 (vigesimal)</span> - Mayan, French 80</li>
              </ul>
            </div>
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2">Formation Types</h3>
              <ul className="text-sm space-y-1.5 text-ink-300">
                <li><span className="text-sky-400 font-medium">Additive:</span> 15 = 10+5</li>
                <li><span className="text-sky-400 font-medium">Subtractive:</span> 19 = 20-1</li>
                <li><span className="text-sky-400 font-medium">Multiplicative:</span> 40 = 4×10</li>
                <li><span className="text-sky-400 font-medium">Mixed:</span> 25 = 2×10+5</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Morphology */}
        <div className="glass-card p-6">
          <h2 className="font-serif text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-sm">MOR</span>
            Morphology
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2">Morpheme Types</h3>
              <ul className="text-sm space-y-1.5 text-ink-300">
                <li><span className="text-emerald-400 font-medium">Root:</span> core meaning (book, run)</li>
                <li><span className="text-emerald-400 font-medium">Prefix:</span> before root (un-, pre-)</li>
                <li><span className="text-emerald-400 font-medium">Suffix:</span> after root (-ing, -s)</li>
                <li><span className="text-emerald-400 font-medium">Infix:</span> inside root (rare)</li>
              </ul>
            </div>
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2">Language Types</h3>
              <ul className="text-sm space-y-1.5 text-ink-300">
                <li><span className="text-emerald-400 font-medium">Agglutinative:</span> morphemes stack (Turkish)</li>
                <li><span className="text-emerald-400 font-medium">Fusional:</span> morphemes blend (Spanish)</li>
                <li><span className="text-emerald-400 font-medium">Isolating:</span> one morpheme/word (Chinese)</li>
                <li><span className="text-emerald-400 font-medium">Templatic:</span> root + pattern (Arabic)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phonology */}
        <div className="glass-card p-6">
          <h2 className="font-serif text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-sm">IPA</span>
            Phonology
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2">Sound Changes</h3>
              <ul className="text-sm space-y-1.5 text-ink-300">
                <li><span className="text-amber-400 font-medium">Assimilation:</span> sounds become similar</li>
                <li><span className="text-amber-400 font-medium">Deletion:</span> sound disappears</li>
                <li><span className="text-amber-400 font-medium">Insertion:</span> sound added</li>
                <li><span className="text-amber-400 font-medium">Metathesis:</span> sounds swap order</li>
                <li><span className="text-amber-400 font-medium">Lenition:</span> sounds weaken (p→b→v)</li>
              </ul>
            </div>
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2">Notation</h3>
              <ul className="text-sm space-y-1.5 text-ink-300">
                <li><span className="text-amber-400 font-medium">→</span> "becomes"</li>
                <li><span className="text-amber-400 font-medium">/</span> "in the environment of"</li>
                <li><span className="text-amber-400 font-medium">_</span> position of sound</li>
                <li><span className="text-amber-400 font-medium">#</span> word boundary</li>
                <li><span className="text-amber-400 font-medium">V</span> any vowel, <span className="text-amber-400 font-medium">C</span> any consonant</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <h3 className="font-semibold text-ink-200 mb-2">Common Voicing Pairs</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-navy-700/50 border border-navy-600/50 px-3 py-1.5 rounded-lg text-ink-200">p ↔ b</span>
              <span className="bg-navy-700/50 border border-navy-600/50 px-3 py-1.5 rounded-lg text-ink-200">t ↔ d</span>
              <span className="bg-navy-700/50 border border-navy-600/50 px-3 py-1.5 rounded-lg text-ink-200">k ↔ g</span>
              <span className="bg-navy-700/50 border border-navy-600/50 px-3 py-1.5 rounded-lg text-ink-200">f ↔ v</span>
              <span className="bg-navy-700/50 border border-navy-600/50 px-3 py-1.5 rounded-lg text-ink-200">s ↔ z</span>
              <span className="bg-navy-700/50 border border-navy-600/50 px-3 py-1.5 rounded-lg text-ink-200">θ ↔ ð</span>
            </div>
          </div>
        </div>

        {/* Syntax */}
        <div className="glass-card p-6">
          <h2 className="font-serif text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-sm">SYN</span>
            Syntax
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2">Word Orders</h3>
              <ul className="text-sm space-y-1.5 text-ink-300">
                <li><span className="text-purple-400 font-medium">SVO</span> - English, Chinese (42%)</li>
                <li><span className="text-purple-400 font-medium">SOV</span> - Japanese, Korean, Turkish (45%)</li>
                <li><span className="text-purple-400 font-medium">VSO</span> - Welsh, Arabic (9%)</li>
                <li><span className="text-purple-400 font-medium">VOS</span> - Malagasy (3%)</li>
                <li><span className="text-purple-400 font-medium">OVS/OSV</span> - rare (1%)</li>
              </ul>
            </div>
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
              <h3 className="font-semibold text-ink-200 mb-2">Cases</h3>
              <ul className="text-sm space-y-1.5 text-ink-300">
                <li><span className="text-purple-400 font-medium">Nominative:</span> subject</li>
                <li><span className="text-purple-400 font-medium">Accusative:</span> direct object</li>
                <li><span className="text-purple-400 font-medium">Dative:</span> indirect object</li>
                <li><span className="text-purple-400 font-medium">Genitive:</span> possession</li>
                <li><span className="text-purple-400 font-medium">Locative:</span> location</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Writing Systems */}
        <div className="glass-card p-6">
          <h2 className="font-serif text-xl font-bold text-rose-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-sm">ABC</span>
            Writing Systems
          </h2>
          <div className="overflow-x-auto rounded-xl border border-navy-700/50">
            <table className="w-full text-sm">
              <thead className="bg-navy-800/50">
                <tr>
                  <th className="text-left py-3 px-4 text-ink-200 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 text-ink-200 font-semibold">Symbol = ?</th>
                  <th className="text-left py-3 px-4 text-ink-200 font-semibold"># Symbols</th>
                  <th className="text-left py-3 px-4 text-ink-200 font-semibold">Examples</th>
                </tr>
              </thead>
              <tbody className="text-ink-300">
                <tr className="border-t border-navy-700/30 bg-navy-800/20">
                  <td className="py-3 px-4 font-medium text-rose-400">Alphabet</td>
                  <td className="py-3 px-4">Sound (C or V)</td>
                  <td className="py-3 px-4">20-40</td>
                  <td className="py-3 px-4">Latin, Greek, Cyrillic</td>
                </tr>
                <tr className="border-t border-navy-700/30 bg-navy-800/40">
                  <td className="py-3 px-4 font-medium text-rose-400">Abjad</td>
                  <td className="py-3 px-4">Consonant only</td>
                  <td className="py-3 px-4">22-30</td>
                  <td className="py-3 px-4">Arabic, Hebrew</td>
                </tr>
                <tr className="border-t border-navy-700/30 bg-navy-800/20">
                  <td className="py-3 px-4 font-medium text-rose-400">Syllabary</td>
                  <td className="py-3 px-4">Syllable (CV)</td>
                  <td className="py-3 px-4">50-100</td>
                  <td className="py-3 px-4">Japanese Hiragana, Cherokee</td>
                </tr>
                <tr className="border-t border-navy-700/30 bg-navy-800/40">
                  <td className="py-3 px-4 font-medium text-rose-400">Logographic</td>
                  <td className="py-3 px-4">Word/Morpheme</td>
                  <td className="py-3 px-4">1000s</td>
                  <td className="py-3 px-4">Chinese, Egyptian</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Problem-Solving Checklist */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent" />
          <div className="absolute inset-0 bg-navy-800/40" />
          <div className="relative p-6">
            <h2 className="font-serif text-xl font-bold text-ink-100 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quick Problem-Solving Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-amber-400 mb-2">First Steps</h3>
                <ul className="space-y-2 text-ink-300">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded border border-navy-600/50 flex-shrink-0" />
                    Read the ENTIRE problem first
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded border border-navy-600/50 flex-shrink-0" />
                    Organize data in tables
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded border border-navy-600/50 flex-shrink-0" />
                    Look for repeated elements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded border border-navy-600/50 flex-shrink-0" />
                    Find minimal pairs
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-amber-400 mb-2">Before Moving On</h3>
                <ul className="space-y-2 text-ink-300">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded border border-navy-600/50 flex-shrink-0" />
                    Test rule against ALL examples
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded border border-navy-600/50 flex-shrink-0" />
                    Check for exceptions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded border border-navy-600/50 flex-shrink-0" />
                    Answer every question
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded border border-navy-600/50 flex-shrink-0" />
                    Show your work!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickRef

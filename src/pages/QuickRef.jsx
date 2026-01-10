function QuickRef() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📋 Quick Reference</h1>
        <p className="text-gray-600">
          Essential patterns and terminology at a glance
        </p>
      </div>

      <div className="grid gap-6">
        {/* Number Systems */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-indigo-600 mb-4">🔢 Number Systems</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Common Bases</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li><strong>Base-5 (quinary)</strong> - hand counting</li>
                <li><strong>Base-10 (decimal)</strong> - most common</li>
                <li><strong>Base-12 (duodecimal)</strong> - dozen, gross</li>
                <li><strong>Base-20 (vigesimal)</strong> - Mayan, French 80</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Formation Types</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li><strong>Additive:</strong> 15 = 10+5</li>
                <li><strong>Subtractive:</strong> 19 = 20-1</li>
                <li><strong>Multiplicative:</strong> 40 = 4×10</li>
                <li><strong>Mixed:</strong> 25 = 2×10+5</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Morphology */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-green-600 mb-4">🧩 Morphology</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Morpheme Types</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li><strong>Root:</strong> core meaning (book, run)</li>
                <li><strong>Prefix:</strong> before root (un-, pre-)</li>
                <li><strong>Suffix:</strong> after root (-ing, -s)</li>
                <li><strong>Infix:</strong> inside root (rare)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Language Types</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li><strong>Agglutinative:</strong> morphemes stack (Turkish)</li>
                <li><strong>Fusional:</strong> morphemes blend (Spanish)</li>
                <li><strong>Isolating:</strong> one morpheme/word (Chinese)</li>
                <li><strong>Templatic:</strong> root + pattern (Arabic)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phonology */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-orange-600 mb-4">🔊 Phonology</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Sound Changes</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li><strong>Assimilation:</strong> sounds become similar</li>
                <li><strong>Deletion:</strong> sound disappears</li>
                <li><strong>Insertion:</strong> sound added</li>
                <li><strong>Metathesis:</strong> sounds swap order</li>
                <li><strong>Lenition:</strong> sounds weaken (p→b→v)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Notation</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li><strong>→</strong> "becomes"</li>
                <li><strong>/</strong> "in the environment of"</li>
                <li><strong>_</strong> position of sound</li>
                <li><strong>#</strong> word boundary</li>
                <li><strong>V</strong> any vowel, <strong>C</strong> any consonant</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-orange-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Common Voicing Pairs</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-white px-3 py-1 rounded border">p ↔ b</span>
              <span className="bg-white px-3 py-1 rounded border">t ↔ d</span>
              <span className="bg-white px-3 py-1 rounded border">k ↔ g</span>
              <span className="bg-white px-3 py-1 rounded border">f ↔ v</span>
              <span className="bg-white px-3 py-1 rounded border">s ↔ z</span>
              <span className="bg-white px-3 py-1 rounded border">θ ↔ ð</span>
            </div>
          </div>
        </div>

        {/* Syntax */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-purple-600 mb-4">📝 Syntax</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Word Orders</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li><strong>SVO</strong> - English, Chinese (42%)</li>
                <li><strong>SOV</strong> - Japanese, Korean, Turkish (45%)</li>
                <li><strong>VSO</strong> - Welsh, Arabic (9%)</li>
                <li><strong>VOS</strong> - Malagasy (3%)</li>
                <li><strong>OVS/OSV</strong> - rare (1%)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Cases</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li><strong>Nominative:</strong> subject</li>
                <li><strong>Accusative:</strong> direct object</li>
                <li><strong>Dative:</strong> indirect object</li>
                <li><strong>Genitive:</strong> possession</li>
                <li><strong>Locative:</strong> location</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Writing Systems */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-4">✍️ Writing Systems</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Symbol = ?</th>
                  <th className="text-left py-2 pr-4"># Symbols</th>
                  <th className="text-left py-2">Examples</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="py-2 pr-4 font-medium">Alphabet</td>
                  <td className="py-2 pr-4">Sound (C or V)</td>
                  <td className="py-2 pr-4">20-40</td>
                  <td className="py-2">Latin, Greek, Cyrillic</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-medium">Abjad</td>
                  <td className="py-2 pr-4">Consonant only</td>
                  <td className="py-2 pr-4">22-30</td>
                  <td className="py-2">Arabic, Hebrew</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-medium">Syllabary</td>
                  <td className="py-2 pr-4">Syllable (CV)</td>
                  <td className="py-2 pr-4">50-100</td>
                  <td className="py-2">Japanese Hiragana, Cherokee</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Logographic</td>
                  <td className="py-2 pr-4">Word/Morpheme</td>
                  <td className="py-2 pr-4">1000s</td>
                  <td className="py-2">Chinese, Egyptian</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Problem-Solving Checklist */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-bold mb-4">✅ Quick Problem-Solving Checklist</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">First Steps</h3>
              <ul className="space-y-1 opacity-90">
                <li>□ Read the ENTIRE problem first</li>
                <li>□ Organize data in tables</li>
                <li>□ Look for repeated elements</li>
                <li>□ Find minimal pairs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Before Moving On</h3>
              <ul className="space-y-1 opacity-90">
                <li>□ Test rule against ALL examples</li>
                <li>□ Check for exceptions</li>
                <li>□ Answer every question</li>
                <li>□ Show your work!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickRef

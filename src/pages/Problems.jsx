import ProblemCard from '../components/ProblemCard'
import { problems } from '../data/problems'

function Problems() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🧩 Example Problems</h1>
        <p className="text-gray-600">
          Practice with these olympiad-style problems. Try to solve them before looking at the solutions!
        </p>
      </div>

      <div className="space-y-4">
        {problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>

      <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
        <h3 className="font-semibold text-purple-900 mb-2">🎯 Problem-Solving Strategy</h3>
        <ol className="text-purple-800 text-sm space-y-1 list-decimal list-inside">
          <li>Read the problem carefully — twice!</li>
          <li>Organize the data (tables help!)</li>
          <li>Look for patterns and repeated elements</li>
          <li>Form hypotheses and test them</li>
          <li>Check your answer against ALL examples</li>
        </ol>
      </div>
    </div>
  )
}

export default Problems
